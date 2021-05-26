// Flag for enabling cache in production
const doCache = true;

const CACHE_NAME = "pwa-app-cache";

// Delete old caches
self.addEventListener("activate", (event) => {
  const currentCachelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (!currentCachelist.includes(key)) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});

// This triggers when user starts the app
self.addEventListener("install", function (event) {
  if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME).then(function (cache) {
        fetch("asset-manifest.json")
          .then((response) => {
            response.json();
          })
          .then((assets) => {
            // We will cache initial page and the main.js
            // We could also cache assets like CSS and images
            const urlsToCache = [
              "/",
              "/main.js",
              "/founder/6",
              "/photos/100_yorkville.jpg",
              "/photos/allan_gross.jpg",
              "/photos/allan_rudolph.jpg",
              "/photos/chest_icon.png",
              "/photos/dora_dworkin.jpg",
              "/photos/ezra_noshem_society.jpg",
              "/photos/gazebo.jpg",
              "/photos/Heather-Reisman.jpg",
              "/photos/judy-and-monty-simmonds.jpg",
              "/photos/monty_bench.jpg",
              "/photos/ms_logo.png",
              "/photos/murali_jenny.jpg",
              "/photos/original_members.jpg",
              "/photos/sidney_liswood.jpg",
              "/photos/the_book_of_love.jpg",
            ];
            cache.addAll(urlsToCache);
          });
      })
    );
  }
});

// Here we intercept request and serve up the matching files
self.addEventListener("fetch", function (event) {
  if (doCache) {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        return response || fetch(event.request);
      })
    );
  }
});
