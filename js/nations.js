let allNations = [];

fetch("../data/nations.json")
  .then((r) => r.json())
  .then((data) => {
    allNations = data;
    renderNations(data);
    document.getElementById("nation-search").addEventListener("input", (e) => {
      const term = e.target.value.trim().toLowerCase();
      renderNations(allNations.filter((n) => n.name.toLowerCase().includes(term)));
    });
  })
  .catch((err) => {
    document.getElementById("nations-container").innerHTML =
      `<p style="color:var(--red)">Could not load nation data: ${err}</p>`;
  });

function renderNations(nations) {
  const container = document.getElementById("nations-container");
  if (!nations.length) {
    container.innerHTML = `<p style="color:var(--text-dim)">No nations found.</p>`;
    return;
  }
  container.innerHTML = nations
    .map(
      (n) => `
    <div class="card">
      <h3>${flagFor(n.name)} ${n.name}</h3>
      <div class="stat-row"><span>Confederation</span><span>${n.confederation || "—"}</span></div>
      <div class="stat-row"><span>World Cup titles</span><span>${n.worldCupTitles ?? 0}</span></div>
      <div class="stat-row"><span>Best finish</span><span>${n.bestFinish || "—"}</span></div>
      <div class="stat-row"><span>Appearances</span><span>${n.appearances ?? "—"}</span></div>
      <div class="stat-row"><span>2026 result</span><span>${n["2026Result"] || "In progress"}</span></div>
      ${
        n.notablePlayers && n.notablePlayers.length
          ? `<p style="margin-top:0.6rem;color:var(--text-dim);font-size:0.85rem;">Notable players: ${n.notablePlayers.join(", ")}</p>`
          : ""
      }
    </div>`
    )
    .join("");
}
