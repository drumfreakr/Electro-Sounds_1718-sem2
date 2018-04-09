var video;
var x = 0;

function setup() {
  pixelDensity(1);
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(1200,650);
}

function draw() {
  video.loadPixels();
  var w = video.width;
  var h = video.height;
  for(i=0; i<w; i=i+w/8){
    for(j=0; j<h; j+=h/8){
    copy(video, 0, 0, w, h, i, j, w/8, h/8);
  // x = x+1;
    }
  }
}
