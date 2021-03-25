var fixedRect,movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200, 200, 50, 50);
  movingRect=createSprite(200, 350, 30, 100);
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  drawSprites();
}