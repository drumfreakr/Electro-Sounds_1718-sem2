var balls = [];
var nucleo;

function setup() {
  createCanvas(windowWidth, windowHeight);
  nucleo = createVector(width / 2, height / 2);
  background(7, 2, 13);
}

function draw() {
  background(7, 2, 13, 150);
  mouseIsPressed
    ? nucleo.set(mouseX, mouseY)
    : nucleo.set(width / 2, height / 2);
  balls.push(new Ball(nucleo.x, nucleo.y));
  balls.push(new Ball(nucleo.x, nucleo.y));
  balls.push(new Ball(nucleo.x, nucleo.y));
  for (var i = 0; i < balls.length; i++) {
    balls[i].applyNoise(0.1);
    balls[i].update();
    balls[i].show();
    balls[i].borders();
  }

  //ellipse(width - 550, height - 200, 30, 30);
  //text(balls.length, 200, 200);
}

function Ball(x_, y_) {
  this.pos = createVector(x_, y_);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.nScaleX = random(1000);
  this.nScaleY = random(1000);
  this.size = 5;
  this.col = floor(random(4));

  this.show = function() {
    //fill(lerpColor(color(255, 63, 0), color(255, 225, 0), map(dist(this.pos.x, this.pos.y, nucleo.x, nucleo.y), 0, width, 0, 1)));
    /*switch (this.col) {
      case 0:
        fill(color(55, 114, 255));
        break;
      case 1:
        fill(color(3, 63, 99));
        break;
      case 2:
        fill(color(23, 190, 187));
        break;
      case 3:
        fill(color(3, 94, 123));
        break;
    }*/
    switch (this.col) {
      case 0:
        fill(color(177, 15, 46));
        break;
      case 1:
        fill(color(255, 55, 10));
        break;
      case 2:
        fill(color(87, 0, 0));
        break;
      case 3:
        fill(color(222, 124, 90));
        break;
    }
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  };

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  this.applyNoise = function(per_) {
    this.nScaleX -= random(per_ * -1, per_);
    this.nScaleY -= random(per_ * -1, per_);
    this.acc.add(
      map(noise(this.nScaleX, this.nScaleY), 0, 1, -1, 1),
      map(noise(this.nScaleY, this.nScaleX), 0, 1, -1, 1)
    );
    this.acc.mult(0.2);
  };

  this.borders = function() {
    if (
      this.pos.x < -this.size ||
      this.pos.x > width + this.size ||
      this.pos.y < -this.size ||
      this.pos.y > height + this.size
    ) balls.splice(balls.indexOf(this), 1);
  };
}
