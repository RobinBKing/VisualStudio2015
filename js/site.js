/**********/
/* Custom */
/**********/
(function ($) {
    $(function () {

        $('.button-collapse').sideNav();

        $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrain_width: false, // Does not change width of dropdown to that of the activator
            hover: true, // Activate on hover
            gutter: 0, // Spacing from edge
            belowOrigin: false, // Displays dropdown below the button
            alignment: 'left' // Displays dropdown with edge aligned to the left of button
        });

        //$('.carousel.carousel-slider').carousel({ full_width: true });

    }); // end of document ready
})(jQuery); // end of jQuery name space

//$(document).ready(function () {
//});