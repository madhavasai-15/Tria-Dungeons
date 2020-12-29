function Quit(){
    BackGroundColor = (255, 255, 255);
    rect(5, 40, 8, 100);
    rect(8*9, 40, 8, 100);
    rect(72/1.8, 86, 72, 8);
    rect(72/1.8, 4, 72, 8);

    rect(24, 24, 8, 8);
    rect(80-32, 18, 8, 24);
    rect(80-16, 26, 24, 8);

    rect(24, 64, 8, 8);
    rect(38, 56, 20, 8);
    rect(52, 64, 8, 8);

    textSize(48);
    text("nothing   Here   to   see", 30, 200);

    fill(76, 142, 250);
    rect(40, 400, 140, 50);
    fill(255);
    textSize(26);
    text("Reload", 15, 408);
};

function ReloadClick(){
    if(GameState === "Quit"){
        if(mouseX > 40-140/2 && mouseX < 40+140/2 && mouseY > 400-50/2 && mouseY < 400+50/2){
            BackGroundColor = (55, 55, 55);
            GameState = "MainMenu";
            ButtonSE.play();
        }
    }   
}