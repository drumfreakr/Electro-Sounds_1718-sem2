let img;

function setup () {
  createCanvas(windowWidth,windowHeight);
  background(0);
img = createImage(1000,150);

}

function draw (){
  img.loadPixels();
  for(let x = 0; x<img.width; x++) {
  for(let y = 0; y<img.height; y++) {
  let n = (x * img.width + y * (x + y) ) * mouseX;
  let cl = cos ((frameCount + n)* 20) * 200;
  img.set(x,y,color(cl));
}
}

  img.updatePixels();
  image(img,100,0,960,height);

}
