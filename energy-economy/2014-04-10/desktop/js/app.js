var App = function() {
	var that = this;
	var slider = null;
	var current = 0;
	var timeouts = [];
	var intervals = [];

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

		setTimeout(function(){
			c1 = document.getElementById("sc1");
			c1.width = 720;
			c1.height = 175;
			ctx1 = c1.getContext("2d");

			that.initText1();
			that.animateText1();

			c2 = document.getElementById("sc2");
			c2.width = 640;
			c2.height = 45;
			ctx2 = c2.getContext("2d");

			c3 = document.getElementById("sc3");
			c3.width = 514;
			c3.height = 87;
			ctx3 = c3.getContext("2d");

			c4 = document.getElementById("sc4");
			c4.width = 804;
			c4.height = 56;
			ctx4 = c4.getContext("2d");
		}, 250);

		slider.on('scrollEnd', function(){
			var page = slider.currentPage.pageX;

			if(page == 1) {
				that.initText2();
				timeouts[0] = setTimeout(function(){
					$('.map-people').show().addClass('bounceIn');
					that.animateText2();
				}, 250);
			}
			if(page == 2) {
				that.initText3();
				timeouts[1] = setTimeout(function(){
					$('.man').show().addClass('bounceIn');

					timeouts[2] = setTimeout(function(){
						$('.men').show().addClass('bounceIn');
						that.animateText3();
					}, 250);
				}, 250);
			}
			if(page == 3) {
				that.initText4();
				timeouts[3] = setTimeout(function(){
					$('.slide:nth-child(4) .heading, #sc4').show().addClass('bounceIn');

					timeouts[4] = setTimeout(function(){
						$('.cta-inner').css('display', 'block').addClass('bounceIn');

						timeouts[5] = setTimeout(function(){
							that.animateText4();
						}, 500);
					}, 250);
				}, 250);
			}
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

		$('.slide:nth-child(1) .heading, #sc1').show().addClass('bounceInReverse');
	}
	this.off = function() {
		slider.destroy();
		slider = null;
	}
	this.handleChange = function() {
		var slides = $('.slide').css('visibility', 'visible');

		current == 3 ? $('.arrow-right').hide() : $('.arrow-right').show();
		current == 0 ? $('.arrow-left').hide() : $('.arrow-left').show();
		current == 1 || current == 2 ? $('.cta').show() : $('.cta').hide();
		$('.dot').removeClass('active');
		$('.dot:nth-child('+ (current + 1) +')').addClass('active');
		$('.info-one, .info-two').hide();

		timeouts[5] = setTimeout(function(){
			
			$.each(slides, function(i, slide){
				if(i != current) $(slide).css('visibility', 'hidden');
			});
		}, 1000);
	}

	/* ----- slide 1 ----- */
	this.initText1 = function() {
		ctx1.restore();
		ctx1.font="53px interstate_cond_monobold";
		ctx1.fillStyle = '#4f4e4c';
		
		ctx1.fillText("WHICH INDUSTRY IS", 0, 40);
		ctx1.fillText("CREATING AMERICAN JOBS", 0, 100);
		ctx1.fillText("AND", 555, 100);
		ctx1.fillText("STRENGTHENING THE ECONOMY?", 0, 160);
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
		var gradient = ctx1.createLinearGradient(0,0,c1.width,0);
			gradient.addColorStop(i/100,"#009dd9");
			gradient.addColorStop(i/100,"#4f4e4c");

		ctx1.clearRect(0,40,550,65);

		ctx1.fillStyle = gradient;
		ctx1.fillText("CREATING AMERICAN JOBS", 0, 100);
	}

	/* ----- slide 2 ----- */
	this.initText2 = function() {
		ctx2.font="48px interstate_cond_monobold";
		ctx2.fillStyle = '#4f4e4c';
		
		ctx2.fillText("THE ANSWER IS", 0, 40);
		ctx2.fillText("ENERGY", 290, 40);
	}

	this.animateText2 = function() {
		var i = 0;
		
		intervals[1] = setInterval(function(){
			that.changeText2(i);
			i++;

			if(i == 100) clearInterval(intervals[1]);
		}, 10);
	}

	this.changeText2 = function(i) {
		var gradient = ctx2.createLinearGradient(0,0,c2.width,0);
			gradient.addColorStop(i/100,"#009dd9");
			gradient.addColorStop(i/100,"#4f4e4c");

		ctx2.clearRect(290,0,150,45);

		ctx2.fillStyle = gradient;
		ctx2.fillText("ENERGY", 290, 40);
	}

	/* ----- slide 3 ----- */
	this.initText3 = function() {
		ctx3.font="78px interstate_cond_monobold";
		ctx3.fillStyle = '#4f4e4c';
		
		ctx3.fillText("CREATES 3 MORE", 0, 81);
	}

	this.animateText3 = function() {
		var i = 0;
		
		intervals[2] = setInterval(function(){
			that.changeText3(i);
			i++;

			if(i == 101) clearInterval(intervals[2]);
		}, 10);
	}

	this.changeText3 = function(i) {
		var gradient = ctx3.createLinearGradient(0,0,c3.width,0);
			gradient.addColorStop(i/100,"#009dd9");
			gradient.addColorStop(i/100,"#4f4e4c");

		ctx3.clearRect(0,0,514,100);

		ctx3.fillStyle = gradient;
		ctx3.fillText("CREATES 3 MORE", 0, 81);
	}

	/* ----- slide 4 ----- */
	this.initText4 = function() {
		ctx4.font="48px interstate_cond_monobold";
		ctx4.fillStyle = '#4f4e4c';
		
		ctx4.fillText("ENERGY", 0, 50);
		ctx4.fillText("DRIVES OUR ECONOMY FORWARD.", 155, 50);
	}

	this.animateText4 = function() {
		var i = 0;
		
		intervals[3] = setInterval(function(){
			that.changeText4(i);
			i++;

			if(i == 100) clearInterval(intervals[3]);
		}, 10);
	}

	this.changeText4 = function(i) {
		var gradient = ctx4.createLinearGradient(0,0,c4.width,0);
			gradient.addColorStop(i/100,"#009dd9");
			gradient.addColorStop(i/100,"#4f4e4c");

		ctx4.clearRect(0,0,155,56);

		ctx4.fillStyle = gradient;
		ctx4.fillText("ENERGY", 0, 50);
	}
};