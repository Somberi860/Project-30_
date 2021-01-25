const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var umberlla;


function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    umberlla = new Umberlla(20,100,);


}

function draw(){
    background("black");

    umberlla.display();
    //maxDrops.display();
}
