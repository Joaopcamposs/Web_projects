var botoes = document.querySelectorAll('button');

function random(numero) {
  return Math.floor(Math.random() * (numero + 1));
}

function mudarFundo(e) {
  var corRand = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  e.target.style.backgroundColor = corRand;
  console.log(e);
}  

Array.from(botoes).forEach(function(botao) {
    botao.addEventListener('click', mudarFundo);
});
