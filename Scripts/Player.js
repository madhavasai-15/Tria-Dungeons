class Player{
    constructor(x, y){
       this.x = x;
       this.y = y;  
       this.width = 7;
       this.height = 7;
       this.xspeed = 0;
       this.yspeed = 0;
       this.dash = false;
       this.rgb = rgb(0, 255, 255);
       this.health = 100;
    };

    Health(){
        noStroke();
        fill(230);
        rect(this.x - 27, this.y - 35, this.health/3.85, 7);
        fill(this.rgb);
        rect(this.x - 27, this.y - 35, this.health/4, 6);
        
    }

    dir(x, y){
        if(this.dash === false){
            this.xspeed = x;
            this.yspeed = y;
        }else if(this.dash === true){
            this.xspeed = x*(2);
            this.yspeed = y*(2);
        }      
    };

    update(){
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
    };

    show(){
        noStroke();
        fill(this.rgb);
        rect(this.x, this.y, this.width, this.height);

        if(keyDown("space")){
            this.dash = true;
        }else if(keyWentUp("space")){
            this.dash = false;
        }
    };
}