var App = function() {
	var that = this;
	var timeouts = [];
	var intervals = [];

	this.on = function() {
		c = document.getElementById("title");
		ctx = c.getContext("2d");

		this.initText();
		this.createText();

		timeouts[0] = setTimeout(function(){
			that.animateText();
		}, 1000);
	}
	this.off = function() {
		$.each(timeouts, function(i, to){
        	clearTimeout(to);
        });
        $.each(intervals, function(i, iv){
        	clearTimeout(iv);
        });

		ctx.clearRect (0 , 0 , 320 , 150);
		this.initText();
		this.createText();
	}
	this.initText = function() {
		ctx.font="29px interstate_cond_monobold";
		
		ctx.fillStyle = '#4f4e4c';
		ctx.fillText("DRIVES OUR", 96, 22);
		ctx.fillText("ECONOMY FORWARD.", 0, 48);
	}
	this.createText = function() {
		var gradient=ctx.createLinearGradient(0,0,c.width,0);

		gradient.addColorStop("0","#4f4e4c");
		gradient.addColorStop("1.0","#4f4e4c");

		ctx.fillStyle = gradient;
		ctx.fillText("ENERGY ", 0, 22);
	}
	this.animateText = function() {
		var i = 0;
		
		intervals[0] = setInterval(function(){
			that.changetext(i);
			i++;

			if(i == 100) clearInterval(intervals[0]);
		}, 10);
	}
	this.changetext = function(i) {
		var gradient=ctx.createLinearGradient(0,0,c.width,0);

		ctx.clearRect(0,0,96,22);

		gradient.addColorStop(i/100,"#009dd9");
		gradient.addColorStop(i/100,"#4f4e4c");

		ctx.fillStyle = gradient;
		ctx.fillText("ENERGY ", 0, 22);
	}
};