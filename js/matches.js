let allMatches = [];
let allStats = [];

Promise.all([
  fetch("../data/matches.json").then((r) => r.json()),
  fetch("../data/matchStats.json")
    .then((r) => (r.ok ? r.json() : []))
    .catch(() => []),
])
  .then(([matches, stats]) => {
    allMatches = matches;
    allStats = stats;
    populateStageFilter(matches);
    renderMatches(matches);
  })
  .catch((err) => {
    document.getElementById("matches-container").innerHTML =
      `<p style="color:var(--red)">Could not load match data: ${err}</p>`;
  });

function populateStageFilter(matches) {
  const stages = [...new Set(matches.map((m) => m.stage))];
  const select = document.getElementById("stage-filter");
  stages.forEach((s) => {
    const opt = document.createElement("option");
    opt.value = s;
    opt.textContent = s;
    select.appendChild(opt);
  });
  select.addEventListener("change", applyFilters);
  document.getElementById("team-search").addEventListener("input", applyFilters);
}

function applyFilters() {
  const stage = document.getElementById("stage-filter").value;
  const term = document.getElementById("team-search").value.trim().toLowerCase();
  const filtered = allMatches.filter((m) => {
    const stageOk = !stage || m.stage === stage;
    const teamOk =
      !term ||
      m.home.toLowerCase().includes(term) ||
      m.away.toLowerCase().includes(term);
    return stageOk && teamOk;
  });
  renderMatches(filtered);
}

function findStats(m) {
  return allStats.find(
    (s) => s.stage === m.stage && s.date === m.date && s.home === m.home && s.away === m.away
  );
}

const STAT_LABELS = {
  possession: "Possession %",
  totalShots: "Total Shots",
  shotsOnTarget: "Shots on Target",
  corners: "Corners",
  fouls: "Fouls",
  offsides: "Offsides",
  yellowCards: "Yellow Cards",
  redCards: "Red Cards",
  passes: "Passes",
  passAccuracy: "Pass Accuracy %",
};

function statBar(key, home, away) {
  const total = home + away || 1;
  const homePct = (home / total) * 100;
  const awayPct = (away / total) * 100;
  return `
    <div class="stat-compare">
      <div class="stat-name">${STAT_LABELS[key] || key}</div>
      <div class="labels"><span>${home}</span><span>${away}</span></div>
      <div class="bar-track">
        <div class="bar-home" style="width:${homePct}%"></div>
        <div class="bar-away" style="width:${awayPct}%"></div>
      </div>
    </div>`;
}

function renderMatches(matches) {
  const container = document.getElementById("matches-container");
  if (!matches.length) {
    container.innerHTML = `<p style="color:var(--text-dim)">No matches found.</p>`;
    return;
  }
  container.innerHTML = matches
    .map((m, i) => {
      const played = m.homeScore !== null && m.homeScore !== undefined;
      const score = played ? `${m.homeScore} : ${m.awayScore}` : "vs";
      const stats = findStats(m);
      const statsHtml = stats
        ? Object.entries(stats.stats)
            .map(([key, val]) => statBar(key, val.home, val.away))
            .join("")
        : `<p class="no-stats-note">Detailed stats not yet available for this match.</p>`;

      return `
      <div class="match-card" data-idx="${i}" onclick="togglePanel(this)">
        <div class="match-card-top">
          <div>
            <div class="match-meta">${m.stage}</div>
            <div class="match-teams">${flagFor(m.home)} ${m.home} ${score} ${m.away} ${flagFor(m.away)}</div>
            <div class="match-meta">${m.venue || ""}${m.city ? ", " + m.city : ""}</div>
          </div>
          <div class="match-meta">${m.date || ""}</div>
        </div>
        <div class="match-stats-panel">${statsHtml}</div>
      </div>`;
    })
    .join("");
}

function togglePanel(card) {
  const panel = card.querySelector(".match-stats-panel");
  panel.classList.toggle("open");
}
