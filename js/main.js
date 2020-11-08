

;(function($) {

   



          

      


       
   

    var popupGallery = function () {
        $('.light_box').each(function() {
            if ( $('a').hasClass('popup-gallery') ) {                
                 $(".popup-gallery").magnificPopup({
                    type: "image",
                    tLoading: "Loading image #%curr%...",
                    removalDelay: 600,
                    mainClass: "my-mfp-slide-bottom",
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        preload: [ 0, 1 ]
                    },
                    image: {
                        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
                    }
                });
            }
        });       
    }

   
    
    

   	// Dom Ready
	$(function() { 
        if ( matchMedia( 'only screen and (min-width: 991px)' ).matches ) {
            
        } 
                
        
        popupGallery();
      
   	});

})(jQuery);