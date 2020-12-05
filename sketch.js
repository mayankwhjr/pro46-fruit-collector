var basket

var play=1;
var end=0;
var gamestate=play;
var fruit
var score=0;
 var fruit1,fruit2,fruit3,fruit4,monster
 var fruit1img,fruit2img,fruit3img,fruit4img,monsterimg
var fruitgroup
var enemygroup
function preload(){
  basketimg=loadImage("images/basket img.jpg")
  fruit1img=loadImage("images/apple img.png")
  fruit2img=loadImage("images/banana img.png")
  fruit3img=loadImage("images/orange img.jpg")
  fruit4img=loadImage("images/watermelon img.jpg")
  monsterimg=loadImage("images/monster.png")
}
function setup() {
  createCanvas(1000,400);
  basket=createSprite(500,380)
  basket.addImage("img1",basketimg)
  fruitgroup=new Group();
   enemygroup=new Group();
}

function draw() {
 background("green")
  
  if (gamestate===play){
 basket.x=World.mouseX
    
  
if (fruitgroup.isTouching(basket)){
 

    fruitgroup.destroyEach();
  
   score=score+10
} 
if (enemygroup.isTouching(basket)||score===250) {
  
 gamestate=end; 
}   
    
  } else if (gamestate===end) {

    
  fruitgroup.destroyEach();
  enemygroup.destroyEach();
  
  fruitgroup.setVelocityXEach(0);
  enemygroup.setVelocityXEach(0);
  
  
  
}  
 

 fruit() ;
 enemy() ;
 drawSprites()
 textSize(20)
     text("score:"+score,950,20)
}

function fruit() {
 
  if (World.frameCount%120===0){
  var fruit1=createSprite(500,200,20,20)
  fruit1.addImage("img1",fruit1img)
  fruit1.scale=0.3
   fruit1.velocityY=+5
   
   fruit1.x=randomNumber(50,950);
   
   
   fruit2.setLifetime=100;
   
 }
 if (World.frameCount%150===0){
  var fruit2=createSprite(500,200,20,20)
  fruit2.addImage("img2",fruit2img)
  fruit2.scale=0.3
   fruit2.velocityY=+5
   
   fruit2.x=randomNumber(50,950);
   
   
   fruit2.setLifetime=100;
   
 }
 if (World.frameCount%105===0){
  var fruit3=createSprite(500,200,20,20)
  fruit3.addImage("img3",fruit3img)
  fruit3.scale=0.3
   fruit3.velocityY=+5
   
   fruit3.x=randomNumber(50,950);
   
   
   fruit3.setLifetime=100;
   
 }
 if (World.frameCount%80===0){
  var fruit4=createSprite(500,200,20,20)
  fruit4.addImage("img4",fruit4img)
  fruit4.scale=0.3
   fruit4.velocityY=+5
   
   fruit4.x=randomNumber(50,950);
   
   
   fruit4.setLifetime=100;
   
 }
 fruitgroup.add(fruit1&&fruit2&&fruit3&&fruit4);
}

function enemy() {
  if (World.frameCount%170===0){
   var monster= createSprite(500,200,20,20);
   monster.addImage("img5",monsterimg)
  monster.scale=0.3
  

   monster.x=randomNumber(50,700);
   
   monster.velocityY=+5
   monster.setLifetime=50;
   enemygroup.add(monster);
  
}
}

 
  drawSprites();
}