$("#parriba").css("display", "none");

$(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
        $("#parriba").fadeIn("slow");
    } else {
        $("#parriba").fadeOut("slow");
    }
});

$("#parriba").click(function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
});