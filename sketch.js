
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var ground, tree;

var boy, boy_image, stone;

var mango1, mango2, mango3, mango4, mango5, mango6;

var shooter;

function preload()
{
	boy_image = loadImage("Sprites/boy.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600, 690, 1200, 20);

	tree = new Tree(770, 100, 200, 100);

	mango1 = new Mango(900, 150, 30);
	mango2 = new Mango(1000, 150, 30);
	mango3 = new Mango(870, 250, 30);
	mango4 = new Mango(950, 320, 30);
	mango5 = new Mango(1050, 230, 30);
	mango6 = new Mango(1080, 360, 30);

	boy = createSprite(200, 600);
	boy.addImage(boy_image);
	boy.scale = 0.12;

	stone = new Stone(100, 500, 20, 30);

	shooter = new Launcher(this.stone, {x:100, y:500});

	Engine.run(engine);
  
}


function draw() {
  background(116, 175, 246);
  Engine.update(engine);
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  drawSprites();
  stone.display();
  shooter.display();

  detectcollision(stone, mango1);
  detectcollision(stone, mango2);
  detectcollision(stone, mango3);
  detectcollision(stone, mango4);
  detectcollision(stone, mango5);
  detectcollision(stone, mango6);
}

function mouseDragged(){
	Matter.Body.setPosition(this.stone, {x:mouseX,y:mouseY});
  }
function mouseReleased(){
	shooter.fly();
  }

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x: 235, y: 420})
		shooter.attach(stone.body);
	}
}

function detectcollision(lstone, lmango){
mangoBodyPosition = lmango.body.position
stoneBodyPosition = lstone.body.position

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
if(distance <= lmango.r + lstone.r){
	Matter.Body.setStatic(lmango.body, false);
}
}


