var universe, rocket, star, Moon;

//,diamonds,jwellery,sword;
var universeImg, rocketImg, starImg, MoonImg, endImg;

//,diamondsImg,jwelleryImg,swordImg;

var treasureCollection = 0;
var starG, MoonG;

//,diamondsG,jwelleryG,swordGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
    universeImg = loadImage("Universe.png");
    rocketImg = loadAnimation("rocket.png");
    starImg = loadImage("star.png");
    MoonImg = loadImage("Moon.png");
    //jwelleryImg = loadImage("jwell.png");
    //swordImg = loadImage("sword.png");
    //endImg =loadAnimation("gameOver.png");
}

function setup(){
  
    //create the canvas and adjust the window sizes to suit the device 

    createCanvas(400, 600)
    universe=createSprite(width/2,200);
    universe.addImage(universeImg);
    universe.velocityY = 4;

    //creating rocket running
    
    rocket = createSprite(width/2,height-20,20,20);
    rocket.addAnimation("SahilRunning",rocketImg);
    rocket.scale=0.2;
    
    starG=new Group();
    MoonG=new Group();
    /*
    
    diamondsG=new Group();
    jwelleryG=new Group();
    
*/
}

function draw() {

  if(gameState===PLAY)
  {
    background(universeImg);
    rocket.x = World.mouseX;
  
    edges= createEdgeSprites();
    rocket.collide(edges);
    

    //code to reset the background
    createStar();
    createMoon();

    /*
    
    createDiamonds();
    createJwellery();
    
    */
    
    if (starG.isTouching(rocket)) {
      starG.destroyEach();
      treasureCollection=treasureCollection + 50;
    }
    /* else if (diamondsG.isTouching(rocket)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection + 100;
      
    }
    else if(jwelleryG.isTouching(rocket)) {
      jwelleryG.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }*/
    else
    {
      
      if(MoonG.isTouching(rocket)) {
        gameState=END;

        textSize(24);
        fill("white");
        text("Press space to restart the game!", 50, 200);
        
        rocket.addAnimation("SahilRunning",endImg);
        rocket.x=width/2;
        rocket.y=height/2;
        rocket.scale=0.6;
        
        //cashG.destroyEach();
        //diamondsG.destroyEach();
        //jwelleryG.destroyEach();
        //swordGroup.destroyEach();
        
        //cashG.setVelocityYEach(0);
        //diamondsG.setVelocityYEach(0);
        //jwelleryG.setVelocityYEach(0);
        //swordGroup.setVelocityYEach(0);
     
      }
    }
  }
  
  drawSprites();
  //text("press space to restart the game" , 240, 200);
  //textSize(20);
}


function createStar() {
  if (World.frameCount % 200 == 0) {
   // Modify the positions of cash 
    var star = createSprite(Math.round(random(50, 350),4, 5, 5));
    star.addImage(starImg);
    star.scale=0.12;
    star.velocityY = 5;
    star.lifetime = 200;
    starG.add(star);
  }
}

function createMoon() {
  if (World.frameCount % 530 == 0) {
       // Modify the positions of Moon 

    var Moon = createSprite(Math.round(random(50, 350),40, 10, 10));
    Moon.addImage(MoonImg);
    Moon.scale=0.30;
    Moon.velocityY = 4;
    Moon.lifetime = 200;
    MoonG.add(Moon);
}
}
/*
function createJwellery() {
  if (World.frameCount % 410 == 0) {
    //   Modify the positions of jwellery to make them spawn throughout the available screen size.

    var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
    jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 5;
  jwellery.lifetime = 200;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
    //   Modify the positions of sword to make them spawn throughout the available screen size.

    var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
    sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 4;
  sword.lifetime = 200;
  swordGroup.add(sword);
  }
}
*/
function reset() {
  if (rocket.isTouching(Moon)) {
    gameState = END
    text("press space to restart the game" , 240);
  }
}