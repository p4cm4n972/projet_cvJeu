    var skillAnimation = function () {
    var parent = document.body.children[1].children[0];
    divSkills01 = document.createElement('div');
    divSkills01.setAttribute('id', 'containerSkills');
    divSkills01.setAttribute('class', 'masqueSkills');
    divSkills01.style.top = "490px";
    divSkills01.style.left = "1080px";
    skills01 = document.createElement('img');
    skills01.src = 'img/sheet03.png';
    skills01.setAttribute('id', 'contenuSkills');
    skills01.setAttribute('class', 'spriteSkills');
    divSkills01.appendChild(skills01);
    parent.appendChild(divSkills01);
    document.getElementsByClassName('masqueSkills').containerSkills.style.left = divSkills01.style.left;
    document.getElementsByClassName('masqueSkills').containerSkills.style.top = divSkills01.style.top;
    document.getElementsByClassName('masqueSkills').containerSkills.style.height = 64 + "px";
    document.getElementsByClassName('masqueSkills').containerSkills.style.width = 64 + "px";
    document.getElementsByClassName('masqueSkills').containerSkills.style.overflow = 'hidden';
    document.getElementsByClassName('masqueSkills').containerSkills.style.position = 'absolute';

    //document.getElementsByClassName('spriteSkills').contenuSkills.style.left = 0 + "px";
    //document.getElementsByClassName('spriteSkills').contenuSkills.style.top = 0 + "px";
    document.getElementsByClassName('spriteSkills').contenuSkills.style.position = 'absolute';

    //ANIMATION SKILLS
    var t = 0;
    var z = parseFloat(document.getElementsByClassName('masqueSkills').containerSkills.style.left)
    var o = parseFloat(document.getElementsByClassName('masqueSkills').containerSkills.style.top)
    var animationSkills01 = setInterval(function () {
        document.getElementsByClassName('spriteSkills').contenuSkills.style.left = t + "px";
        document.getElementsByClassName('masqueSkills').containerSkills.style.left = z + "px";
        document.getElementsByClassName('masqueSkills').containerSkills.style.top = o + "px";
        t -= 64;
        z -= 20;
        if (t < -128) {
            t = 0;
        }

        //COLLISION
        if (z <= u && document.getElementsByClassName('masque').container.style.top == 470 + "px") {
            clearInterval(animationSkills01);
            $('.masqueSkills').remove();
            x = 0;
            y = -192;
            var die = setInterval( function () {
            document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
            document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
            x -= 64;
            },3000 / 30 );
            if ( x == -256) {
                clearInterval(die);

            var parent = document.body.children[1].children[0];
             divGameOver = document.createElement('div');
             divGameOver.setAttribute('class', 'gameOver');
             divGameOver.style.height = 64 + "px";
             divGameOver.style.width = 64 + "px";
             divGameOver.style.position = "absolute";
             divGameOver.style.top = "250px";
             divGameOver.style.left = "500px";
             gameOver = document.createElement('img');
             gameOver.src = 'img/gameOver.jpg';
             divGameOver.appendChild(gameOver);
             parent.appendChild(divGameOver);

                
            }
        }

        if (z < 250) {
            clearInterval(animationSkills01);
            $('.masqueSkills').remove();

            //APPARITION GEM 
             var parent = document.body.children[1].children[0];
             divGem01 = document.createElement('div');
             divGem01.setAttribute('class', 'gem01');
             divGem01.style.height = 64 + "px";
             divGem01.style.width = 64 + "px";
             divGem01.style.position = "absolute";
             divGem01.style.top = "490px";
             divGem01.style.left = "1080px";
             gem01 = document.createElement('img');
             gem01.src = 'img/gem01.png';
             divGem01.appendChild(gem01);
             parent.appendChild(divGem01);

        }


    }, 3000 / 30);
};


