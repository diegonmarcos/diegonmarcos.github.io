// Highlight active nav link based on current page
function setActiveNav(): void {
  const page = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll<HTMLAnchorElement>(".nav-link").forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (href === page || (page === "" && href === "index.html")) {
      link.setAttribute("aria-current", "page");
      link.classList.add("nav-link--active");
    }
  });
}

document.addEventListener("DOMContentLoaded", setActiveNav);
