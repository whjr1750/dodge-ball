var field,fieldImg;
var ball,ballImg;
var basketball,basketballImg;
var player,playerImg;
var score=0;
var play=1;
var gameState=play;
var end;
var restart,restartImg;

function preload(){
    ballImg=loadImage("ball.png");
    basketballImg=loadImage("basketball.png");
    fieldImg=loadImage("field.jpg");
    playerImg=loadImage("player.png"); 
    restartImg=loadImage("reset.jpg"); 
}

function setup(){
    createCanvas(1000,700);

    field=createSprite(500,400);
    field.addImage("field",fieldImg);

    restart=createSprite(500,400);
    restart.addImage("restart",restartImg);
    restart.scale=0.10;
    restart.visible=false;
    
    player=createSprite(500,470,5,10);
    player.addImage("player",playerImg);
    player.scale=0.56;

    ball=createSprite(100,120,5,10);
    ball.addImage("ball",ballImg);
    ball.scale=0.15;
    ball.velocityX=5;
    ball.velocityY=5;
   

    basketball=createSprite(900,120,5,10);
    basketball.addImage("basketball",basketballImg);
    basketball.scale=0.15;
    basketball.velocityX=5;
    basketball.velocityY=5;

    

    
   edges= createEdgeSprites();

}

function draw(){
    background(100);

    textSize(15);
    text("score:"+score,width-300,40);

   player.x=World.mouseX;
   
   ball.bounceOff(edges[1]);
   ball.bounceOff(edges[3]);
   ball.bounceOff(edges[2]);
   ball.bounceOff(edges[0]);

   basketball.bounceOff(edges[1]);
   basketball.bounceOff(edges[3]);
   basketball.bounceOff(edges[2]);
   basketball.bounceOff(edges[0]);

   

   if(ball.isTouching(player)){
    gameState=end;
   }
   if(gameState===end){

    ball.visible=false;
    basketball.visible=false;
    player.visible=false;
    restart.visible=true;
    if(mousePressedOver(restart)){
      reset();
    }
   }

   

   drawSprites();
}

function reset(){
     gameState=play;
     restart.visible=false;
     score=0;
     player.visible=true;
     ball.visible=true;
     basketball.visible=true;
     ball.velocityX=5;
     ball.velocityY=5;
     basketball.velocityX=5;
     basketball.velocityY=5;

 } 
