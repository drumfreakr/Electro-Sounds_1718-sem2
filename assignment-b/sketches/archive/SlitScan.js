var video;
var y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(2);
  video = createCapture(VIDEO);
  video.size(1200, 200);
  background(0);
}

function draw() {
  video.loadPixels();
  // image(video, 0, 0);

  var w = video.width;
  var h = video.height;

  copy(video, 0, h/2, w, 20, 0, y, w, 20);

  y = y + 1;

  if (y > height) {
    y = 0;
  }
}
