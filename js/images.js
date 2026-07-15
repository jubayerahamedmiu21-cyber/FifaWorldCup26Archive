const MOMENT_ICONS = {
  goal: { icon: "⚽", cls: "goal" },
  card: { icon: "🟥", cls: "card" },
  controversy: { icon: "📺", cls: "controversy" },
  moment: { icon: "🏆", cls: "moment" },
};

fetch("../data/moments.json")
  .then((r) => r.json())
  .then(renderMoments)
  .catch((err) => {
    document.getElementById("images-container").innerHTML =
      `<p style="color:var(--red)">Could not load moments: ${err}</p>`;
  });

function renderMoments(moments) {
  const container = document.getElementById("images-container");
  const sorted = [...moments].sort((a, b) => new Date(b.date) - new Date(a.date));
  container.innerHTML = sorted
    .map((m) => {
      const conf = MOMENT_ICONS[m.type] || MOMENT_ICONS.moment;
      return `
      <div class="gallery-card fade-in">
        <div class="gallery-visual ${conf.cls}">${conf.icon}</div>
        <div class="gallery-body">
          <span class="tag">${m.tag}</span>
          <h3>${m.title}</h3>
          <p>${m.description}</p>
          <p class="match-meta" style="margin-top:0.5rem;">${m.date || ""}</p>
        </div>
      </div>`;
    })
    .join("");
}
