
var movingRect,fixedRect

function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(400, 200, 80, 30);
  movingRect.shapeColor="green"

  fixedRect=createSprite(600, 400, 50, 80);
fixedRect.shapeColor="green"

gameobject1=createSprite(100,100,50,50)
gameobject1.shapeColor="green"

gameobject2=createSprite(200,200,50,50)
gameobject2.shapeColor="green"

gameobject3=createSprite(300,300,50,50)
gameobject3.shapeColor="green"

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY
  if (isTouching(movingRect,gameobject1)) {
      gameobject1.shapeColor = "red"; 
      movingRect.shapeColor = "red";
  }
    else
 
  { 
    movingRect.shapeColor = "green"; 
    gameobject1.shapeColor = "green"; 
 }

    
  
  drawSprites();
}

function isTouching(o1,o2)
{

  if (o1.x - o2.x < o2.width/2 + o1.width/2 && 
    o2.x - o1.x < o2.width/2 + o1.width/2 && 
    o1.y - o2.y < o2.height/2 + o1.height/2 && 
    o2.y - o1.y < o2.height/2 + o1.height/2)
    {
      return true
    }

  else
  {
    return false
  }
}
