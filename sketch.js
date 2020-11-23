
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(400,360,25)
	ground1 = new Ground(800,685,1600,20)
dustbin1 = new Dustbin(1300,665,170,20)
dustbin2 = new Dustbin(1205,615,20,120)
dustbin3 = new Dustbin(1395,615,20,120)


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  paper1.display();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
 
}

function keyPressed(){
	if(KeyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:80, y:-85})
	}

}

