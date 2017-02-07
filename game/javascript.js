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
                this.posMasqueX = 100;
                this.posMasqueY = 470;
                this.posSpriteX = 0;
                this.posSpriteY = 0;
                action = function () {
                    
                }
            }
        }
})