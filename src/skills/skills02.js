var skillAnimation02 = function () {
    divSkills02 = document.createElement('div');
    divSkills02.setAttribute('id', 'containerSkills02');
    divSkills02.setAttribute('class', 'masqueSkills02');
    divSkills02.style.top = 470 + 'px';
    divSkills02.style.left = 1080 + 'px';
    skills02 = document.createElement('img');
    skills02.src = 'img/sheet03.png';
    skills02.setAttribute('id', 'contenuSkills02');
    skills02.setAttribute('class', 'spriteSkills02');
    document.body.children[1].children[0].appendChild(divSkills02);
    divSkills02.appendChild(skills02);
    document.getElementsByClassName('masqueSkills02').containerSkills02.style.height = 64 + 'px';
    document.getElementsByClassName('masqueSkills02').containerSkills02.style.width = 64 + 'px';
    document.getElementsByClassName('masqueSkills02').containerSkills02.style.overflow = 'hidden';
    document.getElementsByClassName('masqueSkills02').containerSkills02.style.position = 'absolute';
    document.getElementsByClassName('spriteSkills02').contenuSkills02.style.position = 'absolute';
    document.getElementsByClassName('spriteSkills02').contenuSkills02.style.left = '0px';
    document.getElementsByClassName('spriteSkills02').contenuSkills02.style.top = '0px';


    //ANIMATION SKILLS
    var posXSkills02 = parseInt(document.getElementsByClassName('masqueSkills02').containerSkills02.style.left);

    var t = 0;
    var animationSkills02 = setInterval(function () {
        document.getElementsByClassName('spriteSkills02').contenuSkills02.style.left = t + 'px';
        document.getElementsByClassName('masqueSkills02').containerSkills02.style.left = posXSkills02 + 'px';
        t -= 64;
        posXSkills02 -= 32;
        if (t < -128) {
            t = 0;
        }

        //COLLISION
        if (parseInt(document.getElementsByClassName('masque').container.style.left) >= posXSkills02 &&
            parseInt(document.getElementsByClassName('masque').container.style.top) == parseInt(document.getElementsByClassName('masqueSkills02').containerSkills02.style.top)) {
                key = false;
            clearInterval(animationSkills02);
            document.body.children[1].children[0].removeChild(divSkills02);
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


        if (posXSkills02 <= 250) {
            clearInterval(animationSkills02);
            document.body.children[1].children[0].removeChild(divSkills02);

            //APPARITION GEM 
            divGem = document.createElement('div');
            divGem.setAttribute('class', 'gem01');
            divGem.style.height = 64 + 'px';
            divGem.style.width = 64 + 'px';
            divGem.style.position = 'absolute';
            divGem.style.top = '490px';
            divGem.style.left = '560px';
            gem = document.createElement('img');
            gem.src = 'img/gem02.png';
            divGem.appendChild(gem);
            document.body.children[1].children[0].appendChild(divGem);


        }



    }, 3000 / 30);

};
