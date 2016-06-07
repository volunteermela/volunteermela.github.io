//By Michelle Yin
$("#brand-logo").click(function() {
    $('html,body').animate({
         scrollTop: $('.landing-container').offset().top - 50
    }, 500);
});
$("#mission").click(function() {
    $('html,body').animate({
         scrollTop: $('.about-header').offset().top - 62
    }, 500);
});
$("#coaches").click(function() {
    $('html,body').animate({
         scrollTop: $('.coaches-container').offset().top - 62
    }, 500);
});
$("#schedule").click(function() {
    $('html,body').animate({
         scrollTop: $('.schedule-container').offset().top - 62
    }, 500);
});
$("#contact").click(function() {
    $('html,body').animate({
         scrollTop: $('.page-footer').offset().top - 62
    }, 500);
});