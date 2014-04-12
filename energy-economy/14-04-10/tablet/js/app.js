var App = function() {
	var that = this;
	var slider = null;
	var current = 0;
	var timeouts = [];
	var intervals = [];

	this.on = function() {
		c = document.getElementById("sc1");
		c.width = 311;
		c.height = 197;
		ctx = c.getContext("2d");

		that.initText1();
		that.animateText1();

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

		$('.arrow-right').off().on('click', function(e){
			if(current < 3) {
				slider.goToPage(current + 1, 0, 250, IScroll.utils.easeIn);
				current++;
				that.handleChange();
			}
		});

		$('.arrow-left').off().on('click', function(e){
			if(current > 0) {
				slider.goToPage(current - 1, 0, 250, IScroll.utils.easeIn);
				current--;
				that.handleChange();
			}
		});

		$('.one').off().on('click', function(){
			$('.info-one').toggle();
		});

		$('.two').off().on('click', function(){
			$('.info-two').toggle();
		});

		$('.slide:nth-child(1) .heading').show().addClass('bounceInReverse');
	}

	this.off = function() {
		$.each(timeouts, function(i, to){
        	clearTimeout(to);
        });
        $.each(intervals, function(i, iv){
        	clearTimeout(iv);
        });

		current = 0;
		slider.goToPage(0, 0, 0);
		slider.destroy();
		slider = null;

		ctx.clearRect (0 , 0 , 480 , 550);

		$('.arrow-left').hide();
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

	this.initText1 = function() {
		ctx.font="36px interstate_cond_monobold";
		ctx.fillStyle = '#4f4e4c';
		
		ctx.fillText("WHICH INDUSTRY", 0, 30);
		ctx.fillText("IS", 0, 65);
		ctx.fillText("CREATING", 36, 65);
		ctx.fillText("AMERICAN JOBS", 0, 100);
		ctx.fillText("AND STRENGTHENING", 0, 135);
		ctx.fillText("THE ECONOMY?", 0, 170);
	}

	this.animateText1 = function() {
		var i = 0;
		
		intervals[0] = setInterval(function(){
			that.changeText1(i);
			i++;

			if(i == 100) clearInterval(intervals[0]);
		}, 10);
	}

	this.changeText1 = function(i) {
		var gradient = ctx.createLinearGradient(0,0,c.width,0);
			gradient.addColorStop(i/100,"#009dd9");
			gradient.addColorStop(i/100,"#4f4e4c");

		ctx.clearRect(36,30,150,36);
		ctx.clearRect(0,65,250,36);

		ctx.fillStyle = gradient;
		ctx.fillText("CREATING", 36, 65);
		ctx.fillText("AMERICAN JOBS", 0, 100);
	}
};