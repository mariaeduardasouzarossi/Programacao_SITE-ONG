import { templates } from './templates.js';
import { validateForm } from './formValidator.js';

export function loadPage(name) {
  const app = document.getElementById('app');
  app.innerHTML = templates[name] || '<h2>Página não encontrada</h2>';

  // Habilita validação apenas na página cadastro
  if (name === 'cadastro') {
    const form = app.querySelector('form');
    if (form) {
      form.addEventListener('submit', e => {
        e.preventDefault();
        if (validateForm(form)) {
          alert('Cadastro enviado com sucesso!');
          form.reset();
        }
      });
    }
  }
  // Habilita navegação SPA em links internos
  app.querySelectorAll('a[data-page]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      loadPage(link.dataset.page);
    });
  });
}
