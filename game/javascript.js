$(document).ready(function () {

    //TOUCHE PAD DEPLACEMENT DU PERSONNAGE
    $(document).keydown(function (event) {
        var upDown = parseInt($('.masque').css('top'));
        var leftRight = parseInt($('.masque').css('left'));
        switch (event.which) {
            case 38:
                $('.masque').css('top', upDown - 10 + 'px');
                break;
            case 40:
                $('.masque').css('top', upDown + 10 + 'px');
                break;
            case 39:
                $('.masque').css('left', leftRight + 10 + 'px');
                break;
            case 37:
                $('.masque').css('left', leftRight - 10 + 'px');
                break;
        }
    });
    //ANIMATION FOND
    var f = 0;
    var animationFond = function () {
        $('.fond').css('left', f);
        f -= 10;
        if (f == -950) { f = 0 };
        requestAnimationFrame(animationFond);
    }
    animationFond();


    //CONSTRUCTEUR DU PERSONNAGE               
    var MonPersonnage = function (x, y, u, v) {
        this.posSpriteX = x;
        this.posSpriteY = y;
        this.posMasqueX = u;
        this.posMasqueY = v;
        this.action = function () {
            $('.masque').css('left', this.posMasqueX);
            $('.masque').css('top', this.posMasqueY);
            $('.sprite').css('left', this.posSpriteX);
            $('.sprite').css('top', this.posSpriteY);
        };

    };
    var walk = new MonPersonnage(0, 0, 100, 490);
    var fly = new MonPersonnage(0, -256, 100, 400);
    var gun = new MonPersonnage(0, -128, 100, 490);
    var death = new MonPersonnage(0, -128, 100, 490);
//constructeur pieces
var coordsAleatoire = function (min, max) {
    var nb = min + (max - min + 1) * Math.random();
    return Math.floor(nb);
};
var Pieces = function () {
    this.posX = 950;
    this.posY = coordsAleatoire(64,536 );
    this.img = function () {setInterval(function () {$('.jeu').html('<div id="img1"><img  alt="pieces" src = "img/coin.png" width = "64px" height = "64px" style="position : absolute; left: this.posX; top: this.posY"/></div>')},3000/30);
}
}
var coin = new Pieces();


    //ANIMATION PERSONNAGE   
    var i = 0;
    var animationPerso = setInterval(function () {
        $('.sprite').css('left', i);
        i -= 64;
        if (i == -384) { i = 0 }
    }, 4000 / 30);






coin.img();
    fly.action();
});


