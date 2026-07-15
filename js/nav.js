const NAV_LINKS = [
  ["index.html", "Home", "🏠"],
  ["pages/groups.html", "Groups", "🗂️"],
  ["pages/matches.html", "Matches", "⚽"],
  ["pages/nations.html", "Nations", "🏳️"],
  ["pages/history.html", "History", "📜"],
  ["pages/images.html", "Images", "📸"],
];

function renderHeader(active, base) {
  base = base || "";
  const nav = NAV_LINKS.map(([href, label, icon]) => {
    const cls = active === label ? "active" : "";
    return `<a href="${base}${href}" class="${cls}"><span class="nav-icon">${icon}</span><span class="nav-label">${label}</span></a>`;
  }).join("");

  document.write(`
    <div class="app-shell">
      <aside class="sidebar">
        <a href="${base}index.html" class="brand">
          <span class="brand-icon">🏆</span>
          <span class="brand-text">WC<span>26</span></span>
        </a>
        <nav class="sidebar-nav">${nav}</nav>
        <div class="sidebar-foot">Archive · Est. 2026</div>
      </aside>
      <div class="app-content">
        <header class="topbar">
          <div class="topbar-title">${active}</div>
          <div class="topbar-actions">
            <input class="topbar-search" type="text" placeholder="Search team, match, or year…" onkeydown="if(event.key==='Enter'){window.location.href='${base}pages/nations.html'}" />
            <span class="live-pill"><span class="live-dot"></span>Tournament Live</span>
          </div>
        </header>
  `);
}

function renderFooter() {
  document.write(`
        <footer class="site-footer">
          Built as a community archive of the 2026 FIFA World Cup — 48 nations, 12 groups, one history.
        </footer>
      </div>
    </div>
  `);
}
