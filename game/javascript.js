$(document).ready( function() {
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
        
        };
    var walk = new MonPersonnage(0,0,100,490);
    var fly = new MonPersonnage(0,-256,100,400);
    var gun = new MonPersonnage(0,-128,100,490);
    var death = new MonPersonnage(0,-128,100,490);

  
    var f = 0;
    var animationFond = function (){
        $('.fond').css('left',f);
        f -= 10;
        if (f == -1850) {f = 0};
        requestAnimationFrame(animationFond);
    }
        
    
var i = 0;
var animationPerso = setInterval(function () {
            $('.sprite').css('left', i );
        i -= 64;
        if (i == -384) {i = 0}
            }, 3000 / 30);

    fly.action();
    animationFond();

    });
    

