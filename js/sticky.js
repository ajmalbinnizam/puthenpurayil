(function($) {
    "use strict";

var win = $(window);
    win.on('scroll', function() {
        var scroll = win.scrollTop();
        if (scroll < 200) {
            $("#sticky_funtion").removeClass("logo_sect_fixed");
        } else {
            $("#sticky_funtion").addClass("logo_sect_fixed");
        }
    });
    
	})(jQuery);