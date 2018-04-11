var angle = PI/4;
var angle2 = PI/5;

var slider;

function setup() {
  createCanvas(700,windowHeight);
  slider = createSlider(0, TWO_PI, PI/4, 0.01);

}

function draw() {
  background(255,200,243);
  angle = slider.value();
  stroke(0);
	strokeWeight(1.5);
  translate(330, height);
  branch(100);

}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.6);
    pop();
    push();
    rotate(angle2);
    branch(len * 0.5);
    pop();
  }

}
