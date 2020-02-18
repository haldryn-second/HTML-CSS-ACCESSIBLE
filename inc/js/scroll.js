if ($(window).width() <= 620) {

    $("#enl_art1").click(function() {
        var x = $("#art1").offset();
        $('html, body').animate({ scrollTop: x.top - 80 }, 'slow');
    });
    $("#enl_art2").click(function() {
        var x = $("#art2").offset();
        $('html, body').animate({ scrollTop: x.top - 80 }, 'slow');
    });
    $("#enl_art3").click(function() {
        var x = $("#art3").offset();
        $('html, body').animate({ scrollTop: x.top - 80 }, 'slow');
    });
    $("#enl_art4").click(function() {
        var x = $("#art4").offset();
        $('html, body').animate({ scrollTop: x.top - 80 }, 'slow');
    });
    $("#enl_art5").click(function() {
        var x = $("#art5").offset();
        $('html, body').animate({ scrollTop: x.top - 80 }, 'slow');
    });
    $("#enl_art6").click(function() {
        var x = $("#art6").offset();
        $('html, body').animate({ scrollTop: x.top - 80 }, 'slow');
    });
} else {

    $("#enl_art1").click(function() {
        var x = $("#art1").offset();
        $('html, body').animate({ scrollTop: x.top - 100 }, 'slow');
    });
    $("#enl_art2").click(function() {
        var x = $("#art2").offset();
        $('html, body').animate({ scrollTop: x.top - 100 }, 'slow');
    });
    $("#enl_art3").click(function() {
        var x = $("#art3").offset();
        $('html, body').animate({ scrollTop: x.top - 100 }, 'slow');
    });
    $("#enl_art4").click(function() {
        var x = $("#art4").offset();
        $('html, body').animate({ scrollTop: x.top - 100 }, 'slow');
    });
    $("#enl_art5").click(function() {
        var x = $("#art5").offset();
        $('html, body').animate({ scrollTop: x.top - 100 }, 'slow');
    });
    $("#enl_art6").click(function() {
        var x = $("#art6").offset();
        $('html, body').animate({ scrollTop: x.top - 100 }, 'slow');
    });
}