class Umberlla {
    constructor(x,y){
        var options = {
            restitution: 0.1,
            density:1.5,
            friction:0.1
        }
        this.body = Bodies.circle(x,y,options);
        this.animation = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
        World.add(world,this.body);
    }


display(){
    var posx = this.body.position.x;
    var posy = this.body.position.y;
    push();
    translate(this.body.position.x, this.body.position.y);
    
    rectMode(CENTER);
    animation(this.animation, 0, 0, this.width, this.height);
    pop();
}
}
