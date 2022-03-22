var form = document.querySelector('form');
var nome = document.querySelector('#nome');
var sobrenome = document.querySelector('#sobrenome');
var submit = document.querySelector('#submit');
var mensagem = document.querySelector('#mensagem');

form.addEventListener('submit', function (e) {
    if (nome.value === '' || sobrenome.value === '') {
        e.preventDefault();
        mensagem.textContent = 'Você deve preencher nome e sobrenome!';
    }
});
