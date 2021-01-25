class Drops{
    constructor(x,y,r){
        var options = {
            restiution: 0.1,
            density:0.3,
            friction:0.1
        }
        this.drops = Bodies.circle(x,y,r);
        World.add(world,this.body);


    }
    

    display(){
        var posx = this.body.position.x;
        var posy = this.body.position.y;
        push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}
var maxDrops = 100;
for(var i=0; i<maxDrops; i++){
    drops.push(new createDrop(random(0,400), random(0,400)));
}