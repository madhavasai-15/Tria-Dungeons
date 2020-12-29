class Bullet{
    constructor(){
        this.x = player.x;
        this.y = player.y;
        this.r = 4;
        this.xspeed = 0;
        this.yspeed = 0;
    };

    shoot(){
        if(mouseX > player.x){
            this.xspeed = 1;
        }else if(mouseX < player.x){
            
        }
    };

    update(){
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
    }

    show(){
        fill(255, 216, 0);
        ellipse(this.x, this.y, this.r, this.r);
    };
}