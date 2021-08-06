var space,spaceimg
var rocket,rocketimg
var star,starimg
function preload(){
spaceimg=loadImage("1071553.png")
rocketimg=loadImage("101980.png")
starimg=loadImage("8ixng764T.png")
}

function setup() {
createCanvas(840,400);
background(840,390);
space = createSprite(840,20);
space.addImage("space",spaceimg);
space.x = spaceimg.width /2; 
rocket=createSprite(290,200,10,10) 
rocket.addImage("rocket",rocketimg)
rocket.scale=0.2
}

function draw() {
space.velocityY = +4;
spawnstars();
drawSprites();
}
function spawnstars() {
    //write code here to spawn the clouds
    if (frameCount % 60 === 0) {
      var star = createSprite(200,200,0,0);
      starx = Math.round(random(80,120));
     star.addImage(starimg);
      star.scale = 0.5;
      star.velocityY = 0
      
       //assign lifetime to the variable
      star.lifetime = 200;
      
      //adjust the depth
      star.depth =star.depth;
     rocket.depth = rocket.depth + 1;
      
      //add each cloud to the group
 
    }
  }