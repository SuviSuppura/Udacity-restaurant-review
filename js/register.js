/* Set up our service worker*/

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(function() {
      console.log("Service worker registered");
    });
  }
