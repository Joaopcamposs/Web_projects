var caixa = document.querySelector('#checkbox');
var lista = document.querySelector('ul');

caixa.addEventListener('change', function(e) {
    if(caixa.checked) {
        lista.style.display = 'none';	
    } else {
        lista.style.display = 'block';
    }
});