window.onload = function () {

    window.onkeydown = function (event) {

        var code = event.keyCode;

        switch (code) {

            //instructions HAUT (jump)
            case 38:
                y = 0;
                document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
                document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
                document.getElementsByClassName('masque').container.style.left = u + 'px';
                document.getElementsByClassName('masque').container.style.top = v + 'px';
                x -= 10;
                v -= 2;
                if (x < -448) {
                    x = -64;
                    document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
                    document.getElementsByClassName('masque').container.style.left = u + 'px';
                    x -= 64;
                    v -= 2;
                }
                break;

            //instructions DROITE
            case 39:
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
                y = 0;
                document.getElementsByClassName('sprite').contenu.style.transform = 'scaleX(-1)';
                document.getElementsByClassName('sprite').contenu.trans = x + 'px';
                document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
                document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
                document.getElementsByClassName('masque').container.style.left = u + 'px';
                document.getElementsByClassName('masque').container.style.top = v + 'px';
                x -= 64;
                u -= 2;
                if (x < -448) {
                    x = -64;
                    document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
                    document.getElementsByClassName('masque').container.style.left = u + 'px';
                    x -= 64;
                    u -= 2;
                }
                break;

            //instructions BAS >> il tire
            case 40:
            y = -129;
               var tableauDanse = [0,-64,-128,-192];
            document.getElementsByClassName('sprite').contenu.style.left = tableauDanse[i] + 'px';
            document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
            document.getElementsByClassName('masque').container.style.left = u + 'px';
            document.getElementsByClassName('masque').container.style.top = v + 'px';
            i++;
            if(i == 3){i=0};
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