// Array to store the rectangles
var ret = [];
var ret2 = [];

function setup() {
// Canvas size
	createCanvas(960, 540);
for (var i = 0; i < 75; i++) {
// Pushing the ret. into the array
	ret.push(new createret() );
	ret2.push(new createret2() );
	}
}

// To display rectangles from the array
function draw() {
for(var i = 0; i < 75; i++) {
ret[i].display();
ret2[i].display();
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
}

function createret2(){
	// Parameters for creating the rectangle
	this.x1 = random(100,width - 50);
	this.y1 = random(10,height - 50);
	this.depth = random(50,100);
	this.gap = random(6,25);

	this.display = function() {
for( var i = 0; i < this.depth; i++) {
stroke(155,48,255);
strokeWeight (2);
rect(this.x1, this.y1, 50,50);
		}
	}
}
