// Sidebar toggle
function initSidebar(): void {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  const toggle = document.getElementById("sidebar-toggle");

  if (!sidebar || !overlay || !toggle) return;

  function open() {
    sidebar!.classList.add("is-open");
    overlay!.classList.add("is-visible");
  }

  function close() {
    sidebar!.classList.remove("is-open");
    overlay!.classList.remove("is-visible");
  }

  toggle.addEventListener("click", () => {
    sidebar.classList.contains("is-open") ? close() : open();
  });

  overlay.addEventListener("click", close);

  // Close on nav link click
  sidebar.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", close);
  });
}

// Highlight active nav link based on current page
function setActiveNav(): void {
  const page = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll<HTMLAnchorElement>(".sidebar__link").forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (href === page || (page === "" && href === "index.html")) {
      link.setAttribute("aria-current", "page");
      link.classList.add("sidebar__link--active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initSidebar();
  setActiveNav();
});
