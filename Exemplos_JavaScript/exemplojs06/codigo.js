/*  PARTE A  */
var botoes = document.querySelectorAll('#botoes .delete');

botoes.forEach(function(botao) {
	botao.addEventListener('click', function(e) {
		var li = e.target.parentElement;
		li.parentElement.removeChild(li);
	});
});

/*  PARTE B  */
/*
var lista = document.querySelector('#botoes');

lista.addEventListener('click', function(e) {
	if (e.target.className === 'delete') {
		var li = e.target.parentElement;
        //console.log(this);
		//this.removeChild(li);
		//lista.removeChild(li);  // tudo tá global
        li.parentElement.removeChild(li);
	}
});
*/
