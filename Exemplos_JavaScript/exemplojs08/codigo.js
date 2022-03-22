var form = document.forms.livros;
var lista = document.querySelector('#livros');
var botaoInserir = document.querySelector("#binserir");

var botoesDeletarAntigos = document.querySelectorAll(".delete");
botoesDeletarAntigos.forEach(function (elem) {
    elem.addEventListener("click", function (evt) {
        var li = elem.parentElement;
        var ul = li.parentElement;
        ul.removeChild(li);
    });
});

botaoInserir.addEventListener("click", function () {
    var valor = form.querySelector('#nome_inserir').value;
    var li = document.createElement('li');

    var nomeLivro = document.createElement('span');
    nomeLivro.textContent = valor;
    nomeLivro.classList.add('nome');

    var botaoDelete = document.createElement('button');
    botaoDelete.type = "button";
    botaoDelete.textContent = 'Deletar';
    botaoDelete.classList.add('delete');
    botaoDelete.addEventListener("click", function (evt) {
        var li = evt.target.parentElement; 
        var ul = li.parentElement;
        ul.removeChild(li);
    });

    li.appendChild(nomeLivro);
    li.appendChild(botaoDelete);

    lista.appendChild(li);
});

var busca = form.querySelector('#nome_buscar');

busca.addEventListener('keyup', function(e) {
	var termo = e.target.value.toLowerCase();
	var livros = lista.getElementsByTagName('li');
	
    Array.from(livros).forEach(function(livro) {
		var titulo = livro.firstElementChild.textContent;
		if (titulo.toLowerCase().indexOf(termo) !== -1) {
			livro.style.display = 'list-item';
		} else {
			livro.style.display = 'none';
		}
	});
});