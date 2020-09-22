var fixedrect,moverect

function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(200 ,200 ,20 ,80);
  fixedrect.shapeColor = "red";
  fixedrect.debug = true;
  moverect  = createSprite(400,200,80,30);
  moverect.shapeColor = "red";
  moverect.debug = true;
  
}

function draw() {
  background(0); 
  moverect.x = World.mouseX;
  moverect.y = World.mouseY;

if(moverect.x-fixedrect.x < fixedrect.width/2+moverect.width/2
  && fixedrect.x-fixedrect.x < fixedrect.width/2+moverect.width/2
  && moverect.y-fixedrect.y < fixedrect.height/2+moverect.height/2
  && fixedrect.y-moverect.y < fixedrect.height/2+moverect.height/2){
  moverect.shapeColor =  "blue";
  fixedrect.shapeColor = "blue";
}
else{
  moverect.shapeColor = "red";
  fixedrect.shapeColor = "red";
}
  drawSprites();
}