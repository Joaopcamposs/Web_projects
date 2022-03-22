var botao = document.querySelector('button');
var videoBox = document.querySelector('div');
var video = document.querySelector('video');

botao.addEventListener('click', function () {
    videoBox.setAttribute('class', 'showing');
});

videoBox.addEventListener('click', function () {
    videoBox.setAttribute('class', 'hidden');
    video.pause();
});

video.addEventListener('click', function (e) {
    e.stopPropagation();
    video.play();
});
