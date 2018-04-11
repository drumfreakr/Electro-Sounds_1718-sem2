var spot = {
  x: 400,
  y: 500,
  z: 120,
  a: 80,
}


var col = {
  r: 20,
  g: 255,
  b: 102
}

var xPosition;
var yPosition;


function setup() {
  createCanvas(windowWidth, windowHeight);
var  xPosition = width/2;
var xPosition = width;
var yPosition = spot.a;

}

function draw() {
  spot.x = random(100,width);
  spot.y = random(height);

//Background
  background(0,0,5);

//Lines
  col.r = random(0,255,0);
  col.g = random(0,255,0);
  fill(col.r, col.g, col.b)
	stroke(col.r, col.g, col.b);
  strokeWeight(5);
  // Middle dot dimensions in canvas
  line(spot.x, spot.y, 630, 180);
  //Right line
	line(spot.x, spot.y, windowWidth, 380);
  //Left Line
  line(spot.x, spot.y, 0, 380);

//Random shapes
  strokeWeight(100);
  fill(col.r, col.g, col.b);
	spot.z=random(0, windowWidth);
  spot.a=random(0, windowHeight);
var xPosition = width/2;
var yPosition = spot.a;
var circleSize = random(0,50);
var circle = ellipse(xPosition, yPosition, mouseX, circleSize);
}
