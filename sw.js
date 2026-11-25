// Service worker: maakt de app offline beschikbaar.
// Verhoog VERSIE bij elke wijziging aan de app, zodat telefoons de nieuwe versie ophalen.
const VERSIE = "2026-11-25-2";
const CACHE = "orthopedie-" + VERSIE;
const BESTANDEN = [
  "./",
  "anatomie-schouder.jpg",
  "artsen/depuydt.jpg",
  "artsen/gallant.jpg",
  "artsen/hardeman.jpg",
  "artsen/herregods.jpg",
  "artsen/somers.jpg",
  "artsen/thomas.jpg",
  "artsen/van-der-linden.jpg",
  "artsen/vanbiervliet.jpg",
  "artsen/verschueren.jpg",
  "atsp.jpg",
  "icons/apple-touch-icon.png",
  "icons/favicon-32.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "index.html",
  "manifest.webmanifest",
  "rc-achterzijde.jpg",
  "rc-voorzijde.jpg",
  "reversed-prothese.jpg"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(BESTANDEN)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Pagina zelf: eerst online (nieuwste versie), anders uit de cache. Beelden: eerst uit de cache.
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put("index.html", c)); return r; })
      .catch(() => caches.match("index.html")));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); return r; })));
});
