
var Static = {

	init : function(element) {
		var canvas = $(element);
		var ctx = canvas[0].getContext('2d');
		var bgHeight = $(window).height();
		var bgWidth = $(window).width();
		var self = this;

		// defaults
		var shapesAccross = 70;
		var shapesTall = 50;
		var interval = 100;

		console.log($('#accross'));

		self.setCanvasSize(canvas);

		$(window).on('resize', function(){
			self.setCanvasSize(canvas);
		});

		$('input').change(function() {
			switch(this.id) {
				case 'accross':
					shapesAccross = this.value;
					$('#accross-val').html(this.value);
					break;
				case 'tall':
					shapesTall = this.value;
					$('#tall-val').html(this.value);
					break;
			}
		});

		$('#presets button').on('click', function() {
			switch(this.id) {
				case 'static-btn':
					shapesAccross = 180;
					shapesTall = 160;
					break;
				case 'big-squares-btn':
					shapesAccross = 10;
					shapesTall = 6;
					break;
				case 'small-squares-btn':
					shapesAccross = 70;
					shapesTall = 50;
					break;
				case 'stripes-btn':
					$('#tall-val')
					shapesAccross = 1;
					shapesTall = 60;
					break;
			}
			$('#accross')[0].value = shapesAccross;
			$('#tall')[0].value = shapesTall;
			$('#accross-val').html(shapesAccross);
			$('#tall-val').html(shapesTall);
		});

		return setInterval(function() {
			console.log(shapesTall, shapesAccross);
			self.drawBackground(ctx, shapesAccross, shapesTall, interval);
		},interval);
	},

	drawBackground : function(ctx, accross, tall, interval) {
		var a;
		var t;
		var color;
		var self = this;
		var shapeHeight = $(window).height() / tall;
		var shapeWidth = $(window).width() / accross;

		for (a = 0; a <= accross; a++ ) {
			for (t = 0; t <= tall; t++ ) {
				self.drawShape(ctx, shapeWidth * a, shapeHeight * t, shapeWidth, shapeHeight, self.randomColor());
			}
		}
	},

	drawShape : function(ctx, x, y, width, height, color) {
		ctx.fillStyle = color;
		ctx.fillRect(x,y,width, height);
	},

	randomColor : function() {
		return '#'+Math.floor(Math.random()*16777215).toString(16);
	},

	setCanvasSize : function(canvas) {
		canvas.attr('height', $(window).height());
		canvas.attr('width', $(window).width());
	}
}

$(document).ready( function(){
	Static.init('#static');
});
