// PWA initialization — dynamically adds manifest, meta tags, and registers service worker
(function() {
  'use strict';

  // Add manifest link
  var manifest = document.createElement('link');
  manifest.rel = 'manifest';
  manifest.href = '/manifest.json';
  document.head.appendChild(manifest);

  // Add theme-color
  var theme = document.createElement('meta');
  theme.name = 'theme-color';
  theme.content = '#1d1d1f';
  document.head.appendChild(theme);

  // Add mobile-web-app-capable
  var capable = document.createElement('meta');
  capable.name = 'mobile-web-app-capable';
  capable.content = 'yes';
  document.head.appendChild(capable);

  // Add apple-mobile-web-app-capable
  var apple = document.createElement('meta');
  apple.name = 'apple-mobile-web-app-capable';
  apple.content = 'yes';
  document.head.appendChild(apple);

  // Add apple-mobile-web-app-status-bar-style
  var bar = document.createElement('meta');
  bar.name = 'apple-mobile-web-app-status-bar-style';
  bar.content = 'black-translucent';
  document.head.appendChild(bar);

  // Add apple-touch-icon
  var touchIcon = document.createElement('link');
  touchIcon.rel = 'apple-touch-icon';
  touchIcon.href = '/icon.svg';
  document.head.appendChild(touchIcon);

  // Register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(reg) {
      console.log('SW registered, scope:', reg.scope);
    }).catch(function(err) {
      console.warn('SW registration failed:', err);
    });
  }
})();
