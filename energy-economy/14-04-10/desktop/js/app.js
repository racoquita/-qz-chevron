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
				slider.goToPage(current + 1, 0, 250, IScroll.utils.ease.quadratic);
				current++;
			}
		});
		$('.arrow-left').on('click', function(e){
			if(current > 0) {
				slider.goToPage(current - 1, 0, 250, IScroll.utils.ease.quadratic);
				current--;
			}
		});
	}
	this.off = function() {
		slider.destroy();
		slider = null;
	}
};