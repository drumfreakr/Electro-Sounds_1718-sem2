function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  background(0);
  for (var i=0; i<width; i++) {
    stroke(255*noise((0.05*mouseY/height)*frameCount,i*(0.5*mouseX/width)));
    line(i,0,i,height);
  }
}
