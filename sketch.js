var moving;
var fixed;
var gameObj1;
var gameObj2;
function setup() {
  createCanvas(800,400);
  fixed = createSprite(500, 200, 50, 50);
  moving = createSprite(100,100,30,50);
  gameObj1 = createSprite(200,250,30,40);
  gameObj2 = createSprite(250,200,40,30);
  moving.velocityX = 1;
  moving.velocityY = 4;
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
  moving.x = mouseX;
  moving.y = mouseY;
  
 if(isTouching(moving, fixed)){
  moving.shapeColor = "red"
    fixed.shapeColor = "pink" 
 }
 else {
   moving.shapeColor = "red"
 fixed.shapeColor = "blue"  

} 
if(isTouching(moving,gameObj1)){
  gameObj1.shapeColor = "green"
  moving.shapeColor = "cyan"
}
else{
  gameObj1.shapeColor = "brown"
      moving.shapeColor = "yellow"}
  }

function isTouching(obj1, obj2){
  if (
      obj1.x - obj2.x< obj1.width/2 + obj2.width/2
    &&obj2.x-obj1.x<obj1.width/2+obj2.width/2
    &&obj1.y-obj2.y<obj1.height/2+obj2.height/2
    &&obj2.y-obj1.y<obj1.height/2+obj2.height/2)
    {return true
  } 
   else {return false 
  
}
}


  
  
  
  
  
  
  
  
     
