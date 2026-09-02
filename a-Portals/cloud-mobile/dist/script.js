"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // src/app/overlays/overlays.ts
  var overlays_exports = {};
  __export(overlays_exports, {
    initOverlays: () => initOverlays,
    openUpdateOverlay: () => openUpdateOverlay
  });
  function show(el3) {
    el3.hidden = false;
    el3.classList.add("is-open");
  }
  function hide(el3) {
    el3.classList.remove("is-open");
    el3.hidden = true;
  }
  function buildScrim() {
    const scrim = document.createElement("div");
    scrim.className = "overlay-sheet__scrim";
    return scrim;
  }
  function buildHeader(title) {
    const header = document.createElement("div");
    header.className = "overlay-sheet__header";
    const titleEl = document.createElement("p");
    titleEl.className = "overlay-sheet__title";
    titleEl.textContent = title;
    header.appendChild(titleEl);
    return header;
  }
  function buildGroup(group) {
    const groupEl = document.createElement("div");
    groupEl.className = "overlay-sheet__group";
    const titleEl = document.createElement("p");
    titleEl.className = "overlay-sheet__group-title";
    titleEl.textContent = group.title;
    groupEl.appendChild(titleEl);
    for (const item of group.items) {
      const row = document.createElement("div");
      row.className = "overlay-sheet__row";
      const rowTitle = document.createElement("span");
      rowTitle.className = "overlay-sheet__row-title";
      rowTitle.textContent = item.title;
      row.appendChild(rowTitle);
      if (item.subtitle) {
        const rowSubtitle = document.createElement("span");
        rowSubtitle.className = "overlay-sheet__row-subtitle";
        rowSubtitle.textContent = item.subtitle;
        row.appendChild(rowSubtitle);
      }
      groupEl.appendChild(row);
    }
    return groupEl;
  }
  function buildNotificationCenter(data) {
    const root = document.getElementById("notification-center");
    const triggerBtn = document.getElementById("dynamic-island");
    if (!root || !triggerBtn)
      return;
    const scrim = buildScrim();
    const panel = document.createElement("div");
    panel.className = "overlay-sheet__panel";
    const header = buildHeader("Notifications");
    panel.appendChild(header);
    function buildEmptyState() {
      const empty = document.createElement("div");
      empty.className = "overlay-sheet__empty";
      const titleLine = document.createElement("p");
      const titleStrong = document.createElement("strong");
      titleStrong.textContent = data.notificationCenter.emptyTitle;
      titleLine.appendChild(titleStrong);
      const bodyLine = document.createElement("p");
      bodyLine.textContent = data.notificationCenter.emptyBody;
      empty.appendChild(titleLine);
      empty.appendChild(bodyLine);
      return empty;
    }
    const groups = data.notificationCenter.groups;
    if (groups && groups.length > 0) {
      for (const group of groups)
        panel.appendChild(buildGroup(group));
      const clearBtn = document.createElement("button");
      clearBtn.type = "button";
      clearBtn.className = "overlay-sheet__action";
      clearBtn.style.color = "#B794F4";
      clearBtn.textContent = "Clear";
      clearBtn.addEventListener("click", () => {
        for (const groupEl of panel.querySelectorAll(".overlay-sheet__group"))
          groupEl.remove();
        clearBtn.remove();
        panel.appendChild(buildEmptyState());
      });
      header.appendChild(clearBtn);
    } else {
      panel.appendChild(buildEmptyState());
    }
    root.appendChild(scrim);
    root.appendChild(panel);
    const open = () => show(root);
    const close = () => hide(root);
    triggerBtn.addEventListener("click", open);
    scrim.addEventListener("click", close);
    document.addEventListener("keydown", (event) => {
      if (root.classList.contains("is-open") && event.key === "Escape")
        close();
    });
    document.addEventListener("click", (event) => {
      if (!root.classList.contains("is-open"))
        return;
      const target = event.target;
      if (!(target instanceof Node))
        return;
      if (panel.contains(target) || triggerBtn.contains(target))
        return;
      close();
    });
  }
  function buildUpdateOverlay(data) {
    const root = document.getElementById("update-overlay");
    if (!root)
      return null;
    const scrim = buildScrim();
    const panel = document.createElement("div");
    panel.className = "overlay-sheet__panel";
    panel.appendChild(buildHeader(data.updateOverlay.title));
    const progress = document.createElement("div");
    progress.className = "overlay-sheet__progress";
    const progressBar = document.createElement("div");
    progressBar.className = "overlay-sheet__progress-bar";
    progress.appendChild(progressBar);
    panel.appendChild(progress);
    const status = document.createElement("p");
    status.className = "overlay-sheet__status";
    panel.appendChild(status);
    const dismissBtn = document.createElement("button");
    dismissBtn.type = "button";
    dismissBtn.className = "overlay-sheet__action";
    dismissBtn.textContent = "Dismiss";
    panel.appendChild(dismissBtn);
    root.appendChild(scrim);
    root.appendChild(panel);
    let pendingTimers = [];
    const clearPendingTimers = () => {
      for (const id of pendingTimers) {
        window.clearTimeout(id);
        window.clearInterval(id);
      }
      pendingTimers = [];
    };
    const setIndeterminate = (on) => {
      progressBar.classList.toggle("overlay-sheet__progress-bar--indeterminate", on);
    };
    const close = () => {
      clearPendingTimers();
      hide(root);
    };
    dismissBtn.addEventListener("click", close);
    return () => {
      clearPendingTimers();
      dismissBtn.textContent = "Dismiss";
      show(root);
      status.textContent = data.updateOverlay.states.checking;
      setIndeterminate(true);
      const availableTimer = window.setTimeout(() => {
        status.textContent = data.updateOverlay.states.available;
        const downloadStartTimer = window.setTimeout(() => {
          setIndeterminate(false);
          progressBar.style.width = "0%";
          let tick = 0;
          const downloadInterval = window.setInterval(() => {
            tick += 1;
            const downloadedMib = DOWNLOAD_TOTAL_MIB * tick / DOWNLOAD_TICK_COUNT;
            const pct = tick / DOWNLOAD_TICK_COUNT * 100;
            progressBar.style.width = `${pct}%`;
            status.textContent = `${downloadedMib.toFixed(1)} MiB / ${DOWNLOAD_TOTAL_MIB.toFixed(1)} MiB`;
            if (tick >= DOWNLOAD_TICK_COUNT) {
              window.clearInterval(downloadInterval);
              setIndeterminate(true);
              status.textContent = data.updateOverlay.states.installing;
              const doneTimer = window.setTimeout(() => {
                setIndeterminate(false);
                progressBar.style.width = "100%";
                status.textContent = data.updateOverlay.states.done;
                dismissBtn.textContent = "Close";
              }, INSTALLING_DELAY_MS);
              pendingTimers.push(doneTimer);
            }
          }, DOWNLOAD_TICK_MS);
          pendingTimers.push(downloadInterval);
        }, AVAILABLE_DELAY_MS);
        pendingTimers.push(downloadStartTimer);
      }, CHECKING_DELAY_MS);
      pendingTimers.push(availableTimer);
    };
  }
  function openUpdateOverlay() {
    if (updateOpener)
      updateOpener();
  }
  function initOverlays(data) {
    buildNotificationCenter(data);
    updateOpener = buildUpdateOverlay(data);
  }
  var CHECKING_DELAY_MS, AVAILABLE_DELAY_MS, DOWNLOAD_DURATION_MS, INSTALLING_DELAY_MS, DOWNLOAD_TOTAL_MIB, DOWNLOAD_TICK_MS, DOWNLOAD_TICK_COUNT, updateOpener;
  var init_overlays = __esm({
    "src/app/overlays/overlays.ts"() {
      "use strict";
      CHECKING_DELAY_MS = 700;
      AVAILABLE_DELAY_MS = 500;
      DOWNLOAD_DURATION_MS = 2500;
      INSTALLING_DELAY_MS = 800;
      DOWNLOAD_TOTAL_MIB = 48;
      DOWNLOAD_TICK_MS = 100;
      DOWNLOAD_TICK_COUNT = DOWNLOAD_DURATION_MS / DOWNLOAD_TICK_MS;
      updateOpener = null;
    }
  });

  // src/lib/core/data.ts
  var cached = null;
  function getData() {
    if (cached)
      return cached;
    const bag = globalThis.PORTAL_DATA;
    const shell = bag?.["shell"];
    const core = bag?.["sections-core"];
    const contentFile = bag?.["sections-content"];
    if (!shell || !core || !contentFile)
      throw new Error("cloud-mobile portal data not loaded");
    cached = {
      ...shell,
      sections: {
        ...core.sections,
        ...contentFile.sections,
        home: { label: "Home", icon: "home", color: "blue" }
      }
    };
    return cached;
  }
  function getMockApps() {
    const bag = globalThis.PORTAL_DATA;
    const mock = bag?.["mock-apps"];
    if (!mock)
      throw new Error("mock-apps portal data not loaded");
    return mock;
  }
  function getLinktree() {
    const bag = globalThis.PORTAL_DATA;
    const linktree = bag?.["linktree"];
    if (!linktree)
      throw new Error("linktree portal data not loaded");
    return linktree;
  }

  // src/lib/core/nav.ts
  function resolveTarget(target) {
    if (!target)
      return { href: null, external: false };
    if (target.startsWith("https://") || target.startsWith("http://")) {
      return { href: target, external: true };
    }
    if (target.startsWith("section:")) {
      return { href: routeHref([target.slice("section:".length)]), external: false };
    }
    if (target.startsWith("page:")) {
      return { href: routeHref(target.slice("page:".length).split("/")), external: false };
    }
    return { href: null, external: false };
  }
  function routeHref(segments) {
    return "/" + ["cloud-mobile", ...segments.filter(Boolean)].join("/") + "/";
  }

  // src/app/launcher/long-press-menu.ts
  var LONG_PRESS_MS = 380;
  var MOVE_THRESHOLD_PX = 10;
  function initLongPressMenu() {
    const shellEl = document.querySelector(".shell");
    const hostEl = shellEl ?? document.body;
    const menuEl = document.createElement("div");
    menuEl.className = "long-press-menu";
    menuEl.hidden = true;
    menuEl.setAttribute("aria-hidden", "true");
    const scrimEl = document.createElement("div");
    scrimEl.className = "long-press-menu-scrim";
    scrimEl.hidden = true;
    hostEl.appendChild(scrimEl);
    hostEl.appendChild(menuEl);
    let menuOpen = false;
    let pressTimer = null;
    let longPressFired = false;
    let pressTileEl = null;
    let activePointerId = null;
    let startX = 0;
    let startY = 0;
    function clearPressTimer() {
      if (pressTimer === null)
        return;
      window.clearTimeout(pressTimer);
      pressTimer = null;
    }
    function closeMenu() {
      menuOpen = false;
      menuEl.classList.remove("is-open");
      menuEl.setAttribute("aria-hidden", "true");
      menuEl.hidden = true;
      menuEl.innerHTML = "";
      scrimEl.classList.remove("is-open");
      scrimEl.hidden = true;
    }
    function buildHeaderRow(label) {
      const row = document.createElement("div");
      row.className = "long-press-menu__header";
      row.textContent = label;
      return row;
    }
    function buildDivider() {
      const divider = document.createElement("div");
      divider.className = "long-press-menu__divider";
      return divider;
    }
    function buildInertRow(label) {
      const row = document.createElement("button");
      row.type = "button";
      row.className = "long-press-menu__row";
      row.textContent = label;
      row.setAttribute("aria-disabled", "true");
      row.addEventListener("click", (event) => {
        event.preventDefault();
      });
      return row;
    }
    function openMenu(tileEl) {
      closeMenu();
      const label = tileEl.querySelector(".tile__label")?.textContent?.trim() ?? "";
      menuEl.appendChild(buildHeaderRow(label));
      menuEl.appendChild(buildDivider());
      menuEl.appendChild(buildInertRow("App info"));
      menuEl.appendChild(buildInertRow("Uninstall"));
      const rect = tileEl.getBoundingClientRect();
      const hostRect = hostEl.getBoundingClientRect();
      menuEl.style.left = `${rect.left - hostRect.left}px`;
      menuEl.style.top = `${rect.bottom - hostRect.top + 6}px`;
      menuEl.hidden = false;
      scrimEl.hidden = false;
      menuEl.classList.add("is-open");
      scrimEl.classList.add("is-open");
      menuEl.setAttribute("aria-hidden", "false");
      menuOpen = true;
    }
    function onPointerDown(event) {
      const target = event.target;
      if (!(target instanceof Element))
        return;
      const tileEl = target.closest(".tile--app");
      if (!tileEl)
        return;
      clearPressTimer();
      pressTileEl = tileEl;
      activePointerId = event.pointerId;
      startX = event.clientX;
      startY = event.clientY;
      longPressFired = false;
      pressTimer = window.setTimeout(() => {
        pressTimer = null;
        longPressFired = true;
        if (pressTileEl)
          openMenu(pressTileEl);
      }, LONG_PRESS_MS);
    }
    function onPointerMove(event) {
      if (pressTimer === null || event.pointerId !== activePointerId)
        return;
      const dx = event.clientX - startX;
      const dy = event.clientY - startY;
      if (Math.hypot(dx, dy) > MOVE_THRESHOLD_PX)
        clearPressTimer();
    }
    function onPointerEnd(event) {
      if (event.pointerId !== activePointerId)
        return;
      clearPressTimer();
      activePointerId = null;
    }
    function onDocumentClickCapture(event) {
      if (!longPressFired)
        return;
      const target = event.target;
      if (!(target instanceof Element))
        return;
      if (target.closest(".tile--app") !== pressTileEl)
        return;
      longPressFired = false;
      event.preventDefault();
      event.stopPropagation();
    }
    function onDocumentKeydown(event) {
      if (menuOpen && event.key === "Escape")
        closeMenu();
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerup", onPointerEnd);
    document.addEventListener("pointercancel", onPointerEnd);
    document.addEventListener("click", onDocumentClickCapture, true);
    scrimEl.addEventListener("click", closeMenu);
    document.addEventListener("keydown", onDocumentKeydown);
  }

  // src/app/launcher/drawer.ts
  function iconSrc(icon) {
    return `/cloud-mobile/public/icons/${icon}.svg`;
  }
  function slugify(value) {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }
  function buildNavRow(href, label, icon, child = false) {
    let row;
    if (href) {
      const anchor = document.createElement("a");
      anchor.href = href;
      row = anchor;
    } else {
      row = document.createElement("span");
    }
    row.classList.add("drawer__nav-item");
    if (child)
      row.classList.add("drawer__nav-item--child");
    if (!href) {
      row.classList.add("drawer__nav-item--inert");
      row.setAttribute("aria-disabled", "true");
    }
    if (icon) {
      const iconEl = document.createElement("img");
      iconEl.src = iconSrc(icon);
      iconEl.alt = "";
      row.appendChild(iconEl);
    }
    const labelEl = document.createElement("span");
    labelEl.textContent = label;
    row.appendChild(labelEl);
    return row;
  }
  function buildGroupTitle(title) {
    const el3 = document.createElement("p");
    el3.className = "drawer__group-title";
    el3.textContent = title;
    return el3;
  }
  function fillBanner(data) {
    const setText = (id, text) => {
      const el3 = document.getElementById(id);
      if (!el3)
        return;
      el3.textContent = text;
    };
    setText("drawer-app-name", data.app.name);
    setText("drawer-app-build", data.app.build);
    setText("drawer-user-avatar", data.app.user.initials);
    setText("drawer-user-name", data.app.user.name);
    setText("drawer-user-email", data.app.user.email);
  }
  function sectionPage(data, sectionId, pageId) {
    return data.sections[sectionId]?.pages?.find(
      (page) => typeof page !== "string" && page.id === pageId
    );
  }
  function cloudRowItems(data) {
    const page = sectionPage(data, "cloud", "apps");
    const groups = typeof page === "object" && page.groups || [];
    return groups.flatMap((group) => group.tiles).map((tile) => ({ label: tile.label, icon: tile.icon, href: resolveTarget(tile.target).href }));
  }
  function labsRowItems(data) {
    const page = sectionPage(data, "cloud", "lnktree");
    const tiles = typeof page === "object" && page.tiles || [];
    return tiles.map((tile) => ({ label: tile.label, icon: tile.icon, href: resolveTarget(tile.target).href }));
  }
  function configRowItems(data) {
    const section = data.sections["config"];
    if (!section?.pages)
      return [];
    return section.pages.map((page) => {
      const label = typeof page === "string" ? page : page.label;
      const pageId = typeof page === "string" ? slugify(page) : page.id;
      const href = typeof page === "object" && page.target ? resolveTarget(page.target).href : routeHref(["config", pageId]);
      return { label, icon: section.icon, href };
    });
  }
  function linktreeRowGroups() {
    return getLinktree().groups.map((group) => [
      group.label,
      group.tiles.map((tile) => ({ label: tile.label, icon: tile.icon, href: tile.href ?? null }))
    ]);
  }
  function appendGroup(container, title, items) {
    if (items.length === 0)
      return;
    container.appendChild(buildGroupTitle(title));
    items.forEach((item) => container.appendChild(buildNavRow(item.href, item.label, item.icon)));
  }
  function fillDrawerList(container, data) {
    container.innerHTML = "";
    const homeApps = data.longPress["home"]?.find((item) => item.id === "home-apps");
    if (homeApps) {
      const { href } = resolveTarget(homeApps.target);
      container.appendChild(buildNavRow(href, homeApps.label, homeApps.icon));
    }
    container.appendChild(buildGroupTitle("Home"));
    const groupIds = [...data.bottomNav.filter((id) => id !== "home"), "config"];
    groupIds.forEach((id) => {
      const section = data.sections[id];
      if (!section)
        return;
      container.appendChild(buildNavRow(routeHref([id]), section.label, section.icon));
      section.pages?.forEach((page) => {
        if (typeof page === "object" && page.hidden)
          return;
        const label = typeof page === "string" ? page : page.label;
        const pageId = typeof page === "string" ? slugify(page) : page.id;
        const href = typeof page === "object" && page.target ? resolveTarget(page.target).href : routeHref([id, pageId]);
        container.appendChild(buildNavRow(href, label, void 0, true));
      });
    });
    appendGroup(container, "Cloud", cloudRowItems(data));
    appendGroup(container, "Labs", labsRowItems(data));
    appendGroup(container, "Configs", configRowItems(data));
    linktreeRowGroups().forEach(([title, items]) => appendGroup(container, title, items));
  }
  function wireOpenClose() {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const drawerEl = document.getElementById("drawer");
    const scrimEl = document.getElementById("drawer-scrim");
    if (!hamburgerBtn || !drawerEl || !scrimEl)
      return;
    const open = () => {
      drawerEl.classList.add("is-open");
      scrimEl.classList.add("is-open");
      drawerEl.setAttribute("aria-hidden", "false");
      hamburgerBtn.setAttribute("aria-expanded", "true");
    };
    const close = () => {
      drawerEl.classList.remove("is-open");
      scrimEl.classList.remove("is-open");
      drawerEl.setAttribute("aria-hidden", "true");
      hamburgerBtn.setAttribute("aria-expanded", "false");
    };
    hamburgerBtn.addEventListener("click", open);
    scrimEl.addEventListener("click", close);
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape")
        close();
    });
  }
  function initDrawer(data) {
    const navEl = document.getElementById("drawer-nav");
    fillBanner(data);
    if (navEl)
      fillDrawerList(navEl, data);
    wireOpenClose();
    initLongPressMenu();
  }

  // src/lib/onehand/stars.ts
  var onCheckUpdatesHandler = null;
  function setOnCheckUpdates(handler) {
    onCheckUpdatesHandler = handler;
  }
  var RECENT_APP_ICONS = {
    Mail: "mail",
    Brave: "browser",
    Mattermost: "chat",
    Obsidian: "brain",
    Calendar: "calendar",
    Vault: "lock",
    Claude: "sparkles",
    Settings: "settings"
  };
  var SIRIUS_RADIUS_PX = 130;
  var SIRIUS_SUBLEVEL_STEP_PX = 120;
  var ARC_RADIUS_PX = 200;
  var DEAD_ZONE_PX = 28;
  var MOVE_THRESHOLD_PX2 = 6;
  var TAP_MAX_MS = 450;
  var TAP_MAX_MOVE_PX = 16;
  var GHOST_CLICK_MS = 700;
  var FLASH_MS = 220;
  var TWO_PI = Math.PI * 2;
  var ARROW_HEAD_LENGTH_PX = 10;
  var ARROW_HEAD_ANGLE_RAD = Math.PI / 7;
  var SVG_NS = "http://www.w3.org/2000/svg";
  function capturePointer(el3, pointerId) {
    try {
      el3.setPointerCapture(pointerId);
    } catch {
    }
  }
  function releasePointer(el3, pointerId) {
    try {
      if (el3.hasPointerCapture(pointerId))
        el3.releasePointerCapture(pointerId);
    } catch {
    }
  }
  function polar(angle, radius) {
    return { tx: Math.cos(angle) * radius, ty: Math.sin(angle) * radius };
  }
  function computeAngles(count, kind) {
    if (count <= 0)
      return [];
    if (kind === "sirius") {
      const start = -Math.PI / 2;
      return Array.from({ length: count }, (_, i) => start + i * TWO_PI / count);
    }
    if (count === 1)
      return [Math.PI + Math.PI / 2];
    const step = Math.PI / (count - 1);
    return Array.from({ length: count }, (_, i) => Math.PI + i * step);
  }
  function angularDistance(a, b) {
    return Math.abs(Math.atan2(Math.sin(a - b), Math.cos(a - b)));
  }
  function nearestIndexByAngle(angle, angles) {
    let bestIndex = 0;
    let bestDelta = Infinity;
    for (let i = 0; i < angles.length; i++) {
      const delta = angularDistance(angle, angles[i]);
      if (delta < bestDelta) {
        bestDelta = delta;
        bestIndex = i;
      }
    }
    return bestIndex;
  }
  function siriusItems(nodes) {
    return nodes.map((n) => {
      if (n.children && n.children.length > 0) {
        return { id: n.id, label: n.label, href: null, inert: false, node: n };
      }
      const href = resolveTarget(n.target).href;
      return { id: n.id, label: n.label, href, inert: href === null, node: n };
    });
  }
  function pageEntryItem(entry, sectionId) {
    if (typeof entry === "string") {
      return { id: entry, label: entry, href: routeHref([sectionId, entry]), inert: false };
    }
    const href = entry.target ? resolveTarget(entry.target).href : routeHref([sectionId, entry.id]);
    return { id: entry.id, label: entry.label, href, inert: href === null };
  }
  function canopusItems() {
    const live = getData();
    const sectionId = live.stars.canopus.fixedSection;
    const pages = live.sections[sectionId]?.pages ?? [];
    return pages.map((entry) => pageEntryItem(entry, sectionId));
  }
  function centauriItems(recentApps) {
    return recentApps.map((label, i) => ({ id: `recent-${i}`, label, href: null, inert: true, icon: RECENT_APP_ICONS[label] }));
  }
  function iconSrc2(icon) {
    return `/cloud-mobile/public/icons/${icon}.svg`;
  }
  function initStars(data) {
    if (!document.querySelector(".home-cube"))
      return;
    const menuRoot = document.getElementById("radial-menu");
    if (!menuRoot)
      return;
    const menuEl = menuRoot;
    const shellEl = menuEl.closest(".shell");
    const starEls = [];
    const siriusEl = document.getElementById("star-sirius");
    const canopusEl = document.getElementById("star-canopus");
    const centauriEl = document.getElementById("star-centauri");
    if (siriusEl)
      starEls.push({ el: siriusEl, kind: "sirius" });
    if (canopusEl)
      starEls.push({ el: canopusEl, kind: "canopus" });
    if (centauriEl)
      starEls.push({ el: centauriEl, kind: "centauri" });
    if (starEls.length === 0)
      return;
    let isOpen = false;
    let persistent = false;
    let suppressClickUntil = 0;
    let originX = 0;
    let originY = 0;
    let currentItems = [];
    let currentAngles = [];
    let nodeEls = [];
    let highlightIndex = -1;
    let siriusStack = [];
    let arrowLineEl = null;
    let arrowHeadEl = null;
    function setHighlight(index) {
      if (index === highlightIndex)
        return;
      const prev = nodeEls[highlightIndex];
      if (prev)
        prev.classList.remove("is-highlighted");
      highlightIndex = index;
      const next = nodeEls[highlightIndex];
      if (next)
        next.classList.add("is-highlighted");
    }
    function buildNodeClass(item, kindClass, highlighted) {
      let cls = `radial-menu__node radial-menu__node--${kindClass}`;
      if (highlighted)
        cls += " is-highlighted";
      if (item.inert)
        cls += " radial-menu__node--inert";
      return cls;
    }
    function ringRadius(depth, kind) {
      if (kind === "sirius")
        return SIRIUS_RADIUS_PX + SIRIUS_SUBLEVEL_STEP_PX * depth;
      return ARC_RADIUS_PX;
    }
    function renderItems(items, depth, kind) {
      currentItems = items;
      currentAngles = computeAngles(items.length, kind);
      nodeEls = [];
      arrowLineEl = null;
      arrowHeadEl = null;
      menuEl.innerHTML = "";
      const kindClass = kind === "sirius" ? "circle" : "arc";
      const radius = ringRadius(depth, kind);
      const scrim = document.createElement("div");
      scrim.className = `radial-menu__scrim radial-menu__scrim--${kindClass}`;
      menuEl.appendChild(scrim);
      const center = document.createElement("div");
      center.className = "radial-menu__center";
      const shellRect = shellEl?.getBoundingClientRect();
      center.style.left = `${originX - (shellRect?.left ?? 0)}px`;
      center.style.top = `${originY - (shellRect?.top ?? 0)}px`;
      if (depth > 0) {
        const back = document.createElement("button");
        back.type = "button";
        back.className = "radial-menu__back";
        back.textContent = "\u2039 Back";
        center.appendChild(back);
      }
      items.forEach((item, i) => {
        const { tx, ty } = polar(currentAngles[i] ?? 0, radius);
        const nodeEl = document.createElement("div");
        nodeEl.className = buildNodeClass(item, kindClass, i === highlightIndex);
        nodeEl.dataset.id = item.id;
        nodeEl.dataset.index = String(i);
        nodeEl.style.setProperty("--tx", `${tx}px`);
        nodeEl.style.setProperty("--ty", `${ty}px`);
        if (item.icon) {
          const iconEl = document.createElement("img");
          iconEl.className = "radial-menu__node-icon";
          iconEl.src = iconSrc2(item.icon);
          iconEl.alt = "";
          nodeEl.appendChild(iconEl);
        }
        const labelEl = document.createElement("span");
        labelEl.className = "radial-menu__node-label";
        labelEl.textContent = item.label;
        nodeEl.appendChild(labelEl);
        center.appendChild(nodeEl);
        nodeEls.push(nodeEl);
      });
      menuEl.appendChild(center);
      if (kind === "sirius") {
        const arrowSvg = document.createElementNS(SVG_NS, "svg");
        arrowSvg.setAttribute("class", "radial-menu__arrow");
        const line = document.createElementNS(SVG_NS, "line");
        line.setAttribute("class", "radial-menu__arrow-line");
        const head = document.createElementNS(SVG_NS, "polygon");
        head.setAttribute("class", "radial-menu__arrow-head");
        arrowSvg.appendChild(line);
        arrowSvg.appendChild(head);
        menuEl.appendChild(arrowSvg);
        arrowLineEl = line;
        arrowHeadEl = head;
      }
      menuEl.hidden = false;
      menuEl.classList.add("is-open");
      menuEl.setAttribute("aria-hidden", "false");
      isOpen = true;
    }
    function updateArrow(clientX, clientY) {
      if (!arrowLineEl || !arrowHeadEl)
        return;
      const shellRect = shellEl?.getBoundingClientRect();
      const offsetX = shellRect?.left ?? 0;
      const offsetY = shellRect?.top ?? 0;
      const x1 = originX - offsetX;
      const y1 = originY - offsetY;
      const x2 = clientX - offsetX;
      const y2 = clientY - offsetY;
      arrowLineEl.setAttribute("x1", String(x1));
      arrowLineEl.setAttribute("y1", String(y1));
      arrowLineEl.setAttribute("x2", String(x2));
      arrowLineEl.setAttribute("y2", String(y2));
      const angle = Math.atan2(y2 - y1, x2 - x1);
      const hx1 = x2 - ARROW_HEAD_LENGTH_PX * Math.cos(angle - ARROW_HEAD_ANGLE_RAD);
      const hy1 = y2 - ARROW_HEAD_LENGTH_PX * Math.sin(angle - ARROW_HEAD_ANGLE_RAD);
      const hx2 = x2 - ARROW_HEAD_LENGTH_PX * Math.cos(angle + ARROW_HEAD_ANGLE_RAD);
      const hy2 = y2 - ARROW_HEAD_LENGTH_PX * Math.sin(angle + ARROW_HEAD_ANGLE_RAD);
      arrowHeadEl.setAttribute("points", `${x2},${y2} ${hx1},${hy1} ${hx2},${hy2}`);
    }
    function renderSiriusLevel() {
      const level = siriusStack[siriusStack.length - 1] ?? [];
      renderItems(siriusItems(level), siriusStack.length - 1, "sirius");
    }
    function enterPersistentMode() {
      persistent = true;
      suppressClickUntil = Date.now() + GHOST_CLICK_MS;
    }
    function closeMenu() {
      isOpen = false;
      persistent = false;
      suppressClickUntil = 0;
      siriusStack = [];
      currentItems = [];
      currentAngles = [];
      nodeEls = [];
      highlightIndex = -1;
      arrowLineEl = null;
      arrowHeadEl = null;
      menuEl.classList.remove("is-open");
      menuEl.setAttribute("aria-hidden", "true");
      menuEl.hidden = true;
      menuEl.innerHTML = "";
    }
    function flashThenClose() {
      window.setTimeout(() => closeMenu(), FLASH_MS);
    }
    function drillInto(children) {
      siriusStack.push(children);
      highlightIndex = 0;
      renderSiriusLevel();
    }
    function goBack() {
      if (siriusStack.length <= 1) {
        closeMenu();
        return;
      }
      siriusStack.pop();
      highlightIndex = 0;
      renderSiriusLevel();
    }
    function commitIndex(index) {
      if (!isOpen)
        return;
      const item = currentItems[index];
      if (!item) {
        closeMenu();
        return;
      }
      if (item.node?.children && item.node.children.length > 0) {
        drillInto(item.node.children);
        return;
      }
      const actionTarget = item.node?.target;
      if (actionTarget === "action:check_updates") {
        closeMenu();
        onCheckUpdatesHandler?.();
        return;
      }
      if (item.href) {
        const href = item.href;
        closeMenu();
        location.href = href;
        return;
      }
      flashThenClose();
    }
    function openFor(kind, starEl) {
      closeMenu();
      const rect = starEl.getBoundingClientRect();
      originX = rect.left + rect.width / 2;
      originY = rect.top + rect.height / 2;
      highlightIndex = 0;
      if (kind === "sirius") {
        siriusStack = [data.stars.sirius.nodes];
        renderSiriusLevel();
      } else if (kind === "canopus") {
        renderItems(canopusItems(), 0, "canopus");
      } else {
        renderItems(centauriItems(data.stars.centauri.recentApps), 0, "centauri");
      }
    }
    function updateHighlightFromPointer(clientX, clientY) {
      const dx = clientX - originX;
      const dy = clientY - originY;
      if (Math.hypot(dx, dy) < DEAD_ZONE_PX)
        return;
      setHighlight(nearestIndexByAngle(Math.atan2(dy, dx), currentAngles));
    }
    function attachStar(starEl, kind) {
      let pointerId = null;
      let moved = false;
      let downTime = 0;
      let downX = 0;
      let downY = 0;
      starEl.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        pointerId = e.pointerId;
        moved = false;
        downTime = Date.now();
        downX = e.clientX;
        downY = e.clientY;
        openFor(kind, starEl);
        capturePointer(starEl, e.pointerId);
      });
      starEl.addEventListener("pointermove", (e) => {
        if (pointerId === null || e.pointerId !== pointerId || !isOpen)
          return;
        if (Math.hypot(e.clientX - originX, e.clientY - originY) > MOVE_THRESHOLD_PX2)
          moved = true;
        updateHighlightFromPointer(e.clientX, e.clientY);
        updateArrow(e.clientX, e.clientY);
      });
      starEl.addEventListener("pointerup", (e) => {
        if (pointerId === null || e.pointerId !== pointerId)
          return;
        releasePointer(starEl, pointerId);
        pointerId = null;
        if (!isOpen)
          return;
        const elapsedMs = Date.now() - downTime;
        const totalMovePx = Math.hypot(e.clientX - downX, e.clientY - downY);
        const wasQuickTapOrNoDrag = !moved || elapsedMs <= TAP_MAX_MS && totalMovePx <= TAP_MAX_MOVE_PX;
        if (wasQuickTapOrNoDrag) {
          enterPersistentMode();
          return;
        }
        if (Math.hypot(e.clientX - originX, e.clientY - originY) < DEAD_ZONE_PX) {
          goBack();
          return;
        }
        commitIndex(highlightIndex);
      });
      starEl.addEventListener("pointercancel", (e) => {
        if (pointerId === null || e.pointerId !== pointerId)
          return;
        releasePointer(starEl, pointerId);
        pointerId = null;
        if (!isOpen)
          return;
        enterPersistentMode();
      });
    }
    starEls.forEach(({ el: el3, kind }) => attachStar(el3, kind));
    menuEl.addEventListener("pointermove", (e) => {
      if (!isOpen || !persistent)
        return;
      const target = e.target;
      if (!(target instanceof HTMLElement))
        return;
      const nodeEl = target.closest(".radial-menu__node");
      if (!nodeEl)
        return;
      const index = Number(nodeEl.dataset.index);
      if (!Number.isNaN(index))
        setHighlight(index);
    });
    menuEl.addEventListener("click", (e) => {
      if (!isOpen)
        return;
      if (Date.now() < suppressClickUntil) {
        suppressClickUntil = 0;
        return;
      }
      const target = e.target;
      if (!(target instanceof HTMLElement))
        return;
      if (target.closest(".radial-menu__scrim")) {
        closeMenu();
        return;
      }
      if (target.closest(".radial-menu__back")) {
        goBack();
        return;
      }
      const nodeEl = target.closest(".radial-menu__node");
      if (!nodeEl)
        return;
      const index = Number(nodeEl.dataset.index);
      if (!Number.isNaN(index))
        commitIndex(index);
    });
    document.addEventListener("keydown", (e) => {
      if (isOpen && e.key === "Escape")
        closeMenu();
    });
  }

  // src/lib/onehand/config.ts
  function getOnehandConfig(data) {
    const withOnehand = data;
    return withOnehand.onehand ?? null;
  }

  // src/lib/onehand/edge-menu.ts
  var SECTOR_KEYS = ["top", "top_middle", "center", "down_middle", "down"];
  var SWIPE_THRESHOLD_PX = 24;
  var ARC_RADIUS_PX2 = 130;
  var ARC_SPREAD_DEG = 45;
  var DEAD_ZONE_PX2 = 20;
  var TAP_MAX_MS2 = 450;
  var TAP_MAX_MOVE_PX2 = 16;
  var GHOST_CLICK_MS2 = 700;
  var FLASH_MS2 = 220;
  var ARROW_HEAD_LENGTH_PX2 = 10;
  var ARROW_HEAD_ANGLE_RAD2 = Math.PI / 7;
  var SVG_NS2 = "http://www.w3.org/2000/svg";
  function toArcItem(key, sector) {
    return { key, label: sector.label, action: sector.action };
  }
  function arcItemsFor(sectors, key) {
    const self = sectors[key];
    if (!self)
      return [];
    const idx = SECTOR_KEYS.indexOf(key);
    const prevKey = SECTOR_KEYS[idx - 1];
    const nextKey = SECTOR_KEYS[idx + 1];
    const prev = prevKey ? sectors[prevKey] : void 0;
    const next = nextKey ? sectors[nextKey] : void 0;
    const items = [];
    if (prev && prevKey)
      items.push(toArcItem(prevKey, prev));
    items.push(toArcItem(key, self));
    if (next && nextKey)
      items.push(toArcItem(nextKey, next));
    return items;
  }
  function offsetsFor(count) {
    if (count === 3)
      return [-ARC_SPREAD_DEG, 0, ARC_SPREAD_DEG];
    if (count === 2)
      return [-ARC_SPREAD_DEG, ARC_SPREAD_DEG];
    return [0];
  }
  function capturePointer2(el3, pointerId) {
    try {
      el3.setPointerCapture(pointerId);
    } catch {
    }
  }
  function releasePointer2(el3, pointerId) {
    try {
      if (el3.hasPointerCapture(pointerId))
        el3.releasePointerCapture(pointerId);
    } catch {
    }
  }
  function polar2(angle, radius) {
    return { tx: Math.cos(angle) * radius, ty: Math.sin(angle) * radius };
  }
  function angularDistance2(a, b) {
    return Math.abs(Math.atan2(Math.sin(a - b), Math.cos(a - b)));
  }
  function nearestIndexByAngle2(angle, angles) {
    let bestIndex = 0;
    let bestDelta = Infinity;
    for (let i = 0; i < angles.length; i++) {
      const delta = angularDistance2(angle, angles[i]);
      if (delta < bestDelta) {
        bestDelta = delta;
        bestIndex = i;
      }
    }
    return bestIndex;
  }
  function initEdgeMenu(data) {
    const config = getOnehandConfig(data);
    if (!config)
      return;
    const shellRoot = document.querySelector(".shell");
    if (!shellRoot)
      return;
    const shellEl = shellRoot;
    const handlesRoot = document.createElement("div");
    handlesRoot.className = "edge-menu-handles";
    shellEl.appendChild(handlesRoot);
    const menuEl = document.createElement("div");
    menuEl.className = "edge-menu";
    menuEl.hidden = true;
    menuEl.setAttribute("aria-hidden", "true");
    shellEl.appendChild(menuEl);
    let isOpen = false;
    let persistent = false;
    let suppressClickUntil = 0;
    let originX = 0;
    let originY = 0;
    let currentItems = [];
    let currentAngles = [];
    let nodeEls = [];
    let highlightIndex = -1;
    let arrowLineEl = null;
    let arrowHeadEl = null;
    function shellOffset() {
      const rect = shellEl.getBoundingClientRect();
      return { x: rect.left, y: rect.top };
    }
    function setHighlight(index) {
      if (index === highlightIndex)
        return;
      const prev = nodeEls[highlightIndex];
      if (prev)
        prev.classList.remove("is-highlighted");
      highlightIndex = index;
      const next = nodeEls[highlightIndex];
      if (next)
        next.classList.add("is-highlighted");
    }
    function enterPersistentMode() {
      persistent = true;
      suppressClickUntil = Date.now() + GHOST_CLICK_MS2;
    }
    function closeMenu() {
      isOpen = false;
      persistent = false;
      suppressClickUntil = 0;
      currentItems = [];
      currentAngles = [];
      nodeEls = [];
      highlightIndex = -1;
      arrowLineEl = null;
      arrowHeadEl = null;
      menuEl.classList.remove("is-open");
      menuEl.setAttribute("aria-hidden", "true");
      menuEl.hidden = true;
      menuEl.innerHTML = "";
    }
    function flashThenClose() {
      window.setTimeout(() => closeMenu(), FLASH_MS2);
    }
    function openArc(originEl, items, swipeAngle) {
      currentItems = items;
      const offsets = offsetsFor(items.length);
      currentAngles = offsets.map((deg) => swipeAngle + deg * Math.PI / 180);
      nodeEls = [];
      arrowLineEl = null;
      arrowHeadEl = null;
      menuEl.innerHTML = "";
      const rect = originEl.getBoundingClientRect();
      originX = rect.left + rect.width / 2;
      originY = rect.top + rect.height / 2;
      highlightIndex = 0;
      const scrim = document.createElement("div");
      scrim.className = "edge-menu__scrim";
      menuEl.appendChild(scrim);
      const offset = shellOffset();
      const center = document.createElement("div");
      center.className = "edge-menu__center";
      center.style.left = `${originX - offset.x}px`;
      center.style.top = `${originY - offset.y}px`;
      items.forEach((item, i) => {
        const { tx, ty } = polar2(currentAngles[i] ?? 0, ARC_RADIUS_PX2);
        const nodeEl = document.createElement("div");
        nodeEl.className = `edge-menu__node${i === highlightIndex ? " is-highlighted" : ""}`;
        nodeEl.dataset.index = String(i);
        nodeEl.style.setProperty("--tx", `${tx}px`);
        nodeEl.style.setProperty("--ty", `${ty}px`);
        const labelEl = document.createElement("span");
        labelEl.className = "edge-menu__node-label";
        labelEl.textContent = item.label;
        nodeEl.appendChild(labelEl);
        center.appendChild(nodeEl);
        nodeEls.push(nodeEl);
      });
      menuEl.appendChild(center);
      const arrowSvg = document.createElementNS(SVG_NS2, "svg");
      arrowSvg.setAttribute("class", "edge-menu__arrow");
      const line = document.createElementNS(SVG_NS2, "line");
      line.setAttribute("class", "edge-menu__arrow-line");
      const head = document.createElementNS(SVG_NS2, "polygon");
      head.setAttribute("class", "edge-menu__arrow-head");
      arrowSvg.appendChild(line);
      arrowSvg.appendChild(head);
      menuEl.appendChild(arrowSvg);
      arrowLineEl = line;
      arrowHeadEl = head;
      menuEl.hidden = false;
      menuEl.classList.add("is-open");
      menuEl.setAttribute("aria-hidden", "false");
      isOpen = true;
    }
    function updateArrow(clientX, clientY) {
      if (!arrowLineEl || !arrowHeadEl)
        return;
      const offset = shellOffset();
      const x1 = originX - offset.x;
      const y1 = originY - offset.y;
      const x2 = clientX - offset.x;
      const y2 = clientY - offset.y;
      arrowLineEl.setAttribute("x1", String(x1));
      arrowLineEl.setAttribute("y1", String(y1));
      arrowLineEl.setAttribute("x2", String(x2));
      arrowLineEl.setAttribute("y2", String(y2));
      const angle = Math.atan2(y2 - y1, x2 - x1);
      const hx1 = x2 - ARROW_HEAD_LENGTH_PX2 * Math.cos(angle - ARROW_HEAD_ANGLE_RAD2);
      const hy1 = y2 - ARROW_HEAD_LENGTH_PX2 * Math.sin(angle - ARROW_HEAD_ANGLE_RAD2);
      const hx2 = x2 - ARROW_HEAD_LENGTH_PX2 * Math.cos(angle + ARROW_HEAD_ANGLE_RAD2);
      const hy2 = y2 - ARROW_HEAD_LENGTH_PX2 * Math.sin(angle + ARROW_HEAD_ANGLE_RAD2);
      arrowHeadEl.setAttribute("points", `${x2},${y2} ${hx1},${hy1} ${hx2},${hy2}`);
    }
    function updateHighlightFromPointer(clientX, clientY) {
      const dx = clientX - originX;
      const dy = clientY - originY;
      if (Math.hypot(dx, dy) < DEAD_ZONE_PX2)
        return;
      setHighlight(nearestIndexByAngle2(Math.atan2(dy, dx), currentAngles));
    }
    function commitIndex(index) {
      if (!isOpen)
        return;
      const item = currentItems[index];
      if (!item) {
        closeMenu();
        return;
      }
      if (item.action === "back") {
        closeMenu();
        history.back();
        return;
      }
      flashThenClose();
    }
    function attachSector(sectorEl, handle, key) {
      let pointerId = null;
      let startX = 0;
      let startY = 0;
      let startTime = 0;
      let opened = false;
      sectorEl.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        closeMenu();
        pointerId = e.pointerId;
        startX = e.clientX;
        startY = e.clientY;
        startTime = Date.now();
        opened = false;
        capturePointer2(sectorEl, e.pointerId);
      });
      sectorEl.addEventListener("pointermove", (e) => {
        if (pointerId === null || e.pointerId !== pointerId)
          return;
        if (!opened) {
          const dx = e.clientX - startX;
          const inward = handle.edge === "left" ? dx : -dx;
          if (inward < SWIPE_THRESHOLD_PX)
            return;
          const items = arcItemsFor(handle.sectors, key);
          if (items.length === 0)
            return;
          opened = true;
          const swipeAngle = Math.atan2(e.clientY - startY, e.clientX - startX);
          openArc(sectorEl, items, swipeAngle);
          updateArrow(e.clientX, e.clientY);
          return;
        }
        if (!isOpen)
          return;
        updateHighlightFromPointer(e.clientX, e.clientY);
        updateArrow(e.clientX, e.clientY);
      });
      sectorEl.addEventListener("pointerup", (e) => {
        if (pointerId === null || e.pointerId !== pointerId)
          return;
        releasePointer2(sectorEl, pointerId);
        pointerId = null;
        if (!opened) {
          const elapsedMs = Date.now() - startTime;
          const totalMovePx = Math.hypot(e.clientX - startX, e.clientY - startY);
          if (elapsedMs > TAP_MAX_MS2 || totalMovePx > TAP_MAX_MOVE_PX2)
            return;
          const items = arcItemsFor(handle.sectors, key);
          if (items.length === 0)
            return;
          const inwardAngle = handle.edge === "left" ? 0 : Math.PI;
          openArc(sectorEl, items, inwardAngle);
          enterPersistentMode();
          return;
        }
        if (!isOpen)
          return;
        if (Math.hypot(e.clientX - originX, e.clientY - originY) < DEAD_ZONE_PX2) {
          closeMenu();
          return;
        }
        commitIndex(highlightIndex);
      });
      sectorEl.addEventListener("pointercancel", (e) => {
        if (pointerId === null || e.pointerId !== pointerId)
          return;
        releasePointer2(sectorEl, pointerId);
        pointerId = null;
        if (opened && isOpen)
          enterPersistentMode();
      });
    }
    function buildHandle(handle) {
      const handleEl = document.createElement("div");
      handleEl.className = `edge-menu__handle edge-menu__handle--${handle.edge}`;
      handlesRoot.appendChild(handleEl);
      SECTOR_KEYS.forEach((key) => {
        const sectorEl = document.createElement("div");
        sectorEl.className = "edge-menu__sector";
        sectorEl.dataset.sector = key;
        handleEl.appendChild(sectorEl);
        if (handle.sectors[key])
          attachSector(sectorEl, handle, key);
      });
    }
    config.handles.forEach((handle) => buildHandle(handle));
    menuEl.addEventListener("pointermove", (e) => {
      if (!isOpen || !persistent)
        return;
      const target = e.target;
      if (!(target instanceof HTMLElement))
        return;
      const nodeEl = target.closest(".edge-menu__node");
      if (!nodeEl)
        return;
      const index = Number(nodeEl.dataset.index);
      if (!Number.isNaN(index))
        setHighlight(index);
    });
    menuEl.addEventListener("click", (e) => {
      if (!isOpen)
        return;
      if (Date.now() < suppressClickUntil) {
        suppressClickUntil = 0;
        return;
      }
      const target = e.target;
      if (!(target instanceof HTMLElement))
        return;
      if (target.closest(".edge-menu__scrim")) {
        closeMenu();
        return;
      }
      const nodeEl = target.closest(".edge-menu__node");
      if (!nodeEl)
        return;
      const index = Number(nodeEl.dataset.index);
      if (!Number.isNaN(index))
        commitIndex(index);
    });
    document.addEventListener("keydown", (e) => {
      if (isOpen && e.key === "Escape")
        closeMenu();
    });
  }

  // src/lib/onehand/home-swipes.ts
  var SWIPE_THRESHOLD_PX2 = 60;
  var INTERACTIVE_SELECTOR = 'a, button, input, textarea, select, [role="button"], .tile, .star, .edge-menu__handle';
  function isInteractiveTarget(target) {
    return target instanceof Element && !!target.closest(INTERACTIVE_SELECTOR);
  }
  function initHomeSwipes() {
    if (!document.querySelector(".home-cube"))
      return;
    let pointerId = null;
    let startX = 0;
    let startY = 0;
    let active = false;
    function onPointerDown(e) {
      if (isInteractiveTarget(e.target))
        return;
      pointerId = e.pointerId;
      startX = e.clientX;
      startY = e.clientY;
      active = true;
    }
    function onPointerUp(e) {
      if (!active || pointerId === null || e.pointerId !== pointerId)
        return;
      active = false;
      pointerId = null;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      const absX = Math.abs(dx);
      const absY = Math.abs(dy);
      if (Math.max(absX, absY) < SWIPE_THRESHOLD_PX2)
        return;
      if (absX > absY) {
        if (dx > 0)
          history.forward();
        else
          history.back();
      } else if (dy < 0) {
        location.href = routeHref(["suite", "phone", "all"]);
      } else {
        location.href = routeHref(["suite"]);
      }
    }
    function onPointerCancel(e) {
      if (pointerId === null || e.pointerId !== pointerId)
        return;
      active = false;
      pointerId = null;
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("pointerup", onPointerUp);
    document.addEventListener("pointercancel", onPointerCancel);
  }

  // src/app/main.ts
  init_overlays();

  // src/app/launcher/fan-menu.ts
  var LONG_PRESS_MS2 = 380;
  var MOVE_THRESHOLD_PX3 = 10;
  var MENU_OFFSET_PX = 70;
  function iconSrc3(icon) {
    return `/cloud-mobile/public/icons/${icon}.svg`;
  }
  function buildItemButton(item, index) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "fan-menu__item";
    button.dataset.index = String(index);
    const iconWrap = document.createElement("span");
    iconWrap.className = "fan-menu__item-icon";
    const iconEl = document.createElement("img");
    iconEl.src = iconSrc3(item.icon);
    iconEl.alt = "";
    iconWrap.appendChild(iconEl);
    const labelEl = document.createElement("span");
    labelEl.className = "fan-menu__item-label";
    labelEl.textContent = item.label;
    button.appendChild(iconWrap);
    button.appendChild(labelEl);
    return button;
  }
  function appendFanMenuLayout(rootEl, items) {
    if (items.length <= 3) {
      const rowEl = document.createElement("div");
      rowEl.className = "fan-menu__row fan-menu__row--bottom";
      items.forEach((item, index) => rowEl.appendChild(buildItemButton(item, index)));
      rootEl.appendChild(rowEl);
      return;
    }
    const topRowEl = document.createElement("div");
    topRowEl.className = "fan-menu__row fan-menu__row--top";
    topRowEl.appendChild(buildItemButton(items[0], 0));
    const bottomRowEl = document.createElement("div");
    bottomRowEl.className = "fan-menu__row fan-menu__row--bottom";
    items.slice(1).forEach((item, index) => bottomRowEl.appendChild(buildItemButton(item, index + 1)));
    rootEl.appendChild(topRowEl);
    rootEl.appendChild(bottomRowEl);
  }
  function initFanMenu(data) {
    const bottomNavEl = document.getElementById("bottom-nav");
    const fanMenuRoot = document.getElementById("fan-menu");
    if (!bottomNavEl || !fanMenuRoot)
      return;
    const fanMenuEl = fanMenuRoot;
    const shellEl = fanMenuEl.closest(".shell");
    const scrimEl = document.getElementById("fan-menu-scrim");
    let menuOpen = false;
    let currentItems = [];
    let pressTimer = null;
    let longPressFired = false;
    let activeItem = null;
    let activeId = null;
    let activePointerId = null;
    let startX = 0;
    let startY = 0;
    function clearPressTimer() {
      if (pressTimer === null)
        return;
      window.clearTimeout(pressTimer);
      pressTimer = null;
    }
    function closeFanMenu() {
      menuOpen = false;
      currentItems = [];
      fanMenuEl.classList.remove("is-open");
      fanMenuEl.setAttribute("aria-hidden", "true");
      fanMenuEl.hidden = true;
      fanMenuEl.innerHTML = "";
      fanMenuEl.style.transform = "";
      if (scrimEl) {
        scrimEl.classList.remove("is-open");
        scrimEl.hidden = true;
      }
    }
    function fanItems(id) {
      const pages = data.sections[id]?.pages;
      if (pages) {
        return pages.flatMap((page) => {
          if (typeof page === "string" || page.hidden)
            return [];
          return [{
            id: page.id,
            label: page.label,
            icon: page.icon ?? data.sections[id].icon,
            target: page.target ?? `page:${id}/${page.id}`
          }];
        });
      }
      return data.longPress[id] ?? [];
    }
    function openFanMenu(itemEl, id) {
      const items = fanItems(id);
      if (items.length === 0)
        return;
      closeFanMenu();
      currentItems = items;
      fanMenuEl.innerHTML = "";
      appendFanMenuLayout(fanMenuEl, items);
      const rect = itemEl.getBoundingClientRect();
      const shellRect = shellEl?.getBoundingClientRect();
      fanMenuEl.style.left = `${rect.left + rect.width / 2 - (shellRect?.left ?? 0)}px`;
      fanMenuEl.style.top = `${rect.top - MENU_OFFSET_PX - (shellRect?.top ?? 0)}px`;
      fanMenuEl.style.transform = "translateX(-50%)";
      fanMenuEl.hidden = false;
      fanMenuEl.classList.add("is-open");
      fanMenuEl.setAttribute("aria-hidden", "false");
      if (scrimEl) {
        scrimEl.hidden = false;
        scrimEl.classList.add("is-open");
      }
      menuOpen = true;
    }
    function handleSelect(button) {
      const index = Number(button.dataset.index);
      const item = currentItems[index];
      closeFanMenu();
      if (!item)
        return;
      if (item.target === "action:check_updates") {
        Promise.resolve().then(() => (init_overlays(), overlays_exports)).then((mod) => mod.openUpdateOverlay());
        return;
      }
      const { href } = resolveTarget(item.target);
      if (href)
        location.href = href;
    }
    function onPointerDown(event) {
      const target = event.target;
      if (!(target instanceof Element))
        return;
      const itemEl = target.closest(".bottom-nav__item");
      if (!itemEl)
        return;
      const id = itemEl.dataset.longpress;
      if (!id || fanItems(id).length === 0)
        return;
      clearPressTimer();
      activeItem = itemEl;
      activeId = id;
      activePointerId = event.pointerId;
      startX = event.clientX;
      startY = event.clientY;
      longPressFired = false;
      pressTimer = window.setTimeout(() => {
        pressTimer = null;
        longPressFired = true;
        if (activeItem && activeId)
          openFanMenu(activeItem, activeId);
      }, LONG_PRESS_MS2);
    }
    function onPointerMove(event) {
      if (pressTimer === null || event.pointerId !== activePointerId)
        return;
      const dx = event.clientX - startX;
      const dy = event.clientY - startY;
      if (Math.hypot(dx, dy) > MOVE_THRESHOLD_PX3)
        clearPressTimer();
    }
    function onPointerEnd(event) {
      if (event.pointerId !== activePointerId)
        return;
      clearPressTimer();
      activePointerId = null;
    }
    function onBottomNavClick(event) {
      const target = event.target;
      if (!(target instanceof Element) || !target.closest(".bottom-nav__item"))
        return;
      if (!longPressFired)
        return;
      longPressFired = false;
      event.preventDefault();
      event.stopPropagation();
    }
    function onDocumentClick(event) {
      if (!menuOpen)
        return;
      const target = event.target;
      if (!(target instanceof Element))
        return;
      const itemBtn = target.closest(".fan-menu__item");
      if (itemBtn) {
        handleSelect(itemBtn);
        return;
      }
      closeFanMenu();
    }
    function onDocumentKeydown(event) {
      if (menuOpen && event.key === "Escape")
        closeFanMenu();
    }
    bottomNavEl.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerup", onPointerEnd);
    document.addEventListener("pointercancel", onPointerEnd);
    bottomNavEl.addEventListener("click", onBottomNavClick);
    document.addEventListener("click", onDocumentClick);
    document.addEventListener("keydown", onDocumentKeydown);
  }

  // src/app/launcher/stack-cards.ts
  function initStackCards() {
    document.addEventListener("click", (event) => {
      if (!(event.target instanceof Element))
        return;
      const header = event.target.closest(".stack-card__header");
      if (!header)
        return;
      const expanded = header.getAttribute("aria-expanded") === "true";
      header.setAttribute("aria-expanded", String(!expanded));
    });
  }

  // src/app/cloud/calendar-popup.ts
  function show2(el3) {
    el3.hidden = false;
    el3.classList.add("is-open");
  }
  function hide2(el3) {
    el3.classList.remove("is-open");
    el3.hidden = true;
  }
  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className)
      node.className = className;
    if (text !== void 0)
      node.textContent = text;
    return node;
  }
  var DAY_HEADER_FMT = { weekday: "short", day: "numeric", month: "short" };
  var MONTH_TITLE_FMT = { month: "long", year: "numeric" };
  function buildAgendaView() {
    const scroll = el("div", "calendar-popup__agenda-scroll");
    const body = el("div", "calendar-popup__agenda-body");
    const day = /* @__PURE__ */ new Date();
    for (let i = 0; i < 7; i++) {
      const row = el("div", `calendar-popup__agenda-row${i === 0 ? " is-today" : ""}`);
      const headerText = new Intl.DateTimeFormat(void 0, DAY_HEADER_FMT).format(day);
      row.appendChild(el("p", "calendar-popup__agenda-date", i === 0 ? `Today \xB7 ${headerText}` : headerText));
      row.appendChild(el("p", "calendar-popup__agenda-empty", "no events"));
      body.appendChild(row);
      day.setDate(day.getDate() + 1);
    }
    body.appendChild(el("p", "calendar-popup__footnote", "Same placeholder shape as the real app \u2014 no CalDAV backend wired up on either side yet."));
    scroll.appendChild(body);
    return scroll;
  }
  function buildCalendarView() {
    const col = el("div", "calendar-popup__month");
    const now = /* @__PURE__ */ new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const today = now.getDate();
    col.appendChild(el("p", "calendar-popup__month-title", new Intl.DateTimeFormat(void 0, MONTH_TITLE_FMT).format(now)));
    const weekHeader = el("div", "calendar-popup__week calendar-popup__week--header");
    const sample = new Date(2023, 0, 1);
    for (let i = 0; i < 7; i++) {
      const d = new Date(sample);
      d.setDate(sample.getDate() + i);
      const initial = new Intl.DateTimeFormat(void 0, { weekday: "narrow" }).format(d);
      weekHeader.appendChild(el("span", "calendar-popup__day-cell calendar-popup__day-cell--header", initial));
    }
    col.appendChild(weekHeader);
    const firstOfMonth = new Date(year, month, 1);
    const leadingBlanks = firstOfMonth.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const totalCells = leadingBlanks + daysInMonth;
    const rows = Math.ceil(totalCells / 7);
    let dayNum = 1;
    for (let r = 0; r < rows; r++) {
      const week = el("div", "calendar-popup__week");
      for (let c = 0; c < 7; c++) {
        const cellIndex = r * 7 + c;
        if (cellIndex < leadingBlanks || dayNum > daysInMonth) {
          week.appendChild(el("span", "calendar-popup__day-cell"));
        } else {
          const isToday = dayNum === today;
          week.appendChild(el("span", `calendar-popup__day-cell${isToday ? " is-today" : ""}`, String(dayNum)));
          dayNum++;
        }
      }
      col.appendChild(week);
    }
    col.appendChild(el("p", "calendar-popup__footnote", "Event dots land with a real backend \u2014 the grid is the structure for now."));
    return col;
  }
  function formatStopwatch(ms) {
    const totalSec = Math.floor(ms / 1e3);
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    const tenths = Math.floor(ms % 1e3 / 100);
    return `${m}:${String(s).padStart(2, "0")}.${tenths}`;
  }
  function buildStopwatch() {
    const row = el("div", "calendar-popup__stopwatch");
    const timeEl = el("span", "calendar-popup__stopwatch-time", "0:00.0");
    const btn = el("button", "calendar-popup__stopwatch-btn", "\u25B6");
    btn.type = "button";
    btn.setAttribute("aria-label", "Start stopwatch");
    let running = false;
    let startedAt = 0;
    let accumulatedMs = 0;
    let tickId = null;
    const currentMs = () => running ? accumulatedMs + (Date.now() - startedAt) : accumulatedMs;
    const render = () => {
      timeEl.textContent = formatStopwatch(currentMs());
    };
    const tick = () => {
      render();
      tickId = window.setTimeout(tick, 100);
    };
    btn.addEventListener("click", () => {
      if (running) {
        accumulatedMs += Date.now() - startedAt;
        running = false;
        btn.textContent = "\u25B6";
        btn.classList.remove("is-running");
        if (tickId !== null) {
          window.clearTimeout(tickId);
          tickId = null;
        }
        render();
      } else {
        startedAt = Date.now();
        running = true;
        btn.textContent = "\u25A0";
        btn.classList.add("is-running");
        tick();
      }
    });
    let holdTimer = null;
    const reset = () => {
      running = false;
      accumulatedMs = 0;
      startedAt = 0;
      if (tickId !== null) {
        window.clearTimeout(tickId);
        tickId = null;
      }
      btn.textContent = "\u25B6";
      btn.classList.remove("is-running");
      render();
    };
    timeEl.addEventListener("pointerdown", () => {
      holdTimer = window.setTimeout(reset, 380);
    });
    ["pointerup", "pointerleave", "pointercancel"].forEach((type) => {
      timeEl.addEventListener(type, () => {
        if (holdTimer !== null) {
          window.clearTimeout(holdTimer);
          holdTimer = null;
        }
      });
    });
    row.appendChild(timeEl);
    row.appendChild(btn);
    return row;
  }
  function initCalendarPopup() {
    const root = document.getElementById("calendar-popup");
    const triggerBtn = document.getElementById("status-clock");
    if (!root || !triggerBtn)
      return;
    const scrim = el("div", "overlay-sheet__scrim");
    const panel = el("div", "overlay-sheet__panel calendar-popup__panel");
    const headerRow = el("div", "calendar-popup__header");
    const headerLeft = el("div", "calendar-popup__header-left");
    headerLeft.appendChild(el("p", "calendar-popup__label", "Calendar"));
    const todayFmt = { weekday: "long", day: "numeric", month: "short", year: "numeric" };
    headerLeft.appendChild(el("p", "calendar-popup__today", new Intl.DateTimeFormat(void 0, todayFmt).format(/* @__PURE__ */ new Date())));
    headerRow.appendChild(headerLeft);
    headerRow.appendChild(buildStopwatch());
    panel.appendChild(headerRow);
    const agendaView = buildAgendaView();
    const calendarView = buildCalendarView();
    calendarView.hidden = true;
    const tabAgenda = el("button", "calendar-popup__tab is-active", "Agenda");
    const tabCalendar = el("button", "calendar-popup__tab", "Calendar");
    tabAgenda.type = "button";
    tabCalendar.type = "button";
    const selectTab = (agenda) => {
      tabAgenda.classList.toggle("is-active", agenda);
      tabCalendar.classList.toggle("is-active", !agenda);
      agendaView.hidden = !agenda;
      calendarView.hidden = agenda;
    };
    tabAgenda.addEventListener("click", () => selectTab(true));
    tabCalendar.addEventListener("click", () => selectTab(false));
    const tabRow = el("div", "calendar-popup__tabs");
    tabRow.appendChild(tabAgenda);
    tabRow.appendChild(tabCalendar);
    panel.appendChild(tabRow);
    panel.appendChild(agendaView);
    panel.appendChild(calendarView);
    root.appendChild(scrim);
    root.appendChild(panel);
    const open = () => show2(root);
    const close = () => hide2(root);
    triggerBtn.addEventListener("click", open);
    scrim.addEventListener("click", close);
    document.addEventListener("keydown", (event) => {
      if (root.classList.contains("is-open") && event.key === "Escape")
        close();
    });
  }

  // src/app/cloud/calendar-month-card.ts
  function el2(tag, className, text) {
    const node = document.createElement(tag);
    if (className)
      node.className = className;
    if (text !== void 0)
      node.textContent = text;
    return node;
  }
  var MONTH_TITLE_FMT2 = { month: "long", year: "numeric" };
  function renderMonth(container, cursor, onShift) {
    container.innerHTML = "";
    const today = /* @__PURE__ */ new Date();
    const isCurrentMonth = cursor.getFullYear() === today.getFullYear() && cursor.getMonth() === today.getMonth();
    const header = el2("div", "calendar-card__header");
    const prevBtn = el2("button", "calendar-card__nav", "\u2039");
    prevBtn.type = "button";
    prevBtn.setAttribute("aria-label", "Previous month");
    const title = el2("p", "calendar-card__title", new Intl.DateTimeFormat(void 0, MONTH_TITLE_FMT2).format(cursor));
    const nextBtn = el2("button", "calendar-card__nav", "\u203A");
    nextBtn.type = "button";
    nextBtn.setAttribute("aria-label", "Next month");
    prevBtn.addEventListener("click", () => onShift(-1));
    nextBtn.addEventListener("click", () => onShift(1));
    header.appendChild(prevBtn);
    header.appendChild(title);
    header.appendChild(nextBtn);
    container.appendChild(header);
    const weekHeader = el2("div", "calendar-card__week calendar-card__week--header");
    const sample = new Date(2023, 0, 1);
    for (let i = 0; i < 7; i++) {
      const d = new Date(sample);
      d.setDate(sample.getDate() + i);
      weekHeader.appendChild(el2("span", "calendar-card__day-cell calendar-card__day-cell--header", new Intl.DateTimeFormat(void 0, { weekday: "narrow" }).format(d)));
    }
    container.appendChild(weekHeader);
    const year = cursor.getFullYear();
    const month = cursor.getMonth();
    const firstOfMonth = new Date(year, month, 1);
    const leadingBlanks = firstOfMonth.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const totalCells = leadingBlanks + daysInMonth;
    const rows = Math.ceil(totalCells / 7);
    let dayNum = 1;
    for (let r = 0; r < rows; r++) {
      const week = el2("div", "calendar-card__week");
      for (let c = 0; c < 7; c++) {
        const cellIndex = r * 7 + c;
        if (cellIndex < leadingBlanks || dayNum > daysInMonth) {
          week.appendChild(el2("span", "calendar-card__day-cell"));
        } else {
          const isToday = isCurrentMonth && dayNum === today.getDate();
          week.appendChild(el2("span", `calendar-card__day-cell${isToday ? " is-today" : ""}`, String(dayNum)));
          dayNum++;
        }
      }
      container.appendChild(week);
    }
  }
  function initCalendarMonthCards() {
    const containers = document.querySelectorAll("[data-calendar-card]");
    containers.forEach((container) => {
      let cursor = /* @__PURE__ */ new Date();
      const draw = () => {
        renderMonth(container, cursor, (delta) => {
          cursor = new Date(cursor.getFullYear(), cursor.getMonth() + delta, 1);
          draw();
        });
      };
      draw();
    });
  }

  // src/app/search/search-sheet.ts
  function iconSrc4(icon) {
    return `/cloud-mobile/public/icons/${icon}.svg`;
  }
  function collectCloudApps(data) {
    const appsPage = data.sections.cloud?.pages?.find(
      (page) => typeof page !== "string" && page.id === "apps"
    );
    const tileGroups = typeof appsPage === "object" && appsPage.groups || [];
    return tileGroups.flatMap((group) => group.tiles.map((tile) => ({
      label: tile.label,
      icon: tile.icon,
      href: resolveTarget(tile.target).href
    })));
  }
  function collectPhoneApps() {
    return getMockApps().apps.map((app) => ({
      label: app.name,
      icon: app.icon,
      href: null
      // Phone-app rows are always inert — no real device API to open them.
    }));
  }
  function collectConfigs(data) {
    const pages = data.sections.config?.pages ?? [];
    return pages.flatMap((page) => {
      if (typeof page === "string")
        return [];
      const href = page.target ? resolveTarget(page.target).href : routeHref(["config", page.id]);
      return [{ label: page.label, icon: "settings", href }];
    });
  }
  function matches(row, query) {
    return row.label.toLowerCase().includes(query);
  }
  function buildRow(row) {
    const el3 = row.href ? document.createElement("a") : document.createElement("div");
    el3.className = "search-sheet__row";
    if (row.href && el3 instanceof HTMLAnchorElement) {
      el3.href = row.href;
    } else {
      el3.classList.add("search-sheet__row--inert");
      el3.setAttribute("aria-disabled", "true");
    }
    const icon = document.createElement("img");
    icon.className = "search-sheet__row-icon";
    icon.src = iconSrc4(row.icon);
    icon.alt = "";
    el3.appendChild(icon);
    const label = document.createElement("span");
    label.className = "search-sheet__row-label";
    label.textContent = row.label;
    el3.appendChild(label);
    return el3;
  }
  function initSearchSheet(data) {
    const trigger = document.querySelector(".search-pill");
    if (!trigger)
      return;
    const groupSources = [
      { title: "Cloud apps", rows: collectCloudApps(data) },
      { title: "Phone apps", rows: collectPhoneApps() },
      { title: "Configs", rows: collectConfigs(data) }
    ];
    const activeScopes = new Set(groupSources.map((source) => source.title));
    const root = document.createElement("div");
    root.className = "search-sheet";
    root.id = "search-sheet";
    root.hidden = true;
    const scrim = document.createElement("div");
    scrim.className = "search-sheet__scrim";
    root.appendChild(scrim);
    const panel = document.createElement("div");
    panel.className = "search-sheet__panel";
    root.appendChild(panel);
    const input = document.createElement("input");
    input.type = "text";
    input.className = "search-sheet__input";
    input.placeholder = "Search apps & content";
    input.autocomplete = "off";
    panel.appendChild(input);
    const chips = document.createElement("div");
    chips.className = "search-sheet__chips";
    const chipEls = groupSources.map((source) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "search-sheet__chip";
      chip.textContent = source.title;
      chip.addEventListener("click", () => toggleScope(source.title));
      chips.appendChild(chip);
      return { title: source.title, el: chip };
    });
    panel.appendChild(chips);
    function renderChips() {
      for (const chip of chipEls) {
        chip.el.classList.toggle("is-active", activeScopes.has(chip.title));
      }
    }
    function toggleScope(title) {
      if (activeScopes.has(title)) {
        if (activeScopes.size === 1)
          return;
        activeScopes.delete(title);
      } else {
        activeScopes.add(title);
      }
      renderChips();
      render(input.value);
    }
    renderChips();
    const results = document.createElement("div");
    results.className = "search-sheet__results";
    panel.appendChild(results);
    const shellEl = trigger.closest(".shell");
    (shellEl ?? document.body).appendChild(root);
    function firstResultHref(groups) {
      for (const group of groups) {
        for (const row of group.rows) {
          if (row.href)
            return row.href;
        }
      }
      return null;
    }
    function render(query) {
      results.innerHTML = "";
      const q = query.trim().toLowerCase();
      if (!q)
        return;
      const groups = groupSources.filter((source) => activeScopes.has(source.title)).map((source) => ({ title: source.title, rows: source.rows.filter((row) => matches(row, q)) })).filter((group) => group.rows.length > 0);
      if (groups.length === 0) {
        const empty = document.createElement("p");
        empty.className = "search-sheet__empty";
        empty.textContent = "No results";
        results.appendChild(empty);
        return;
      }
      for (const group of groups) {
        const groupEl = document.createElement("div");
        groupEl.className = "search-sheet__group";
        const titleEl = document.createElement("p");
        titleEl.className = "search-sheet__group-title";
        titleEl.textContent = group.title;
        groupEl.appendChild(titleEl);
        for (const row of group.rows)
          groupEl.appendChild(buildRow(row));
        results.appendChild(groupEl);
      }
    }
    function open() {
      root.hidden = false;
      root.classList.add("is-open");
      input.value = "";
      render("");
      requestAnimationFrame(() => input.focus());
    }
    function close() {
      root.classList.remove("is-open");
      root.hidden = true;
    }
    trigger.addEventListener("click", open);
    scrim.addEventListener("click", close);
    input.addEventListener("input", () => render(input.value));
    input.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key !== "Enter")
        return;
      const q = input.value.trim().toLowerCase();
      if (!q)
        return;
      const groups = groupSources.filter((source) => activeScopes.has(source.title)).map((source) => ({ title: source.title, rows: source.rows.filter((row) => matches(row, q)) })).filter((group) => group.rows.length > 0);
      const href = firstResultHref(groups);
      if (href)
        location.href = href;
    });
    document.addEventListener("keydown", (event) => {
      if (root.classList.contains("is-open") && event.key === "Escape")
        close();
    });
  }

  // src/app/ui/galaxy-backdrop.ts
  var STAR_COUNT = 220;
  var COMET_COUNT = 3;
  var CYCLE_MS = 18e3;
  var TAIL_SEGMENTS = 12;
  function makeStars() {
    const stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random(),
        y: Math.random(),
        radius: 0.6 + Math.random() * 1.4,
        phase: Math.random() * Math.PI * 2,
        speed: 1 + Math.random() * 2
      });
    }
    return stars;
  }
  function makeComets() {
    const comets = [];
    for (let i = 0; i < COMET_COUNT; i++) {
      comets.push({
        phase: i / COMET_COUNT,
        y0: Math.random(),
        length: 0.35 + Math.random() * 0.25
      });
    }
    return comets;
  }
  function drawFrame(ctx, width, height, stars, comets, t) {
    ctx.clearRect(0, 0, width, height);
    for (const star of stars) {
      const alpha = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * Math.PI * 2 * star.speed + star.phase));
      ctx.beginPath();
      ctx.arc(star.x * width, star.y * height, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha.toFixed(3)})`;
      ctx.fill();
    }
    for (const comet of comets) {
      const local = (t - comet.phase + 1) % 1;
      const headX = local * (width + height) - height;
      const headY = comet.y0 * height + local * height * 0.6;
      for (let seg = 0; seg < TAIL_SEGMENTS; seg++) {
        const segT = seg / TAIL_SEGMENTS;
        const segX = headX - segT * comet.length * width;
        const segY = headY - segT * comet.length * height * 0.6;
        if (segX < -20 || segX > width + 20 || segY < -20 || segY > height + 20)
          continue;
        const alpha = (1 - segT) * 0.8;
        ctx.beginPath();
        ctx.arc(segX, segY, 1.6 * (1 - segT * 0.6), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(233, 216, 253, ${alpha.toFixed(3)})`;
        ctx.fill();
      }
    }
  }
  function initGalaxyBackdrop() {
    const host = document.querySelector(".galaxy-backdrop");
    if (!host)
      return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = document.createElement("canvas");
    canvas.className = "galaxy-backdrop__canvas";
    host.insertBefore(canvas, host.firstChild);
    const ctx = canvas.getContext("2d");
    if (!ctx)
      return;
    const stars = makeStars();
    const comets = makeComets();
    let width = 0;
    let height = 0;
    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const rect = host.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);
    if (reduceMotion) {
      drawFrame(ctx, width, height, stars, comets, 0);
      return;
    }
    let rafId = 0;
    function frame(now) {
      const t = now % CYCLE_MS / CYCLE_MS;
      drawFrame(ctx, width, height, stars, comets, t);
      rafId = window.requestAnimationFrame(frame);
    }
    function start() {
      if (rafId)
        return;
      rafId = window.requestAnimationFrame(frame);
    }
    function stop() {
      if (!rafId)
        return;
      window.cancelAnimationFrame(rafId);
      rafId = 0;
    }
    document.addEventListener("visibilitychange", () => {
      if (document.hidden)
        stop();
      else
        start();
    });
    start();
  }

  // src/app/main.ts
  var SELF_SCRIPT_URL = document.currentScript?.src ?? "";
  function initStatusClock() {
    const el3 = document.getElementById("status-clock");
    if (!el3)
      return;
    const pad = (n) => String(n).padStart(2, "0");
    const tick = () => {
      const now = /* @__PURE__ */ new Date();
      const weekday = now.toLocaleDateString("en-US", { weekday: "short" });
      el3.textContent = `${pad(now.getDate())}-${pad(now.getMonth() + 1)}-${now.getFullYear()} ${pad(now.getHours())}:${pad(now.getMinutes())} ${weekday}`;
    };
    tick();
    window.setInterval(tick, 15e3);
  }
  function runInit(name, init) {
    try {
      init();
    } catch (error) {
      console.error(`[cloud-mobile] init failed: ${name}`, error);
    }
  }
  function initApp() {
    const data = getData();
    runInit("drawer", () => initDrawer(data));
    setOnCheckUpdates(openUpdateOverlay);
    runInit("stars", () => initStars(data));
    runInit("edge-menu", () => initEdgeMenu(data));
    runInit("home-swipes", () => initHomeSwipes());
    runInit("overlays", () => initOverlays(data));
    runInit("fan-menu", () => initFanMenu(data));
    runInit("stack-cards", () => initStackCards());
    runInit("status-clock", () => initStatusClock());
    runInit("calendar-popup", () => initCalendarPopup());
    runInit("calendar-month-cards", () => initCalendarMonthCards());
    runInit("search-sheet", () => initSearchSheet(data));
    runInit("galaxy-backdrop", () => initGalaxyBackdrop());
  }
  document.addEventListener("DOMContentLoaded", () => {
    initApp();
    if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
      requestAnimationFrame(() => {
        const swUrl = SELF_SCRIPT_URL ? new URL("script-service-worker.js", SELF_SCRIPT_URL).href : "./script-service-worker.js";
        navigator.serviceWorker.register(swUrl).catch(() => void 0);
      });
    }
  });
})();
