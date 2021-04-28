var fixRect,moveRect
function setup() {
  createCanvas(1200,800);
 fixRect= createSprite(200, 200, 50, 80);
 fixRect.shapeColor="blue"
 fixRect.debug=true;

 moveRect = createSprite(400,200,80,30);
 moveRect.shapeColor="red"
 moveRect.debug=true;
}

function draw() {
  background("brown");  

  moveRect.x=World.mouseX
  moveRect.y=World.mouseY

  if(moveRect.x-fixRect.x<moveRect.width/2+fixRect.width/2&&
    fixRect.x-moveRect.x<moveRect.width/2+fixRect.width/2&&
  moveRect.y-fixRect.y<moveRect.height/2+fixRect.height/2&&
  fixRect.y-moveRect.y<moveRect.height/2+fixRect.height/2){
    moveRect.shapeColor="black"
    fixRect.shapeColor="black"

  }

  else{
    moveRect.shapeColor="red"
    fixRect.shapeColor="blue"
  }
  drawSprites();
}