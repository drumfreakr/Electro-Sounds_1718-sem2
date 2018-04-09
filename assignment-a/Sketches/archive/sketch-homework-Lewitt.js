function setup(){
 //Canvas Size
 createCanvas(960, 540);
 background (252);
}

function draw(){

  bigret();
  smallret();
}


function bigret(){
  strokeWeight(10);
  //X Y Width Height
  translate(270,70);
  rect(0,0,400,400);

for(var v = 20; v < 400; v = v + 20) {
 line(0,v,400,v);
}

}

function smallret(){
  rect(100,100,200,200);
for(var v = 120; v<300; v = v+20){
  line(v,100,v,300);
	}
}
