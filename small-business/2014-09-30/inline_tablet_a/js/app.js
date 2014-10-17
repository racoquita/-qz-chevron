var App = function() {
	var that = this;

	this.on = function() {
		that.showHeadline();
	}
	this.showHeadline = function() {
		$('#qzad').velocity({
			backgroundPosition: '0%'
		},{
			easing:"easeInOutQuad",
			delay: 250,
			duration: 2750
		});
		$('.guy').velocity({
			left:"125%"
		},{
			easing: "easeInOutCubic",
			delay: 500,
			duration: 3500
		});
		$('.headline').velocity({
			left: "32.65625%"
		}, {
			duration: 500,
			easing:"linear",
			delay: 2000,
			complete:function () {
				$('.headline div.needs img').velocity({
    				marginTop:"0px"
    			}, {
    				delay: 0,
    				duration: 800,
    				easing: "easeOutSine",
    				complete:function() {
    					$('.headline div.sm-bus img').velocity({
    						marginTop:"0px"
    					}, {
    						delay:1,
    						duration:500,
    						easing: "easeOutSine",
    						complete:function () {
    							that.showAgree();
    						}
    					})
    					
    				}
    			})
			
			}
		});
	}
	this.showAgree = function() {
		$('.agree img, .logo').velocity({
			scale: 3
		}, {
			duration: 0,
			complete: function() {
				$('.agree img, .logo').velocity({
					scale: 1,
					opacity: 1
				}, {
					duration: 500,
					delay: 750,
					complete: function() {
						that.hideHeadline();
						that.showInfo1();
					}
				});

			}
		});
	}
	this.hideHeadline = function () {
		$('.headline, .agree').velocity({
			left: "-100%"
		}, {
			delay: 1800,
			duration: 750
		});
	}
	this.showInfo1 = function() {
		$('.info-1').velocity({
			left:'25.46875%'
			//right: '55.1875%'
		}, {
			delay: 2500,
			duration: 600,
			complete: function() {
			
				$('.cta').velocity({ 
				  right: "0px"
				},{
					delay:500,
					duration:500,
					complete:function(){ 
						$('.cta .cta-arrow').addClass('animated bounce');
					}

				}, 1000);
			}
		});				
	}
	
	this.off = function() {
		
		//$('#qzad > div').hide();
		$('.cta .cta-arrow').removeClass('animated bounce');
		$('#qzad, .headline, .agree, .agree img, .info-1, .cta, .logo, .needs img, .sm-bus img').removeAttr('style')
	}
};