function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  var fov = 60 / 360 * PI;
  var cameraZ = height / 5.0 / tan(fov / 2.0);
  //perspective([fovy],[aspect],[near],[far])
  perspective(80 / 360 * PI, width / height, cameraZ * 0, cameraZ * 4);
// The z-dimension is the axis that points away from your screen.
}

function draw() {
  background(200,120,140);
  orbitControl();
  strokeWeight (1.5);
  fill (200,0,100);
  for (var i = -1; i < 2; i++) {
    for (var j = -5; j < 3; j++) {
      push();
      translate(i * 160, 0, j * 160);
      torus(20, 10, 15);
      pop();
    }
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
