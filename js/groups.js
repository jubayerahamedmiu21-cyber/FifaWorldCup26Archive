fetch("../data/groups.json")
  .then((r) => r.json())
  .then(renderGroups)
  .catch((err) => {
    document.getElementById("groups-container").innerHTML =
      `<p style="color:var(--red)">Could not load group data: ${err}</p>`;
  });

function renderGroups(groups) {
  const container = document.getElementById("groups-container");
  container.innerHTML = groups
    .map((g) => {
      const rows = g.teams
        .map(
          (t) => `
        <tr${t.advanced ? ' class="advanced-row"' : ""}>
          <td>${flagFor(t.name)} ${t.name}${t.advanced ? ' <span class="badge win">Advanced</span>' : ""}</td>
          <td>${t.played}</td>
          <td>${t.won}</td>
          <td>${t.drawn}</td>
          <td>${t.lost}</td>
          <td>${t.gf}</td>
          <td>${t.ga}</td>
          <td><strong>${t.points}</strong></td>
        </tr>`
        )
        .join("");

      const matches = (g.matches || [])
        .map(
          (m) => `
        <div class="match-card">
          <div>
            <div class="match-teams">${flagFor(m.home)} ${m.home} ${m.homeScore ?? "–"} : ${m.awayScore ?? "–"} ${m.away} ${flagFor(m.away)}</div>
            <div class="match-meta">${m.venue || ""}</div>
          </div>
          <div class="match-meta">${m.date || ""}</div>
        </div>`
        )
        .join("");

      return `
        <div class="group-block">
          <h3>Group ${g.letter}</h3>
          <table>
            <thead>
              <tr><th>Team</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GF</th><th>GA</th><th>Pts</th></tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
          <div style="margin-top:0.9rem;">${matches}</div>
        </div>`;
    })
    .join("");
}
