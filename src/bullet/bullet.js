var bullet = function () {
        var parent = document.body.children[1].children[0];
        bullet01 = document.createElement('img');
        bullet01.src = 'img/bullet01.png';
        bullet01.width = 64;
        bullet01.height = 64;
        divBullet01 = document.createElement('div');
        divBullet01.height = 64;
        divBullet01.width = 64;
        divBullet01.style.position = 'absolute';
        divBullet01.style.top = document.getElementsByClassName('masque').container.style.top;
        divBullet01.style.left = parseFloat(document.getElementsByClassName('masque').container.style.left) + 64 + "px";
        divBullet01.appendChild(bullet01);
        parent.appendChild(divBullet01);

         var bulletAnimation = setInterval(function () {
                    var z = 0;
                    z += 20;
                    divBullet01.style.left = parseFloat(divBullet01.style.left) + z + 'px';
                    if (divBullet01.style.left >= 850 + "px") {
                        clearInterval(bulletAnimation);
                        explosion();
                    }

                }, 4000 / 30);
    }
    var explosion = function () {
        var parent = document.body.children[1].children[0];
        divExplosion01 = document.createElement('div');
        divExplosion01.setAttribute('id', 'containerExplosion');
        divExplosion01.setAttribute('class', 'masqueExplosion');
        divExplosion01.height = 64;
        divExplosion01.width = 64;
        divExplosion01.style.position = 'absolute';
        divExplosion01.style.overflow = 'hidden'
        divExplosion01.style.top = divBullet01.style.top;
        divExplosion01.style.left = divBullet01.style.left
        explosion01 = document.createElement('img');
        explosion01.src = 'img/sheet02.png';
        explosion01.width = 64;
        explosion01.height = 64;
        explosion01.style.left = -128 + "px";
        explosion01.setAttribute('id', 'contenuExplosion');
        explosion01.setAttribute('class', 'spriteExplosion');
        divExplosion01.appendChild(explosion01);
        parent.appendChild(divExplosion01);
    }