$(document).ready(function () { 
    $( ".navbar-toggler" ).click(function() {
        $("#headerInfo").toggle();
      });
    

     
      var num = 100; //number of pixels before modifying styles

        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > num && $(window).width() > 950) {
                $('.navbar').addClass('fixed');
            } else {
                $('.navbar').removeClass('fixed');
            }
        });

        $( window ).resize(function() {
          if ($(window).width() < 900) {

            $('.news').hide();
        
          } else {
        
            $('.news').show();
        
            }
        });
        
  

})
