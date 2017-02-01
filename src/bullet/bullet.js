var explosion = function () {
    var parent = document.body.children[1].children[0];
    divExplosion01 = document.createElement('div');
    divExplosion01.setAttribute('id', 'containerExplosion');
    divExplosion01.setAttribute('class', 'masqueExplosion');
    divExplosion01.style.top = divBullet01.style.top;
    divExplosion01.style.left = divBullet01.style.left;
    explosion01 = document.createElement('img');
    explosion01.src = 'img/sheet02.png';
    explosion01.setAttribute('id', 'contenuExplosion');
    explosion01.setAttribute('class', 'spriteExplosion');
    divExplosion01.appendChild(explosion01);
    parent.appendChild(divExplosion01);
    document.getElementsByClassName('masqueExplosion').containerExplosion.style.left = divBullet01.style.left;
    document.getElementsByClassName('masqueExplosion').containerExplosion.style.top = divBullet01.style.top;
    document.getElementsByClassName('masqueExplosion').containerExplosion.style.height = 64 + 'px';
    document.getElementsByClassName('masqueExplosion').containerExplosion.style.width = 64 + 'px';
    document.getElementsByClassName('masqueExplosion').containerExplosion.style.overflow = 'hidden';
    document.getElementsByClassName('masqueExplosion').containerExplosion.style.position = 'absolute';

    document.getElementsByClassName('spriteExplosion').contenuExplosion.style.left = 0 + 'px';
    document.getElementsByClassName('spriteExplosion').contenuExplosion.style.top = 0 + 'px';
    document.getElementsByClassName('spriteExplosion').contenuExplosion.style.position = 'absolute';

       

    var x = 0;
    var animationExplosion = setInterval(function () {
        //AUDIO EXPLOSION 
        document.getElementById('soundExplosion').play();
        document.getElementsByClassName('spriteExplosion').contenuExplosion.style.left = x + 'px';
        x -= 64;
        if( x < -512) {
            clearInterval(animationExplosion);
            parent.removeChild(divExplosion01);
            
            key = true;
            
        }

    }, 3000 / 30);
};
var bullet = function () {
    var parent = document.body.children[1].children[0];
    bullet01 = document.createElement('img');
    bullet01.src = 'img/bullet01.png';
    bullet01.width = 64;
    bullet01.height = 64;
    divBullet01 = document.createElement('div');
    divBullet01.setAttribute('class', 'divBullet01');
    divBullet01.height = 64;
    divBullet01.width = 64;
    divBullet01.style.position = 'absolute';
    divBullet01.style.top = document.getElementsByClassName('masque').container.style.top;
    divBullet01.style.left = parseFloat(document.getElementsByClassName('masque').container.style.left) + 64 + "px";
    divBullet01.appendChild(bullet01);
    parent.appendChild(divBullet01);

        var q = 0;
        var divGem;
    var bulletAnimation = setInterval(function () {
        q += 20;
        divBullet01.style.left = parseFloat(divBullet01.style.left) + q + 'px';
        if (parseInt(divBullet01.style.left) >= (document.getElementById('fondAnime1').clientWidth - 64 )) {
            clearInterval(bulletAnimation);
            parent.removeChild(divBullet01);

            


            explosion();
        }

    }, 4000 / 30);
};