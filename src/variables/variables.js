//DECLARATION VARIABLE GLOBALE

if (document.body.offsetWidth <= 1349) {
    u = 250;
    v = 470;
}
if (document.body.offsetWidth > 1349) {
    u = 300;
    v = 470;
}
var bullet01;
var explosion01;
var x = 0;
var y = 0;
var t = 0;

var key = true;
var click = true;

compteurTir = 0;


document.getElementsByClassName('masque').container.style.left = u + 'px';
document.getElementsByClassName('masque').container.style.top = v + 'px';
document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
document.getElementsByClassName('sprite').contenu.style.top = y + 'px';

var divGem = document.createElement('div');
var divGem02 = document.createElement('div');


