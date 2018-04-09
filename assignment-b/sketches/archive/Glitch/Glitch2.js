let img;

function setup () {
  createCanvas(windowWidth,windowHeight);

img = createImage(1000,200);
pixelDensity(.40);

}

function draw (){
  img.loadPixels();

  for(let x = 0; x<img.width; x++) {
  for(let y = 0; y<img.height; y++) {
  let n = (x * img.width + y * (x + y) ) * mouseX;
  let cl = sin((frameCount + n)* 1) * 200;
  img.set(x,y,color(cl));
}
}

  img.updatePixels();
  image(img,0,0,width,height);

}
