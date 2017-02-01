var skillAnimation = function () {
    divSkills = document.createElement('div');
    divSkills.setAttribute('id', 'containerSkills');
    divSkills.setAttribute('class', 'masqueSkills');
    divSkills.style.top = 470 + 'px';
    divSkills.style.left = document.getElementById('fondAnime1').clientWidth + 'px';
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
    document.getElementsByClassName('spriteSkills').contenuSkills.style.left = '0px';
    document.getElementsByClassName('spriteSkills').contenuSkills.style.top = '0px';


    //ANIMATION SKILLS
    var posXSkills = parseInt(document.getElementsByClassName('masqueSkills').containerSkills.style.left);

    var t = 0;
    var animationSkills = setInterval(function () {
        document.getElementsByClassName('spriteSkills').contenuSkills.style.left = t + 'px';
        document.getElementsByClassName('masqueSkills').containerSkills.style.left = posXSkills + 'px';
        t -= 64;
        posXSkills -= 32;
        if (t < -128) {
            t = 0;
        }

        //COLLISION
        if (posXSkills <= parseInt(document.getElementsByClassName('masque').container.style.left) + 32   && posXSkills >= parseInt(document.getElementsByClassName('masque').container.style.left) &&
            parseInt(document.getElementsByClassName('masque').container.style.top) === parseInt(document.getElementsByClassName('masqueSkills').containerSkills.style.top)) {
                key = false;
            clearInterval(animationSkills);
            document.body.children[1].children[0].removeChild(document.body.children[1].children[0].children[3]);
            x = 0;
            y = -192;
            var die = setInterval(function () {
                document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
                document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
                x -= 64;
                if (x < -448) {
                    clearInterval(die);
                    //APPARITION GAME OVER
                    divGameOver = document.createElement('div');
                    divGameOver.setAttribute('class', 'gameOver');
                    divGameOver.style.height = 400 + 'px';
                    divGameOver.style.width = 300 + 'px';
                    divGameOver.style.position = 'absolute';
                    divGameOver.style.top = '190px';
                    divGameOver.style.left = '500px';
                    gameOver = document.createElement('img');
                    gameOver.src = 'img/gameOver.jpg';
                    divGameOver.appendChild(gameOver);
                    document.body.children[1].children[0].appendChild(divGameOver);

                    //APPARITION BOUTON REJOUER
                    document.getElementById('replay').style.display = 'inline';
                }
            }, 3000 / 30);
        }


        if (posXSkills <= 150) {
            clearInterval(animationSkills);
            document.body.children[1].children[0].removeChild(divSkills);

            //APPARITION GEM 
            divGem = document.createElement('div');
            divGem.setAttribute('class', 'gem01');
            divGem.style.height = 64 + 'px';
            divGem.style.width = 64 + 'px';
            divGem.style.position = 'absolute';
            divGem.style.top = '490px';
            divGem.style.left = '472px';
            gem = document.createElement('img');
            gem.src = 'img/gem01.png';
            document.body.children[1].children[0].appendChild(divGem);
            divGem.appendChild(gem);


        }

        



    }, 3000 / 30);

};

