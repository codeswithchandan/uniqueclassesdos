$(document).ready(function () {

    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    // $('.scrollToTop').click(function () {
    //     $('html, body').animate({ scrollTop: 0 }, 800);
    //     return false;
    // });

});

/* ..............................................
    BaguetteBox
    ................................................. */

baguetteBox.run('.tz-gallery', {
    animation: 'fadeIn',
    noScrollbars: true
});

jQuery(window).on("load",function() {
  jQuery(window).scroll(function() {
    var windowBottom = jQuery(this).scrollTop() + jQuery(this).innerHeight();
    jQuery(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = jQuery(this).offset().top + jQuery(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if (jQuery(this).css("opacity")==0) {jQuery(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if (jQuery(this).css("opacity")==1) {jQuery(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});
