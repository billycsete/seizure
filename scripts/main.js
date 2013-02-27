

var ctx;
var canvas;
var shapesAccross = 100;
var shapesTall = 150;
var bgHeight = getDocHeight();
var bgWidth = document.width;
var logMessage;

function init(){
	ctx = document.getElementById('static').getContext('2d');
	canvas = $('#static');

	setCanvasSize(canvas);
	$(window).on('resize', function(){
		setCanvasSize(canvas);
	});

	return setInterval(drawBackground,100);
}

function drawBackground() {
	var a;
	var t;
	var color;
	var shapeHeight = getDocHeight() / shapesTall;
	var shapeWidth = document.width / shapesAccross;

	for (a = 0; a <= shapesAccross; a++ ) {
		for (t = 0; t <= shapesTall; t++ ) {
			drawShape(shapeWidth * a, shapeHeight * t, shapeWidth, shapeHeight, randomColor());
		}
	}
}

function drawShape(x, y, width, height, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x,y,width, height);
}

function randomColor() {
	return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function getDocHeight() {
	var D = document;
	return Math.max(
		Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
		Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
		Math.max(D.body.clientHeight, D.documentElement.clientHeight)
	);
}

function setCanvasSize(canvas) {
	canvas.attr('height', getDocHeight());
	canvas.attr('width', document.width);
}

$(document).ready( function(){
	init();
});