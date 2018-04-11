function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
  background(0);
  rotateY(frameCount * 0.04);
  strokeWeight (0.5);
  fill (218,165,32);

  for(var j = 0; j < 4; j++){
    push();
    for(var i = 0; i < 80; i++){
      translate(sin(frameCount * 0.001 + j) * 100, sin(frameCount * 0.001 + j) * 100, i * 0.1);
      rotateZ(frameCount * 0.002);
      push();
      torus(8, 6, 4);
      pop();
    }
    pop();
  }
}

//box()
//plane()
//sphere()
//ellipsoid()
//cone()
//cylinder()
//torus()
//cone(40,100,100)draws a cone with radius: 40, height: 100, and a detail of 100
//Larger detail numbers create smoother curves. Default =  24
