// Array to store the rectangles
var ret = [];
var ret2 = [];

function setup() {

	// Canvas size
createCanvas(960, 540);
for (var i = 0; i <75; i++) {
// Pushing the ret. into the array
		ret.push(new createret() );
		ret2.push(new createret2() );
	}
}

// To display rectangles from the array
function draw() {
// The loop when mouse is pressed
if (mouseIsPressed){
for(var i = 0; i < 75; i++) {
		ret[i].move();
		ret2[i].move();
		ret[i].display();
		ret2[i].display();
	}

	} else {
		clear();
// Resets to original image after mouse-click is off
for(var i = 0; i < 75; i++) {
// Just displays original squares
		ret[i].display();
		ret2[i].display();
}
		}
}

function createret(){
	// Parameters for creating the rectangle
	this.x = random(120,width-200);
	this.y = random(80,height-200);
	this.depth = random(50,100);
	this.gap = random(6,25);

	this.display = function() {
for( var i = 0; i < this.depth; i++) {
	stroke(0);
	rect(this.x, this.y, 50,50);
		}
	}

	this.move = function() {
	this.x = this.x + random(-1,1);
	this.y = this.y + random(-1,1);
	}
}
function createret2(){
	// Parameters for creating the rectangle
	this.x1 = random(100,width - 100);
	this.y1 = random(10,height- 100);
	this.depth = random(50,100);
	this.gap = random(6,25);

	this.display = function() {
for( var i = 0; i < this.depth; i++) {
	stroke(155,48,255);
	strokeWeight (2);
	rect(this.x1, this.y1, 50,50);
		}
	}
// This determines the new X and Y for the moving images
	this.move = function() {
	this.x1 = this.x1 + random(10,3);
	this.y1 = this.y1 + random(-1,3);
	}
}
