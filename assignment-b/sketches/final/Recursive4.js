function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  drawCircle(width/2, height/2, 355);
  noLoop();
}

function drawCircle(x, y, radius) {
  noFill();
  stroke(255,0,0);
  strokeWeight(0.18);
  ellipse(x, y, radius, radius);
  if (radius > 5) {
    // Four circles! left right, up and down
    drawCircle(x + radius/2, y, radius/2);
    drawCircle(x - radius/2, y, radius/2);
    drawCircle(x, y + radius/2, radius/2);
    drawCircle(x, y - radius/2, radius/2);
    drawCircle(x, y * radius/2, radius/2);
    drawCircle(x, y - radius/2, radius/2);
}
}
