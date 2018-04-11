function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  var fov = 40 / 540 * PI;
  var cameraZ = height / 5.0 / tan(fov / 2.0);
  //perspective([fovy],[aspect],[near],[far])
  perspective(80 / 360 * PI, width / height, cameraZ * 0, cameraZ * 100);
// The z-dimension is the axis that points away from your screen.
}

function draw() {
  background(4,110,140);
  orbitControl();
  strokeWeight (2.5);
  fill (200,220,50);
  for (var i = -1; i < 2; i++) {
    for (var j = -5; j < 3; j++) {
      push();
      translate(i * 360, 10, j * 50);
      sphere(15, 10, 2);
      pop();
    }
  }
}

//box()
//plane
//sphere()
//ellipsoid()
//cone()
//cylinder()
//torus()
//cone(40,100,100)draws a cone with radius: 40, height: 100, and a detail of 100
//Larger detail numbers create smoother curves. Default =  24
