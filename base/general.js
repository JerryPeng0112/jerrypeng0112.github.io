var fadeIn = function fadeIn(el, duration, opacity=1) {
    el.css('opacity', 0);
    el.show();

    var start = null;
    var tick = function tick(time) {
        if (!start)
            start = time;
        var progress = time - start;
        if (progress > duration) {
            el.css('opacity', opacity);
            return;
        }
        var nextOpacity = opacity * (progress / duration);
        el.css('opacity', nextOpacity);
        window.requestAnimationFrame(tick);
    }
    window.requestAnimationFrame(tick);
}

var fadeOut = function fadeOut(el, duration) {
    var opacity = el.css('opacity');

    var start = null;
    var tick = function tick(time) {
        if (!start)
            start = time;
        var progress = time - start;
        if (progress > duration) {
            el.css('opacity', 0);
            el.hide();
            return;
        }
        var nextOpacity = opacity * (1 - progress / duration);
        el.css('opacity', nextOpacity);
        window.requestAnimationFrame(tick);
    }
    window.requestAnimationFrame(tick);
}

$(function() {
    var navBtn = $('div#nav-btn');
    var navBackdrop = $('div#nav-backdrop');
    var navbar = $('nav#navbar');
    var pageContent = $('div#page');

    navBtn.on('mouseover', function() {
        if (navbar.css('left') === '-300px') {
            navbar.addClass('open');
            fadeIn(navBackdrop, 400, 0.4);
            pageContent.css('transition-delay', '100ms');
            pageContent.addClass('shift-right');
        }
    });

    navBackdrop.on('mouseover', function() {
        navbar.removeClass('open');
        fadeOut(navBackdrop, 400);
        pageContent.css('transition-delay', '0ms');
        pageContent.removeClass('shift-right');
    });
});
