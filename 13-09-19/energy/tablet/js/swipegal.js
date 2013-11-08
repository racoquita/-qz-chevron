SwipeGal = function( settings ) {
  
  /*
   * HOUSEKEEPING
   * Set some variables, deal with the settings
   *
   */
  
  // A little of this; a little of that...
  var that = this;
  
  // Deal with the settings...
  this.gallery = settings['gallery'];
  this.automated = settings['automated'];
  this.swipeable = settings['swipeable']
  this.speed = settings['speed'];
  this.dotted = settings['dotted'];
  this.responsive = settings['responsive'];
  
  // Set the current position.
  this.current_position = 0;
  
  
  
  /*
   * CONTROLS
   * This controls the creation and action of the dots.
   * It also dictates when the right/left controls show/hide themselves.
   *
   */
  
  // Create the dots.
  this.create_dots = function() {
    for( var i = 0; i < that.gallery.find('.slide').length; i++ ) {
      that.gallery.find('.dots-wrapper').append( '<div class="dot"></div>' );
    }
  }
  
  // Color the dots. (In other words, determine which dot is the current dot).
  this.color_dots = function() {
    that.gallery.find('.dot').removeClass( 'active-dot' );
    that.gallery.find('.dot').eq( that.current_position ).addClass( 'active-dot' );
  }
  
  // Control the controls. (In other words, determine when to show/hide the left/right controls)
  // Also, let's add the click opacity feature here.
  this.control_controls = function() {
    if( that.current_position == 0 ) {
		  $('.control').show();
		  $('#left-control').hide();
		} else if( that.current_position == that.gallery.find('.slide').length - 1 ) {
		  $('.control').hide(); // chevron only
		  //$('.control').show();
		  //$('#right-control').hide();
		} else {
		  $('.control').show();
		}
		$('.control').mousedown( function() {
      $(this).css( 'opacity', '.2' );
    })
    $('.control').mouseup( function() {
      $(this).css( 'opacity', '1' );
    });
  }
  
  
  
  /*
   * POSITIONING
   * This controls the position of each slide and the slider
   *
   */
  // Only one function here, folks.
  this.position = function() {
    that.gallery.find('.slide').width( that.gallery.width() ); // is this necessary? Should I trust the user to make the slides the same length?
    that.gallery.find('.slider').width( that.gallery.find('.slide').eq(0).width() * that.gallery.find('.slide').length );
		that.gallery.find('.dots-wrapper').css( 'margin-left', -that.gallery.find('.dots-wrapper').width() / 2)
  }
  
  
  
  /*
   * MOTION
   * These functions control the motion of the silider.
   *
   */
  
  // The slide function does the lion's share of the work.
  this.slide = function() {
		if( that.current_position > that.gallery.find('.slide').length - 1 ) {
			that.current_position = 0;
		}
		that.gallery.find('.slider').animate(
		  {
		    'margin-left': -that.current_position * that.gallery.find('.slide').eq(0).width()
		  },
		  that.speed,
		  function() {
		    that.control_controls();
		    if( that.dotted == true ) {
		      that.color_dots();
		    }
    		that.gallery.trigger( 'slide', [ that.current_position ] );		    
		  }
		);
	}
	
	// Don't slide, just move to the right position after a window resize
	this.move = function() {
    that.gallery.find('.slider').css({
      'margin-left': -that.current_position * that.gallery.find('.slide').eq(0).width()
    });
  }
  
  // The automate function. Useful if you're, you know, automating...
  that.automate = function() {
		that.current_position++;
		that.slide();
		that.t = setTimeout( that.automate, that.speed );
	}
	
	
	
	/*
	 * BINDINGS
	 * When do these functions get called?
	 * Let's find out!
	 *
	 */
  this.binds = function() {
    
    // Bind a click to tap on the dot to movement
    that.gallery.find('.dot').click( function() {
			if( that.automated == true ) { clearTimeout( that.t ); }
			that.current_position = $(this).index();
			that.slide();
		});
		
		// Bind a click or tap on the controls to movement.
		that.gallery.find('.control').click( function() {
		  if( that.automated == true ) { clearTimeout( that.t ); }
		  if( $(this).attr('id') == 'left-control' ) { that.current_position--; }
		  else if( $(this).attr('id') == 'right-control' ) { that.current_position++; }
		  else { /* you've done something wrong. */ }
		  that.slide();
		});
		
		// Bind the left/right swipes to movement.
		if( that.swipeable == true ) {
  		that.gallery.find('.slider').touchSwipeRight( function() {
  		  if( that.current_position != 0 ) {
    		  that.current_position--;
    		  that.slide();
    		}
  		});
  		that.gallery.find('.slider').touchSwipeLeft( function() {
  		  if( that.current_position != that.gallery.find('.slide').length - 1 ) {
  		    that.current_position++;
  		    that.slide();
  		  }
  		});
  	}
  	
  	// If we're responsive, bind the window resize to a little check of positioning.
  	if( that.responsive == true ) {
    	$(window).resize( function() {
  		  that.position();
  		  that.move();
  		});
  	}
  	
  }
  
  
  
  /*
   * DO IT
   * Actually do everything.
   *
   */
  if( this.dotted == true ) {
    this.create_dots();
    this.color_dots(); 
  }
  this.position();
  this.binds();
  if( this.automated == true ) {
   this.automate();
  }
  
}