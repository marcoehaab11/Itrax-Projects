$(document).ready(function() {
    //Slider
    $('.headerslider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });



    //Dropdown 
    $('.dropdown').hover(function() {
        $('.dropdown-menu').slideToggle(500);
    });

    //Scroll
    $(window).scroll(function() {
        let s = $(window).scrollTop();
        if (s > 100) {
            $("nav").addClass("bgw");

        } else {
            $("nav").removeClass("bgw")
        }
    });

    //Counter
    $('#example').countdown({
        date: '12/24/2021 23:59:59'
    }, function() {
        alert('Merry Christmas!');
    });
});