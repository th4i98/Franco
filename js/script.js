$(document).ready(function() {
    $('.nav-icon').click(function (e) { 
        e.preventDefault();
        $('.navbar-ul').addClass('active');
        $('.cover').addClass('active');
    });
    $('.cover').click(function (e) { 
        e.preventDefault();
        $('.navbar-ul').removeClass('active');
        $('.cover').removeClass('active');
    });

});