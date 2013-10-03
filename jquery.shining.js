/**
 * jQuery Shining Effect
 *
 * Version: 0.1 ( Beta )
 * Author: KostasX 
 * URL: https://github.com/kostasx/jquery.shining/
 *
 **/

/**
 * Requirements: jQuery (John Resig, http://www.jquery.com/)
 **/

 (function( $, window, undefined ){

    $.fn.shineText = function( options ) {

        // DEFAULT SETTINGS
        var settings = $.extend({
            speed		 : 50,
            shineClass	 : "shine",				
            complete 	 : null					// function(){}
        }, options );

        return this.each( function() {

			var text = $(this).text();

			var doAnimate = function( el ) {

			    el.find( 'span' ).each(function() {

			        var that = $(this);
			        setTimeout(function() { 

		               that.toggleClass( settings.shineClass );
		               that.prev().toggleClass( settings.shineClass );
			        }, that.index() * settings.speed );

			    });

			}

			if ( ! $(this).hasClass( 'shineApplied' ) ){

				$(this).addClass( 'shineApplied' ).html('');

				for( i=0; i<text.length; i++ ) {

				  $(this).append( '<span>'+text[i]+'</span>' );

				}

	   			$(this).append( '<span></span>' );

	   		}

		    doAnimate( $(this) );

		    // ON COMPLETE:
		    if ( $.isFunction( settings.complete ) ) {

		        settings.complete.call( this );

    		}
			    
        });

    }

})(jQuery, window);