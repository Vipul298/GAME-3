var wall1 = createSprite(30,200,10,40);
var wall2 = createSprite(60,220,60,10);
var wall3 = createSprite(60,180,60,10);
var wall4 = createSprite(90,150,10,60);
var wall5 = createSprite(90,250,10,60);
var wall6 = createSprite(110,280,40,10);
var wall7 = createSprite(110,120,40,10);
var wall8 = createSprite(130,150,10,60);
var wall9 = createSprite(130,250,10,60);
var wall10 = createSprite(145,180,30,10);
var wall11 = createSprite(145,220,30,10);
var wall12 = createSprite(160,252,10,65);
var wall13 = createSprite(160,262,10,65);
var wall14 = createSprite(120,294,80,10);
var wall15 = createSprite(80,264,10,60);
var wall16 = createSprite(60,234,40,10);
var wall17 = createSprite(39,308,10,150);
var wall18 = createSprite(58,384,40,10);
var wall19 = createSprite(78,354,10,60);
var wall20 = createSprite(137,324,120,10);
var wall21 = createSprite(58,384,40,10);
var wall22 = createSprite(198,273,10,103);
var wall23 = createSprite(160,150,10,60);
var wall24 = createSprite(160,140,10,66);
var wall25 = createSprite(120,108,80,10);
var wall26 = createSprite(80,137,10,60);
var wall27 = createSprite(60,166,40,10);
var wall28 = createSprite(40,89,10,157);
var wall29 = createSprite(60,10,40,10);
var wall30= createSprite(80,40,10,60);
var wall31 = createSprite(139,70,119,10);
var wall32 = createSprite(198,121,10,103);
var wall33 = createSprite(238,222,80,10);
var wall34 = createSprite(238,172,80,10);
var wall35 = createSprite(278,242,10,40);
var wall36 = createSprite(278,153,10,40);
var wall36 = createSprite(297,133,40,10);
var wall37 = createSprite(297,261,40,10);
var wall38 = createSprite(297,133,40,10);
var wall39 = createSprite(316,152,10,40);
var wall40 = createSprite(316,240,10,40);
var wall41 = createSprite(335,220,40,10);
var wall42 = createSprite(335,173,40,10);
var wall43 = createSprite(354,197,10,47);

var line = createSprite(234,0,2,100);
line.shapeColor="GRAY"
var Player = createSprite(45,200,15,15);
Player.shapeColor="cyan"
var laser1 = createSprite(110,140,7,7);
laser1.shapeColor="red"
var laser2 = createSprite(60,30,7,7);
laser2.shapeColor="red"
var laser3 = createSprite(60,255,7,7);
laser3.shapeColor="red"
var laser4 = createSprite(297,150,7,7);
laser4.shapeColor="red"
var laser5 = createSprite(330,195,7,7);
laser5.shapeColor="red"
var laser6 = createSprite(185,195,7,7);
laser6.shapeColor="red"


  laser1.velocityY=10
  laser2.velocityY=10
  laser3.velocityY=7
  laser4.velocityY=7
  laser5.velocityX=10
  laser6.velocityY=7


var star1 = createSprite(60,17,8,8);
star1.shapeColor="orange"
var star2 = createSprite(60,159,8,8);
star2.shapeColor="orange"
var star3 = createSprite(347,195,8,8);
star3.shapeColor="orange"
var star4 = createSprite(60,245,8,8);
star4.shapeColor="orange"
var star5 = createSprite(60,378,8,8);
star5.shapeColor="orange"
var gameState = "serve";
var star6 = createSprite(189,78,8,8);
star6.shapeColor="orange"
var gameState = "serve";
var star7 = createSprite(189,315,8,8);
star7.shapeColor="orange"
var gameState = "serve";
var star8 = createSprite(110,128,8,8);
star8.shapeColor="orange"
var gameState = "serve";
var star9 = createSprite(110,274,8,8);
star9.shapeColor="orange"
var gameState = "serve";
var star10 = createSprite(297,140,8,8);
star10.shapeColor="orange"
var gameState ="serve";
var star11 = createSprite(297,254,8,8);
star11.shapeColor="orange"
var gameState ="serve";



var  playerScore =0;
var compScore =5;

function draw() {
background("Black")


  textSize(18);
  fill("red");
  textSize(30)
  text(compScore, 200,30);
  text(playerScore,250,30);
  
  fill("red");
  textSize(15);
  text("Life Line",140,30)
  
  fill("red");
  textSize(15);
  text("You score",280,30)
  
   
  
    if(keyDown("left")){
    Player.x = Player.x-3
    
  }
  if(keyDown("right")){
     Player.x = Player.x+3
    
  }
  if(keyDown("up")){
   Player.y = Player.y- 3;
    }
  
  if(keyDown("down")){
 Player.y = Player.y+3; 
    
  }


createEdgeSprites();
laser1.bounceOff(wall6);
laser1.bounceOff(wall7);

laser2.bounceOff(wall29);
laser2.bounceOff(wall27);

laser3.bounceOff(wall16);
laser3.bounceOff(wall18);

laser4.bounceOff(wall37);
laser4.bounceOff(wall38);

laser5.bounceOff(wall1);
laser5.bounceOff(wall43);

laser6.bounceOff(wall31);
laser6.bounceOff(wall20);


Player.bounceOff(wall1);
Player.bounceOff(wall2);
Player.bounceOff(wall3);
Player.bounceOff(wall4);
Player.bounceOff(wall5);
Player.bounceOff(wall6);
Player.bounceOff(wall7);
Player.bounceOff(wall8);
Player.bounceOff(wall9);
Player.bounceOff(wall10);
Player.bounceOff(wall11);
Player.bounceOff(wall12);
Player.bounceOff(wall13);
Player.bounceOff(wall14);
Player.bounceOff(wall15);
Player.bounceOff(wall16);
Player.bounceOff(wall17);
Player.bounceOff(wall18);
Player.bounceOff(wall19);
Player.bounceOff(wall20);
Player.bounceOff(wall21);
Player.bounceOff(wall22);
Player.bounceOff(wall23);
Player.bounceOff(wall24);
Player.bounceOff(wall25);
Player.bounceOff(wall26);
Player.bounceOff(wall27);
Player.bounceOff(wall28);
Player.bounceOff(wall29);
Player.bounceOff(wall30);
Player.bounceOff(wall31);
Player.bounceOff(wall32);
Player.bounceOff(wall33);
Player.bounceOff(wall34);
Player.bounceOff(wall35);
Player.bounceOff(wall36);
Player.bounceOff(wall37);
Player.bounceOff(wall38);
Player.bounceOff(wall39);
Player.bounceOff(wall40);
Player.bounceOff(wall41);
Player.bounceOff(wall42);
Player.bounceOff(wall43);







if (laser1.bounceOff(Player)) {
compScore =  compScore-1 ;

}

if (laser2.bounceOff(Player)) {
compScore =  compScore-1 ;

}

if (laser3.bounceOff(Player)) {
compScore =  compScore-1 ;

}

if (laser4.bounceOff(Player)) {
compScore =  compScore-1 ;

}

if (laser5.bounceOff(Player)) {
compScore =  compScore-1 ;

}
if (laser6.bounceOff(Player)) {
compScore =  compScore-1 ;

}



if (Player.isTouching(star1)) { 
playerScore = playerScore+1;
star1.remove();
}

if (Player.isTouching(star2)) { 
playerScore = playerScore+1;
star2.remove();
}

if (Player.isTouching(star3)) { 
playerScore = playerScore+1;
star3.remove();
}

if (Player.isTouching(star4)) { 
playerScore = playerScore+1;
star4.remove();
}

if (Player.isTouching(star5)) { 
playerScore = playerScore+1;
star5.remove();
}
if (Player.isTouching(star6)) { 
playerScore = playerScore+1;
star6.remove();
}
if (Player.isTouching(star7)) { 
playerScore = playerScore+1;
star7.remove();
}
if (Player.isTouching(star8)) { 
playerScore = playerScore+1;
star8.remove();
}
if (Player.isTouching(star9)) { 
playerScore = playerScore+1;
star9.remove();
}
if (Player.isTouching(star10)) { 
playerScore = playerScore+1;
star10.remove();
}
if (Player.isTouching(star11)) { 
playerScore = playerScore+1;
star11.remove();
}

if (compScore ===0){
    fill("white");
    textSize(22);
    text("You lose",170,160);
    Player.x = 45;
    Player.y = 200;
    laser1.x=110;
    laser1.y=140;
    laser2.x=60;
    laser2.y=30;
    laser3.x=347;
    laser3.y=195;
    laser4.x=297;
    laser4.y=150;
    laser5.x=230;
    laser5.y=195;
    laser6.y=180;
  }
if (playerScore ===11){
    fill("Yellow");
    textSize(40);
    text("You Won",170,160);
    Player.x = 45;
    Player.y = 200;
    laser1.x=110;
    laser1.y=140;
    laser2.x=60;
    laser2.y=30;
    laser3.x=347;
    laser3.y=195;
    laser4.x=297;
    laser4.y=150;
    laser5.x=230;
    laser5.y=195;
    laser6.y=180;
}
fill("yellow");
textSize(20);
text("Collect All Yellow Stars To Win",100,370);
drawSprites();
}
