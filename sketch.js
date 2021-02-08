const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var block1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(510,300,300,20)
    ground1 = new Ground(900,200,300,20)
    block1= new Blocks(450,250,30,20)
    console.log(block1)
}

function draw(){
background(255,165,0)
Engine.update(engine);
block1.display();
ground.display();
ground1.display();

}