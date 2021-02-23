/**
* Template Name: Mentor - v2.0.0
* Template URL: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

!(function ($) {
    "use strict";

    // Preloader

    $(window).on('load', function () {

        if ($('#preloader').length) {
            $('#preloader').delay(100).fadeOut('slow', function () {
                $(this).remove();
            });
        }

        $('.videoModal').on('hidden.bs.modal', function (e) {
            // $('.iframeWithVideo').trigger('pause');
            $('.iframeWithVideo').each(function () {
                var el_src = $(this).attr("src");
                $(this).attr("src", el_src);
            });
            console.log("Okay")
        })
    });





    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });

    // Initi AOS
    $(window).on('load', function () {

        AOS.init({
            duration: 1000,
            once: true
        });
    });

})(jQuery);