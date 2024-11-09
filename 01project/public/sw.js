const CACHE_NAME = "medicare-cache-v1";
const urlsToCache = [
  "/", // Homepage
  "/index.html", // Main HTML file
  "/src/styles.css", // Main CSS (adjust path if needed)
  "/src/script.js", // Main JS file (adjust path if needed)
  // Add any other files or routes you want available offline
  "/path/to/health-articles.html", // Example path for health articles
];

// Install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch event
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return the cached version if available; otherwise, fetch from network
      return response || fetch(event.request);
    })
  );
});
