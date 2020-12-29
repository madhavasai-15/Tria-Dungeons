class Dungeon{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.w = 100;
        this.h = 100;
    };

    wall(player, enemy){
        if(Level === 1){
            if(player.x > this.x+this.w/2-player.width/2-1){
                if(player.y > this.y-this.w/2-player.width/2 && player.y < this.y+this.w/2+player.width/2){
                    player.x = this.x+this.w/2-player.width/2-1;
                }
            }

            if(player.x < this.x-this.w/2+player.width/2+1){
                if(player.y > this.y-this.w/2-player.width/2 && player.y < this.y+this.w/2+player.width/2){
                    player.x = this.x-this.w/2+player.width/2+1;
                }
            }

            if(enemy > 0){
                if(player.y < this.y-this.w/2+player.width/2+1){
                    player.y = this.y-this.w/2+player.width/2+1;
                }

                if(player.y > this.y+this.w/2-player.width/2-1){
                    player.y = this.y+this.w/2-player.width/2-1;
                }
            }else if(enemy <= 0){
                if(player.x > this.x+21){
                     if(player.y < this.y-this.w/2+player.width/2+1){
                        player.y = this.y-this.w/2+player.width/2+1;
                    }
                }
               

                if(player.y > this.y+this.w/2-player.width/2-1){
                    player.y = this.y+this.w/2-player.width/2-1;
                }
            }
        }

    
    }

    show(){
        fill(250)
        rect(this.x, this.y, this.w, this.h);
    };
}

class Tunnel{
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    };

    show(){
        fill(250);
        rect(this.x, this.y, this.w, this.h);
    }
}