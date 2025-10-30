import { loadPage } from './spa.js';

document.addEventListener('DOMContentLoaded', () => {
  loadPage('inicio');
  // Setup SPA navigation
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      loadPage(link.dataset.page);
    });
  });
});
