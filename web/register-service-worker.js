/* eslint-env browser */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('SW_PUBLIC_URL/expo-service-worker.js', { scope: 'SW_PUBLIC_SCOPE' })
      .then((info) => {
        // console.info('Registered service-worker', info);
      })
      .catch((error) => {
        console.info('Failed to register service-worker', error);
      });
  });
}
