$(document).ready(function deplace() {
    $('.fond').animate({ left: '-=1850' },
        5000, 'linear',
        function () {
            $('#fondAnimate1').css('left', 0);
            deplace();
        });

     var MonPersonnage = function (x, y, u, v) {
        this.posSpriteX = x;
        this.posSpriteY = y;
        this.posMasqueX = u;
        this.posMasqueY = v;
        this.action = function () {
            $('.masque').css('left', this.posMasqueX + 'px');
            $('.masque').css('top', this.posMasqueY + 'px');
            $('.sprite').css('left', this.posSpriteX + 'px');
            $('.sprite').css('top', this.posSpriteY + 'px');
        };
        this.move = function moving () {
            this.posSpriteX -= 64;
            requestAnimationFrame(moving);
        };
        
        };
    var walk = new MonPersonnage(0,0,100,490);
    var fly = new MonPersonnage(0,-256,100,400);
    var gun = new MonPersonnage(0,-128,100,490);
    var death = new MonPersonnage(0,-128,100,490);
    

    fly.action();
})