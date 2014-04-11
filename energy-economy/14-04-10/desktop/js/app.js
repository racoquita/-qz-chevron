var App = function() {
	var that = this;
	var slider = null;
	var current = 0;

	this.on = function() {
		slider = new IScroll('#slider', {
			scrollY: false,
			scrollX: true,
			snap: 'li',
			momentum: false,
			disableMouse: true,
    		disablePointer: true,
    		bounceEasing: 'quadratic',
    		deceleration: 0.01
		});

		$('.arrow-right').on('click', function(e){
			if(current < 3) {
				slider.goToPage(current + 1, 0, 250, IScroll.utils.easeIn);
				current++;
				that.handleChange();
			}
		});
		$('.arrow-left').on('click', function(e){
			if(current > 0) {
				slider.goToPage(current - 1, 0, 250, IScroll.utils.easeIn);
				current--;
				that.handleChange();
			}
		});
	}
	this.off = function() {
		slider.destroy();
		slider = null;
	}
	this.handleChange = function() {
		current == 3 ? $('.arrow-right').hide() : $('.arrow-right').show();
		current == 0 ? $('.arrow-left').hide() : $('.arrow-left').show();
		$('.dot').removeClass('active');
		$('.dot:nth-child('+ (current + 1) +')').addClass('active');
		current == 1 || current == 2 ? $('.cta').show() : $('.cta').hide();
	}
};