const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob, bob2, bob3, bob4, bob5;
var roof;
var rope;
var bobDiameter=80;


function preload()
{
	bckgrnd = loadImage("rainbow")
}

function setup() {
	createCanvas(1100, 600);


	engine = Engine.create();
	world = engine.world;

	bob = new Bob(340,480,39);
	bob2 = new Bob(420,480,39);
	bob3 = new Bob(500,480,39);
	bob4 = new Bob(580,480,39);
	bob5 = new Bob(660,480,39);
	roof = new Roof(500,100,500,50);
	rope1 = new Rope(bob.body,roof.body,-bobDiameter*2,0)
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter*1,0)
	rope3 = new Rope(bob3.body,roof.body,bobDiameter*0,0)
	rope4 = new Rope(bob4.body,roof.body,bobDiameter*1,0)
	rope5 = new Rope(bob5.body,roof.body,bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {

  background("white");

  rectMode(CENTER);
 
  fill("red");
  bob.display();
  fill("orange")
  bob2.display();
  fill("lightgreen")
  bob3.display();
  fill("yellow")
  bob4.display(); 
  fill("skyblue")
  bob5.display();

  fill("black")
  roof.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
  textSize(30);
 fill ("black");
  text("Please press the 'up' arrow key to start the Newton's Cradle.",100,30);
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob.body,bob.body.position,{x:-800,y:-500})
	}
}


