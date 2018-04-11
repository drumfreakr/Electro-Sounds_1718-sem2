
var angle;
var theta = 10,
  frms = 300,
  c = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  angle = map(sin(theta), -1, 1, 0, PI / 2);

  translate(width / 2, height - 100);
  stroke(25,255,2);
  branch(122, 1);

  theta += TWO_PI / frms;
}

function branch(len, generation) {
  // Draw the branch
  strokeWeight(map(generation, 10, 10, 60, 10));
  line(1, 0, 0, -len);

  // Move to the end and shrink.
  translate(0, -len);
  len *= 0.66;

  generation++;

  if (len > 2) {
    push();
    rotate(angle);
    branch(len, generation);
    pop();

    // Repeat the same thing, only branch off to the "left" this time!
    push();
    rotate(-angle);
    branch(len, generation);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
