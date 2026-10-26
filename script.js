const topics = [{
  id: "http",
  title: "HTTP Fundamentals",
  category: "Software Development",
  level: "Beginner",
  description: "Learn requests and responses, HTTPS, methods, status codes, APIs, C# HttpClient, and how HTTP fits into networking.",
  icon: "↔"
}];

const app = document.querySelector("#app");
const search = document.querySelector("#search");
const themeButton = document.querySelector("#theme");

function topicCard(topic) {
  return `<article class="card" tabindex="0" role="link" data-id="${topic.id}" aria-label="Open ${topic.title}">
    <span class="pill">${topic.level}</span>
    <h3><span style="color:var(--accent)">${topic.icon}</span> ${topic.title}</h3>
    <p>${topic.description}</p>
    <small style="color:var(--muted)">${topic.category} · Six lessons · Interactive quiz</small>
    <span class="arrow">Open lesson →</span>
  </article>`;
}

function render() {
  const query = search.value.trim().toLowerCase();
  const visible = topics.filter(topic =>
    !query || `${topic.title} ${topic.category} ${topic.description} ${topic.level}`.toLowerCase().includes(query)
  );
  const route = location.hash.slice(1);
  if (route === "library") {
    app.innerHTML = `<div class="eyebrow">Knowledge library</div><h1>All Training Topics</h1>
      <p style="color:var(--muted)">${visible.length} topic${visible.length === 1 ? "" : "s"} available</p>
      ${visible.length ? `<div class="grid">${visible.map(topicCard).join("")}</div>` : `<div class="empty">No matching topics. Try another search.</div>`}`;
  } else {
    app.innerHTML = `<section class="hero">
      <div class="eyebrow">Your learning platform</div>
      <h1>Learn. Build. Grow.</h1>
      <p>A focused engineering knowledge library. Start with HTTP fundamentals, a practical foundation for web applications, APIs, dashboards, and production-data systems.</p>
      <button id="explore" type="button">Explore HTTP Fundamentals →</button>
    </section>
    <div class="stats">
      <div class="stat"><strong>1</strong><span>Training topic</span></div>
      <div class="stat"><strong>6</strong><span>Interactive lessons</span></div>
      <div class="stat"><strong>Free</strong><span>Static site · GitHub Pages ready</span></div>
    </div>
    <h2>Available Training</h2>
    ${visible.length ? `<div class="grid">${visible.map(topicCard).join("")}</div>` : `<div class="empty">No matching topics. Try another search.</div>`}`;
    document.querySelector("#explore")?.addEventListener("click", openHttp);
  }
  document.querySelectorAll("[data-id]").forEach(card => {
    card.addEventListener("click", openHttp);
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openHttp();
      }
    });
  });
  document.querySelectorAll(".sidebar .nav").forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === (route === "library" ? "#library" : "#home"));
  });
}

function openHttp() {
  window.location.href = "training/http/http.html";
}

search.addEventListener("input", render);
window.addEventListener("hashchange", () => { search.value = ""; render(); window.scrollTo(0, 0); });
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("encyclopedia-theme", document.body.classList.contains("light") ? "light" : "dark");
});
if (localStorage.getItem("encyclopedia-theme") === "light") document.body.classList.add("light");
render();
