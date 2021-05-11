var boy,boy_running;
var score;
var addImage;
var chocolateGroup, bittergudGroup;

function preload(){
  // backImage=loadImage("jungle.jpg")
  
  monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png",
                                "sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 // creating monkey
  boy=createSprite(80,315,20,20);
  boy.addAnimation("moving",boy_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
bittergudGroup = new Group();
 chocolateGroup = new Group();
  
  
 
}


function draw() {
  background(255)

  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    boy.velocityY=-12;
  }
  monkey.velocityY = monkey.velocityY+0.8
  monkey.collide(ground);
  
  
  spawnChocolates(); 
  spawnBitterguds();
  drawSprites();
 

if(bittergudGroup.isTouching(boy)){
       boy.scale=0.12
}
  
  if (chocolateGroup.isTouching(boy)){
    score=score+2;
    chocolateGroup.destroyEach();
  }
  switch(score){
    case 10: boy.scale=0.20
      break;
      case 20: boy.scale=0.30;
      break;
      default:break;
  }

  
 
  stroke("black");
  textSize(20);
  fill("black");
  text("Score:" + score,300,100)

}
  
    function spawnBittergud(){
 if (frameCount % 100 === 0){
   var bittergud = createSprite(400,320,10,40);
   bittergud.velocityX = -6 
   
  bittergudGroup.add(obstacle)
  bittergud.addImage(obstacleImage);
  bittergud.scale=0.1;
  bittergud.lifetime=300;
  }  
  
  
  
    }
function spawnChocolates(){
  if (frameCount % 60 === 0){
   var chocolate = createSprite(400,80,10,40);
 chocolate.velocityX =-6;
 chocolate.y=random(100,300)
 chocolate.addImage(chocolateImage);
 chocolate.scale=0.1;
 chocolate.lifetime=300;
 chocolateGroup.add(chocolate)

}
}
