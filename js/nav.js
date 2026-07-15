function renderHeader(active, base) {
  base = base || "";
  const links = [
    ["index.html", "Home"],
    ["pages/groups.html", "Groups"],
    ["pages/matches.html", "Matches"],
    ["pages/nations.html", "Nations"],
    ["pages/history.html", "History"],
    ["pages/images.html", "Images"],
  ];
  const nav = links
    .map(([href, label]) => {
      const cls = active === label ? "active" : "";
      return `<a href="${base}${href}" class="${cls}">${label}</a>`;
    })
    .join("");
  document.write(`
    <header class="site-header">
      <div class="header-inner">
        <a href="${base}index.html" class="brand">FIFA <span>World Cup 2026</span> Archive</a>
        <nav class="main-nav">${nav}</nav>
      </div>
    </header>
  `);
}

function renderFooter() {
  document.write(`
    <footer class="site-footer">
      Built as a community archive of the 2026 FIFA World Cup — 48 nations, 12 groups, one history.
    </footer>
  `);
}
