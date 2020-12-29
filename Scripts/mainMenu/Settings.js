var Music = true;
var SoundEffect = true;
var ButtonSE;

function Settings(){
    fill(255);
    textSize(64);
    text("Settings", 145, 80);

    push();
    textSize(48);
    text("Music", 220, 250);
    fill(190);
    rect(285, 310, 105, 35);
    fill(255);
    rect(285, 310, 100, 30);
    if(Music === true){
        fill(200);
        rect(285+50, 310, 10, 50);
        fill(255);
        textSize(32);
        text("On", 350, 320);
    }else if(Music === false){
        fill(200);
        rect(285-50, 310, 10, 50);
        fill(255);
        textSize(32);
        text("Off", 350, 320);
    }
    pop();

    push();
    textSize(48);
    text("Sound Effect", 145, 410);
    fill(190);
    rect(285, 450, 105, 35);
    fill(255);
    rect(285, 450, 100, 30);
    if(SoundEffect === true){
        fill(200);
        rect(285+50, 450, 10, 50);
        fill(255);
        textSize(32);
        text("On", 350, 460);
    }else if(SoundEffect === false){
        fill(200);
        rect(285-50, 450, 10, 50);
        fill(255);
        textSize(32);
        text("Off", 350, 460);
    }
    pop();

    push();
    if(mouseX > 100-50 && mouseX < 100+50 && mouseY > 510 && mouseY < 560){
        fill(255, 0, 0);
        textSize(55);
        text("Back", 40, 560);
    }else {
        fill(255);
        textSize(45);
        text("Back", 50, 560);
    }
    
    pop();
}

function SettingsClickings(){
    if(GameState === "Settings"){
        if(mouseX > 285-105/2 && mouseX < 285+105/2 && mouseY > 310-30/2 && mouseY < 310+30/2){
            if(Music === true){
                Music = false;
                ButtonSE.play();
            }else if(Music === false){
                Music = true;
                ButtonSE.play();
            }
        }

        if(mouseX > 285-105/2 && mouseX < 285+105/2 && mouseY > 450-30/2 && mouseY < 450+30/2){
            if(SoundEffect === true){
                SoundEffect = false;
                ButtonSE.play();
            }else if(SoundEffect === false){
                SoundEffect = true;
                ButtonSE.play();
            }
        }

        if(mouseX > 100-50 && mouseX < 100+50 && mouseY > 510 && mouseY < 560){
            GameState = "MainMenu";
            ButtonSE.play();
        }
    }
};