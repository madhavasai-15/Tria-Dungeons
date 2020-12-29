var red1 = 0;
var green1 = 0;
var blue1 = 0;
var TitleColor = (255, 0, 0);

function MainMenu(){
    if(mouseX > 50 && mouseX < 550 && mouseY > 100 && mouseY < 150){
        fill(red1, green1, blue1);
        textSize(80);
        text("Tria   Dungeons", 20, 150);
        red1 += 10;
        green1 += 10;
        blue1 += 10;
        if(red1 > 255){red1 = 0};
        if(green1 > 255){green1 = 0};
        if(blue1 > 255){blue1 = 0};
    }else {
        fill(255);
        textSize(72);
        text("Tria   Dungeons", 50, 150);
    }  
    
    if(mouseX > 220 && mouseX < 350 && mouseY > 200 && mouseY < 250){
        fill(255, 79, 79);
        textSize(72);
        text("P LAY", 210, 260);
    }else {
        fill(255);
        textSize(64);
        text("P LAY", 220, 260);
    }
  
    if(mouseX > 140 && mouseX < 450 && mouseY > 300 && mouseY < 350){
        fill(255, 79, 79);
        textSize(72);
        text("Settings", 140, 350);
    }else {
        fill(255);
        textSize(64);
        text("Settings", 170, 350);
    }
  
  
    if(mouseX >  210 && mouseX < 370 && mouseY > 490 && mouseY < 530){
        fill(255, 79, 79);
        textSize(72);
        text("Quit", 220, 530);
    }else {
        fill(255);
        textSize(64);
        text("Quit", 220, 530);
    }
};

function MainMenuClickings(){
    if(GameState === "MainMenu"){
        if(mouseX > 220 && mouseX < 350 && mouseY > 200 && mouseY < 250){
            GameState = "Play";
            ButtonSE.play();
        }
        
        if(mouseX > 140 && mouseX < 450 && mouseY > 300 && mouseY < 350){
            GameState = "Settings";
            ButtonSE.play();
        }
        
        if(mouseX >  210 && mouseX < 370 && mouseY > 490 && mouseY < 530){
            GameState =  "Quit";
            ButtonSE.play();
        }
    }
};