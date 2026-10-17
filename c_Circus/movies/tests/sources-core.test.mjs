// node --test tests/ — the pure half of the legal multi-source player.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import * as C from '../src/lib/sources-core.mjs'

const raw = JSON.parse(readFileSync(new URL('../src/data/sources.json', import.meta.url), 'utf8'))
const deny = JSON.parse(readFileSync(new URL('../src/data/legal-denylist.json', import.meta.url), 'utf8')).denylist
const decl = C.parseSources(raw, deny)
test('denylist: separate file, sources pass it', () => { assert.ok(deny.length >= 10); assert.equal(raw.denylist, undefined) })
const ranges = (...p) => ({ length: p.length, start: (i) => p[i][0], end: (i) => p[i][1] })

test('source list: parses, orders, keeps only known kinds', () => {
  assert.ok(decl.sources.length >= 8)
  assert.deepEqual(decl.sources.map((s) => s.order), decl.sources.map((s) => s.order).slice().sort((a, b) => a - b))
  for (const k of ['library', 'local', 'providers', 'trailer', 'catalogue', 'torrent']) assert.ok(decl.sources.some((s) => s.kind === k), k)
  assert.ok(decl.sources.every((s) => s.name && Array.isArray(s.settings)))
})
test('source list: rejects bad kind, duplicate ids, denied domains, disabled filtered', () => {
  assert.throws(() => C.parseSources({ sources: [{ id: 'x', kind: 'pirate' }] }), /unknown kind/)
  assert.throws(() => C.parseSources({ sources: [{ id: 'a', kind: 'local' }, { id: 'a', kind: 'local' }] }), /duplicate/)
  assert.throws(() => C.parseSources({ denylist: ['vid' + 'src'], sources: [{ id: 'v', kind: 'catalogue', search: 'https://' + 'vid' + 'src.cc/{query}' }] }), /denied/)
  assert.throws(() => C.parseSources({}), /array/)
  assert.equal(C.parseSources({ sources: [{ id: 'a', kind: 'local', enabled: false }] }).sources.length, 0)
})
test('source list: no credential is committed', () => {
  assert.doesNotMatch(JSON.stringify(raw), /api_key=[0-9a-f]{16}|X-Plex-Token=[A-Za-z0-9]{10}|"token"\s*:\s*"[^"]/)
})

test('ID conversion: IMDb -> TMDB via /find, preferring the asked type', async () => {
  const res = { movie_results: [{ id: 603, title: 'The Matrix', release_date: '1999-03-30' }], tv_results: [{ id: 1399, name: 'Game of Thrones', first_air_date: '2011-04-17' }] }
  assert.deepEqual(C.tmdbFromFind(res, 'movie'), { tmdbId: 603, mediaType: 'movie', title: 'The Matrix', year: '1999' })
  assert.deepEqual(C.tmdbFromFind(res, 'series'), { tmdbId: 1399, mediaType: 'tv', title: 'Game of Thrones', year: '2011' })
  assert.deepEqual(C.tmdbFromFind({ movie_results: [], tv_results: [{ id: 7 }] }, 'movie'), { tmdbId: 7, mediaType: 'tv', title: '', year: '' })
  assert.equal(C.tmdbFromFind({ movie_results: [], tv_results: [] }, 'movie'), null)
  assert.equal(C.findUrl('tt0133093', 'K'), 'https://api.themoviedb.org/3/find/tt0133093?external_source=imdb_id&api_key=K')
  let asked
  const r = await C.imdbToTmdb(async (u) => { asked = u; return res }, 'tt0133093', 'movie', 'K')
  assert.equal(r.tmdbId, 603); assert.match(asked, /\/find\/tt0133093/)
  assert.equal(await C.imdbToTmdb(async () => res, 'nope', 'movie', 'K'), null)
  assert.equal(await C.tmdbToImdb(async (u) => (assert.match(u, /\/tv\/1399\/external_ids/), { imdb_id: 'tt0944947' }), 1399, 'series', 'K'), 'tt0944947')
})

test('provider mapping: categories, order, logos, deep links, region', () => {
  const res = { results: { ES: {
    link: 'https://www.themoviedb.org/movie/603/watch?locale=ES',
    flatrate: [{ provider_id: 337, provider_name: 'Disney Plus', logo_path: '/d.jpg', display_priority: 2 }, { provider_id: 8, provider_name: 'Netflix', logo_path: '/n.jpg', display_priority: 1 }],
    rent: [{ provider_id: 99999, provider_name: 'Shop', logo_path: '/s.jpg' }],
    ads: [{ provider_id: 73, provider_name: 'Tubi', logo_path: '/t.jpg' }]
  } } }
  const g = C.mapProviders(res, 'es', 'The Matrix', decl.providerLinks)
  assert.deepEqual(g.map((x) => x.category), ['flatrate', 'ads', 'rent'])
  assert.deepEqual(g[0].services.map((s) => s.name), ['Netflix', 'Disney Plus'])
  assert.equal(g[0].services[0].link, 'https://www.netflix.com/search?q=The%20Matrix')
  assert.equal(g[0].services[0].logo, 'https://image.tmdb.org/t/p/w92/n.jpg')
  assert.equal(g[1].services[0].link, 'https://tubitv.com/search/The%20Matrix')
  assert.equal(g[2].services[0].link, res.results.ES.link, 'unknown provider -> TMDB region page')
  assert.equal(g[1].label, 'Free with ads')
  assert.deepEqual(C.mapProviders(res, 'US', 'x', {}), [])
})

test('trailer: official YouTube Trailer wins', () => {
  const t = C.pickTrailer({ results: [
    { site: 'YouTube', type: 'Featurette', key: 'aaaaaaaaaaa', official: true },
    { site: 'Vimeo', type: 'Trailer', key: 'bbbbbbbbbbb', official: true },
    { site: 'YouTube', type: 'Trailer', key: 'ccccccccccc', official: false },
    { site: 'YouTube', type: 'Trailer', key: 'm8e-FF8MsqU', official: true, name: 'Official Trailer' }] })
  assert.equal(t.key, 'm8e-FF8MsqU'); assert.equal(t.embed, 'https://www.youtube-nocookie.com/embed/m8e-FF8MsqU?autoplay=1')
  assert.equal(C.pickTrailer({ results: [{ site: 'YouTube', type: 'Clip', key: 'ddddddddddd' }] }), null)
})

test('Internet Archive: search URL, title/year match, playable file, torrent', () => {
  const arch = decl.sources.find((s) => s.id === 'archive'), tor = decl.sources.find((s) => s.id === 'archive-torrent')
  assert.match(C.archiveSearchUrl(arch, 'Nosferatu'), /^https:\/\/archive\.org\/advancedsearch\.php\?q=title%3A\(Nosferatu\)%20AND%20mediatype%3Amovies/)
  const res = { response: { docs: [{ identifier: 'nos-1979', title: 'Nosferatu', year: 1979 }, { identifier: 'nosferatu-1922', title: 'Nosferatu (1922)', year: 1922 }, { identifier: 'other', title: 'Metropolis' }] } }
  assert.equal(C.matchArchive(res, 'Nosferatu', '1922'), 'nosferatu-1922')
  assert.equal(C.matchArchive(res, 'Metropolis', '1927'), 'other')
  assert.equal(C.matchArchive(res, 'Alien', '1979'), null)
  assert.equal(C.archivePlayable({ metadata: { identifier: 'nosferatu-1922' }, files: [{ name: 'a.ogv' }, { name: 'Nosferatu 1922.mp4', format: 'h.264' }] }), 'https://archive.org/download/nosferatu-1922/Nosferatu%201922.mp4')
  assert.equal(C.archiveTorrentUrl(tor, 'nosferatu-1922'), 'https://archive.org/download/nosferatu-1922/nosferatu-1922_archive.torrent')
  const tr = C.archiveTorrentResults(res, tor)
  assert.ok(tr.every((r) => r.badge === 'Internet Archive' && r.torrent.endsWith('_archive.torrent')))
})

test('libraries: Jellyfin / Emby / Plex query and stream URLs', () => {
  const jf = decl.sources.find((s) => s.id === 'jellyfin'), em = decl.sources.find((s) => s.id === 'emby')
  const cfg = { url: 'https://jf.example/', token: 'T' }
  assert.equal(C.jellyfinSearchUrl(jf, cfg, 'tt1'), 'https://jf.example/Items?Recursive=true&IncludeItemTypes=Movie,Series&Fields=ProviderIds&AnyProviderIdEquals=imdb.tt1&api_key=T')
  assert.match(C.jellyfinSearchUrl(em, cfg, 'tt1'), /^https:\/\/jf\.example\/emby\/Items\?/)
  assert.equal(C.jellyfinMatch(jf, cfg, { Items: [{ Id: 'x1', Name: 'M', Type: 'Movie', ProviderIds: { Imdb: 'tt1' } }] }, 'tt1').url, 'https://jf.example/Videos/x1/stream?static=true&api_key=T')
  assert.equal(C.jellyfinMatch(jf, cfg, { Items: [{ Id: 'x2', ProviderIds: { Imdb: 'tt9' } }] }, 'tt1'), null)
  assert.equal(C.plexSearchUrl(cfg, 'tt1'), 'https://jf.example/library/all?guid=imdb%3A%2F%2Ftt1&X-Plex-Token=T')
  assert.equal(C.plexMatch(cfg, { MediaContainer: { Metadata: [{ title: 'M', Media: [{ Part: [{ key: '/library/parts/5/file.mkv' }] }] }] } }).url, 'https://jf.example/library/parts/5/file.mkv?X-Plex-Token=T')
  assert.equal(C.plexMatch(cfg, { MediaContainer: {} }), null)
})

test('local files: id first, then title + year', () => {
  const files = ['Movies/The Matrix (1999).mkv', 'Movies/Matrix Reloaded 2003.mp4', 'x/tt0062622.mp4', 'notes.txt']
  assert.equal(C.matchLocalFile(files, '2001: A Space Odyssey', '1968', 'tt0062622'), 'x/tt0062622.mp4')
  assert.equal(C.matchLocalFile(files, 'The Matrix', '1999'), 'Movies/The Matrix (1999).mkv')
  assert.equal(C.matchLocalFile(files, 'The Matrix', '2021'), null)
  assert.equal(C.driveFileUrl({ url: 'https://d/' }, '/a b/c.mp4'), 'https://d/a%20b/c.mp4')
})

test('buffering: modes, ahead-of-playhead, ready rule, offline', () => {
  assert.deepEqual(C.BUFFER_MODES.map((m) => m.id), ['30s', '2m', '10m', 'full', 'offline'])
  assert.equal(C.bufferPolicy('2m').ahead, 120)
  assert.equal(C.bufferPolicy('bogus').id, '30s')
  assert.equal(C.bufferedAhead(ranges([0, 10], [20, 95]), 30), 65)
  assert.equal(C.bufferedAhead(ranges([0, 10]), 30), 0)
  assert.equal(C.readyToPlay(C.bufferPolicy('10m'), 29, 0, 7200), false)
  assert.equal(C.readyToPlay(C.bufferPolicy('10m'), 30, 0, 7200), true)
  assert.equal(C.readyToPlay(C.bufferPolicy('30s'), 5, 95, 100), true, 'near the end, what is left is enough')
  assert.equal(C.readyToPlay(C.bufferPolicy('offline'), 1e9, 0, 100), false, 'offline never streams')
})

test('torrents: magnet / .torrent only, denied indexes blocked, biggest video picked', () => {
  assert.equal(C.parseTorrentInput('magnet:?xt=urn:btih:08ADA5A7A6183AAE1E09D831DF6748D566095A10&dn=Sintel').infoHash, '08ada5a7a6183aae1e09d831df6748d566095a10')
  assert.equal(C.parseTorrentInput('https://archive.org/download/x/x_archive.torrent').kind, 'torrent')
  assert.match(C.parseTorrentInput('magnet:?dn=x').error, /info hash/)
  assert.match(C.parseTorrentInput('https://example.org/movie').error, /Not a magnet/)
  assert.match(C.parseTorrentInput('https://' + 'thepiratebay' + '.org/x.torrent', decl.denylist).error, /blocked/)
  assert.equal(C.pickTorrentVideo([{ name: 'a.mp4', length: 5 }, { name: 'b.mp4', length: 9 }, { name: 'c.srt', length: 99 }]).name, 'b.mp4')
})

test('probe: only sources that have the title; failures reported, not thrown', async () => {
  const title = { imdbId: 'tt0013442', tmdbId: 653, type: 'movie', title: 'Nosferatu', year: '1922' }
  const cfg = { tmdb_key: 'K', region: 'US', jellyfin: { url: 'https://jf', token: 'T' }, plex: { url: 'https://px', token: 'T' } }
  const get = async (u) => {
    if (u.includes('jf/Items')) return { Items: [{ Id: 'j', Name: 'Nosferatu', ProviderIds: { Imdb: 'tt0013442' } }] }
    if (u.includes('px/')) throw new Error('HTTP 401')
    if (u.includes('/videos')) return { results: [] }
    if (u.includes('/watch/providers')) return { results: { US: { link: 'L', free: [{ provider_id: 73, provider_name: 'Tubi', logo_path: '/t' }] } } }
    if (u.includes('advancedsearch')) return { response: { docs: [{ identifier: 'nosferatu-1922', title: 'Nosferatu', year: 1922 }] } }
    if (u.includes('/metadata/')) return { metadata: { identifier: 'nosferatu-1922' }, files: [{ name: 'n.mp4', format: 'h.264' }] }
    return {}
  }
  const seen = []
  const r = await C.probeAll(decl, title, cfg, get, (x) => seen.push(x.source.id))
  const has = r.filter((x) => x.ok).map((x) => x.source.id)
  assert.deepEqual(has.sort(), ['archive', 'archive-torrent', 'jellyfin', 'watch'])
  assert.match(r.find((x) => x.source.id === 'plex').error, /401/)
  assert.equal(seen.length, decl.sources.length)
})
