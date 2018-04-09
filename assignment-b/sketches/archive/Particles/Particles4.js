
var particles = [];
var pushed = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB,360,100,100,300);
}

function draw() {
  background('black');
  if (pushed) { particles.push(new Particle(createVector(mouseX, mouseY)));
} else {
  particles.push(new Particle(createVector(width/2, 100)));
}
  for (var i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].paint();
    if (particles[i].isDead()) {
      particles.splice(i, 1);
    }
  }
}

function Particle(_loc) {

  var loc = _loc.copy();
  var vel = createVector(random(-1, 1), random(-2, 0));
  var acc = createVector(0, 0.05);
  var lifespan = 255;
  var h = random(360);
  var sz = random(25,50);

  // Method to update location
  this.update = function() {
    vel.add(acc);
    loc.add(vel);
    lifespan -= 2;
  }

  // Method to display
  this.paint = function() {
    stroke(h,90,90,lifespan);
    strokeWeight(2);
    fill(h,90,50,lifespan);
    ellipse(loc.x, loc.y, sz, sz);
  }

  // Is the particle still useful?
  this.isDead = function() {
    if (lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}

function mouseReleased() {
  pushed = !pushed;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight-4);
}
