var start = 0;
var inc = 0.004;
var xoff = 0;
var yoff = 0;

function setup(){
  createCanvas(windowWidth,windowHeight);
  pixelDensity(1);
  generate();
}

function mouseClicked(){ generate(); }

function generate(){
  start = random(500);
  noiseDetail(random(3,30));
  var rate1 = random(2000,5000);
  var rate2 = random(2000,5000);
  var mult1 = random(200,255);
  var mult2 = random(200,255);
  var rgb = shuffle([0, 1, 2]);

  loadPixels();
  yoff = start;
  for(var y=0;y<height;y++){
    xoff = start;
    for(var x=0;x<width;x++){
      var i = (x+y*width)*4;
      var n = noise(xoff, yoff) * 255;
      pixels[i+rgb[0]] = abs(sin(x/rate1))*n;
      pixels[i+rgb[1]] = noise(n)*mult1;
      pixels[i+rgb[2]] = noise(y/rate2)*mult2;
      pixels[i+3] = 255;
      xoff+=(x<width/2?inc:-inc);
    }
    yoff+=(y<height/2?inc:-inc);
  }
  updatePixels();
}
