var botao = document.querySelector('button');

function random(numero) {
    return Math.floor(Math.random() * (numero + 1));
}

//botao.onclick = function () {
//    var corRand = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//    document.body.style.backgroundColor = corRand;
//};


/* Ou de outra forma */
function mudarFundo() {
	var corRand = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
	document.body.style.backgroundColor = corRand;
}

//botao.onclick = mudarFundo;    
