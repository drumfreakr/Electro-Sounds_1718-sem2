let grid, zoom, cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = [];
  zoom = 20;
  cellSize = width / zoom;
  // noLoop();
}

function draw() {
  background('#1b1b1b');
  fill(255, 1);
  noStroke();
  for (let col = 0; col < zoom; col++) {
    for (let row = 0; row < zoom; row++) {
      x = cellSize / 2 + (cellSize * col);
      y = cellSize / 2 + (cellSize * row);
      d = dist(x, y, mouseX, mouseY);
      stroke(255, d /12);
      line(x, y, mouseX, mouseY);
      noStroke();
      ellipse(x, y, (d / zoom));
    }
  }
}
