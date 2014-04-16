var App = function() {
	var that = this;
	var slider = null;
	var current = 0;
	var timeouts = [];
	var intervals = [];

	this.on = function() {
		timeouts[9] = setTimeout(function(){
			c1 = document.getElementById("sc1");
			c1.width = 400;
			c1.height = 220;
			ctx1 = c1.getContext("2d");

			that.initText1();
			that.animateText1();

			c2 = document.getElementById("sc2");
			c2.width = 400;
			c2.height = 50;
			ctx2 = c2.getContext("2d");

			c3 = document.getElementById("sc3");
			c3.width = 400;
			c3.height = 100;
			ctx3 = c3.getContext("2d");

			c4 = document.getElementById("sc4");
			c4.width = 400;
			c4.height = 100;
			ctx4 = c4.getContext("2d");
		}, 250);

		slider = new IScroll('#slider', {
			scrollY: false,
			scrollX: true,
			snap: 'li',
			momentum: false,
    		bounceEasing: 'quadratic',
    		deceleration: 0.01,
    		click: true
		});

		slider.on('scrollEnd', function(){
			var page = current = slider.currentPage.pageX;

			if(page == 1) {
				that.initText2();

				timeouts[0] = setTimeout(function(){
					$('.lines').show().addClass('bounceIn');
					that.animateText2();

					timeouts[0] = setTimeout(function(){
						$('.map-people').show().addClass('bounceIn');
					}, 250);
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

		ctx1.clearRect (0 , 0 , 480 , 550);

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

	/* ----- slide 1 ----- */
	this.initText1 = function() {
		ctx1.clearRect(36,30,150,36);
		ctx1.clearRect(0,65,250,36);

		ctx1.font="36px interstate_cond_monobold";
		ctx1.fillStyle = '#4f4e4c';
		
		ctx1.fillText("WHICH INDUSTRY", 0, 30);
		ctx1.fillText("IS", 0, 65);
		ctx1.fillText("CREATING", 36, 65);
		ctx1.fillText("AMERICAN JOBS", 0, 100);
		ctx1.fillText("AND STRENGTHENING", 0, 135);
		ctx1.fillText("THE ECONOMY?", 0, 170);
	}

	this.animateText1 = function() {
		var i = 0;
		
		intervals[0] = setInterval(function(){
			that.changeText1(i);
			i++;

			if(i >= 99) {
				clearInterval(intervals[0]);
				that.changeText1(100);
			}
		}, 5);
	}

	this.changeText1 = function(i) {
		var gradient = ctx1.createLinearGradient(0,0,c1.width,0);
			gradient.addColorStop(i/100,"#009dd9");
			gradient.addColorStop(i/100,"#4f4e4c");

		ctx1.clearRect(36,30,150,36);
		ctx1.clearRect(0,65,250,36);

		ctx1.fillStyle = gradient;
		ctx1.fillText("CREATING", 36, 65);
		ctx1.fillText("AMERICAN JOBS", 0, 100);
	}

	/* ----- slide 2 ----- */
	this.initText2 = function() {
		ctx2.clearRect(220,0,120,36);

		ctx2.font="36px interstate_cond_monobold";
		ctx2.fillStyle = '#4f4e4c';
		
		ctx2.fillText("THE ANSWER IS", 0, 30);
		ctx2.fillText("ENERGY", 220, 30);
	}

	this.animateText2 = function() {
		var i = 0;
		
		intervals[1] = setInterval(function(){
			that.changeText2(i);
			i++;

			if(i >= 99) {
				clearInterval(intervals[1]);
				that.changeText2(100);
			}
		}, 5);
	}

	this.changeText2 = function(i) {
		var gradient = ctx2.createLinearGradient(0,0,c2.width,0);
			gradient.addColorStop(i/100,"#009dd9");
			gradient.addColorStop(i/100,"#4f4e4c");

		ctx2.clearRect(220,0,120,36);

		ctx2.fillStyle = gradient;
		ctx2.fillText("ENERGY", 220, 30);
	}

	/* ----- slide 3 ----- */
	this.initText3 = function() {
		ctx3.clearRect(0,0,319,55);

		ctx3.font="48px interstate_cond_monobold";
		ctx3.fillStyle = '#4f4e4c';
		
		ctx3.fillText("CREATES 3 MORE", 0, 51);
	}

	this.animateText3 = function() {
		var i = 0;
		
		intervals[2] = setInterval(function(){
			that.changeText3(i);
			i++;

			if(i >= 99) {
				clearInterval(intervals[2]);
				that.changeText3(100);
			}
		}, 5);
	}

	this.changeText3 = function(i) {
		var gradient = ctx3.createLinearGradient(0,0,c3.width,0);
			gradient.addColorStop(i/100,"#009dd9");
			gradient.addColorStop(i/100,"#4f4e4c");

		ctx3.clearRect(0,0,319,55);

		ctx3.fillStyle = gradient;
		ctx3.fillText("CREATES 3 MORE", 0, 51);
	}

	/* ----- slide 4 ----- */
	this.initText4 = function() {
		ctx4.clearRect(0,0,118,30);

		ctx4.font="36px interstate_cond_monobold";
		ctx4.fillStyle = '#4f4e4c';
		
		ctx4.fillText("ENERGY", 0, 30);
		ctx4.fillText("DRIVES OUR", 118, 30);
		ctx4.fillText("ECONOMY FORWARD.", 0, 65);
	}

	this.animateText4 = function() {
		var i = 0;
		
		intervals[3] = setInterval(function(){
			that.changeText4(i);
			i++;

			if(i >= 99) {
				clearInterval(intervals[3]);
				that.changeText4(100);
			}
		}, 5);
	}

	this.changeText4 = function(i) {
		var gradient = ctx4.createLinearGradient(0,0,c4.width,0);
			gradient.addColorStop(i/100,"#009dd9");
			gradient.addColorStop(i/100,"#4f4e4c");

		ctx4.clearRect(0,0,118,30);

		ctx4.fillStyle = gradient;
		ctx4.fillText("ENERGY", 0, 30);
	}
};