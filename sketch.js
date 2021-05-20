var cloud, cloud_img;
var bg, bg_img;
var bird_img, thunderCloud_img;
var gameState ; 

function preload(){

cloud_img = loadImage("Images/cloud.png");
bg_img = loadImage("Images/bg 1.jpg");
bird_img = loadImage("Images/bird.png");
thunderCloud_img = loadImage("Images/storm cloud.png");

}

function setup() {
  createCanvas(displayWidth, displayHeight-160);

   bg = createSprite(displayWidth/2, displayHeight/2, width, height);
   bg.addImage(bg_img);
   bg.scale = 3;
  
   cloud = createSprite(400, 200, 50, 50);
   cloud.addImage(cloud_img);
   cloud.scale = 0.3;

   gameState = 'play';
}

function draw() {
  background("lightblue");  

  if(gameState === 'play'){

  }

  else if(gameState === 'end'){

  }

  bg.velocityX = -4;

  if(bg.x < 0){
    bg.x = width/2;
  }

  cloud.velocityY = 4;

  if(keyDown('space')){

    cloud.velocityY = -4;
  }

  spawnObstacles();
  drawSprites();
}

function spawnObstacles(){

  if(frameCount % 100 === 0){
    var obstacle = createSprite(width, Math.round(random(100, height)), 50, 50);
    obstacle.velocityX = -4;


    var rand = Math.round(random(1, 2));

    switch(rand){
      case 1: obstacle.addImage(bird_img);
      obstacle.scale = 0.2;
      break;

      case 2: obstacle.addImage(thunderCloud_img);
      obstacle.scale = 0.5;
      break;

      default: break;
    }
  }


 
}