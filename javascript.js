window.onload = function () {
        'use strict';
        document.getElementById('mySound').play();



        window.onkeydown = function (event) {
                var code = event.keyCode;

                switch (code) {

                        /*  case 37://LEFT ARROW - MOUVEMENT VERS LA GAUCHE
                                 moveLeft();
                                  break;*/

                        case 39://RIGHT ARROW - MOUVEMENT VERS LA DROITE
                                moveRight();
                                break;


                        case 38: // UP ARROW - ANIMATION SAUT
                                if (key == true) {
                                        initSaut();
                                }
                                break;
                        case 32:// SPACEBAR - ANIMATION TIR 
                                if (key == true) {
                                        initTire();
                                }
                                break;
                }

        };// KEYCODE

        if (u == 250 || 300) {
                document.getElementById('talk').style.left = parseInt(document.getElementsByClassName('masque').container.style.left) + 32 + 'px';
                document.getElementById('talk').style.top = parseInt(document.getElementsByClassName('masque').container.style.top) - 64 + 'px';
                document.getElementById('talk').style.position = 'absolute';
                document.getElementById('talk').style.display = 'inline';
        }






        //CLICK
        click = true;
        document.getElementById('skills').addEventListener('click', function () {
                if (click) {
                        document.getElementById('cvSkills').style.display = 'inline';
                        document.getElementById('cvExp').style.display = 'none';
                        document.getElementById('cvCursus').style.display = 'none';


                }
                if (click == false) {
                        document.getElementById('cvSkills').style.display = 'none';
                        return click = true;
                }
                click = false;
        });

        document.getElementById('exp').addEventListener('click', function () {
                if (click) {
                        document.getElementById('cvExp').style.display = 'inline';
                        document.getElementById('cvSkills').style.display = 'none';
                        document.getElementById('cvCursus').style.display = 'none';


                }
                if (click == false) {
                        document.getElementById('cvExp').style.display = 'none';
                        return click = true;
                }
                click = false;
        });
        document.getElementById('cursus').addEventListener('click', function () {
                if (click) {
                        document.getElementById('cvCursus').style.display = 'inline';
                        document.getElementById('cvSkills').style.display = 'none';
                        document.getElementById('cvExp').style.display = 'none';


                }
                if (click == false) {
                        document.getElementById('cvCursus').style.display = 'none';
                        return click = true;
                }
                click = false;
        });

        document.getElementById('replay').addEventListener('click', function () {
                window.location.reload();

        });

        document.getElementById('next').addEventListener('click', function () {
                document.getElementById('cvSkills').style.display = 'none';
                document.getElementById('next').style.display = 'none';
                document.getElementById('cliques').style.display = 'none';

                skillAnimation02();
        });

        document.getElementById('next2').addEventListener('click', function () {
                document.getElementById('cvExp').style.display = 'none';
                document.getElementById('next2').style.display = 'none';
                document.getElementById('cliques').style.display = 'none';

                skillAnimation03();

        });





};