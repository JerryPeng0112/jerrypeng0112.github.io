window.onload = function() {
    var fadeOutDuration = 1000;
    fadeOut($('div#preloader'), fadeOutDuration);
    setTimeout(function() {
        $('body').removeClass('stop-scrolling');
    }, fadeOutDuration);
}

$(function() {
    $('body').addClass('stop-scrolling');
});
