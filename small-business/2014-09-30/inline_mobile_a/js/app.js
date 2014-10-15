var App = function() {
	var that = this;

	this.on = function() {
		that.showHeadline();
	}
	this.showHeadline = function() {
		$('.inner').velocity({
			backgroundPosition: '0%'
		}, {
			easing:"linear",
			duration: 2750
		});
		$('.guy').velocity({
			left:"100%"
		},{
			easing: "easeInOut",
			duration: 2600
		});
		$('.headline').velocity({
			left: "32.34%",
			width: '39.38%'
		}, {
			duration:500,
			easing:"linear",
			delay: 1000,
			complete:function () {
				$('.headline div.needs img').velocity({
    				marginTop:"0%"
    			}, {
    				delay: 1,
    				duration: 500,
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
			delay: 2000,
			duration: 500
		});
	}
	this.showInfo1 = function() {
		$('.info-1').velocity({
				left:'25.63%',
				width: '50%'
			}, {
				delay: 2000,
				duration: 500,
				complete: function() {
				
					$('.cta').velocity({ 
					  right: "0%"
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
	this.showInfo2 = function() {
		$('.info-1').velocity('fadeOut', {
			delay: 3000,
			duration: 500,
			complete: function() {
				$('.info-2').velocity('fadeIn', {
					delay: 0,
					duration: 500,
					complete: function() {
						
					}
				});
			}
		});
	}
	this.off = function() {
		$('.cta .cta-arrow').removeClass('animated bounce');
		$('#qzad, .headline, .agree, .agree img, .info-1, .cta, .logo, .needs img, .sm-bus img').removeAttr('style');
	}
};