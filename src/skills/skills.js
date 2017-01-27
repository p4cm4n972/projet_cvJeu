console.log('skills');


var skillAnimation = function () {
    divSkills = document.createElement('div');
    divSkills.setAttribute('id', 'containerSkills');
    divSkills.setAttribute('class', 'masqueSkills');
    divSkills.style.top = '470px';
    divSkills.style.left = '1080px';
    divSkills.style.border = 'solid black 1px';
    skills01 = document.createElement('img');
    skills01.src = 'img/sheet03.png';
    skills01.setAttribute('id', 'contenuSkills');
    skills01.setAttribute('class', 'spriteSkills');
    document.body.children[1].children[0].appendChild(divSkills);
    divSkills.appendChild(skills01);
    document.getElementsByClassName('masqueSkills').containerSkills.style.height = 64 + 'px';
    document.getElementsByClassName('masqueSkills').containerSkills.style.width = 64 + 'px';
    document.getElementsByClassName('masqueSkills').containerSkills.style.overflow = 'hidden';
    document.getElementsByClassName('masqueSkills').containerSkills.style.position = 'absolute';
    document.getElementsByClassName('spriteSkills').contenuSkills.style.position = 'absolute';

    //document.getElementsByClassName('spriteSkills').contenuSkills.style.left = 0 + 'px';
    //document.getElementsByClassName('spriteSkills').contenuSkills.style.top = 0 + 'px';

    //ANIMATION SKILLS
    var z = parseFloat(document.getElementsByClassName('masqueSkills').containerSkills.style.left)
    var o = parseFloat(document.getElementsByClassName('masqueSkills').containerSkills.style.top)
    var animationSkills = setInterval(function () {
        document.getElementsByClassName('spriteSkills').contenuSkills.style.left = t + 'px';
        document.getElementsByClassName('masqueSkills').containerSkills.style.left = z + 'px';
        document.getElementsByClassName('masqueSkills').containerSkills.style.top = o + 'px';
        t -= 64;
        z -= 20;
        if (t < -128) {
            t = 0;
        }

        //COLLISION

        if (document.getElementsByClassName('masqueSkills').containerSkills.style.left == document.getElementsByClassName('masque').container.style.left && document.getElementsByClassName('masque').container.style.top == 470 + 'px') {
            clearInterval(animationSkills);
            document.body.children[1].children[0].removeChild(divSkills);
            x = 0;
            y = -192;
            var die = setInterval(function () {
                document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
                document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
                x -= 64;
            }, 3000 / 30);
            if (x == -256) {
                clearInterval(die);

                //APPARITION GAME OVER

                divGameOver = document.createElement('div');
                divGameOver.setAttribute('class', 'gameOver');
                divGameOver.style.height = 64 + 'px';
                divGameOver.style.width = 64 + 'px';
                divGameOver.style.position = 'absolute';
                divGameOver.style.top = '250px';
                divGameOver.style.left = '500px';
                gameOver = document.createElement('img');
                gameOver.src = 'img/gameOver.jpg';
                divGameOver.appendChild(gameOver);
                document.body.children[1].children[0].appendChild(divGameOver);


            }
        }

        if (z < 250) {
            clearInterval(animationSkills);
            document.body.children[1].children[0].removeChild(divSkills);

            //APPARITION GEM 



            divGem = document.createElement('div');
            divGem.setAttribute('class', 'gem01');
            divGem.style.height = 64 + 'px';
            divGem.style.width = 64 + 'px';
            divGem.style.position = 'absolute';
            divGem.style.top = '490px';
            divGem.style.left = '1080px';
            gem = document.createElement('img');
            gem.src = 'img/gem01.png';
            divGem.appendChild(gem);
            document.body.children[1].children[0].appendChild(divGem);

        }


    }, 3000 / 30);
};


