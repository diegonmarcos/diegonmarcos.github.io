#!/usr/bin/env node
/**
 * Local-only post editor server for mySocials.
 * Node built-ins only. No third-party dependencies.
 *
 * Run:
 *     node serve.mjs
 * Self-check (does not start the server):
 *     node serve.mjs --selfcheck
 */

import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const HOST = "127.0.0.1";
const PORT = 8029;

const EDIT_DIR = path.dirname(fileURLToPath(import.meta.url));
const MYSOCIALS_DIR = path.dirname(EDIT_DIR);
const FRONT_DIR = path.dirname(path.dirname(MYSOCIALS_DIR));
const CDN_DIR = path.join(path.dirname(FRONT_DIR), "front-assets-cdn");

const DATA_DIR = path.join(MYSOCIALS_DIR, "src", "data");
const DIST_DIR = path.join(MYSOCIALS_DIR, "dist");
const WRAPPER_SCRIPT = path.join(FRONT_DIR, "1_cicd", "src", "scripts", "front-data-json-js-wrapper.sh");

const CDN_MEDIA_ROOT = path.join(CDN_DIR, "b-Media", "mySocials", "static", "media");
const JSDELIVR_BASE = "https://cdn.jsdelivr.net/gh/diegonmarcos/front-assets-cdn@main/b-Media/mySocials/static/media";

const EDITOR_HTML = path.join(EDIT_DIR, "editor.html");

// Data-driven account registry.
const ACCOUNTS = {
  "ig0-diegocnmarcos_": { media_dir: "diegocnmarcos_", schema: "ig" },
  "ig1-diegocmarcos_": { media_dir: "diegocmarcos_", schema: "ig" },
  "ig2-diegonmarcos": { media_dir: "", schema: "ig" },
  "facebook-diegonmarcos": { media_dir: "facebook-diegonmarcos", schema: "fb" },
};

function accountJsonPath(account) {
  return path.join(DATA_DIR, `${account}.json`);
}

// Filesystem dir on the CDN repo for this account's post media.
function mediaPostsDir(account) {
  const mediaDir = ACCOUNTS[account].media_dir;
  const parts = [mediaDir, "posts"].filter(Boolean);
  return path.join(CDN_MEDIA_ROOT, ...parts);
}

function jsdelivrUrl(account, filename) {
  const mediaDir = ACCOUNTS[account].media_dir;
  const parts = [mediaDir, "posts", filename].filter(Boolean);
  return JSDELIVR_BASE + "/" + parts.join("/");
}

// Filesystem dir on the CDN repo for all accounts' profile photos.
function mediaProfilesDir() {
  return path.join(CDN_MEDIA_ROOT, "profiles");
}

function profileFilename(account, uploadedFilename) {
  const ext = path.extname(uploadedFilename).toLowerCase();
  return `${account}${ext}`;
}

function jsdelivrProfileUrl(account, uploadedFilename) {
  const filename = profileFilename(account, uploadedFilename);
  return JSDELIVR_BASE + "/profiles/" + filename;
}

function sanitizeFilename(name) {
  name = path.basename(name);
  name = name.replace(/[^A-Za-z0-9._-]/g, "_");
  return name;
}

function runWrapperAndCopy() {
  execFileSync("bash", [WRAPPER_SCRIPT, DATA_DIR], { encoding: "utf-8" });
  fs.mkdirSync(DIST_DIR, { recursive: true });
  for (const f of fs.readdirSync(DATA_DIR)) {
    if (f.startsWith("data-") && f.endsWith(".json.js")) {
      fs.copyFileSync(path.join(DATA_DIR, f), path.join(DIST_DIR, f));
    }
  }
}

function runGit(args) {
  try {
    const out = execFileSync("git", args, { encoding: "utf-8" });
    return out;
  } catch (e) {
    return (e.stdout || "") + (e.stderr || "");
  }
}

function gitPublishRepo(repoDir, subpaths, message) {
  const log = [];
  log.push(`--- ${repoDir} ---`);
  const strPaths = subpaths.map(String);

  log.push(runGit(["-C", repoDir, "add", "-A", ...strPaths]));

  const status = runGit(["-C", repoDir, "status", "--porcelain", ...strPaths]);
  if (!status.trim()) {
    log.push("(nothing to commit)");
    return log.join("\n");
  }

  // Scope the commit to subpaths with `-- <paths>`. Without the pathspec, git
  // commits the whole staged index — this repo routinely carries unrelated
  // staged work (and a nested front-assets-cdn clone) that must never ride along.
  log.push(runGit(["-C", repoDir, "commit", "-m", message, "--", ...strPaths]));

  log.push(runGit(["-C", repoDir, "push"]));

  return log.join("\n");
}

function sendJson(res, obj, status = 200) {
  const body = Buffer.from(JSON.stringify(obj), "utf-8");
  res.writeHead(status, {
    "Content-Type": "application/json",
    "Content-Length": body.length,
  });
  res.end(body);
}

function sendBytes(res, data, contentType, status = 200) {
  res.writeHead(status, {
    "Content-Type": contentType,
    "Content-Length": data.length,
  });
  res.end(data);
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", () => {
      const raw = Buffer.concat(chunks);
      if (!raw.length) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(raw.toString("utf-8")));
      } catch (e) {
        reject(e);
      }
    });
    req.on("error", reject);
  });
}

async function handleGet(req, res, pathname, query) {
  if (pathname === "/") {
    const html = fs.readFileSync(EDITOR_HTML, "utf-8");
    sendBytes(res, Buffer.from(html, "utf-8"), "text/html; charset=utf-8");
    return;
  }

  if (pathname === "/api/accounts") {
    const out = Object.entries(ACCOUNTS).map(([key, info]) => ({ key, schema: info.schema }));
    sendJson(res, out);
    return;
  }

  if (pathname === "/api/data") {
    const account = query.get("account");
    if (!Object.prototype.hasOwnProperty.call(ACCOUNTS, account)) {
      sendJson(res, { ok: false, error: "unknown account" }, 400);
      return;
    }
    const data = JSON.parse(fs.readFileSync(accountJsonPath(account), "utf-8"));
    sendJson(res, data);
    return;
  }

  if (pathname.startsWith("/cdn/")) {
    const relpath = decodeURIComponent(pathname.slice("/cdn/".length));
    const target = path.resolve(path.join(CDN_MEDIA_ROOT, relpath));
    const resolvedRoot = path.resolve(CDN_MEDIA_ROOT);
    if (!target.startsWith(resolvedRoot + path.sep)) {
      sendJson(res, { ok: false, error: "invalid path" }, 400);
      return;
    }
    if (!fs.existsSync(target) || !fs.statSync(target).isFile()) {
      sendJson(res, { ok: false, error: "not found" }, 404);
      return;
    }
    let contentType = "application/octet-stream";
    const suffix = path.extname(target).toLowerCase();
    if (suffix === ".jpg" || suffix === ".jpeg") contentType = "image/jpeg";
    else if (suffix === ".png") contentType = "image/png";
    else if (suffix === ".webp") contentType = "image/webp";
    else if (suffix === ".gif") contentType = "image/gif";
    sendBytes(res, fs.readFileSync(target), contentType);
    return;
  }

  sendJson(res, { ok: false, error: "not found" }, 404);
}

async function handlePost(req, res, pathname) {
  if (pathname === "/api/save") {
    const body = await readJsonBody(req);
    const account = body.account;
    const posts = body.posts;
    if (!Object.prototype.hasOwnProperty.call(ACCOUNTS, account) || !Array.isArray(posts)) {
      sendJson(res, { ok: false, error: "invalid request" }, 400);
      return;
    }
    const profilePhoto = body.profile_photo;
    const jsonPath = accountJsonPath(account);
    const data = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
    data.posts = posts;
    if (data.profile && typeof data.profile === "object" && !Array.isArray(data.profile) && typeof data.profile.posts === "number") {
      data.profile.posts = posts.length;
    }
    if (profilePhoto && data.profile && typeof data.profile === "object" && !Array.isArray(data.profile)) {
      data.profile.photo = profilePhoto;
    }
    // 2-space indent — matches how all four account jsons are already formatted.
    // Using anything else reformats the whole file on every save and buries the
    // real change under hundreds of whitespace-only diff lines.
    fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2) + "\n", "utf-8");
    runWrapperAndCopy();
    sendJson(res, { ok: true });
    return;
  }

  if (pathname === "/api/image") {
    const body = await readJsonBody(req);
    const account = body.account;
    const filename = body.filename;
    const b64 = body.b64;
    const kind = body.kind || "post";
    if (!Object.prototype.hasOwnProperty.call(ACCOUNTS, account) || !filename || !b64) {
      sendJson(res, { ok: false, error: "invalid request" }, 400);
      return;
    }
    if (kind !== "post" && kind !== "profile") {
      sendJson(res, { ok: false, error: "invalid kind" }, 400);
      return;
    }

    if (kind === "profile") {
      const safeName = profileFilename(account, sanitizeFilename(filename));
      const targetDir = mediaProfilesDir();
      fs.mkdirSync(targetDir, { recursive: true });
      const targetFile = path.join(targetDir, safeName);
      fs.writeFileSync(targetFile, Buffer.from(b64, "base64"));

      const localUrl = "/cdn/profiles/" + safeName;

      sendJson(res, {
        ok: true,
        url: jsdelivrProfileUrl(account, filename),
        local: localUrl,
      });
      return;
    }

    const safeName = sanitizeFilename(filename);
    const targetDir = mediaPostsDir(account);
    fs.mkdirSync(targetDir, { recursive: true });
    const targetFile = path.join(targetDir, safeName);
    fs.writeFileSync(targetFile, Buffer.from(b64, "base64"));

    const mediaDir = ACCOUNTS[account].media_dir;
    const relParts = [mediaDir, "posts", safeName].filter(Boolean);
    const localUrl = "/cdn/" + relParts.join("/");

    sendJson(res, {
      ok: true,
      url: jsdelivrUrl(account, safeName),
      local: localUrl,
    });
    return;
  }

  if (pathname === "/api/publish") {
    const message = "content(mySocials): update posts via local editor";
    const cdnLog = gitPublishRepo(
      CDN_DIR,
      [path.join(CDN_DIR, "b-Media", "mySocials", "static", "media")],
      message
    );
    const frontLog = gitPublishRepo(
      FRONT_DIR,
      [path.join(MYSOCIALS_DIR, "src", "data"), path.join(MYSOCIALS_DIR, "dist")],
      message
    );
    sendJson(res, { ok: true, log: cdnLog + "\n\n" + frontLog });
    return;
  }

  sendJson(res, { ok: false, error: "not found" }, 404);
}

function selfcheck() {
  const errors = [];

  for (const account of Object.keys(ACCOUNTS)) {
    const jsonPath = accountJsonPath(account);
    if (!fs.existsSync(jsonPath) || !fs.statSync(jsonPath).isFile()) {
      errors.push(`missing json for account ${account}: ${jsonPath}`);
      continue;
    }
    let data;
    try {
      data = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
    } catch (e) {
      errors.push(`invalid json for ${account}: ${e.message}`);
      continue;
    }
    if (!Array.isArray(data.posts)) {
      errors.push(`account ${account} has no 'posts' list`);
    }
  }

  if (!fs.existsSync(WRAPPER_SCRIPT) || !fs.statSync(WRAPPER_SCRIPT).isFile()) {
    errors.push(`wrapper script missing: ${WRAPPER_SCRIPT}`);
  }

  if (!fs.existsSync(CDN_MEDIA_ROOT) || !fs.statSync(CDN_MEDIA_ROOT).isDirectory()) {
    errors.push(`CDN media root missing: ${CDN_MEDIA_ROOT}`);
  }

  const expected1 =
    "https://cdn.jsdelivr.net/gh/diegonmarcos/front-assets-cdn@main/" +
    "b-Media/mySocials/static/media/diegocnmarcos_/posts/x.webp";
  const got1 = jsdelivrUrl("ig0-diegocnmarcos_", "x.webp");
  if (got1 !== expected1) {
    errors.push(`jsdelivr url mismatch: ${got1} != ${expected1}`);
  }

  const expected2 =
    "https://cdn.jsdelivr.net/gh/diegonmarcos/front-assets-cdn@main/" +
    "b-Media/mySocials/static/media/posts/y.jpg";
  const got2 = jsdelivrUrl("ig2-diegonmarcos", "y.jpg");
  if (got2 !== expected2) {
    errors.push(`jsdelivr url mismatch: ${got2} != ${expected2}`);
  }

  const expected3 =
    "https://cdn.jsdelivr.net/gh/diegonmarcos/front-assets-cdn@main/" +
    "b-Media/mySocials/static/media/profiles/ig2-diegonmarcos.jpg";
  const got3 = jsdelivrProfileUrl("ig2-diegonmarcos", "whatever.JPG");
  if (got3 !== expected3) {
    errors.push(`jsdelivr profile url mismatch: ${got3} != ${expected3}`);
  }

  if (errors.length) {
    for (const e of errors) console.error("FAIL:", e);
    process.exit(1);
  }

  console.log("selfcheck OK");
  process.exit(0);
}

function main() {
  if (process.argv.includes("--selfcheck")) {
    selfcheck();
    return;
  }

  const server = http.createServer(async (req, res) => {
    const parsed = new URL(req.url, `http://${HOST}:${PORT}`);
    const pathname = parsed.pathname;
    try {
      if (req.method === "GET") {
        await handleGet(req, res, pathname, parsed.searchParams);
      } else if (req.method === "POST") {
        await handlePost(req, res, pathname);
      } else {
        sendJson(res, { ok: false, error: "not found" }, 404);
      }
    } catch (e) {
      sendJson(res, { ok: false, error: e.message }, 500);
    }
  });

  server.listen(PORT, HOST, () => {
    console.log(`Serving mySocials editor at http://${HOST}:${PORT}/`);
  });
}

main();
