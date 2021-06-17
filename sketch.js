const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computerplayer, computerBase;

function setup() { 
  canvas = createCanvas(windowWidth, windowHeight); 
  engine = Engine.create(); world = engine.world; 
  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  computerbase = new ComputerBase(width - 300,random(450, height - 300),180,150);
  computerplayer= new Computerplayer (width - 280,computerbase.body.position.y - 153,50,180); }


function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  playerBase.display();
  player.display();
  

  computerbase.display();
  computerplayer.display();
}
