var movingRect,fixedRect;
var rect1,rect2
function setup() {
  createCanvas(400,400);
  movingRect=createSprite(200, 200, 50, 50);
  fixedRect = createSprite(200,300,50,100)
  rect1=createSprite(200,200,50,50)
  rect2 = createSprite(300,200,50,50)
  rect1.velocityY=1
  fixedRect.velocityY=-1
}

function draw() {
  background("black"); 
  movingRect.x=mouseX
  movingRect.y=mouseY
  istouching(movingRect,rect2)
 bounceoff(rect1,fixedRect)
  drawSprites();
}
function bounceoff (ob1,ob2){
  if(ob1.x-ob2.x<ob2.width/2+ob1.width/2&&ob2.x-ob2.x<ob2.width/2+ob1.width/2){
    ob1.velocityX=ob1.velocityX*(-1)
     ob2.velocityX=ob2.velocityX*(-1)
  }
  if(ob1.y-ob2.y<ob2.height/2+ob1.height/2&&ob2.y-ob1.y<ob2.height/2+ob1.height/2){
   ob1.velocityY=ob1.velocityY*(-1)
   ob2.velocityY=ob2.velocityY*(-1)
  }
}
function istouching(ob1,ob2){
  if(ob1.x-ob2.x<ob2.width/2+ob1.width/2&&ob2.x-ob1.x<ob2.width/2+ob1.width/2
    &&ob1.y-ob2.y<ob2.height/2+ob1.height/2&&ob2.y-ob1.y<ob2.height/2+ob1.height/2){
      ob1.shapeColor="red"
      ob2.shapeColor="red"
   }
   else{
    ob1.shapeColor="green"
    ob2.shapeColor="green"
   }

}