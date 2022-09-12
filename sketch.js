var carrot,apple,food,bestfood,carrotImg,appleImg,foodImg,bestFoodImg;
var life, extraLife, lives;
var monster,monsterImg,monsterDeathImg,monsterDeath;
var weapon,weapon1,weapon2,weapon3,weapon4,weapon5,weapon6,weapon7,weapon8,weapon9,weapon10,weapon11,weapon12,weapon13,weapon14;
var gold;
var ground, groundImg;
var player,playerImg;
var time;
var score = 0;
var monsterGroup;
var weaponGroup;


function preload(){
  // food
  // carrotImg = loadImage('./Assets/carrot.png');
  // appleImg = loadImage('./Assets/apple.png');
  // foodImg = loadImage('./Assets/food.png');
  // bestFoodImg = loadImage('./Assets/bestfood.png');

  // life
  life = loadImage('./Assets/life.png');
  extraLife = loadImage('./Assets/extra life.png');

  //monster
  monsterImg = loadImage('./Assets/monster.png'); 
  monsterDeathImg = loadImage('./Assets/monsterDeath.png');

  //weapons
  weapon1 = loadImage('./Assets/weapon1.png');
  weapon2 = loadImage('./Assets/weapon2.png');
  weapon3 = loadImage('./Assets/weapon3.png');
  weapon4 = loadImage('./Assets/weapon4.png');
  weapon5 = loadImage('./Assets/weapon5.png');
  weapon6 = loadImage('./Assets/weapon6.png');
  weapon7 = loadImage('./Assets/weapon7.png');
  weapon8 = loadImage('./Assets/weapon8.png');
  weapon9 = loadImage('./Assets/weapon9.png');
  weapon10 = loadImage('./Assets/weapon 10.png');
  weapon11 = loadImage('./Assets/weapon 12.png');
  weapon12 = loadImage('./Assets/weapon13.png');
  weapon13 = loadImage('./Assets/weapon14.png');

  //money
  money = loadImage('./Assets/gold.png');

  //ground
  groundImg =  loadImage('./Assets/ce80c5c3db6e9b7.png');

  //player
  playerImg =  loadImage('./Assets/player.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  //ground
  ground = createSprite(width/2,height-75);
  ground.addImage(groundImg);
  ground.scale = 3;

  //player
  player = createSprite(width-100,height-340);
  player.addImage(playerImg);
    //player.scale = 3

  monsterGroup= new Group()
  weaponGroup= new Group()

}

function draw() {
  background(255,255,255);  
  enemies()

 textSize(50)
 text('score:'+ score, 1700,100)




 if(weaponGroup.isTouching(monsterGroup)){
   monsterGroup.destroyEach()

   weaponGroup.destroyEach()
   score = score+50
 }

  drawSprites();
}

function enemies() {
  if(frameCount%400 === 0){
    monster = createSprite(0,540);
    monster.velocityX = 4 ;
    monster.addImage(monsterImg);
    monster.scale = 0.8

    monsterGroup.add(monster)
   
  }
}

function weapons()  {
    weapon = createSprite(player.x - 130,player.y);
    weapon.velocityX = -4 ;
    weapon.addImage(weapon1);
    weapon.scale = 0.5

    weaponGroup.add(weapon)
  }

function keyPressed(){
  if (keyCode === 32){
    weapons()
  }

}

