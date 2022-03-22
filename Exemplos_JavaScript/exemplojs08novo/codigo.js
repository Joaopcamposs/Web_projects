window.addEventListener("load", function (event) {
    
    var form = document.forms.inserir;
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

        var botaoDelete = document.createElement('span');
        botaoDelete.textContent = 'remover';
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

    var busca = document.querySelector('#nome_buscar');

    busca.addEventListener('keyup', function (e) {
        var termo = e.target.value.toLowerCase();
        var livros = lista.getElementsByTagName('li');

        Array.from(livros).forEach(function (livro) {
            var titulo = livro.firstElementChild.textContent;
            if (titulo.toLowerCase().indexOf(termo) !== -1) {
                livro.style.display = 'list-item';
            } else {
                livro.style.display = 'none';
            }
        });
    });
    
    var check = document.querySelector("#hide");
    check.addEventListener("change", function(e) {
        var divLivros = document.querySelector("#book-list");
        if(e.target.checked) {
            divLivros.style.display = "none";
        } else {
            divLivros.style.display = "block";
        }
    });
    
    var sobre = document.querySelector("#sobre");
    var divsobre = document.querySelector("#divsobre");
    var contato = document.querySelector("#contato");
    var divcontato = document.querySelector("#divcontato");
    sobre.addEventListener("click", function(e) {
        if (!sobre.classList.contains("active")) {
            sobre.classList.add("active");
            divsobre.classList.add("active");
            contato.classList.remove("active");
            divcontato.classList.remove("active");
        }
    });
    contato.addEventListener("click", function(e) {
        if (!contato.classList.contains("active")) {
            contato.classList.add("active");
            divcontato.classList.add("active");
            sobre.classList.remove("active");
            divsobre.classList.remove("active");
        }
    });
    
});
window.addEventListener("unload", function (event) {});
