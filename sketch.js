const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11, box12;
var hero,monster,rope,ground;
var tower, tower2;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1800, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 450, y: 50 });
  monster = new Monster(1400,550,250);

  box1 = new Box(700, 100, 70, 70);
  box2 = new Box(700, 100, 70, 70);
  box3 = new Box(700, 60, 70, 70);
  box4 = new Box(700, 40, 70, 70);
  box5 = new Box(700, 40, 70, 70);
  box6 = new Box(700, 40, 70, 70);
  box7 = new Box(1100, 40, 70, 70);
  box8 = new Box(1100, 40, 70, 70);
  box9 = new Box(1100, 40, 70, 70);
  box10 = new Box(1100, 40, 70, 70);
  box11 = new Box(1100, 40, 70, 70);
  box12 = new Box(1100, 40, 70, 70);


  tower = new Tower(900,100,250,400);


}

function draw() {
  background(bg);
  Engine.update(engine);

  ground.display();

  strokeWeight(3)
  stroke("#D807C1");
  fill("#F784EA");
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display();
  box6.display();
  
  stroke("#C62E09");
  fill("#F27151");
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  hero.display();
  rope.display();
  monster.display();

  tower.display();


}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}
