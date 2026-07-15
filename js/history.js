fetch("../data/history.json")
  .then((r) => r.json())
  .then((data) => {
    const sorted = [...data].sort((a, b) => b.year - a.year);
    renderHistory(sorted);
  })
  .catch((err) => {
    document.getElementById("history-container").innerHTML =
      `<p style="color:var(--red)">Could not load history data: ${err}</p>`;
  });

function renderHistory(editions) {
  const container = document.getElementById("history-container");
  container.innerHTML = editions
    .map(
      (e) => `
    <div class="timeline-item">
      <h3>${e.year} — ${e.host}</h3>
      <div class="meta">${e.teams} teams${e.notes ? " · " + e.notes : ""}</div>
      <div class="stat-row"><span>Winner</span><span>${e.winner || "TBD"}</span></div>
      <div class="stat-row"><span>Runner-up</span><span>${e.runnerUp || "—"}</span></div>
      <div class="stat-row"><span>Third place</span><span>${e.third || "—"}</span></div>
      <div class="stat-row"><span>Top scorer</span><span>${e.topScorer || "—"}</span></div>
    </div>`
    )
    .join("");
}
