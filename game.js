class game{
    constructor(){
        
    }
    getState(){
        var gameStateref= database.ref('gameState');
        gameStateref.on("value",function(data){gameState = data.val()});
    }
    update(state){
        database.ref('/').update({gameState: state});
    }
    async start(){
        if(gameState === 0){
            player1 = new player();
            
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount =playerCountRef.val();
                player1.getCount();
            }
            form1 = new form();
            form1.display();
           // console.log("lakshay");
        }
        car1=createSprite(100,200);
        car2=createSprite(300,200);
        car3=createSprite(500,200);
        car4=createSprite(700,200);
        cars=[car1,car2,car3,car4];

        car1.addImage(car1i)
        car2.addImage(car2i)
        car3.addImage(car3i)
        car4.addImage(car4i)
        pastFinish=false;
        

    }
    play(){
        form1.hide();
     
       player.getPlayerInfo();
       player1.getFinishedPlayer();

        if(allPlayers  !== undefined){
            image(tracki,0,-displayHeight*5,displayWidth,displayHeight*6);
            var index=0;
            var x=180;
            var y=0;
            //var pos = 150;
            for(var plr in allPlayers){
                index =index+1;
                x=x+200;
                y=displayHeight-allPlayers[plr].distance
                cars[index-1].x=x;
                cars[index-1].y=y;
                
                if(index===player1.index){
                fill ("red")
                ellipse(x,y,70,70);
                camera.position.x=displayWidth/2;
                camera.position.y=cars[index-1].y;
                }
                textSize(20);
                text(allPlayers[plr].name,x,y+90)
            
            }
            drawSprites();
        }
         if(keyIsDown(UP_ARROW) && player1.index!==null && pastFinish!==true){
             player1.distance+=10;
             player1.update();
             
         }
         if(player1.distance>4940 && pastFinish===false){
             player.updatefinishedPlayers()
             player1.rank=finishedPlayers;
             player1.update();
             pastFinish=true;
         }
        
    }
    end(){
        console.log("gameend");
        image(gi,500,50);
        image(si,300,160);
        image(bi,100,250);

        player.getPlayerInfo();
        for(var plr in allPlayers){
            console.log("win");
        if(allPlayers[plr].rank===1){
            text("RANK 1",500,140);
        }
        }
    }
}
