(function($) {

	"use strict";



if ($('.sponsors-carousel-3slider').length) {
		$('.sponsors-carousel-3slider').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			dots:false,
			smartSpeed: 500,
			autoplay: false,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				
			},
				450:{
					items:2
				},
				
				600:{
					items:3
				},
				800:{
					items:3
				},
				1024:{
					items:3
				},
				1200:{
					items:4
				}
			}
		});    		
	}
	
	
	

if ($('.sponsors-carousel-4slider').length) {
		$('.sponsors-carousel-4slider').owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			dots:true,
			smartSpeed: 500,
			autoplay: false,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}




if ($('.sponsors-carousel-5slider').length) {
		$('.sponsors-carousel-5slider').owlCarousel({
			loop:true,
			margin:20,
			nav:false,
			dots:false,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				400:{
					items:2
				},
				600:{
					items:3
				},
				800:{
					items:3
				},
				1024:{
					items:5
				},
				1200:{
					items:5
				}
			}
		});    		
	}
	
	
	
	
if ($('.sponsors-carousel-6slider').length) {
		$('.sponsors-carousel-6slider').owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			dots:false,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:2
				},
				400:{
					items:2
				},
				600:{
					items:3
				},
				800:{
					items:3
				},
				1024:{
					items:5
				},
				1200:{
					items:6
				}
			}
		});    		
	}




})(window.jQuery);
