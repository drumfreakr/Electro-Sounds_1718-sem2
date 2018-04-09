


let smoke = [];
// let ash = [];
let randSide = Math.random(1)<0.5 ? "right" : "left";
let chimneyL, chimneyR;

class Chimney {
  constructor(side){
    this.side = side;
    this.height = height/5;
  }

  show(){
    if (this.side === "left"){
      push();
      textSize(20);
      fill(0);
      stroke(40);
      strokeWeight(1);
      translate(width/4, height/6);
      text("Chimney 1", 0, 0);
      pop();
      push();
      translate(width/4, height);
      stroke(0);
      strokeWeight(2);
      fill(0);
      rect(0, 0, 50, -this.height);
      // rect(30, 20, 55, 55);
      translate(-35, -this.height - 60);
      beginShape(TRIANGLE_STRIP);
      vertex(30, 75);
      vertex(40, 20);
      vertex(50, 75);
      vertex(60, 20);
      vertex(70, 75);
      vertex(80, 20);
      vertex(90, 75);
      endShape();
      pop();
    } else if (this.side === "right") {
      push();
      textSize(20);
      fill(0);
      stroke(40);
      strokeWeight(1);
      translate(width/1.3, height/6);
      text("Chimney 2", 0, 0);
      pop();
      push();
      translate(width/1.3, height);
      stroke(0);
      strokeWeight(2);
      fill(0);
      rect(0, 0, 50, -this.height);
      // rect(30, 20, 55, 55);
      translate(-35, -this.height - 60);
      beginShape(TRIANGLE_STRIP);
      vertex(30, 75);
      vertex(40, 20);
      vertex(50, 75);
      vertex(60, 20);
      vertex(70, 75);
      vertex(80, 20);
      vertex(90, 75);
      endShape();
      pop();
    }
  }
}




class Particle {
  constructor(side, velX, velY) {
    this.side = side;
    this.alpha = 230;

    if(this.side === "left"){
      this.x = width/4+20;
      this.y = height-chimneyL.height-50;
    } else if (side === "right") {
      this.x = width/1.3+20;
      this.y = height-chimneyR.height-50;
    }
    this.velX = random(-1, 1);
    this.velY = random(-1, -3);

  }

  move() {
    this.x += this.velX;
    this.y += this.velY;
    this.alpha -= 4;
  }

  show() {
    let size = map(this.alpha, 0, 200, 5, 30)
    fill(100, this.alpha);
    // stroke(100);
    noStroke();
    ellipse(this.x, this.y, size);
  }

  finished() {
    return this.alpha < 0;
  }
}

function setup() {
  let canvas = createCanvas(windowWidth-20, windowHeight-50);
  canvas.mouseMoved(moreSmoke);
  chimneyL = new Chimney("left");
  chimneyR = new Chimney("right");
}

function draw() {
  background(255);
  chimneyL.show();
  chimneyR.show();
  for (let i=0; i<5; i++){
    let p = new Particle(randSide, 1, 1);
    smoke.push(p);
  }

  for (let i = smoke.length-1; i >= 0; i--) {
    smoke[i].move();
    smoke[i].show();

    if(smoke[i].finished()) {
      // ash.push(smoke[i]);
      smoke.splice(i, 1);
    }
  }

  // for (let i = ash.length-1; i >= 0; i--) {
    // if (ash.length > 200){
      // ash.splice(0, 1);
    // } else {
      // fill(0);
      // point(ash[i].x, ash[i].y);
      // ash[i].alpha = 200;
    // }
  // }
}

function moreSmoke(){
  if (mouseX < width/2){
    randSide = "left";
  } else {
    randSide = "right";
  }

}
let b = [];

function setup()
{
  createCanvas(window.innerWidth,window.innerHeight);
  setInterval(()=>{b.push(new Bubble())},100);
}

function draw()
{
  background(100)
  translate(width/2,height-30);

  for(let i = 0; i < b.length ;i++)
  {

    b[i].render(i);
    if(b[i])
    {  b[i].update();
      b[i].delete(b,i);
    }
  }

}

class Bubble{

  constructor(){
    this.r=20;
    this.x = random(((-width/2)+(this.r/2)),((width/2)-(this.r/2)));
    this.y = random(50,100);
    this.angle = random(30);
    this.alpha = 255;
  }
  render(pos)
  {

    for(let i  = 0;i< b.length;i++)
    {
      if(this != b[i])
      {
        let dis = dist(this.x,this.y,b[i].x,b[i].y)
        let rs = this.r;
        if(dis < rs)
        {
          if(random(1) < 0.5)
          {
            b.splice(i,1);
          }
          else
          {
            b.splice(pos,1);
          }
        }
      }
    }

    noStroke();
    fill(110,222,255,this.alpha);
    ellipse(this.x,this.y,this.r);
    push();
    fill(255,this.alpha);
    noStroke();
    rect(this.x-(this.r/3),this.y-(this.r/3),(this.r/3)/2,(this.r/3));
    rect(this.x-(this.r/3),this.y-(this.r/3),(this.r/3),(this.r/3)/2);
    pop();
  }
  update()
  {
    this.alpha -= 0.3;
    let s = sin(this.angle);
    this.x = map(s,-1,1,(-width/2)+(this.r/2),(width/2)-(this.r/2));
    this.angle += 0.001;
    this.y -= random(0.2,1);
  }
  delete(b,i)
  {
    if(b[i].alpha < 0)
    {
      b.splice(i,1);
    }
  }
}
