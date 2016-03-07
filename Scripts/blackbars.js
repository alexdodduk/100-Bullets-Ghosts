$(document).ready(function () {
    var bodyHeight = $('body').innerHeight();
    var windowHeight = window.innerHeight;

    if (bodyHeight > windowHeight) {

        var padding = 500;
        while (padding >= 100 && bodyHeight > windowHeight) {
            padding -= 1;
            $('body').css('padding-top', padding + 'px').css('padding-bottom', padding + 'px');

            bodyHeight = $('body').innerHeight();
        }
    } else {

        var padding = 0;
        while (bodyHeight < windowHeight - 20) {
            padding += 1;
            $('body').css('padding-top', padding + 'px').css('padding-bottom', padding + 'px');

            bodyHeight = $('body').innerHeight();
        }
    }
});