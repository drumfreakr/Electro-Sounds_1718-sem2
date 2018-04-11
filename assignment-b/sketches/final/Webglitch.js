function setup() {
  createCanvas(windowWidth, windowWidth);
  noFill();
}

function draw() {
  background();
  for (var i=0; i<width; i++) {
    stroke(255*noise((0.05*mouseY/height)*frameCount,i*(0.1*mouseX/width)));
    line(i,0,i,height);
  }
}
var img;
var previmg = new Array(300*480);

function preload() {
  img = createCapture(VIDEO);
  img.hide();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(img, 250, 80);
  loadPixels();
  for (var i = 0; i < pixels.length; i+=4){
    if (abs(previmg[i] - pixels[i]) < 2) {
      pixels[i] = pixels[i] - previmg[i];

      //previmg[i] = pixels[i];
       pixels[i] = 255;
       pixels[i+1] = 255;
       pixels[i+2] = 255;
    }
    else {
      previmg[i] = pixels[i];
      pixels[i]=255;
      pixels[i+1]=0;
      pixels[i+2]=0;
    }
  }
  updatePixels();
}
