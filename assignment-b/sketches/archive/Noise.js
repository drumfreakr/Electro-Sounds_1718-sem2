function setup() {
  createCanvas(windowWidth, windowHeight);
  background(142, 96, 69);
  smooth();

  var xstart = random(10),
      xnoise = xstart,
      ynoise = random(10);

  for (var y = 0; y <= height; y+=5) {
    ynoise += 0.1;
    xnoise  = xstart;
    for (var x = 0; x <= width; x+=5) {
      xnoise += 0.1;
      drawPoint(x, y, noise(xnoise, ynoise));
    }
  }
}

function drawPoint(x, y, noiseFactor) {
  push();
  translate(x, y);
  rotate(noiseFactor * radians(360));
  colorMode(HSB);
  stroke(x*0.1 + 20, 50, 138);
  line(0, 0, 7, 0);
  pop();
}
