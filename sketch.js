
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
 
var groundobj, boy, boyImg, stoneobj, treeobj, mango1, mango2, mango3, mango4,launcher;


function preload()
{
	boyImg=loadImage("Plucking mangoes/boy.png");
  
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    groundobj= new Ground(width/2,700,width,20);
    stoneobj=new Stone(100,100,10);
    treeobj=new Tree(650,600);
    mango1=new Mango(700,100,5,5);
    mango2=new Mango(710,100,5,5);
    mango3=new Mango(710,80,5,5);
    launcher=new SlingShot(stoneobj.body,{x:235,y:420});
	Engine.run(engine);
  
}


function draw() {
  background(0);
 
  Engine.update(engine);
  ground.display();
  stone.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  launcher.display();
  mouseDragged();
  mouseReleased();
  keyPressed();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);

  drawSprites(); 
}


function mouseDragged() {
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased() {
launcher.fly()
}
function keyPressed(){
  if (keycode===32){
    Matter.body.setPosition(stone.body,{x:100, y:100})
    launcher.attach(stone.body)
  }
}

function detectCollision(stone,mango1){
  mangoBodyPosition=mango.body.position;
  stoneBodyPosition=stone.body.position;

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=mango.position+stone.position);
{
  Matter.body.setStatic(mango.body,false);
}
}


