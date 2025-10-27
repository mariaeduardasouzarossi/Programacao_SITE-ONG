const depoimentos = [
  "Foi uma das melhores experiências da minha vida participar deste projeto!",
  "A ONG me permitiu ajudar o próximo e aprender muito.",
  "Conheci pessoas incríveis e pude fazer a diferença.",
  "Trabalhar como voluntário me trouxe satisfação e felicidade."
];
let atual = 0;

document.getElementById('proximoDepoimento').addEventListener('click', function() {
  atual = (atual + 1) % depoimentos.length;
  document.getElementById('depoimento').textContent = depoimentos[atual];
});
