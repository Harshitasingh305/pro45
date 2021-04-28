var runner,ground;
var cloudsGroup;
var monsterGroup;
var boostGroup;
var trampolineGroup;
var gameState=1;
function preload(){


}
  
 function setup(){
createCanvas(800,800)
runner=createSprite(20,700,20,20)
ground=createSprite(20,730,9000,30)
cloudsGroup=createGroup()
monsterGroup=createGroup()
boostGroup=createGroup()
 trampolineGroup=createGroup()
 }


 function draw(){
background("lightBlue")
if(gameState===1){
spawnCactus()
spawnMonster()
spawnBoost()
spawnTrampoline()
ground.velocityX=-3;
if(ground.x<0){
	ground.x=ground.width/2
}
if(runner.isTouching(cloudsGroup)||runner.isTouching(monsterGroup)){
gameState=0

}
}
else if(gameState===0){
ground.velocityX=0
cloudsGroup.setVelocityXEach(0)
monsterGroup.setVelocityXEach(0)
trampolineGroup.setVelocityXEach(0)
boostGroup.setVelocityXEach(0)
}
drawSprites()

 }
 function spawnCactus() {
  //write code here to spawn the clouds
  if (frameCount % 170 === 0) {
    var cloud = createSprite(600,700,40,10);
   
   
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
   cloud.shapeColor="black"
    //add each cloud to the group
    cloudsGroup.add(cloud);
    console.log("cac")
  }
}
function spawnMonster(){
if (frameCount % 350 === 0) {
    var monster = createSprite(1500,700,40,10);
   
   
    monster.scale = 0.5;
    monster.velocityX = -5;
    
     //assign lifetime to the variable
    monster.lifetime = 700;
    
    //adjust the depth
   monster.shapeColor="green"
    //add each cloud to the group
    monsterGroup.add(monster);


}}
function spawnBoost(){
if (frameCount % 400 === 0) {
    var boost = createSprite(2000,680,40,10);
 boost.y=Math.round(random(600,670))
   
    boost.scale = 0.5;
    boost.velocityX = -3;
    
     //assign lifetime to the variable
   // boost.lifetime = 200;
    
    //adjust the depth
   boost.shapeColor="red"
    //add each cloud to the group
    boostGroup.add(boost);


}

}
function spawnTrampoline(){

	if (frameCount % 400 === 0) {
    var trampoline = createSprite(1300,700,40,40);
   trampoline.y=Math.round(random(600,670))
   
    trampoline.scale = 0.5;
    trampoline.velocityX = -3;
    
     //assign lifetime to the variable
    //trampoline.lifetime = 200;
    
    //adjust the depth
   trampoline.shapeColor="blue"
    //add each cloud to the group
    trampolineGroup.add(trampoline);
console.log("j")

}
}