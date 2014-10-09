var App = function() {
	var that = this;

	this.on = function() {
		that.showHeadline();
	}
	this.showHeadline = function() {
		$('#qzad').velocity({
			backgroundPosition: '0%'
		}, {
			delay: 1000,
			duration: 1000,
			complete: function() {
				$('.headline').velocity('fadeIn', {
					delay: 0,
					duration: 500,
					complete: function() {
						
						//that.showAgree();
						$('.headline').velocity({ height: "+=85px" },{ 
						    delay: 100,
						    duration: 500,
						    complete:function(){

						    	$('.headline').velocity({ height: "+=122px" },{
						    		delay:200,
						    		duration: 500,
						    		complete:function(){
						    			//that.showAgree();
						    			$('.headline div img').velocity({
						    				marginTop:"0px"
						    			}, {
						    				delay: 100,
						    				duration: 500,
						    				complete:function() {
						    					that.showAgree();
						    				}
						    			})
						    		}
						    	});
						    }
						})
					}
				} );
			}
		});
	}
	this.showAgree = function() {
		$('.agree, .logo').velocity('fadeIn', {
			delay: 2000,
			duration: 500,
			complete: function() {
				that.showInfo1();

			}
		});
		$('.cta').velocity({ 
		  right: "0px"
		},{
			complete:function(){ 
				$('.cta .cta-arrow').addClass('animated bounce');
			}

		}, 1000);
	}
	this.showInfo1 = function() {
		$('.headline, .agree').velocity('fadeOut', {
			delay: 3000,
			duration: 500,
			complete: function() {
				$('.info-1').velocity('fadeIn', {
					delay: 0,
					duration: 500,
					complete: function() {
						that.showInfo2();
						
					}
				});
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
		$('#qzad').css('background-position', '100%');
		$('#qzad > div').hide();
	}
};