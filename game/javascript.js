$(document).ready( function deplace() {
        $('.fond').animate({ left: '-=1850'},
        5000, 'linear',
        function (){
            $('#fondAnimate1').css('left',0);
            deplace();
        });
        
        var perryPc = {
            posMasqueX: 100,
            posMasqueY: 400,
            posSpriteX: 0,
            posSpriteY: 0,
            walk : function () {
                this.posMasqueX = '100px';
                this.posMasqueY = '470px';
                this.posSpriteX = '0px';
                this.posSpriteY = '0px';
                action = function () {
                    $('.sprite').css('left',this.posSpriteX);
                    $('.sprite').css('top',this.posSpriteY);
                    $('.sprite').animate({left:'-=64'},
                    4000,'linear',
                    function (){
                        $('.sprite').css('left',-512);
                        action();
                    })
                }
            }
        }
        perryPc.walk();
})