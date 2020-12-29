class Enemy{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 7;
        this.height = 7;
    };

    show(){
        fill(255, 0, 0);
        rect(this.x, this.y, this.width, this.height);
    };

    AI(){
        var DestinationX = player.x;
        let dx = DestinationX - this.x;
        this.x += dx * 0.03;

        var DestinationY = player.y;
        let dy = DestinationY - this.y;
        this.y += dy * 0.03;

        if(this.x - player.x <= player.width/2 + this.width/2 && player.x - this.x <= player.width/2 + this.width/2 && this.y - player.y <= player.height/2 + this.height/2 && player.y - this.y <= player.height/2 + this.height/2){
            player.rgb = rgb(0, 204, 204);
        }else {
            player.rgb = rgb(0, 255, 255);
        }
    };
}