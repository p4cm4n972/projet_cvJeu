var skillAnimation02 = function () {
    divSkills02 = document.createElement('div');
    divSkills02.setAttribute('id', 'containerSkills02');
    divSkills02.setAttribute('class', 'masqueSkills02');
    divSkills02.style.top = 470 + 'px';
    divSkills02.style.left = document.getElementById('fondAnime1').clientWidth + 'px';
    skills02 = document.createElement('img');
    skills02.src = 'img/bullet02.png';
    document.body.children[1].children[0].appendChild(divSkills02);
    divSkills02.appendChild(skills02);
    document.getElementsByClassName('masqueSkills02').containerSkills02.style.height = 64 + 'px';
    document.getElementsByClassName('masqueSkills02').containerSkills02.style.width = 64 + 'px';
    document.getElementsByClassName('masqueSkills02').containerSkills02.style.overflow = 'hidden';
    document.getElementsByClassName('masqueSkills02').containerSkills02.style.position = 'absolute';


    //ANIMATION SKILLS
    var posXSkills02 = parseInt(document.getElementsByClassName('masqueSkills02').containerSkills02.style.left);

    var animationSkills02 = setInterval(function () {
        document.getElementsByClassName('masqueSkills02').containerSkills02.style.left = posXSkills02 + 'px';
        posXSkills02 -= 32;

        //COLLISION
        if (posXSkills02 <= parseInt(document.getElementsByClassName('masque').container.style.left) + 32 && posXSkills02 >= parseInt(document.getElementsByClassName('masque').container.style.left) &&
            parseInt(document.getElementsByClassName('masque').container.style.top) === parseInt(document.getElementsByClassName('masqueSkills02').containerSkills02.style.top)) {
            clearInterval(animationSkills02);
            document.body.children[1].children[0].removeChild(divSkills02);
            x = 0;
            y = -192;
            var die02 = setInterval(function () {
                document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
                document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
                x -= 64;
                if (x < -448) {
                    clearInterval(die02);
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
            key = false;

        }


        if (posXSkills02 < 150) {
            clearInterval(animationSkills02);
            document.body.children[1].children[0].removeChild(divSkills02);

            //APPARITION GEM 
            divGem02 = document.createElement('div');
            divGem02.setAttribute('class', 'gem02');
            divGem02.style.height = 64 + 'px';
            divGem02.style.width = 64 + 'px';
            divGem02.style.position = 'absolute';
            divGem02.style.top = 490 + 'px';
            divGem02.style.left = 720 + 'px';
            gem02 = document.createElement('img');
            gem02.src = 'img/gem02.png';
            divGem02.appendChild(gem02);
            document.body.children[1].children[0].appendChild(divGem02);




        }



    }, 3000 / 30);

};

