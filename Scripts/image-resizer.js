$(document).ready(function () {
    var body = $('body'),
        poster = $('.poster'),
        windowHeight = window.innerHeight;
    
    // increase poster width
    if (body.outerHeight() < windowHeight) {
        var height = body.outerHeight();
        
        while (height < (windowHeight - 10)) {
            poster.css('width', poster.width() + 1 + 'px');
            
            height = body.outerHeight();
        }
    }
    
    // increase poster width
    if (body.outerHeight() > windowHeight) {
        var height = body.outerHeight();
        
        while (height > (windowHeight - 10)) {
            poster.css('width', poster.width() - 1 + 'px');
            
            height = body.outerHeight();
        }
    }
})