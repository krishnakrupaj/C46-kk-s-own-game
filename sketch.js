var capseller,m1,m2,m3,cap1,cap2,cap3,cap4,cap5
var b1,b2,b3,b4,b5
var monkey_img1,monkey_img2,monkey_img3,monkey_img4

function preload(){
  monkey_img1 = loadImage("m1.png");
  monkey_img2 = loadImage("m2.png");
  monkey_img3 = loadImage("m3.png");
  monkey_img4 = loadImage("m4.png");
  b = loadImage("bg.png")
}

function setup() {
  createCanvas(1200,800);

  capseller = createSprite(600,775,30,50);
  
  
  m3 = createSprite(400,22,30,40)
 
}

function draw() {
  background(b);
  textSize(20)
  text(mouseX+","+mouseY,mouseX,mouseY);
  if(frameRate%60===0){
   var mx = Math.round(random(1,6));
   m2 = createSprite(0,27,30,40);
   m2.velocityX = 3;

   switch (mx) {
      case 1:
       m2.x = 150;       
       break;
      case 2:
      m2.x =325;
      break;
      case 3:
      m2.x = 450
      break;
      
     default:
       break;
   }
  }
  drawSprites();
}