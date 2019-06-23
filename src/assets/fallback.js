console.warn('You can instead of this file to server url.');
console.warn('DO NOT DELETE THIS FILE!!!');

if (navigator && navigator.serviceWorker) {
  if (window.__SW_DISABLED__) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      for (const registration of registrations) {
        registration.unregister();
      }
    });
  }
}
