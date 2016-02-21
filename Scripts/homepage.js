$(document).ready(function () {
    var body = $('body'),
        poster = $('.poster'),
        windowHeight = window.innerHeight;
    
    // increase poster width
    if (body.height() < windowHeight) {
        var height = body.height();
        
        while (height < (windowHeight - 10)) {
            poster.css('width', poster.width() + 1 + 'px');
            
            height = body.height();
        }
    }
    
    // increase poster width
    if (body.height() > windowHeight) {
        var height = body.height();
        
        while (height > (windowHeight - 10)) {
            poster.css('width', poster.width() - 1 + 'px');
            
            height = body.height();
        }
    }
})