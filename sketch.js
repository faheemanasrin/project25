
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground;
var box1,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=createSprite(width/2, height-35, width,10);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 //box1 = new Box(510,620,20,100);
	 //box2= new Box (290,620,20,100);
	 box3= new Box(400,470,140,200);
	
	 paper=new Paper(150,50,50);
	

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(100);
 
  //box1.display();
  //box2.display();
  box3.display();
  paper.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		//Matter.Body.applyForce(paper.body,paper.body.position,{x:300,y:-300});
		Matter.Body.setPosition(paper.body,{x:400,y:450})
	}

}


