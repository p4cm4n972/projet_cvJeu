$(document).ready( function deplace() {
        $('.fond').animate({ left: '-=940'},
        1000, 'linear',
        function (){
            $('.fond').css('left',0);
            deplace();
        });
})