var App = function() {
	var that = this;
	var slider = null;
	var current = 0;
	var timeouts = [];

	this.on = function() {
		c = document.getElementById("sc1");
		ctx = c.getContext("2d");

		that.initText();

		slider = new IScroll('#slider', {
			scrollY: false,
			scrollX: true,
			snap: 'li',
			momentum: false,
    		bounceEasing: 'quadratic',
    		deceleration: 0.01
		});

		slider.on('scrollEnd', function(){
			var page = current = slider.currentPage.pageX;

			if(page == 1) {
				timeouts[0] = setTimeout(function(){
					$('.lines').show().addClass('bounceIn');

					timeouts[0] = setTimeout(function(){
						$('.map-people').show().addClass('bounceIn');
					}, 250);
				}, 250);
			}
			if(page == 2) {
				timeouts[1] = setTimeout(function(){
					$('.man').show().addClass('bounceIn');

					timeouts[2] = setTimeout(function(){
						$('.men').show().addClass('bounceIn');
					}, 250);
				}, 250);
			}
			if(page == 3) {
				timeouts[3] = setTimeout(function(){
					$('.slide:nth-child(4) .heading').show().addClass('bounceIn');

					timeouts[4] = setTimeout(function(){
						$('.cta-inner').css('display', 'block').addClass('bounceIn');
					}, 250);
				}, 250);
			}

			that.handleChange();
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

		$('.one').on('click', function(){
			$('.info-one').toggle();
		});

		$('.two').on('click', function(){
			$('.info-two').toggle();
		});

		$('.slide:nth-child(1) .heading').show().addClass('bounceInReverse');
	}
	this.off = function() {
		slider.destroy();
		slider = null;
	}
	this.handleChange = function() {
		current == 3 ? $('.arrow-right').hide() : $('.arrow-right').show();
		current == 0 ? $('.arrow-left').hide() : $('.arrow-left').show();
		current == 1 || current == 2 ? $('.cta').show() : $('.cta').hide();
		$('.dot').removeClass('active');
		$('.dot:nth-child('+ (current + 1) +')').addClass('active');
		$('.info-one, .info-two').hide();
	}

	/* ---------- canvas functionality ---------- */

	this.initText = function() {
		ctx.font="40px interstate_cond_monobold";
		
		ctx.fillStyle = '#4f4e4c';
		ctx.fillText("WHICH INDUSTRY", 0, 30);
		ctx.fillText("IS", 0, 70);
	}
};