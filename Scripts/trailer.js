$(document).ready(function () {
    $('.trailer').css('top', (window.innerHeight / 2) - ($('.trailer').height() / 2));

    var overlay = $('.trailer-overlay');

    // VIMEO API calls
    var iframe = $('.trailer')[0];
    var player = $f(iframe);
    var trailerProgress;

    // When the player is ready, add listeners for finish
    player.addEvent('ready', function () {
        player.addEvent('finish', onFinish);
        player.addEvent('playProgress', onPlayProgressUpdate);

        if ($(iframe).attr('autoplay')) {
            overlay.fadeIn();
            player.api('play'); // open the trailer and play it when ready
        }
    });

    // as the player progresses update the trailer percent
    function onPlayProgressUpdate(e) {
        trailerProgress = e.percent;
    }

    // when the trailer is over, hide the trailer 
    function onFinish() {
        console.log('trailer finished');

        // we need a small delay for the "more videos" outro frame to finish displaying before hide the overlay otherwise it will still be there when we open it again
        setTimeout(function () {
            overlay.fadeOut();

            player.api('unload');

            trailerProgress = 0;
        }, 100);
    }

    $('.trailer-button').click(function (e) {
        e.preventDefault();

        overlay.fadeIn();

        if (trailerProgress) {
            console.log('trailer already started - no autoplay');

            return;
        }

        player.api('play');

        console.log('playing trailer');
    });

    overlay.click(function (e) {
        $(this).fadeOut();

        player.api('pause');

        console.log('player paused');
    });
})