const e = require("cors");
const { FNetworkPackage } = require("./NetworkData");
const { FVector2, NetworkClient } = require("./player");

class GameServer
{

    constructor()
    {
        this.hasGameStarted=false;
        this.networkClient=new NetworkClient();
        this.scorePointPosition=new FVector2(0,0);


    }
    BeginGame()
    {
        this.hasGameStarted=true;
         this.SpawnScorePoint();

    }
    StopGame()
    {
        this.hasGameStarted=false;
    }

    CheckPlayerDistanceToPoint(playerPosition)
    {
        const distance= vectorDistance(this.scorePointPosition,playerPosition);
        
        if(distance<1)
        {

            this.SpawnScorePoint();
            return true;
        }

        return false;

    }

    SpawnScorePoint() {
        //genero una posicion al azar
       this.scorePointPosition=new FVector2(0,0);
       this.scorePointPosition.x=getRandomInt(-3,3);
       this.scorePointPosition.y=getRandomInt(-3,3);
 
     
        let networkPackage=new FNetworkPackage("ServerSpawnScorePoint", this.networkClient, JSON.stringify( this.scorePointPosition));
        this.BroadcastMessageAll(JSON.stringify(networkPackage));
       
        
    }
    

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  function vectorDistance(v1,v2) {
    const dist = Math.sqrt((v1.x - v2.x) ** 2 + (v1.y - v2.y) ** 2);
    return dist;
  }
  
  module.exports={GameServer};