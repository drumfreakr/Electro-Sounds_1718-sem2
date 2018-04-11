var spot = {
  x : 100,
  y : 100,
}

var col = {
  r : 255,
  g : 0,
  b : 0,
}

function setup() {
   createCanvas (windowWidth,windowHeight);
   background (0);
}

function draw () {
  col.r = random (0,255);
  col.g = random (0,195);
  col.b = random (0);
  spot.x = random (0,width);
  spot.y = random (0, height);
  fill (col.r, col.g, col.b, 150);
  noStroke ();
  ellipse (spot.x, spot.y, 90, 90);
}
