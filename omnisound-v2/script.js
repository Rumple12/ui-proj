const icon = {
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h4v14H7zM14 5h4v14h-4z"/></svg>',
  previous: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h2v14H6zM9 12l10-7v14z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 5h2v14h-2zM5 5l10 7-10 7z"/></svg>',
  heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21S3.5 16.4 3.5 9.7A4.7 4.7 0 0 1 12 6.8a4.7 4.7 0 0 1 8.5 2.9C20.5 16.4 12 21 12 21z"/></svg>',
  heartOutline: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21S3.5 16.4 3.5 9.7A4.7 4.7 0 0 1 12 6.8a4.7 4.7 0 0 1 8.5 2.9C20.5 16.4 12 21 12 21z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  heartFilled: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21S3.5 16.4 3.5 9.7A4.7 4.7 0 0 1 12 6.8a4.7 4.7 0 0 1 8.5 2.9C20.5 16.4 12 21 12 21z"/></svg>',
  volume: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4zm12.5-.7a5 5 0 0 1 0 7.4M19 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  queue: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h11M4 12h11M4 18h7M18 15v6m-3-3h6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7"/></svg>'
};

const catalog = [
  { id: "weezer", title: "Weezer", creator: "Weezer", type: "Music", year: "1994", art: "a1", symbol: "W", saved: false, duration: "41 min", tracks: ["My Name Is Jonas", "No One Else", "The World Has Turned", "Buddy Holly", "Undone - The Sweater Song", "Say It Ain't So"] },
  { id: "midnight", title: "Midnight Studies", creator: "Neon Campus", type: "Music", year: "2026", art: "a2", symbol: "M", saved: true, duration: "38 min", tracks: ["Library Lights", "Half Past Two", "Margin Notes", "Last Bus Home"] },
  { id: "static", title: "Static Bloom", creator: "Paper Planets", type: "Music", year: "2025", art: "a4", symbol: "S", saved: false, duration: "35 min", tracks: ["Open Channel", "Low Voltage", "Static Bloom", "Signal Lost"] },
  { id: "soft-focus", title: "Soft Focus", creator: "Mira Vale", type: "Music", year: "2026", art: "a6", symbol: "F", saved: false, duration: "32 min", tracks: ["Soft Focus", "Late Sun", "Blurred Edges", "Still Frame"] },
  { id: "after-hours", title: "After Hours", creator: "Common Shapes", type: "Music", year: "2024", art: "a8", symbol: "A", saved: true, duration: "44 min", tracks: ["Night Shift", "Corner Table", "Amber Glass", "Closing Time"] },
  { id: "signal-path", title: "The Signal Path", creator: "Noah Reid", type: "Podcast", year: "New episode", art: "a3", symbol: "SP", progress: 38, saved: true, duration: "39 min", tracks: ["Why interfaces disappear", "The sound of attention", "Designing for interruption", "A quieter notification"] },
  { id: "campus-circuit", title: "Campus Circuit", creator: "Lina & Sam", type: "Podcast", year: "Weekly", art: "a4", symbol: "CC", progress: 0, saved: false, duration: "46 min", tracks: ["Finding your third place", "The deadline effect", "Study groups that work", "Night bus stories"] },
  { id: "small-hours", title: "The Small Hours", creator: "Quiet Room", type: "Podcast", year: "12 episodes", art: "a6", symbol: "SH", progress: 64, saved: false, duration: "52 min", tracks: ["When the city sleeps", "A room of soft machines", "Stories from platform nine", "Before the first train"] },
  { id: "open-tab", title: "One More Open Tab", creator: "Nadia Bell", type: "Podcast", year: "New episode", art: "a7", symbol: "OT", progress: 0, saved: false, duration: "34 min", tracks: ["Digital clutter", "The second-screen habit", "Deep work, lightly", "Closing the loop"] },
  { id: "field-notes", title: "Field Notes", creator: "Studio North", type: "Podcast", year: "8 episodes", art: "a5", symbol: "FN", progress: 0, saved: false, duration: "41 min", tracks: ["Walking interviews", "Listening in public", "The useful detour", "Notes after dark"] },
  { id: "left-hand", title: "The Left Hand of Darkness", creator: "Ursula K. Le Guin", type: "Audiobook", year: "11h 42m", art: "a2", symbol: "LH", progress: 42, saved: true, duration: "11h 42m", tracks: ["Chapter 1 - A Parade in Erhenrang", "Chapter 2 - The Place Inside the Blizzard", "Chapter 3 - The Mad King", "Chapter 4 - The Nineteenth Day"] },
  { id: "far-orbit", title: "A Far Orbit", creator: "E. M. Arden", type: "Audiobook", year: "9h 18m", art: "a7", symbol: "FO", progress: 0, saved: false, duration: "9h 18m", tracks: ["Departure", "Past the Moon", "The Relay", "A New Signal"] },
  { id: "winter-city", title: "The Winter City", creator: "Owen Hart", type: "Audiobook", year: "7h 55m", art: "a4", symbol: "WC", progress: 0, saved: false, duration: "7h 55m", tracks: ["First Snow", "The North Quarter", "A Door Left Open", "Footprints"] },
  { id: "quiet-archive", title: "The Quiet Archive", creator: "Iris Moon", type: "Audiobook", year: "13h 06m", art: "a5", symbol: "QA", progress: 71, saved: false, duration: "13h 06m", tracks: ["The Catalogue", "A Missing Volume", "Ink and Dust", "The Last Index"] },
  { id: "atlas", title: "Atlas of Small Things", creator: "Mara Finch", type: "Audiobook", year: "8h 31m", art: "a8", symbol: "AS", progress: 0, saved: false, duration: "8h 31m", tracks: ["The Kitchen Map", "A Street in June", "Postcards", "North by Morning"] }
];

const state = { route: "home", previousRoute: "home", detailId: null, current: null, playing: false, filter: "All", query: "", progress: 42, volume: 72, speed: "1x" };
const appView = document.querySelector("#app-view");
const pageTitle = document.querySelector("#page-title");
const miniPlayer = document.querySelector("#mini-player");
const queuePanel = document.querySelector("#queue-panel");
const toastRegion = document.querySelector("#toast-region");

const getItem = id => catalog.find(item => item.id === id);
const typeClass = type => type.toLowerCase();
const typePlural = type => type === "Music" ? "Music" : `${type}s`;
const tintFor = type => type === "Music" ? "rgba(202,255,103,.12)" : type === "Podcast" ? "rgba(255,120,107,.13)" : "rgba(155,135,255,.14)";
const art = (item, extra = "") => `<div class="art ${item.art} ${extra}" data-symbol="${item.symbol}" aria-hidden="true"></div>`;
const pill = type => `<span class="type-pill ${typeClass(type)}">${type}</span>`;

function mediaCard(item) {
  return `<button class="media-card" data-open="${item.id}" aria-label="Open ${item.title}">${art(item)}<h3>${item.title}</h3><p>${item.creator}</p></button>`;
}

function continueCard(item) {
  const remaining = item.type === "Audiobook" ? `${Math.max(1, Math.round((100 - item.progress) / 9))}h left` : `${Math.max(4, Math.round((100 - item.progress) / 2.6))} min left`;
  return `<button class="continue-card" data-open="${item.id}" style="--accent:${item.type === "Podcast" ? "var(--coral)" : "var(--violet)"}">${art(item)}<span class="continue-copy">${pill(item.type)}<h3>${item.title}</h3><p>${item.creator}</p><span class="progress-meta"><span>${item.progress}% complete</span><span>${remaining}</span></span><span class="progress-track"><span style="width:${item.progress}%"></span></span></span></button>`;
}

function section(type, items) {
  return `<section class="section"><div class="section-header"><div class="section-title-wrap"><h2>${typePlural(type)}</h2>${pill(type)}</div><button class="filter-chip" data-route="category" data-category="${type}">View all</button></div><div class="card-row">${items.map(mediaCard).join("")}</div></section>`;
}

function renderHome() {
  const continuing = [getItem("signal-path"), getItem("left-hand"), getItem("small-hours")];
  appView.innerHTML = `<section class="hero"><div class="hero-copy"><p class="eyebrow">Your listening, all together</p><h2>Pick up where your day left off.</h2><p>Music for focus, stories for the commute, and conversations worth returning to.</p></div></section><section class="section continue-section"><div class="section-header"><div class="continue-heading"><span class="continue-marker" aria-hidden="true"></span><h2>Continue Listening</h2></div><span class="section-kicker">3 unfinished</span></div><div class="continue-grid">${continuing.map(continueCard).join("")}</div></section>${section("Music", catalog.filter(x => x.type === "Music"))}${section("Podcast", catalog.filter(x => x.type === "Podcast"))}${section("Audiobook", catalog.filter(x => x.type === "Audiobook"))}`;
}

function resultItem(item) {
  return `<button class="result-item" data-open="${item.id}" aria-label="Open ${item.title}">${art(item)}<span class="result-copy"><h4>${item.title}</h4><p>${item.creator} · ${item.year}</p></span>${pill(item.type)}<span class="result-action" aria-hidden="true">${icon.play}</span></button>`;
}

function filteredCatalog() {
  const q = state.query.trim().toLowerCase();
  return catalog.filter(item => {
    const matchesType = state.filter === "All" || item.type === state.filter || (state.filter === "Playlists" && item.type === "Playlist");
    const matchesQuery = !q || `${item.title} ${item.creator} ${item.type}`.toLowerCase().includes(q);
    return matchesType && matchesQuery;
  });
}

function renderSearch(focus = false) {
  const results = filteredCatalog();
  appView.innerHTML = `<div class="search-page"><section class="search-intro"><p class="eyebrow">Find your next listen</p><h2>Search all audio.</h2><div class="search-input-wrap">${icon.search}<input id="search-input" class="search-input" type="search" autocomplete="off" placeholder="Try ‘Weezer’" value="${escapeHtml(state.query)}" aria-label="Search all audio">${state.query ? '<button class="clear-search" data-action="clear-search" aria-label="Clear search">×</button>' : ""}</div></section>${renderFilters(["All","Music","Podcast","Audiobook"])}<div class="results-head"><h3>${state.query ? "Search results" : "Popular right now"}</h3><span>${results.length} ${results.length === 1 ? "result" : "results"}</span></div>${results.length ? `<div class="result-list">${results.map(resultItem).join("")}</div>` : `<div class="empty-state"><div><div class="empty-state-icon">⌕</div><h3>No matches yet</h3><p>Try a title, creator, or another audio category.</p></div></div>`}</div>`;
  if (focus) requestAnimationFrame(() => document.querySelector("#search-input")?.focus());
}

function renderFilters(filters) {
  return `<div class="filter-row" role="group" aria-label="Content filters">${filters.map(filter => `<button class="filter-chip ${state.filter === filter ? "is-active" : ""}" data-filter="${filter}" aria-pressed="${state.filter === filter}">${filter === "Podcast" ? "Podcasts" : filter === "Audiobook" ? "Audiobooks" : filter}</button>`).join("")}</div>`;
}

function renderLibrary() {
  const saved = catalog.filter(item => item.saved && (state.filter === "All" || item.type === state.filter));
  appView.innerHTML = `<section class="library-head"><p class="eyebrow">Collected by you</p><h2>Your Library</h2><p>Everything you save stays organised by audio type, ready when you are.</p></section>${renderFilters(["All","Music","Podcast","Audiobook","Playlists"])}${saved.length ? `<div class="library-grid">${saved.map(item => `<article class="library-card"><span class="saved-badge" aria-label="Saved">${icon.heart}</span>${mediaCard(item)}</article>`).join("")}</div>` : `<div class="empty-state"><div><div class="empty-state-icon">♡</div><h3>No saved ${state.filter.toLowerCase()} yet</h3><p>Save something from Search or a detail page and it will appear here.</p></div></div>`}`;
}

function detailRows(item) {
  return item.tracks.map((track, index) => `<div class="content-row" data-play-item="${item.id}" tabindex="0" role="button" aria-label="Play ${track}"><span class="track-number">${String(index + 1).padStart(2,"0")}</span><span class="content-title"><strong>${track}</strong><span>${item.creator}</span></span><span class="content-duration">${item.type === "Audiobook" ? `${28 + index * 7} min` : `${3 + index}:${index % 2 ? "42" : "18"}`}</span><button class="row-play" data-play-item="${item.id}" aria-label="Play ${track}">${icon.play}</button></div>`).join("");
}

function renderDetail(item) {
  const hasProgress = item.progress > 0 && item.type !== "Music";
  appView.innerHTML = `<button class="back-button" data-action="go-back">${icon.arrow}<span>Back</span></button><section class="detail-hero" style="--detail-tint:${tintFor(item.type)};--detail-glow:${item.type === "Music" ? "var(--lime)" : item.type === "Podcast" ? "var(--coral)" : "var(--violet)"}">${art(item,"detail-art")}<div class="detail-info">${pill(item.type)}<h2>${item.title}</h2><p>${item.creator} · ${item.year} · ${item.duration}</p>${hasProgress ? `<div class="detail-progress"><div class="progress-meta"><span>${item.progress}% complete</span><span>Ready to resume</span></div><div class="progress-track"><span style="width:${item.progress}%;background:var(--violet)"></span></div></div>` : ""}<div class="detail-actions"><button class="primary-button" data-play-item="${item.id}">${icon.play}<span>${hasProgress ? "Resume" : "Play"}</span></button><button class="secondary-button save-button ${item.saved ? "is-saved" : ""}" data-save="${item.id}" aria-pressed="${item.saved}">${item.saved ? icon.heartFilled : icon.heartOutline}<span>${item.saved ? "Saved" : "Save"}</span></button></div></div></section><section class="content-list" aria-label="${item.type === "Music" ? "Track" : item.type === "Podcast" ? "Episode" : "Chapter"} list"><div class="content-list-head"><span>#</span><span>${item.type === "Music" ? "Track" : item.type === "Podcast" ? "Episode" : "Chapter"}</span><span>Duration</span><span></span></div>${detailRows(item)}</section>`;
}

function renderCategory(type) {
  const items = catalog.filter(item => item.type === type);
  const accent = type === "Music" ? "rgba(202,255,103,.16)" : type === "Podcast" ? "rgba(255,120,107,.17)" : "rgba(155,135,255,.2)";
  appView.innerHTML = `<section class="category-banner" style="--category-bg:${accent}"><div><p class="eyebrow">Browse by format</p><h2>${typePlural(type)}</h2></div></section>${section(type,items)}`;
}

function renderPlayer() {
  const item = getItem(state.current);
  const speedControls = item.type !== "Music" ? `<div class="speed-group" role="group" aria-label="Playback speed">${["1x","1.25x","1.5x","2x"].map(speed => `<button class="speed-button ${state.speed === speed ? "is-active" : ""}" data-speed="${speed}">${speed}</button>`).join("")}</div>` : `<span></span>`;
  appView.innerHTML = `<section class="full-player ${state.playing ? "is-playing" : ""}"><div class="player-focus">${art(item,"large-art")}${pill(item.type)}<h2>${item.title}</h2><p class="creator">${item.creator}</p><div class="player-progress"><input class="range" data-range="progress" type="range" min="0" max="100" value="${state.progress}" style="--value:${state.progress}%" aria-label="Playback progress"><div class="time-row"><span>${formatElapsed(item,state.progress)}</span><span>-${formatRemaining(item,state.progress)}</span></div></div><div class="player-tools"><label class="volume-control" aria-label="Volume">${icon.volume}<input class="range volume-range" data-range="volume" type="range" min="0" max="100" value="${state.volume}" style="--value:${state.volume}%"></label>${speedControls}<div class="player-end-actions"><button class="icon-button ${item.saved ? "is-saved" : ""}" data-save="${item.id}" aria-label="${item.saved ? "Remove from Library" : "Save"}">${icon.heart}</button><button class="icon-button" data-action="queue" aria-label="Open queue">${icon.queue}</button></div></div><div class="transport"><button class="icon-button" data-action="previous" aria-label="Previous">${icon.previous}</button><button class="icon-button play-main" data-action="toggle-play" aria-label="${state.playing ? "Pause" : "Play"}">${state.playing ? icon.pause : icon.play}</button><button class="icon-button" data-action="next" aria-label="Next">${icon.next}</button></div></div></section>`;
}

function renderMiniPlayer() {
  if (!state.current) { miniPlayer.hidden = true; document.body.classList.remove("has-player"); return; }
  const item = getItem(state.current);
  document.body.classList.add("has-player");
  miniPlayer.hidden = false;
  miniPlayer.classList.toggle("is-playing",state.playing);
  miniPlayer.innerHTML = `<button class="mini-now" data-action="open-player" aria-label="Open full player for ${item.title}">${art(item)}<span class="mini-copy"><strong>${item.title}</strong><span>${item.creator} · ${item.type}</span></span>${item.saved ? `<span class="mini-heart" aria-label="Saved">${icon.heart}</span>` : ""}</button><div class="mini-center"><div class="mini-controls"><button class="icon-button" data-action="previous" aria-label="Previous">${icon.previous}</button><button class="icon-button play-mini" data-action="toggle-play" aria-label="${state.playing ? "Pause" : "Play"}">${state.playing ? icon.pause : icon.play}</button><button class="icon-button" data-action="next" aria-label="Next">${icon.next}</button></div><input class="range mini-progress" data-range="progress" type="range" min="0" max="100" value="${state.progress}" style="--value:${state.progress}%" aria-label="Playback progress"></div><div class="mini-right">${icon.volume}<input class="range volume-range" data-range="volume" type="range" min="0" max="100" value="${state.volume}" style="--value:${state.volume}%" aria-label="Volume"><button class="icon-button" data-action="queue" aria-label="Open queue">${icon.queue}</button></div>`;
}

function renderQueue() {
  if (!state.current) return;
  const item = getItem(state.current);
  const sameType = catalog.filter(x => x.type === item.type && x.id !== item.id).slice(0,3);
  queuePanel.innerHTML = `<div class="queue-head"><h2>Up next</h2><button data-action="close-queue" aria-label="Close queue">×</button></div><p class="queue-label">Now playing</p><div class="queue-now">${queueItem(item)}</div><p class="queue-label" style="margin-top:28px">Coming up</p>${sameType.map(queueItem).join("")}`;
  queuePanel.hidden = false;
  queuePanel.classList.add("is-open");
  queuePanel.setAttribute("aria-hidden","false");
}

function queueItem(item) { return `<div class="queue-item">${art(item)}<div><strong>${item.title}</strong><span>${item.creator}</span></div></div>`; }

function formatElapsed(item, progress) {
  if (item.type === "Audiobook") return `${Math.floor(progress / 9)}h ${String(progress % 9 * 6).padStart(2,"0")}m`;
  return `${Math.floor(progress * .39 / 60)}:${String(Math.floor(progress * .39 % 60)).padStart(2,"0")}`;
}

function formatRemaining(item, progress) {
  if (item.type === "Audiobook") return `${Math.max(0,Math.floor((100-progress)/9))}h ${String((100-progress)%9*6).padStart(2,"0")}m`;
  const seconds = Math.floor((100-progress) * .39);
  return `${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,"0")}`;
}

function escapeHtml(value) { return value.replace(/[&<>'"]/g,char => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char])); }

function setTopbar(context,title) { document.querySelector(".route-context p").textContent = context; pageTitle.textContent = title; }

function render() {
  updateNav();
  if (state.route === "home") { setTopbar("Welcome back","For you"); renderHome(); }
  if (state.route === "search") { setTopbar("Explore","Search"); renderSearch(); }
  if (state.route === "library") { setTopbar("Your collection","Library"); renderLibrary(); }
  if (state.route === "category") { setTopbar("Browse",typePlural(state.filter)); renderCategory(state.filter); }
  if (state.route === "detail") { const item = getItem(state.detailId); setTopbar(item.type,item.title); renderDetail(item); }
  if (state.route === "player") { const item = getItem(state.current); setTopbar("Now playing",item.title); renderPlayer(); }
  renderMiniPlayer();
  appView.focus({preventScroll:true});
}

function updateNav() {
  document.querySelectorAll(".nav-item").forEach(button => {
    const matchesMain = button.dataset.route !== "category" && button.dataset.route === state.route;
    const matchesCategory = state.route === "category" && button.dataset.category === state.filter;
    const active = matchesMain || matchesCategory;
    button.classList.toggle("is-active",active);
    if (active) button.setAttribute("aria-current","page"); else button.removeAttribute("aria-current");
  });
}

function navigate(route, options = {}) {
  if (route !== "detail" && route !== "player") state.previousRoute = route;
  state.route = route;
  if (options.category) state.filter = options.category;
  else if (["search","library"].includes(route)) state.filter = "All";
  window.scrollTo({top:0,behavior:"smooth"});
  render();
}

function openDetail(id) {
  state.previousRoute = state.route === "detail" ? state.previousRoute : state.route;
  state.detailId = id;
  state.route = "detail";
  window.scrollTo({top:0,behavior:"smooth"});
  render();
}

function startItem(id) {
  const item = getItem(id);
  state.current = id;
  state.playing = true;
  state.progress = item.progress || 0;
  state.speed = "1x";
  state.route = "player";
  render();
  showToast(item.progress ? `Resuming ${item.title} at ${item.progress}%` : `Playing ${item.title}`);
}

function toggleSave(id) {
  const item = getItem(id);
  item.saved = !item.saved;
  render();
  showToast(item.saved ? `${item.title} saved to your Library` : `${item.title} removed from your Library`);
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  toastRegion.appendChild(toast);
  window.setTimeout(() => toast.remove(),2600);
}

function cycleItem(direction) {
  if (!state.current) return;
  const current = getItem(state.current);
  const group = catalog.filter(item => item.type === current.type);
  const index = group.findIndex(item => item.id === current.id);
  const next = group[(index + direction + group.length) % group.length];
  state.current = next.id;
  state.progress = next.progress || 0;
  state.playing = true;
  render();
  showToast(`Now playing ${next.title}`);
}

function handleRouteButton(button) {
  const route = button.dataset.route;
  if (!route) return false;
  if (route === "category") navigate("category",{category:button.dataset.category}); else navigate(route);
  return true;
}

document.addEventListener("click",event => {
  const routeButton = event.target.closest("[data-route]");
  if (routeButton && handleRouteButton(routeButton)) return;
  const openButton = event.target.closest("[data-open]");
  if (openButton) { openDetail(openButton.dataset.open); return; }
  const playButton = event.target.closest("[data-play-item]");
  if (playButton) { startItem(playButton.dataset.playItem); return; }
  const saveButton = event.target.closest("[data-save]");
  if (saveButton) { toggleSave(saveButton.dataset.save); return; }
  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) { state.filter = filterButton.dataset.filter; state.route === "search" ? renderSearch(true) : renderLibrary(); return; }
  const speedButton = event.target.closest("[data-speed]");
  if (speedButton) { state.speed = speedButton.dataset.speed; render(); showToast(`Playback speed set to ${state.speed}`); return; }
  const actionButton = event.target.closest("[data-action]");
  if (!actionButton) return;
  const action = actionButton.dataset.action;
  if (action === "settings") showToast("Settings are not part of this usability-test flow");
  if (action === "clear-search") { state.query = ""; renderSearch(true); }
  if (action === "go-back") navigate(state.previousRoute || "home");
  if (action === "open-player" && state.current) { state.route = "player"; render(); }
  if (action === "toggle-play") { state.playing = !state.playing; render(); showToast(state.playing ? "Playback resumed" : "Playback paused"); }
  if (action === "previous") cycleItem(-1);
  if (action === "next") cycleItem(1);
  if (action === "queue") renderQueue();
  if (action === "close-queue") { queuePanel.classList.remove("is-open"); queuePanel.setAttribute("aria-hidden","true"); queuePanel.hidden = true; }
});

document.addEventListener("input",event => {
  if (event.target.id === "search-input") {
    state.query = event.target.value;
    const cursor = event.target.selectionStart;
    renderSearch();
    const input = document.querySelector("#search-input");
    input.focus();
    input.setSelectionRange(cursor,cursor);
  }
  if (event.target.matches('[data-range="progress"]')) {
    state.progress = Number(event.target.value);
    if (state.current) {
      const currentItem = getItem(state.current);
      if (currentItem) currentItem.progress = state.progress;
    }
    document.querySelectorAll('[data-range="progress"]').forEach(range => { range.value = state.progress; range.style.setProperty("--value",`${state.progress}%`); });
  }
  if (event.target.matches('[data-range="volume"]')) {
    state.volume = Number(event.target.value);
    document.querySelectorAll('[data-range="volume"]').forEach(range => { range.value = state.volume; range.style.setProperty("--value",`${state.volume}%`); });
  }
});

document.addEventListener("keydown",event => {
  if (event.key === "/" && state.route !== "search" && !["INPUT","TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault(); navigate("search"); requestAnimationFrame(() => document.querySelector("#search-input")?.focus());
  }
  if (event.key === "Escape" && queuePanel.classList.contains("is-open")) { queuePanel.classList.remove("is-open"); queuePanel.setAttribute("aria-hidden","true"); queuePanel.hidden = true; }
  const row = event.target.closest(".content-row");
  if (row && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); startItem(row.dataset.playItem); }
});

document.querySelector(".avatar").addEventListener("click",() => showToast("Profile controls are outside this prototype’s scope"));
render();
