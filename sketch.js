var cloud, cloud_img;
var bg, bg_img;
var bird_img, thunderCloud_img;
var gameState ; 
var obstaclesGroup;
var gameOver, restart;
var gameOver_img, restart_img;
var score = 0;

function preload(){

cloud_img = loadImage("Images/cloud.png");
bg_img = loadImage("Images/bg 1.jpg");
bird_img = loadImage("Images/bird.png");
thunderCloud_img = loadImage("Images/storm cloud.png");
gameOver_img = loadImage("Images/score bg 1.png");
restart_img = loadImage("Images/replay button.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight-160);

   bg = createSprite(displayWidth/2, displayHeight/2, width, height);
   bg.addImage(bg_img);
   bg.scale = 3;
  
   obstaclesGroup = new Group ();

   gameState = 'play';

   gameOver = createSprite(width/2, height/2);
   gameOver.addImage(gameOver_img);
   gameOver.visible = false;

  restart = createSprite(width/2, height/2);
  restart.addImage(restart_img);
  restart.scale = 0.5;
  restart.visible = false;

  cloud = createSprite(400, 200, 50, 50);
  cloud.addImage(cloud_img);
  cloud.scale = 0.3;
  cloud.setCollider('circle', 0, 0, 200);
}

function draw() {
  background("lightblue");  

  if(gameState === 'play'){
    bg.velocityX = -4;

    if(bg.x < 0){
      bg.x = width/2;
    }

    cloud.velocityY = 4;

    if(keyDown('space')){
  
      cloud.velocityY = -4;
    }
  score = score + Math.round(getFrameRate()/60);

    spawnObstacles();

    if(obstaclesGroup.isTouching(cloud)){
      gameState = 'end';
    }
  }

  else if(gameState === 'end'){
    bg.velocityX = 0;
    cloud.velocityY = 0;
    obstaclesGroup.setVelocityXEach(0);

    obstaclesGroup.setLifetimeEach (-1);

    gameOver.visible = true;
    restart.visible = true;

  }

 
  drawSprites();

  fill ("magenta");
  textSize (30);
  textAlign(CENTER);
  text (score, width-100, 50);
}

function spawnObstacles(){

  if(frameCount % 100 === 0){
    var obstacle = createSprite(width, Math.round(random(100, height)), 50, 50);
    obstacle.velocityX = -4;


    var rand = Math.round(random(1, 2));

    switch(rand){
      case 1: obstacle.addImage(bird_img);
      obstacle.scale = 0.2;
      obstacle.setCollider('rectangle', 0, 0, 350, 200);
      break;

      case 2: obstacle.addImage(thunderCloud_img);
      obstacle.scale = 0.5;
      obstacle.setCollider('circle', 0, 0, 120);
      break;

      default: break;
    }

    obstacle.lifetime = -Math.round(width/obstacle.velocityX);

    obstaclesGroup.add(obstacle);
  }

  
 
}