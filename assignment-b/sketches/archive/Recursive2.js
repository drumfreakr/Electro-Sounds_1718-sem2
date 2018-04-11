//basic example
var angleInterval = 30;

function setup () {
	createCanvas(windowWidth,windowHeight);
	background(0);
	var a = 0;
	while (a < 360) {
		a += angleInterval;
		drawBranch(width/2,height/2,height/4,a);
	}
};

function drawBranch(x,y,l,a) {
	var tx = x + (cos(radians(a)) * l);
	var ty = y + (sin(radians(a)) * l);
	var minLength = 12;

	stroke(255, 90);
	line(x,y,tx,ty);
	l = l * 0.5;
	if (l > minLength) {
// Number of Lines
		a = 1;
		while (a < 360) {
			a += angleInterval;
			drawBranch(tx,ty,l,a);
		}
}
}
