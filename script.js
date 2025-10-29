// Filtro de projetos
const filtroBtns = document.querySelectorAll('.filtro-projetos button');
const projetos = document.querySelectorAll('.card-list .card');
if (filtroBtns.length) {
  filtroBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filtroBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filtro = btn.getAttribute('data-filter');
      projetos.forEach(proj => {
        if(filtro === 'all' || proj.getAttribute('data-category') === filtro) {
          proj.style.display = 'block';
        } else {
          proj.style.display = 'none';
        }
      });
    });
  });
}

// Modal do projeto
const projectData = {
  1: { title: "Refazer Sorrisos", description: "Encontros mensais gratuitos com odontologistas voluntários para famílias carentes, proporcionando saúde e autoestima." },
  2: { title: "Paisagismo Solidário", description: "Ação ambiental que incentiva o plantio de árvores e cuida dos espaços públicos do bairro." }
};

const modal = document.getElementById('modal');
if (modal) {
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-description');
  const modalClose = document.getElementById('modal-close');
  document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      modalTitle.textContent = projectData[projectId].title;
      modalDesc.textContent = projectData[projectId].description;
      modal.style.display = 'flex';
    });
  });
  modalClose.addEventListener('click', () => { modal.style.display = 'none'; });
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
}
document.querySelectorAll('.filtro-projetos button').forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll('.filtro-projetos button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filtro = btn.getAttribute('data-filter');
    document.querySelectorAll('.card-flip').forEach(card => {
      card.style.display = (filtro === 'all' || card.getAttribute('data-category') === filtro) ? 'block' : 'none';
    });
  };
});
