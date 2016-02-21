$(document).ready(function () {
    $('.trailer').css('top', (window.innerHeight / 2) - ($('.trailer').height() / 2));
    
    $('.trailer-button').click(function (e) {
        $('.trailer-overlay').toggleClass('hidden');
        
        e.preventDefault();
    })
    
    $('.trailer-overlay').click(function (e) {
        $('.trailer-overlay').toggleClass('hidden');
    })
})