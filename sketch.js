
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const bobDia = 50;

function setup() {
    createCanvas(1000,700);
    // create engine
    engine = Engine.create();
    world = engine.world;

    // create renderer
    // create runner
    
    // add mouse control
    // keep the mouse in sync with rendering
    // fit the render viewport to the scene
    // context for MatterTools.Demo
    //Create the Bodies Here.

    roof = new Roof(400,100,300,50);

    bob1 = new Bob(300,400,bobDia,bobDia);
    bob1.image = loadImage("sprites//e-1.png");
    rope1 = new Rope(bob1.body,roof.body,-bobDia*2,0);
    
    bob2 = new Bob(350,400,bobDia,bobDia);
    bob2.image = loadImage("sprites//e-2.png");
    rope2 = new Rope(bob2.body,roof.body,-bobDia,0);

    bob3 = new Bob(400,400,bobDia,bobDia);
    bob3.image = loadImage("sprites//e-3.png");
    rope3 = new Rope(bob3.body,roof.body,0,0);

    bob4 = new Bob(450,400,bobDia,bobDia);
    bob4.image = loadImage("sprites//e-4.png");
    rope4 = new Rope(bob4.body,roof.body,bobDia,0);

    bob5 = new Bob(500,400,bobDia,bobDia);
    bob5.image = loadImage("sprites//e-5.png");
    rope5 = new Rope(bob5.body,roof.body,bobDia*2,0);

    Engine.run(engine);
}


function draw() {
    rectMode(CENTER);
    background(255);

    roof.display();
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
}

