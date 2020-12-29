var player;
var enemy = [0, 1];
var bullet = []; 
var bulletArrayCount = 0;
var bulletCount = 100;

//Map
var dungeon = [0, 1, 2, 3, 4, 5, 6];
var tunnel = [0, 1, 2, 3, 4, 5];

//game 
var GameState = "Play";
var GameFont;
var Level = 1;
var BackGroundColor = (55, 55, 55);
 
function preload(){
  GameFont = loadFont("Font.TTF");
  ButtonSE = loadSound("SE/Button.mp3");
}

function setup() {
  createCanvas(600, 600);
  
  //middle
  dungeon[0] = new Dungeon(300, 100);
  dungeon[1] = new Dungeon(300, 300);
  dungeon[2] = new Dungeon(300, 500);
  //left
  dungeon[3] = new Dungeon(100, 300);
  dungeon[4] = new Dungeon(100, 500);
  //right
  dungeon[5] = new Dungeon(500, 300);
  dungeon[6] = new Dungeon(500, 100);

  //middle
  tunnel[0] = new Tunnel(300, 200, 50, 100);
  tunnel[1] = new Tunnel(300, 400, 50, 100);
  //left
  tunnel[2] = new Tunnel(100, 400, 50, 100);
  tunnel[3] = new Tunnel(500, 200, 50, 100);
  //right
  tunnel[4] = new Tunnel(200, 300, 100, 50);
  tunnel[5] = new Tunnel(400, 300, 100, 50);
  
  //player
  player = new Player(100, 500);
};

function draw() {
  background(BackGroundColor);
  textFont(GameFont);
  noStroke();
  rectMode(CENTER);
  
  switch(GameState){
    case "MainMenu": MainMenu();
      break;     
    case "Play": GamePlay();
      break; 
    case "Settings": Settings();
      break;  
    
    case "Quit": Quit();
      break;  
    default:
      break;  
  }
};

function mouseReleased(){
  MainMenuClickings();

  SettingsClickings();

  bullet.push(new Bullet());
  for(var i = 0; i < bullet.length; i++){
    bullet[i].shoot();
  }

  ReloadClick();
};

function mousePressed(){
  
};

function playerMovement(){
  if(keyDown("w")){
    player.dir(0, -1);
    player.update();
  }else if(keyDown("s")){
    player.dir(0, 1);
    player.update();
  }else if(keyDown("d")){
    player.dir(1, 0);
    player.update();
  }else if(keyDown("a")){
    player.dir(-1, 0);
    player.update();
  }
};

