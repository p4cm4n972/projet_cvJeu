//FONCTION POUR LANIMATION DU SAUT DIRECTION GAUCHE (SCALE -1)
var sautGauche = function () {

    //EFFET SONORE DU SAUT
    $('#sound02')[0].play();

    var monter = setInterval(function () {
        document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
        document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
        document.getElementsByClassName('masque').container.style.left = u + 'px';
        document.getElementsByClassName('masque').container.style.top = v + 'px';
        x += 64;
        v -= 10;
        if (document.getElementsByClassName('masque').container.style.top == 430 + "px") {
            clearInterval(monter);
            var descente = setInterval(function () {
                document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
                document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
                document.getElementsByClassName('masque').container.style.left = u + 'px';
                document.getElementsByClassName('masque').container.style.top = v + 'px';
                x -= 64;
                v += 10;
                if (document.getElementsByClassName('masque').container.style.top == 470 + "px") {
                    clearInterval(descente);
                    y = -64;
                    key = true;
                    document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
                    document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
                    document.getElementsByClassName('masque').container.style.left = u + 'px';
                    document.getElementsByClassName('masque').container.style.top = v + 'px';
                }

            }, 1000 / 30);
        }


    }, 1000 / 30);
};
//FONCTION POUR LANIMATION DU SAUT DIRECTION DROITE (SCALE 1)
var sautDroite = function () {

    //EFFET SONORE DU SAUT

    $('#sound02')[0].play();


    var monter = setInterval(function () {

        document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
        document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
        document.getElementsByClassName('masque').container.style.left = u + 'px';
        document.getElementsByClassName('masque').container.style.top = v + 'px';
        x -= 64;
        v -= 10;
        if (document.getElementsByClassName('masque').container.style.top == 430 + "px") {
            clearInterval(monter);
            var descente = setInterval(function () {
                document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
                document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
                document.getElementsByClassName('masque').container.style.left = u + 'px';
                document.getElementsByClassName('masque').container.style.top = v + 'px';
                x += 64;
                v += 10;
                if (document.getElementsByClassName('masque').container.style.top == 470 + "px") {
                    clearInterval(descente);
                    y = -64;
                    x = 0;
                    key = true;
                    document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
                    document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
                    document.getElementsByClassName('masque').container.style.left = u + 'px';
                    document.getElementsByClassName('masque').container.style.top = v + 'px';
                }

            }, 1000 / 30);
        }


    }, 1000 / 30);

};
var initSaut = function () {
    key = false;

    y = -64;
    if (document.getElementsByClassName('sprite').contenu.style.transform == 'scaleX(-1)') {
        x = -520;

        sautGauche();
    } else {

        x = -64;
        sautDroite();
    }
};