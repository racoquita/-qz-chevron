var App = function() {
	var that = this;

	this.on = function() {
		that.showHeadline();
	}
	this.showHeadline = function() {
		$('.headline').velocity('fadeIn', {
			delay: 1000,
			duration: 500,
			complete: function() {
				that.showAgree();
			}
		});
	}
	this.showAgree = function() {
		$('.agree, .logo, .cta').velocity('fadeIn', {
			delay: 2000,
			duration: 500,
			complete: function() {
				that.showInfo1();
			}
		});
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
		$('#qzad > div').hide();
	}
};