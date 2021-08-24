$(document).ready(function () {
    "use strict";
    $('.js-scrollTo').on('click', function () { // Au clic sur un Ã©lÃ©ment
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // DurÃ©e de l'animation (en ms)
        $('html, body').animate({ scrollTop: $(page).offset().top }, speed);// Go
        return false;
    });
});