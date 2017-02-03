var moveRight = function () {
    x -= 64;
    y = 0;
     document.getElementById('talk').style.display = 'none';
    document.getElementById('instructions').style.display = 'none';
     
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
    if (document.getElementsByClassName('masque').container.style.left == 306 + "px") {

 document.getElementById('saute').style.left = parseInt(document.getElementsByClassName('masque').container.style.left) + 32 + 'px';
    document.getElementById('saute').style.top = parseInt(document.getElementsByClassName('masque').container.style.top) - 64 + 'px';
    document.getElementById('saute').style.position = 'absolute';
    document.getElementById('saute').style.display = 'inline';

        skillAnimation();
    }

    if (parseInt(divGem.style.left) <= parseInt(document.getElementsByClassName('masque').container.style.left) + 64 && parseInt(divGem.style.left) >= parseInt(document.getElementsByClassName('masque').container.style.left) && parseInt(divGem.style.top) == 470) {
       document.getElementsByClassName('gem01').gem01.style.display = 'none';
       document.getElementsByClassName('gem01').gem01.style.top = '0px';
        document.getElementById('soundCheck').play();

        document.getElementById('score').innerHTML = 'SCORE: 100';
        document.getElementById('cvSkills').style.display = 'inline';
        document.getElementById('next').style.display = 'inline';

        document.getElementById('cliques').style.left = parseInt(document.getElementsByClassName('masque').container.style.left) + 32 + 'px';
        document.getElementById('cliques').style.top = parseInt(document.getElementsByClassName('masque').container.style.top) - 64 + 'px';
        document.getElementById('cliques').style.position = 'absolute';
        document.getElementById('cliques').style.display = 'inline';

    }


    if (parseInt(divGem02.style.left) <= parseInt(document.getElementsByClassName('masque').container.style.left) + 64 && parseInt(divGem02.style.left) >= parseInt(document.getElementsByClassName('masque').container.style.left) && parseInt(divGem02.style.top) == 470) {
       document.getElementsByClassName('gem02').gem02.style.display = 'none';
       document.getElementsByClassName('gem02').gem02.style.top = '0px';
        document.getElementById('soundCheck').play();

        document.getElementById('score').innerHTML = 'SCORE: 200';
        document.getElementById('cvExp').style.display = 'inline';
        document.getElementById('next2').style.display = 'inline';

        document.getElementById('cliques').style.left = parseInt(document.getElementsByClassName('masque').container.style.left) + 32 + 'px';
        document.getElementById('cliques').style.top = parseInt(document.getElementsByClassName('masque').container.style.top) - 64 + 'px';
        document.getElementById('cliques').style.position = 'absolute';
        document.getElementById('cliques').style.display = 'inline';

    }

};

var moveLeft = function () {
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

};
