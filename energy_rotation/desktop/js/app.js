ChevronSlider = function() {
  
  var that = this;
  this.current_position = 0;
  
  // Animations
  this.slide_0 = function() {
    $('button.tweet').parent('a').attr( 'href', 'http://bit.ly/Z7KIeB' );
    /*
    $('#s1h1a').delay(400).fadeIn( 100, function() {
      $('#s1h1b').delay(400).fadeIn( 100, function() {
        $('#s1h2').delay(400).fadeIn( 100, function() {
          $('#s1f1').delay(400).fadeIn( 100, function(){
            $('#s1f1a').show().delay(200).animate( { top: 0 }, 400)
            $('#s1f1b').show().delay(200).animate( { top: 0 }, 400, function() {
              $('#s1f1c').delay(200).fadeIn( 100 );
            })
          });
        });
      });
    });
    */
  }
  this.slide_1 = function() {
    $('button.tweet').parent('a').attr( 'href', 'http://bit.ly/X5a1rH' );
  }
  this.slide_2 = function() {
    $('button.tweet').parent('a').attr( 'href', 'http://bit.ly/YUfbZO' );
  }
  this.slide_3 = function() {
    $('button.tweet').parent('a').attr( 'href', 'http://bit.ly/12bww54' );
  }
  this.slide_4 = function() {
    $('#regular-source').hide();
    $('button.tweet').hide();
    $('button.read').hide();
    $('#last-slide-source').show();
    $('#last-slide-read').show();
  }
  
  // Resetters
  this.reset_slide_0 = function() {
    /*
    $('#s1f1a').css( 'top', '100%' );
    $('#s1f1b').css( 'top', '100%' );
    $('#slide-1').find('img').hide();
    $('#source-overlay0').find('img').show();
    */
  }
  this.reset_slide_1 = function() {
  }
  this.reset_slide_2 = function() {
  }
  this.reset_slide_3 = function() {
  }
  this.reset_slide_4 = function() {
    $('#last-slide-read').hide();
    $('#last-slide-source').hide();
    $('#regular-source').show();
    $('button.tweet').show();
    $('button.read').show();
  }
  
  
  this.resetters = [
    this.reset_slide_0,
    this.reset_slide_1,
    this.reset_slide_2,
    this.reset_slide_3,
    this.reset_slide_4
  ];
  this.animations = [
    that.slide_0,
    that.slide_1,
    that.slide_2,
    that.slide_3,
    that.slide_4 
  ];
  
  // Sourcing
  this.source_it = function() {
    var remove_it = function() {
      $('#source-overlay' + that.current_position).fadeOut( 5, function() {
        $('.slider').off( 'click', remove_it );
        $('button.source').on( 'click', add_it );        
      });
    }
    var add_it = function() {
      $('#source-overlay' + that.current_position).fadeIn( 5, function() {
        $('#source-overlay' + that.current_position).on( 'click', remove_it );        
        $('button.source').off( 'click', add_it );
      });
    }
    $('button.source').on( 'click', add_it );
  }
  this.bind_it = function() {
    $('.gallery').on( 'slide', function(e, slide_number) {
      that.current_position = slide_number;
      that.animations[slide_number]();
      for( var i = 0; i < that.resetters.length; i++ ) {
        if( i != slide_number ) {
          that.resetters[i]();
        }
      }
    });
  }
  
  this.blinker = function() {
    var blinky = function() {
      $('#right-control').animate({'opacity': .2},750).animate({'opacity': 1},750);
      that.t = setTimeout( blinky, 1500 );
    }
    that.t = setTimeout( blinky, 1500 );
    $('#right-control').mouseover( function() {
      clearTimeout( that.t );
    });
    $('#right-control').mouseout( function() {
      blinky();
    });
  }
  
  
  // DO IT!
  this.bind_it();
  this.source_it();
  this.blinker();
  //this.reset_slide_0();
  this.slide_0();
}

$(document).ready( function() {  
  
  var gallery = new SwipeGal({
    'automated': false,
    'gallery': $('.gallery'),
    'speed': 0,
    'swipeable': true,
    'dotted': true,
    'responsive': false
  });
  var chevron_slider = new ChevronSlider();
  
});