new p5(p => {
  let particles = [];
  let particleCreationRate = 1;
  let mouseDetail = 60;
  let image;

  let colors = [];

  p.preload = function() {;
    image = p.loadImage('http://i.imgur.com/8zvcK7K.jpg');
  }

  p.setup = function() {
    const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    image.resize(p.width, p.height);
    p.noFill();

    for(let i = 0; i < 10; i += 1) {
      colors.push(image.get(p.random(image.width), p.random(image.height)));
    }
  }

  p.draw = function() {
    p.background(0);

    if(p.mouseIsPressed) {
      if(p.pmouseX && p.pmouseY) {
        for(let i = 0; i < mouseDetail; i += 1) {
          let x = p.map(i, 0, mouseDetail, p.pmouseX, p.mouseX);
          let y = p.map(i, 0, mouseDetail, p.pmouseY, p.mouseY);

          for(let j = 0; j < particleCreationRate; j += 1) {
            particles.push(new Particle(p.createVector(x, y), p.random(colors)));
          }
        }
      }
    }

    for(let i = 0; i < particles.length; i += 1) {
      particles[i].update();
      particles[i].display();
    }

    particles = particles.filter( particle => !particle.isDead );
  }

  let Particle = function(loc, c) {
    this.loc = loc.copy();
    this.acc = p.createVector(0, 0);
    this.vel = p.createVector(0, 0);

    this.strength = 5;
    this.scale = 0.01;
    this.points = 5;

    this.age = 0;
    this.lifespan = p.random(200);

    this.isDead = false;

    this.color = c;

    this.update = function() {
      if(this.age < this.lifespan) {
        this.angle = p.noise(this.loc.x * this.scale, this.loc.y * this.scale) * this.strength;
        this.acc = p.createVector(p.sin(this.angle), p.cos(this.angle));
        this.acc.mult(p.random(1))
        this.vel.add(this.acc);
        this.vel.limit(p.random(10));
        this.loc.add(this.vel);
      } else {
        this.isDead = true;
      }

      this.age += 1;
    }

    this.display = function() {
      p.stroke(c, p.map(this.age, 0, this.lifespan + 1, 100, 1));
      p.point(this.loc.x, this.loc.y);
    }
  }
})
