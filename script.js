(() => {
  const root = document.documentElement;
  const btn = document.getElementById("themeToggle");
  const year = document.getElementById("year");
  const updated = document.getElementById("lastUpdated");

  // Footer meta
  year.textContent = String(new Date().getFullYear());
  const d = new Date(document.lastModified);
  updated.textContent = isNaN(d.getTime()) ? "—" : d.toISOString().slice(0, 10);

  // Theme
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") root.dataset.theme = saved;

  const toggle = () => {
    const next = (root.dataset.theme === "dark") ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("theme", next);
  };

  btn?.addEventListener("click", toggle);

  // Highlight current section in nav (simple)
  const links = Array.from(document.querySelectorAll(".nav a"));
  const sections = links
    .map(a => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const onScroll = () => {
    const y = window.scrollY + 110;
    let currentId = "";
    for (const s of sections) {
      if (s.offsetTop <= y) currentId = s.id;
    }
    for (const a of links) {
      const isActive = (a.getAttribute("href") === "#" + currentId);
      a.classList.toggle("is-active", isActive);
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
