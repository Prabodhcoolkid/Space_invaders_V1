//Variable declaration

//background and game level
createEdgeSprites();
var background1 = createSprite(200,200);
background1.visible = false;
background1.setAnimation("background1");
background1.scale = 1;
background1.rotationSpeed = -0.1;

var background0 = createSprite(200,200);
background0.visible = true;
background0.setAnimation("startmenu");
background0.scale = 0.6;

var menu2 = createSprite(200,200);
menu2.setAnimation("win");
menu2.scale = 0.5;
menu2.visible = false;

var gameover = createSprite(200,200);
gameover.setAnimation("gameover");
gameover.visible = false;

var start = createSprite(180,350);
start.setAnimation("start");
start.scale = 0.1;
start.visible = false;

//Variable functions
var gameState = "start";
var score = 0;
  //timers
var stateTime1 = 0;
var boomTimer1 = 20;
var stateTime2 = 0;
var boomTimer2 = 20;
var stateTime3 = 0;
var boomTimer3 = 20;


//Spaceship
var spaceship = createSprite(200,350);
spaceship.setAnimation("spacefighter");
spaceship.scale = 0.1;
spaceship.visible = false;

//bullets
var bullet = createSprite(100,-10,5,10);
bullet.shapeColor = "red";
bullet.visible = false;


//
var aliensGroup = createGroup(); 

//aliens
  //zaps
var zap = createSprite(-50,0);
zap.visible = false;
zap.setAnimation("zap");
zap.scale = 0.4;

var zap2 = createSprite(-50,0);
zap2.visible = false;
zap2.setAnimation("zap");
zap2.scale = 0.4;

var zap3 = createSprite(-50,0);
zap3.visible = false;
zap3.setAnimation("zap");
zap3.scale = 0.4;

var zap2 = createSprite(-50,0);
zap2.visible = false;
zap2.setAnimation("zap");
zap2.scale = 0.4;



 
  //alien Config

var alien1 = createSprite(50,120);
alien1.setAnimation("alien1");
alien1.scale =0.1;
alien1.visible = false;
alien1.velocityX = 5;


var alien2 = createSprite(50,100);
alien2.setAnimation("alien2");
alien2.scale =0.1;
alien2.visible = false;
alien2.velocityX = 10;

var alien3 = createSprite(50,120);
alien3.setAnimation("alien3");
alien3.scale =0.1;
alien3.visible = false;
alien3.velocityX = 7;




//Game consumbles Functions
  //hearts

  var heart = 0;

  var heart1 = createSprite(20,20);
  heart1.setAnimation("heart1");
  heart1.scale = 0.03;
  heart1.visible = false;
  
  var heart2 = createSprite(20,50);
  heart2.setAnimation("heart1");
  heart2.scale = 0.03;
  heart2.visible = false;
  
  var heart3 = createSprite(20,80);
  heart3.setAnimation("heart1");
  heart3.scale = 0.03;
  heart3.visible = false;

  //score
  function SCORE(){
    if (score == 6){
      gameState = "end";
    }
    
  }


//Game mechanics Functions
function SpaceshipMovements(){
  spaceship.visible = true;
  if (keyDown("left")){
    spaceship.x = spaceship.x - 5;
  }
  if (keyDown("right")){
    spaceship.x = spaceship.x + 5;
  }

  spaceship.bounce(edges);
  
}

//Alien's Level 1 functions
  //zap probs
function ZapProbability(){
  var zapper = randomNumber(0,20);
  zap.visible = true;
  if (zapper == 0){
    zap.x=alien1.x;
    zap.y=alien1.y;
    zap.velocityY = 10;
  }
  if(zap.y>400){
    zapper = randomNumber(0,20);
  }
}

function ZapProbability2(){
  var zapper2 = randomNumber(0,40);
  zap2.visible = true;
  if (zapper2 == 0){
    zap2.x=alien2.x;
    zap2.y=alien2.y;
    zap2.velocityY = 10;
  }
  if(zap2.y>400){
    zapper2 = randomNumber(0,20);
  }
}

function ZapProbability3(){
  var zapper3 = randomNumber(0,40);
  zap3.visible = true;
  if (zapper3 == 0){
    zap3.x=alien3.x;
    zap3.y=alien3.y;
    zap3.velocityY = 10;
  }
  if(zap2.y>400){
    zapper3 = randomNumber(0,20);
  }
}

function SpaceShipDestroy(){
  if (heart == 3){
    gameState = "over";
  }
}

function HeartDestroy(){
  if (zap.isTouching(spaceship)){
    zap.x = -400;
    heart = heart + 1;
    console.log(heart);
  }
  if (zap2.isTouching(spaceship)){
    zap2.x = -400;
    heart = heart + 1;
    console.log(heart);
  }
  if (zap3.isTouching(spaceship)){
    zap3.x = -400;
    heart = heart + 1;
    console.log(heart);
  }
}

function HeartDisplay(){
  if (heart ==1){
    heart1.destroy();
  }
  if (heart ==2){
    heart2.destroy();
  }
  if (heart ==3){
    heart3.destroy();
  }
}
//Shoot
function Shoot(){
  bullet.visible = true;
  if (mouseWentDown("left") && bullet.y <0){
    playSound("sound://category_pop/puzzle_game_downgrade_bubble_04.mp3", false);
    bullet.x = spaceship.x;
    bullet.y = spaceship.y;
    bullet.velocityY = -10;
  }
}

function Alien1Shot(){
  if (bullet.isTouching(alien1)){
    playSound("sound://default.mp3", false);
    bullet.x = 100;
    bullet.y = -10;
    alien1.setAnimation("alienboom");
    alien1.scale = 0.2;
    score = score + 1;
    stateTime1 = "true";
    if (stateTime1 == "true"){
    boomTimer1 = boomTimer1 - 10;
    alien1.velocityX = 0;
    if (Math.round(boomTimer1) == 0){
      alien1.destroy();
      zap.destroy();
      console.log(boomTimer1);
    }
  
    }
  }
}
function Alien2Shot(){
  if (bullet.isTouching(alien2)){
    playSound("sound://default.mp3", false);
    bullet.x = 100;
    bullet.y = -10;
    alien2.setAnimation("alienboom");
    alien2.scale = 0.2;
    score = score + 1;
    stateTime2 = "true";
    if (stateTime2 == "true"){
    boomTimer2 = boomTimer2 - 10;
    alien2.velocityX = 0;
    if (Math.round(boomTimer2) == 0){
      alien2.destroy();
      zap2.destroy();
      console.log(boomTimer2);
    }
  
    }
  }
}
function Alien3Shot(){
  if (bullet.isTouching(alien3)){
    bullet.x = 100;
    bullet.y = -10;
    alien3.setAnimation("alienboom");
    alien3.scale = 0.2;
    score = score + 1;
    stateTime3 = "true";
    if (stateTime3 == "true"){
    boomTimer3 = boomTimer3 - 10;
    alien3.velocityX = 0;
    if (Math.round(boomTimer3) == 0){
      alien3.destroy();
      zap3.destroy();
      console.log(boomTimer3);
    }
  
    }
  }
}

// Game run functions
function GameStart(){
  if (gameState == "start"){
    start.visible = true;
  } else {
    
  }
  if (keyWentDown("space")){
    gameState = "level1";
    
  }
}


function Level1(){
  if (gameState == "level1"){
    Shoot();
    Alien1Shot();
    Alien2Shot();
    Alien3Shot();
    SpaceshipMovements();
    start.visible = false;
    background0.visible = false;
    background1.visible = true;
    spaceship.visible = true;
    //aliens
    alien1.visible = true;
    alien2.visible = true;
    alien3.visible = true;
    
    //hearts
    heart1.visible = true;
    heart2.visible = true;
    heart3.visible = true;
    ZapProbability();
    ZapProbability2();
    ZapProbability3();
    //SpaceShipDestroy();
    HeartDisplay();
    HeartDestroy();
    SCORE();
    SpaceShipDestroy();
  }
}
function GameEnd(){
  if (gameState == "end"){
    spaceship.visible = false;
    background1.visible = false;
    menu2.visible = true;
    heart1.visible = false;
    heart2.visible = false;
    heart3.visible = false;
  }
  if (gameState == "over"){
    spaceship.setAnimation("spaceDestroyed");
    gameover.visible = true;
    alien1.visible = false;
    alien2.visible = false;
    alien3.visible = false;
    zap.visible = false;
    zap2.visible = false;
    zap3.visible = false;
    heart1.visible =false;
    heart2.visible =false;
    heart3.visible =false;
}
}


function draw() {
  background("white");
  drawSprites();



  alien1.bounceOff(edges);
  alien2.bounceOff(edges);
  alien3.bounceOff(edges);




  GameStart();
  GameEnd();
  Level1();
  SpaceShipDestroy();
  
}
playSound("sound://category_background/eerie_beginnings.mp3", false);
