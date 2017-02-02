var skillAnimation03 = function () {
    document.getElementById('tire').style.display = 'inline';
    document.getElementById('tire').style.left = parseInt(document.getElementsByClassName('masque').container.style.left) + 32 + 'px';
    document.getElementById('tire').style.top = parseInt(document.getElementsByClassName('masque').container.style.top) - 64 + 'px';
    document.getElementById('tire').style.position = 'absolute';

    var parent = document.body.children[1].children[0];
    divPiece = document.createElement('div');
    divPiece.setAttribute('id', 'containerPiece');
    divPiece.setAttribute('class', 'masquePiece');
    piece01 = document.createElement('img');
    piece01.src = 'img/sheet04.png';
    piece01.setAttribute('id', 'contenuPiece');
    piece01.setAttribute('class', 'spritePiece');
    divPiece.appendChild(piece01);
    parent.appendChild(divPiece);
    document.getElementsByClassName('masquePiece').containerPiece.style.left = (document.getElementById('fondAnime1').clientWidth) + 'px';
    document.getElementsByClassName('masquePiece').containerPiece.style.top = 420 + 'px';
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
        if (p <= -512) {
            p = 0;
        }
        if (compteurTir >= 5) {
            clearInterval(animationPiece);
            document.body.children[1].children[0].removeChild(divPiece);
            document.getElementById('cvCursus').style.display = 'inline';
            document.getElementById('score').innerHTML = 'SCORE: 300';

            // YOU WIN
            divWin = document.createElement('div');
            divWin.setAttribute('class', 'win');
            divWin.style.height = 150 + 'px';
            divWin.style.width = 200 + 'px';
            divWin.style.position = 'absolute';
            divWin.style.top = document.getElementsByClassName('masque').container.style.top;
            divWin.style.left = parseInt(document.getElementsByClassName('masque').container.style.left) - 64 + 'px';
            win = document.createElement('img');
            win.src = 'img/win.jpg';
            divWin.appendChild(win);
            document.body.children[1].children[0].appendChild(divWin);

            document.getElementsByClassName('sprite').contenu.style.transform = 'scaleX(-1)';
            document.getElementsByClassName('sprite').contenu.style.left = 0 + 'px';
            document.getElementsByClassName('sprite').contenu.style.top = 0 + 'px';
            document.getElementsByClassName('masque').container.style.left = '668px';
            document.getElementsByClassName('masque').container.style.top = '470px';



        }

    }, 3000 / 30);

};