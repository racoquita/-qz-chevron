ChevronTabletSlider = function() {
    
  /*
   * HOUSEKEEPING
   * Set some variables.
   *
   */
  
  // A little of this; a little of that.
  var that = this;
  
  // Set the current position.
  this.current_position = 0;
  
  
  
  /*
   * SOURCE IT!
   * Deal with the source overlay.
   *
   */
  this.source_it = function() {
        
    // The add_it function adds the source overlay.
    var add_it = function() {
      $('#source-overlay-' + that.current_position).fadeIn( 5, function() {
        $('#source-overlay-' + that.current_position).on( 'click', remove_it );        
        $('button.source').off( 'click', add_it );
      });
    }
    
    // The remove_it function removes the source overlay.
    var remove_it = function() {
      $('#source-overlay-' + that.current_position).fadeOut( 5, function() {
        $('#source-overlay-' + that.current_position).off( 'click', remove_it );
        $('button.source').on( 'click', add_it );        
      });
    }
    
    // Start us off right!
    $('button.source').on( 'click', add_it );
    
  }
  
  
  /*
   * BIND IT!
   * Bind the custom 'slide' event to a change in this.current_position
   *
   */
  this.bind_it = function() {
    $('.gallery').on( 'slide', function(e, slide_number) {
      that.current_position = slide_number;
      if( that.current_position == 0 ) {
        $('.tweet').show();
        $('.download').show();
        $('.tweet').parent('a').attr( 'href', 'http://bit.ly/Z7KIeB' );
      } else if( that.current_position == 1 ) {
        $('.tweet').show();
        $('.download').show();
        $('.tweet').parent('a').attr( 'href', 'http://bit.ly/X5a1rH' );
      } else if( that.current_position == 2 ) {
        $('.tweet').show();
        $('.download').show();
        $('.tweet').parent('a').attr( 'href', 'http://bit.ly/YUfbZO' );
      } else if( that.current_position == 3 ) {
        $('.tweet').show();
        $('.download').show();
        $('.tweet').parent('a').attr( 'href', 'http://bit.ly/12bww54' );
      } else if( that.current_position == 4 ) {
        $('.tweet').hide();
        $('.download').hide();
        $('#last-slide-download').show();
      }
    });
  }
  
  
  
  /*
   * DO IT!
   * Call these delightful functions
   *
   */
  $('.tweet').parent('a').attr( 'href', 'http://bit.ly/Z7KIeB' );
  this.source_it();
  this.bind_it();
  
}

$(document).ready( function() {
  
  var gallery = new SwipeGal({
    'automated': false,
    'swipeable': true,
    'gallery': $('.gallery'),
    'speed': 0,
    'dotted': true,
    'responsive': false
  });
  var chevron_tablet_gallery = new ChevronTabletSlider();
  
});