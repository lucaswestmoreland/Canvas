var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var style = document.getElementById('body');

var width = canvas.width;
var height = canvas.height;


setInterval("drawRectangle()",1000);

function drawRectangle() {
context.beginPath();
context.rect(randomize(width), randomize(height), randomize(width), randomize(height));
context.fillStyle = getRandomColor();
context.fill();
context.closePath();
}

function randomize(limit) {
	let random = Math.floor(Math.random()*limit);

	if(random < 10) {
		canvas.style.backgroundColor = getRandomColor();
	}

return random;
}

function getRandomColor() {
	let hex = '0123456789ABCDEF';
	let color = '#';
	let i;
	const HEX_LENGTH = 6;
	const HEX_RANGE = 16;

	for(i = 0; i < HEX_LENGTH; i++) {
		color += hex[Math.floor(Math.random() * HEX_RANGE)];
	}

	
	return color;
}