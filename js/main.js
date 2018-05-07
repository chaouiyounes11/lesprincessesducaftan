var $root = $('html, body');

$('a[href^="#references"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);

    return false;
});
