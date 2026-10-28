// =====================================================
// PAGES — pindah halaman TANPA reload, jadi <audio>
// (yang ada di luar #app) tidak pernah berhenti.
// =====================================================

(function () {

  // ---------- gambar dari config ----------
  function applyImages() {
    document.querySelectorAll("[data-img]").forEach((img) => {
      const path = IMAGES[img.dataset.img];
      if (path) img.src = path;
    });
  }

  // gambar yang file-nya belum ada → kotak gelap, bukan ikon rusak
  document.addEventListener("error", (e) => {
    if (e.target.tagName === "IMG" && !e.target.closest(".player-song")) {
      e.target.classList.add("img-missing");
    }
  }, true);

  function img(src, alt) {
    return `<img src="${src}" alt="${alt}" loading="lazy" />`;
  }

  // ---------- render dari config ----------
  function renderExperience() {
    document.getElementById("exp-list").innerHTML = EXPERIENCE.map((e, i) => `
      <article class="exp-row ${i % 2 ? "reverse" : ""}">
        <div class="exp-img">${img(e.img, e.title)}</div>
        <div class="exp-text">
          <span class="exp-no">${String(i + 1).padStart(2, "0")}</span>
          <h2>${e.title}</h2>
          <p class="exp-tags">${e.tags}</p>
          <p class="exp-desc">${e.text}</p>
          <p class="exp-year">${e.year}</p>
        </div>
      </article>`).join("");
  }

  function renderSkills() {
    document.getElementById("skills-list").innerHTML = SKILLS.map((g, gi) => `
      <section class="skill-group">
        <div class="skill-group-head">
          <h2>${g.group} <small>${String(gi + 1).padStart(2, "0")} / ${String(SKILLS.length).padStart(2, "0")}</small></h2>
          <span>// ${g.tag}</span>
        </div>
        <div class="card-row">
          ${g.items.map((s, i) => `
            <div class="skill-card">
              <div class="skill-img">${img(s.img, s.name)}</div>
              <div class="skill-body">
                <h3>${s.name}</h3>
                <p>${s.desc}</p>
                <i>${String(i + 1).padStart(2, "0")}.</i>
              </div>
            </div>`).join("")}
        </div>
      </section>`).join("");
  }

  function renderProjects() {
    document.getElementById("projects-list").innerHTML = PROJECTS.map((p) => `
      <article class="project-card">
        <div class="project-img">${img(p.img, p.name)}</div>
        <div class="project-meta">
          <div>
            <h3>${p.name}</h3>
            <p>${p.stack}</p>
          </div>
          <a href="${p.link}" target="_blank" rel="noopener">VIEW →</a>
        </div>
      </article>`).join("");
  }

  // ---------- router (hash) ----------
  const pages = [...document.querySelectorAll(".page")];
  const links = [...document.querySelectorAll(".nav-link")];

  function route() {
    const id = (location.hash || "#home").slice(1);
    const target = pages.find((p) => p.dataset.page === id) || pages[0];

    pages.forEach((p) => p.classList.toggle("active", p === target));
    links.forEach((a) =>
      a.classList.toggle("active", a.getAttribute("href") === "#" + target.dataset.page)
    );
    window.scrollTo(0, 0);
  }

  // klik baris track di Home → buka halamannya
  const trackPages = ["projects", "skills", "experience"];
  document.querySelectorAll(".track-item").forEach((item, i) => {
    item.style.cursor = "pointer";
    item.addEventListener("click", (e) => {
      if (e.target.closest(".track-more")) return;
      location.hash = trackPages[i];
    });
  });

  window.addEventListener("hashchange", route);

  applyImages();
  renderExperience();
  renderSkills();
  renderProjects();
  route();

})();
