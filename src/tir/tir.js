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

                bullet();
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