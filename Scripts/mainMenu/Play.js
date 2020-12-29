function GamePlay(){
    for(var i = 0; i < tunnel.length; i++){
      tunnel[i].show();
    }
    for(var i = 0; i < dungeon.length; i++){
      dungeon[i].show();
    }
    for(var i = 0; i < bullet.length; i++){
        bullet[i].show();
    }
    for(var i = 0; i < bullet.length; i++){
        bullet[i].update();
    }
        
    Level1();
  
    //player
    playerMovement();
    player.show();
    player.Health();
};

var Level1EnemyCount = 0;
function Level1(){
    if(Level === 1){
        //Camera settings
        camera.zoom = 6.5;
        camera.position.x = player.x;
        camera.position.y = player.y;

        //walls in the dungeon
        dungeon[4].wall(player, Level1EnemyCount);
    }
};