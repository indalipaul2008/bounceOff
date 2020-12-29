
var fixedRect,movingRect

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green"
  fixedRect.velocityY = 5;
  movingRect = createSprite(400 ,700, 30,50);
  movingRect.shapeColor = "green"
  movingRect.velocityY = -5;
}

function draw() {
  background(255,255,255);  
  //movingRect.y = mouseY;
 // movingRect.x = mouseX;


 
 bounceoff(fixedRect,movingRect);

  drawSprites();
}

function bounceoff(object1,object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
    object2.x - object1.x <object1.width/2 + object2.width/2 ){
      object1.velocityX = object1.velocityX * -1
      object2.velocityX = object2.velocityX * -1
    }
    if(object1.y - object2.y <object1.height/2 + object2.height/2 &&
      object2.y - object1.y < object1.height/2 + object2.height/2){
      object1.velocityY = object1.velocityY * -1
      object2.velocityY = object2.velocityY * -1  

}
}