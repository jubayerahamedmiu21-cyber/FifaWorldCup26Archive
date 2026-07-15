let allMatches = [];

fetch("../data/matches.json")
  .then((r) => r.json())
  .then((data) => {
    allMatches = data;
    populateStageFilter(data);
    renderMatches(data);
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

function renderMatches(matches) {
  const container = document.getElementById("matches-container");
  if (!matches.length) {
    container.innerHTML = `<p style="color:var(--text-dim)">No matches found.</p>`;
    return;
  }
  container.innerHTML = matches
    .map((m) => {
      const played = m.homeScore !== null && m.homeScore !== undefined;
      const score = played ? `${m.homeScore} : ${m.awayScore}` : "vs";
      return `
      <div class="match-card">
        <div>
          <div class="match-meta">${m.stage}</div>
          <div class="match-teams">${m.home} ${score} ${m.away}</div>
          <div class="match-meta">${m.venue || ""}${m.city ? ", " + m.city : ""}</div>
        </div>
        <div class="match-meta">${m.date || ""}</div>
      </div>`;
    })
    .join("");
}
