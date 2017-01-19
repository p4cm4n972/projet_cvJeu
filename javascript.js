window.onload = function () {


    var saut2 = function () {


        var monter2 = setInterval(function () {
            document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
            document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
            document.getElementsByClassName('masque').container.style.left = u + 'px';
            document.getElementsByClassName('masque').container.style.top = v + 'px';
            x += 64;
            v -= 10;
            if (document.getElementsByClassName('masque').container.style.top == 265 + "px") {
                clearInterval(monter2);
              //  y = -520;
                var descente2 = setInterval(function () {
                    document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
                    document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
                    document.getElementsByClassName('masque').container.style.left = u + 'px';
                    document.getElementsByClassName('masque').container.style.top = v + 'px';
                    x -= 64;
                    v += 10;
                    if (document.getElementsByClassName('masque').container.style.top == 305 + "px") {
                        clearInterval(descente2);
                        y = -64;
                        document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
                        document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
                        document.getElementsByClassName('masque').container.style.left = u + 'px';
                        document.getElementsByClassName('masque').container.style.top = v + 'px';
                    }

                }, 1000/30);
            }


        }, 1000/30);

    };//SAUT 2

    var saut = function () {


        var monter = setInterval(function () {
            document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
            document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
            document.getElementsByClassName('masque').container.style.left = u + 'px';
            document.getElementsByClassName('masque').container.style.top = v + 'px';
            x -= 64;
            v -= 10;
            if (document.getElementsByClassName('masque').container.style.top == 255 + "px") {
                clearInterval(monter);
                var descente = setInterval(function () {
                    document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
                    document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
                    document.getElementsByClassName('masque').container.style.left = u + 'px';
                    document.getElementsByClassName('masque').container.style.top = v + 'px';
                    x += 64;
                    v += 10;
                    if (document.getElementsByClassName('masque').container.style.top == 305 + "px") {
                        clearInterval(descente);
                        y = -64;
                        document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
                        document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
                        document.getElementsByClassName('masque').container.style.left = u + 'px';
                        document.getElementsByClassName('masque').container.style.top = v + 'px';
                    }

                }, 1000 / 30);
            }


        }, 1000 / 30);

    };//FIN FONCTION SAUT

    window.onkeydown = function (event) {
        var code = event.keyCode;

        switch (code) {

            //instructions HAUT (jump)
            case 38:
                var echauffement = function () {
                    i = 0;
                    y = -64;
                    if (document.getElementsByClassName('sprite').contenu.style.transform == 'scaleX(-1)') {
                        x = -520;
                        saut2();
                    } else {
                        x = 0;
                        saut();
                    }

                };
                echauffement();
                break;

            //instructions DROITE
            case 39:
                i = 0;
                x -= 64
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
                i = 0;
                y = 0;
                document.getElementsByClassName('sprite').contenu.style.transform = 'scaleX(-1)';
                document.getElementsByClassName('sprite').contenu.trans = x + 'px';
                document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
                document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
                document.getElementsByClassName('masque').container.style.left = u + 'px';
                document.getElementsByClassName('masque').container.style.top = v + 'px';
                x -= 64;
                u -= 2;
                if (x < - 576) {
                    x = -64;
                    document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
                    document.getElementsByClassName('masque').container.style.left = u + 'px';
                    x -= 64;
                    u -= 2;
                }
                break;

            //instructions BAS >> il tire
            case 40:
                if (document.getElementsByClassName('sprite').contenu.style.transform == 'scaleX(-1)') {
                    document.getElementsByClassName('sprite').contenu.style.top = '192px';

                    var tableauDanse = [-576, -512, -448, -384];
                } else {
                    var tableauDanse = [0, -64, -128, -192];
                }
                y = -129;
                document.getElementsByClassName('sprite').contenu.style.left = tableauDanse[i] + 'px';
                document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
                document.getElementsByClassName('masque').container.style.left = u + 'px';
                document.getElementsByClassName('masque').container.style.top = v + 'px';
                i++;
                if (i == 4) { i = 0 };
                break;
        };

    };

    var x = 0;
    var y = 0;
    var u = 0;
    var v = 315;
    var i = 0;

    document.getElementsByClassName('masque').container.style.left = u + 'px';
    document.getElementsByClassName('masque').container.style.top = v + 'px';
    document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
    document.getElementsByClassName('sprite').contenu.style.top = y + 'px';


    document.getElementsByClassName('masque').container.style.width = 64 + 'px';
    document.getElementsByClassName('masque').container.style.height = 64 + 'px';
    document.getElementsByClassName('sprite').contenu.style.height = 192 + 'px';
    document.getElementsByClassName('sprite').contenu.style.width = 640 + 'px';

};