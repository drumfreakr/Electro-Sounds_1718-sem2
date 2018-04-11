var rows=0, cols=0, cellSize = 27;
var sz=0, theta=0, edge = 50;

function setup() {
  createCanvas(windowWidth, windowHeight-4);
  rows = (width-2*edge)/cellSize;
  cols = (height-2*edge)/cellSize;
}

function draw() {
  background(160);
  fill(255,0,0);
  noStroke();
  for (var i=0; i<=rows; i++) {
    for (var j=0; j<cols; j++) {
      var offSet =PI + PI/rows*i + PI/cols*j;
      var x = (i+.5)*cellSize;
      var y = (j+.5)*cellSize;
      var dx = mouseX-x;
      var dy = mouseY-y;
      noStroke();
      fill(0);
      var r = atan2(dy, dx);
      var arcSize =  map(sin(theta/4+offSet), -1, 1, radians(30), PI);
      sz = cellSize*.90;
      push();
      translate(x+edge, y+edge);
      rotate(r+theta);
      arc(0, 0, sz, sz, 0, arcSize);
      pop();
    }
  }
  theta += 0.02;
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
