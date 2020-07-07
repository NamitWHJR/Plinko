const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight



function preload() {
    
}

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    
}






function draw(){
    background(0);
    Engine.update(engine);
    //strokeWeight(4);
    
    ground.display();

    for (var k = 0; k <=width; k=k + 80){
        divisions.push(new Divisons(k, height - divisionHeight/2,10,divisionHeight))
    }
    
    for (var j = 40; j <= width; j=j +50)
    {
        plinkos.push(new Plinko(j,75))
    }
    for (var j = 15; j <= width-10; j=j +50)
    {
        plinkos.push(new Plinko(j,175))
    }
    
    for (var j = 40; j <= width; j=j +50)
    {
        plinkos.push(new Plinko(j,225))
    }
    
    for (var j = 15; j <= width-10; j=j +50)
    {
        plinkos.push(new Plinko(j,300))
    }
    
   
    //log6.display();
}





