window.onload = function () {
        'use strict';
        //  document.getElementById('mySound').play();
       

        window.onkeydown = function (event) {
                var code = event.keyCode;

                switch (code) {

                        case 37://LEFT ARROW - MOUVEMENT VERS LA GAUCHE
                                moveLeft();
                                break;

                        case 39://RIGHT ARROW - MOUVEMENT VERS LA DROITE
                                moveRight();
                                break;


                        case 38: // UP ARROW - ANIMATION SAUT
                                if (key == true) {
                                        initSaut();
                                };
                                break;
                        case 32:// SPACEBAR - ANIMATION TIR 
                                if (key == true) {
                                        initTire();
                                };
                                break;
                }

        };






};