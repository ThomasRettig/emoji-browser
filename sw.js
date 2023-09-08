var CACHE = "cache-v1";

var urls = [
  "/",
  "images/banner.png",
  "icon-256x256.png",
  "icon.svg",
  "manifest.webmanifest",
  "script.js",
  "styles.css"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(urls);
    })
  );
});

self.addEventListener("fetch", function (event) {
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
    );
  }
});

self.addEventListener("activate", function (event) {
  var cacheWhitelist = [CACHE];
  event.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          if (cacheWhitelist.indexOf(key) === -1) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});