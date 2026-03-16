(function () {
  'use strict';

  /* ─── XSS prevention ─────────────────────────────────────── */
  function esc(s) {
    if (s == null) return '';
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* ─── Syntax-highlighted JSON <pre> ──────────────────────── */
  function colorJson(obj) {
    var json = JSON.stringify(obj, null, 2);
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    json = json.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
      function (match) {
        var cls = 'jn';
        if (/^"/.test(match)) {
          if (/:$/.test(match)) { cls = 'jk'; } else { cls = 'js'; }
        } else if (/true|false/.test(match)) {
          cls = 'jb';
        }
        return '<span class="' + cls + '">' + match + '</span>';
      }
    );
    return '<pre class="json-out">' + json + '</pre>';
  }

  /* ─── Render output ──────────────────────────────────────── */
  function renderOutput(el, data) {
    if (Array.isArray(data) && data.length > 0 && typeof data[0] === 'object') {
      var keys = Object.keys(data[0]);
      var html = '<table class="out-table"><thead><tr>';
      keys.forEach(function (k) { html += '<th>' + esc(k) + '</th>'; });
      html += '</tr></thead><tbody>';
      data.forEach(function (row) {
        html += '<tr>';
        keys.forEach(function (k) {
          var v = row[k];
          if (v == null) v = '';
          html += '<td>' + esc(typeof v === 'object' ? JSON.stringify(v) : String(v)) + '</td>';
        });
        html += '</tr>';
      });
      html += '</tbody></table>';
      el.innerHTML = html;
    } else {
      el.innerHTML = colorJson(data);
    }
  }

  /* ─── Storage key ────────────────────────────────────────── */
  function storageKey(cfg) {
    return 'api_auth_' + (cfg.title || cfg.base || 'default').replace(/\W+/g, '_');
  }

  /* ─── Auth injection ─────────────────────────────────────── */
  function getAuth(cfg) {
    var skey = storageKey(cfg);
    return sessionStorage.getItem(skey) || '';
  }

  /* ─── apiFetch with auth ─────────────────────────────────── */
  function apiFetch(url, cfg) {
    var token = getAuth(cfg);
    var opts = { credentials: 'include' };
    opts.signal = AbortSignal.timeout(30000);

    if (cfg.auth && cfg.auth.type !== 'none') {
      if (cfg.auth.type === 'query') {
        var sep = url.indexOf('?') >= 0 ? '&' : '?';
        url = url + sep + encodeURIComponent(cfg.auth.key) + '=' + encodeURIComponent(token);
      } else if (cfg.auth.type === 'header') {
        opts.headers = {};
        opts.headers[cfg.auth.key] = token;
      } else if (cfg.auth.type === 'bearer') {
        opts.headers = { 'Authorization': 'Bearer ' + token };
      } else if (cfg.auth.type === 'basic') {
        opts.headers = { 'Authorization': 'Basic ' + btoa(token) };
      }
    }

    return fetch(url, opts).then(function (r) {
      if (!r.ok) {
        return r.text().then(function (body) {
          var detail = 'HTTP ' + r.status;
          try { var j = JSON.parse(body); if (j.error || j.message) detail += ' — ' + (j.error || j.message); } catch (e) {}
          throw new Error(detail);
        });
      }
      var ct = r.headers.get('content-type') || '';
      if (ct.indexOf('application/json') >= 0) return r.json();
      return r.text();
    });
  }

  /* ─── Build URL from endpoint + param values ─────────────── */
  function buildUrl(base, ep, paramVals) {
    var path = ep.path;
    // Replace path params like {id}
    (ep.params || []).forEach(function (p) {
      if (path.indexOf('{' + p.name + '}') >= 0 && paramVals[p.name]) {
        path = path.replace('{' + p.name + '}', encodeURIComponent(paramVals[p.name]));
      }
    });
    var url = base.replace(/\/$/, '') + path;
    // Add static query params from ep.query
    var qp = Object.assign({}, ep.query || {});
    // Add user-provided non-path params
    (ep.params || []).forEach(function (p) {
      if (path.indexOf('{' + p.name + '}') < 0 && paramVals[p.name]) {
        qp[p.name] = paramVals[p.name];
      }
    });
    var qs = Object.keys(qp).map(function (k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(qp[k]);
    }).join('&');
    if (qs) url += (url.indexOf('?') >= 0 ? '&' : '?') + qs;
    return url;
  }

  /* ─── Build one endpoint card ─────────────────────────────── */
  function buildCard(ep, groupIdx, epIdx, cfg) {
    var cardId = 'card-g' + groupIdx + '-e' + epIdx;
    var outId  = 'out-g'  + groupIdx + '-e' + epIdx;
    var methodClass = 'method-' + (ep.method || 'GET').toLowerCase();

    var paramsHtml = '';
    if (ep.params && ep.params.length > 0) {
      paramsHtml = '<div class="ep-params">';
      ep.params.forEach(function (p) {
        var inputId = cardId + '-p-' + p.name;
        paramsHtml += '<div class="ep-param">';
        paramsHtml += '<label for="' + inputId + '">' + esc(p.label || p.name) + '</label>';
        if (p.type === 'select' && p.options) {
          paramsHtml += '<select id="' + inputId + '" data-param="' + esc(p.name) + '">';
          p.options.forEach(function (o) {
            paramsHtml += '<option value="' + esc(o.value || o) + '">' + esc(o.label || o) + '</option>';
          });
          paramsHtml += '</select>';
        } else {
          var inputType = p.type === 'password' ? 'password' : 'text';
          paramsHtml += '<input type="' + inputType + '" id="' + inputId + '" data-param="' + esc(p.name) + '" placeholder="' + esc(p.placeholder || '') + '">';
        }
        paramsHtml += '</div>';
      });
      paramsHtml += '</div>';
    }

    return '<div class="card" id="' + cardId + '">' +
      '<div class="card-hdr">' +
        '<div class="ep-title">' +
          '<span class="method-badge ' + methodClass + '">' + esc(ep.method || 'GET') + '</span>' +
          '<span class="ep-name">' + esc(ep.name) + '</span>' +
          '<code class="ep-path">' + esc(ep.path) + '</code>' +
        '</div>' +
        '<button class="rbtn" data-run="' + cardId + '" data-ep-group="' + groupIdx + '" data-ep-idx="' + epIdx + '">Run</button>' +
      '</div>' +
      (ep.desc ? '<p class="ep-desc">' + esc(ep.desc) + '</p>' : '') +
      paramsHtml +
      '<div id="' + outId + '" class="ep-out"><span class="st-off">Click Run</span></div>' +
    '</div>';
  }

  /* ─── Build auth bar ─────────────────────────────────────── */
  function buildAuthBar(cfg) {
    if (!cfg.auth || cfg.auth.type === 'none') return '';
    var skey = storageKey(cfg);
    var saved = sessionStorage.getItem(skey) || '';
    var inputType = cfg.auth.type === 'basic' ? 'text' : (cfg.auth.key === 'password' ? 'password' : 'text');
    return '<div class="auth-bar">' +
      '<span class="auth-label">' + esc(cfg.auth.label || 'Token') + '</span>' +
      '<input type="' + inputType + '" id="auth-input" placeholder="' + esc(cfg.auth.placeholder || '') + '" value="' + esc(saved) + '" style="flex:1;min-width:0">' +
      '<button class="rbtn blue" id="auth-save">Save</button>' +
      '<span class="auth-hint" id="auth-hint">' + (saved ? '&#x2713; saved' : '') + '</span>' +
    '</div>';
  }

  /* ─── Main init ─────────────────────────────────────────── */
  var cfg = window.API_PAGE;
  if (!cfg) { console.warn('[api-page] window.API_PAGE not set'); return; }

  var root = document.getElementById('api-page-root');
  if (!root) { console.warn('[api-page] #api-page-root not found'); return; }

  /* ─── Header ─────────────────────────────────────────────── */
  var html = '';
  html += '<h1>' + esc(cfg.title) + '</h1>';
  if (cfg.subtitle) html += '<p class="subtitle">' + esc(cfg.subtitle) + '</p>';
  html += '<hr>';

  /* ─── Auth bar ─────────────────────────────────────────────*/
  html += buildAuthBar(cfg);

  /* ─── Tab table ─────────────────────────────────────────── */
  if (cfg.groups && cfg.groups.length > 0) {
    html += '<table class="tab-table"><tr>';
    cfg.groups.forEach(function (g, gi) {
      html += '<td class="tab-cell"><button class="tab-btn' + (gi === 0 ? ' active' : '') + '" data-tab="grp-' + gi + '">' + esc(g.label) + '</button></td>';
    });
    html += '</tr></table>';

    /* ─── Tab contents ─────────────────────────────────────── */
    cfg.groups.forEach(function (g, gi) {
      html += '<div class="tab-content' + (gi === 0 ? ' active' : '') + '" id="tab-grp-' + gi + '">';
      html += '<h2>' + esc(g.label) + '</h2>';
      if (g.endpoints && g.endpoints.length > 0) {
        g.endpoints.forEach(function (ep, ei) {
          html += buildCard(ep, gi, ei, cfg);
        });
      } else {
        html += '<p class="st-off">No endpoints defined.</p>';
      }
      html += '</div>';
    });
  }

  root.innerHTML = html;

  /* ─── Wire auth save ─────────────────────────────────────── */
  var authSaveBtn = document.getElementById('auth-save');
  if (authSaveBtn) {
    authSaveBtn.addEventListener('click', function () {
      var val = document.getElementById('auth-input').value;
      sessionStorage.setItem(storageKey(cfg), val);
      var hint = document.getElementById('auth-hint');
      if (hint) { hint.textContent = '✓ saved'; }
    });
  }

  /* ─── Wire tab buttons ─────────────────────────────────────*/
  document.querySelectorAll('#api-page-root .tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('#api-page-root .tab-btn').forEach(function (b) { b.classList.remove('active'); });
      document.querySelectorAll('#api-page-root .tab-content').forEach(function (c) { c.classList.remove('active'); });
      btn.classList.add('active');
      var tc = document.getElementById('tab-' + btn.dataset.tab);
      if (tc) tc.classList.add('active');
    });
  });

  /* ─── Wire run buttons ─────────────────────────────────────*/
  document.querySelectorAll('#api-page-root [data-run]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var gi = parseInt(btn.dataset.epGroup, 10);
      var ei = parseInt(btn.dataset.epIdx, 10);
      var ep = cfg.groups[gi].endpoints[ei];
      var outId = 'out-g' + gi + '-e' + ei;
      var outEl = document.getElementById(outId);
      if (!outEl) return;

      // Collect param values
      var paramVals = {};
      (ep.params || []).forEach(function (p) {
        var cardId = 'card-g' + gi + '-e' + ei;
        var inp = document.querySelector('#' + cardId + ' [data-param="' + p.name + '"]');
        if (inp) paramVals[p.name] = inp.value;
      });

      var url = buildUrl(cfg.base, ep, paramVals);
      outEl.innerHTML = '<span class="loading">fetching\u2026</span>';

      apiFetch(url, cfg).then(function (data) {
        renderOutput(outEl, data);
      }).catch(function (e) {
        outEl.innerHTML = '<span class="st-err">Error: ' + esc(e.message) + '</span>';
      });
    });
  });

})();
