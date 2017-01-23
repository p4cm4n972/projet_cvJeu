window.onload = function () {


    //DECLARATION VARIABLE GLOBALE
    var divBullet01 = document.createElement('div');
    var bullet01 = document.createElement('img');

    //FONCTION POUR LANIMATION DU BULLET
    var bullet = function () {
        var parent = document.body.children[1].children[0];
        bullet01.src = 'img/bullet01.png';
        bullet01.width = 64;
        bullet01.height = 64;
        divBullet01.height = 64;
        divBullet01.width = 64;
        divBullet01.style.position = 'absolute';
        divBullet01.style.top = document.getElementsByClassName('masque').container.style.top;
        divBullet01.style.left = parseFloat(document.getElementsByClassName('masque').container.style.left) + 64 + "px"
        divBullet01.appendChild(bullet01);
        parent.appendChild(divBullet01);
    }


    //FONCTION POUR LANIMATION DE TIR DIRECTION DROITE (SCALE 1)
    var tirDroite = function () {
        var shoot = setInterval(function () {


            document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
            document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
            document.getElementsByClassName('masque').container.style.left = u + 'px';
            document.getElementsByClassName('masque').container.style.top = v + 'px';
            x -= 64;
            if (x <= -256) {
                clearInterval(shoot);
                x = 0;
                y = -128;
                document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
                document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
                document.getElementsByClassName('masque').container.style.left = u + 'px';
                document.getElementsByClassName('masque').container.style.top = v + 'px';

                bullet();
                var bulletAnimation = setInterval(function () {
                    var z = 0;
                    z += 20;
                    divBullet01.style.left = parseFloat(divBullet01.style.left) + z + 'px';
                    if (divBullet01.style.left >= 850 + "px") {
                        clearInterval(bulletAnimation);
                        bullet01.src = 'img/explosion01.png';
                    }

                }, 4000 / 30);
            }
        }, 1000 / 30);
    }

    //FONCTION POUR LANIMATION DE TIR DIRECTION GAUCHE (SCALE -1)
    var tirGauche = function () {
        var shoot = setInterval(function () {

            document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
            document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
            document.getElementsByClassName('masque').container.style.left = u + 'px';
            document.getElementsByClassName('masque').container.style.top = v + 'px';
            x += 64;
            if (x >= -256) {
                clearInterval(shoot);
                y = -128;
                x = -576;
                document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
                document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
                document.getElementsByClassName('masque').container.style.left = u + 'px';
                document.getElementsByClassName('masque').container.style.top = v + 'px';
            }
        }, 1000 / 30);
    }
    var initTire = function () {
        y = -128;
        $('#sound')[0].play();

        if (document.getElementsByClassName('sprite').contenu.style.transform == 'scaleX(-1)') {
            x = -576;
            tirGauche();
        } else {
            x = 0;
            tirDroite();
        }
    }
    //FONCTION POUR LANIMATION DU SAUT DIRECTION GAUCHE (SCALE -1)
    var sautDroiteGauche = function () {


        var monter2 = setInterval(function () {
            document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
            document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
            document.getElementsByClassName('masque').container.style.left = u + 'px';
            document.getElementsByClassName('masque').container.style.top = v + 'px';
            x += 64;
            v -= 10;
            if (document.getElementsByClassName('masque').container.style.top == 430 + "px") {
                clearInterval(monter2);
                var descente2 = setInterval(function () {
                    document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
                    document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
                    document.getElementsByClassName('masque').container.style.left = u + 'px';
                    document.getElementsByClassName('masque').container.style.top = v + 'px';
                    x -= 64;
                    v += 10;
                    if (document.getElementsByClassName('masque').container.style.top == 470 + "px") {
                        clearInterval(descente2);
                        y = -64;
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
                        document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
                        document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
                        document.getElementsByClassName('masque').container.style.left = u + 'px';
                        document.getElementsByClassName('masque').container.style.top = v + 'px';
                    }

                }, 1000 / 30);
            }


        }, 1000 / 30);

    };//FIN FONCTION sautDroite
    var initSaut = function () {
        y = -64;
        if (document.getElementsByClassName('sprite').contenu.style.transform == 'scaleX(-1)') {
            x = -520;
            sautDroiteGauche();
        } else {
            x = -64;
            sautDroite();
        }

    };

    window.onkeydown = function (event) {
        var code = event.keyCode;

        switch (code) {

            //instructions HAUT (jump)
            case 38:

                initSaut();
                break;

            //instructions DROITE
            case 39:
                x -= 64;
                y = 0;
                document.getElementsByClassName('sprite').contenu.style.transform = 'scaleX(1)';

                document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
                document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
                document.getElementsByClassName('masque').container.style.left = u + 'px';
                document.getElementsByClassName('masque').container.style.top = v + 'px';
                u += 2;
                if (x < -576) {
                    x = 0;
                    document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
                    document.getElementsByClassName('masque').container.style.left = u + 'px';
                    x -= 64;
                    u += 2;
                }

                break;

            //*instructions* GAUCHE
            case 37:
                y = 0;
                document.getElementsByClassName('sprite').contenu.style.transform = 'scaleX(-1)';
                document.getElementsByClassName('sprite').contenu.trans = x + 'px';
                document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
                document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
                document.getElementsByClassName('masque').container.style.left = u + 'px';
                document.getElementsByClassName('masque').container.style.top = v + 'px';
                x -= 64;
                u -= 2;
                if (x < -576) {
                    x = -64;
                    document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
                    document.getElementsByClassName('masque').container.style.left = u + 'px';
                    x -= 64;
                    u -= 2;
                }
                break;

            //instructions BAS >> il tire
            case 40:

                initTire();
                break;
        };

    };

    var x = 0;
    var y = 0;
    var u = 325;
    var v = 470;

    document.getElementsByClassName('masque').container.style.left = u + 'px';
    document.getElementsByClassName('masque').container.style.top = v + 'px';
    document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
    document.getElementsByClassName('sprite').contenu.style.top = y + 'px';




};