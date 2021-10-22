const { nanoid } = require("nanoid");

class NetworkClient
{
    constructor()
    {
        this.networkID=nanoid();
      
     
    }
}

class Player
{
    constructor()
    {
        this.name=""; 
        this.networkClient=new NetworkClient();
        this.position={x:0,y:0};
        this.color=new FColor(0,0,0);
        this.score=0;
    }
}

class FColor
{
    constructor(r,g,b)
    {
        this.r=r;
        this.g=g;
        this.b=b;
    }
}
class FVector2
{
    FVector2()
    {
        this.x=0;
        this.y=0;
    }
    
      FVector2(  X,  Y)
    {
        this.x=X;
        this.y=Y;
    }
}
module.exports={NetworkClient,Player,FColor,FVector2};

