$(document).ready(function() {

    // Controls the slide in/out functionality of the menu

    var mobileNav = $('.mobile-nav'); // CSS Class of Nav Menu
    var navToggle = $('.nav-toggle'); // CSS Class of Toggle Button
    var content = $('#container'); // Site Container

    var isOpen = 0; // Is the menu open or closed?
    var menuWidth = $('.mobile-nav').css('width');
    var menuWidthInverse = "-" + menuWidth;

    $(content).click(function() {
        if (isOpen == 1) {
            $(mobileNav).animate({ 'right': -300 }, 300);
            $(mobileNav).removeClass('mobile-nav-active');
            $(content).animate({ 'left': 0 }, 300);
            $(navToggle).removeClass('fa-times');
            $(navToggle).addClass('fa-bars');
            $(navToggle).animate({ 'margin-right': 0 }, 300);
            isOpen--;
        }
    })


    $(navToggle).click(function() {

        if (isOpen == 0) {
            $(mobileNav).animate({ 'right': '0px' }, 300);
            $(mobileNav).addClass('mobile-nav-active');
            $(content).animate({ 'left': menuWidthInverse }, 300);
            $(navToggle).animate({ 'margin-right': 300 }, 300);
            $(navToggle).removeClass('fa-bars');
            $(navToggle).addClass('fa-times');
            isOpen++;
        } else {
            $(mobileNav).animate({ 'right': -300 }, 300);
            $(mobileNav).removeClass('mobile-nav-active');
            $(content).animate({ 'left': 0 }, 300);
            $(navToggle).animate({ 'margin-right': 0 }, 300);
            $(navToggle).removeClass('fa-times');
            $(navToggle).addClass('fa-bars');
            isOpen--;
        }

    });

    // Controls the nested menu behaviour

    var primaryLink = $('.mobile-nav ul li a');
    var subMenu = $('.mobile-nav ul li .sub-menu');

    $(primaryLink).click(function() {
        $(this).next().slideToggle(300);
    });

});