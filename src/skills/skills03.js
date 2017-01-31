var skillAnimation03 = function () {
    var parent = document.body.children[1].children[0];
    divPiece = document.createElement('div');
    divPiece.setAttribute('id', 'containerPiece');
    divPiece.setAttribute('class', 'masquePiece');
    divPiece.style.top = '350px';
    divPiece.style.left = '1000px';
    piece01 = document.createElement('img');
    piece01.src = 'img/sheet04.png';
    piece01.setAttribute('id', 'contenuPiece');
    piece01.setAttribute('class', 'spritePiece');
    divPiece.appendChild(piece01);
    parent.appendChild(divPiece);
    document.getElementsByClassName('masquePiece').containerPiece.style.left = 1080 + 'px';
    document.getElementsByClassName('masquePiece').containerPiece.style.top = 350 + 'px';
    document.getElementsByClassName('masquePiece').containerPiece.style.height = 128 + 'px';
    document.getElementsByClassName('masquePiece').containerPiece.style.width = 128 + 'px';
    document.getElementsByClassName('masquePiece').containerPiece.style.overflow = 'hidden';
    document.getElementsByClassName('masquePiece').containerPiece.style.position = 'absolute';

    document.getElementsByClassName('spritePiece').contenuPiece.style.left = 0 + 'px';
    document.getElementsByClassName('spritePiece').contenuPiece.style.top = 0 + 'px';
    document.getElementsByClassName('spritePiece').contenuPiece.style.position = 'absolute';

    var p = 0;
    var animationPiece = setInterval(function () {
        document.getElementsByClassName('spritePiece').contenuPiece.style.left = p + 'px';
        p -= 128;
        if( p <= -512) {
            p = 0;
            
            key = true;
        }

    }, 3000 / 30);
};