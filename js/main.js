$(document).ready(function () {

    // Mobile menu js
    TweenLite.set('.navigation', {x: 0, xPercent: 100});

    let navAnimation = new TimelineLite({paused: true});

    navAnimation
        .to('.navigation', .3, {xPercent: 0})
        .staggerFrom('.navigation li', .3, {opacity: 0, x: 100}, .1);

    // Burger menu animation
    $('#nav-icon3').click(function () {
        $('.navigation-wrapper').addClass('nav-open');

        navAnimation.play();

    });
    $('.close-nav').click(function () {
        $('.navigation-wrapper').removeClass('nav-open');
        navAnimation.reverse();
    });


});
