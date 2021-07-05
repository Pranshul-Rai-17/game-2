var zombie1 , player;
var bullet;
function preload(){
 
}

function setup(){
  createCanvas(600,400);
  player = createSprite(50,200,20,50);
  zombie = createSprite(500,200,20,50);
  bullet = createSprite(60,200,20,20);
  bullet.visible = false;
  zombie.velocityY = 3;
}
function draw(){
  
  background(220);

  //zombie.y = Math.round(random(10,350));
  
  if(zombie.y<20){
    zombie.velocityY = 2;

  }
   
  else if(zombie.y>350){
    zombie.velocityY = -2;
  }
  
  if(keyIsDown(32)){
    bullet.visible = true;
    bullet.y = mouseY;
    bullet.velocityX = 3;   
  }

  if(bullet.isTouching(zombie)){
    zombie.destroy();
  }
 
  
  drawSprites();
}

/*function spawnObstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -(6 + score/100);
   
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacle);
 }
}*/
