var tick = 0;
var base, range;

function setup(){
  createCanvas(); //doesn't actually need arguments because it gets resized ;)
  colorMode(HSB);
  noFill();

  /*
  additive blending produces bright white colors when combining
  different hues, adding character to a sketch
  */
  blendMode(ADD);
  windowResized();
}

function draw(){
  background(0);
  for (var n = 0; n < 10; n++){
    /*
    this is a trick I use often to loop back the color using mod
    generally takes the form of abs(tick%(twice range) - range)
    which gives a nice saw-like wave
    */
    var hue = abs(((tick/5)%range*2 - range) + base)%360;

    //low value alpha makes for really nice smooth coloring
    stroke(hue, 100, 100, .2);
    beginShape();
    for (var i = 0; i < height; i++){
      /*
      here I divide by 80 to zoom into the noise a bit
      then I multiply by 200 to exagerate the curve
      subtracting 100 to make result be between -100 and 100
      noise uses the p5.js built in perlin noise function
      */
      var offset = noise(i/80, tick/80)*200 - 100;
      vertex(tick + offset, i);
    }
    endShape();
    tick++;
  }

  //stop drawing when the veil has filled the canvas
  if (tick > width) noLoop();
}

function mouseClicked(){
  clear();
  tick = 0;
  loop();
  noiseSeed(random()*10000);

  /*
  random base and range for hues allows for lazy color palleting :)
  */
  base = random(360);
  range = random(180);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  pixelDensity(1); //different browsers have different pixel densities >:(
  mouseClicked();
}
