/// <reference lib="webworker" />

/** @type {ServiceWorkerGlobalScope} */
const sw = self;

const CACHE_NAME = "ceub-id";
const CACHE_URLS = [
  "/",
  "/index.html",
  "/css/index.css",
  "/js/index.js",
  "/lib/qrcodejs/js/qrcode.js",
  "/fonts/Inter.ttf",
  "/fonts/JetBrainsMono.ttf",
];

sw.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CACHE_URLS))
  );
  sw.skipWaiting();
});

sw.addEventListener("activate", event => {
  event.waitUntil(sw.clients.claim());
  event.waitUntil(sw.registration.navigationPreload.enable());
});

sw.addEventListener("fetch", event => {
  const url = new URL(event.request.url);
  if (url.protocol.includes("extension")) return;

  event.respondWith(
    caches.open(CACHE_NAME).then(cache =>
      fetch(event.request.url)
        .then(res => {
          cache.put(event.request.url, res.clone());
          return res;
        })
        .catch(() => cache.match(event.request.url))
    )
  );
});
