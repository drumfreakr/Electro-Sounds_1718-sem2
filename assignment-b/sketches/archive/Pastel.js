function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,200,200);
}

function draw() {
  strokeWeight(1);
  colorMode(HSL);
  c = color(random(0, 400), 100, 50, .06);
  fill(c);
  stroke(-c);
  noStroke();
  //background(-c * 2);
  for (var copies = 9; copies > 0; copies--) {
    rotate(random(0, 29));
    var rWh = function() {
      return random(0, windowWidth / 6);
    };
    var rWw = function() {
      return random(0, windowHeight / 3)
    };
    translate(copies * windowWidth / 25, copies * windowHeight / 25);
    beginShape();
    for (var verts = random(3, 25); verts > 0; verts--) {
      curveVertex(rWh(), rWw(),rWh(), rWw(),rWh(), rWw());
      curveVertex(rWh()*.8, rWw()*.8,rWh()*.8, rWw()*.8,rWh()*.8, rWw()*.8);
      curveVertex(rWh(), rWw());

    }
    endShape();

  }

}
