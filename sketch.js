const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,polygonImg;

function preload(){
  polygonImg=loadImage("polygon.png");
  bImg=loadImage("background.png")
}
function setup() {
  var canvas = createCanvas(1500,600);
  engine = Engine.create();
  
  world = engine.world;
  b1=new Box(600, 260, 30, 40);
  b2=new Box(570, 260, 30, 40);
  b3=new Box(540, 260, 30, 40);
  b4=new Box(630, 260, 30, 40);
  b5=new Box(660, 260, 30, 40);
  b6=new Box(585, 220, 30, 40);
  b7=new Box(555, 220, 30, 40);
  b8=new Box(615, 220, 30, 40);
  b9=new Box(645, 220, 30, 40);
  b10=new Box(600, 170, 30, 40);
  b11=new Box(570, 180, 30, 40);
  b12=new Box(630, 180, 30, 40);
  b13=new Box(600, 140, 30, 40);
  b14=new Box(900, 140, 30, 40);
  b15=new Box(930, 140, 30, 40);
  b16=new Box(870, 140, 30, 40);
  b17=new Box(900, 170, 30, 40);
  b18=new Box(930, 170, 30, 40);
  b19=new Box(870, 170, 30, 40);
  b20=new Box(840, 170, 30, 40);
  b21=new Box(960, 170, 30, 40);
  b22=new Box(900, 110, 30, 40);
  
  ground1=new Ground(600,285,200,10);
  ground2=new Ground(900, 195, 200, 10);
  ground3=new Ground(750, 600, 1500, 20);
  var options={
    density:2.5,
    restitution:0.5,
    friction:1.2,
  }
  polygon=Bodies.circle(200,200,20,options);
  World.add(world,polygon);
  chain1=new SlingShot(this.polygon,{x:200,y:200});
}
function draw() {
  background(bImg); 
 
  Engine.update(engine);
  fill("white")
  textSize(15)
  text("Press space to get 2nd chance,also use mouse to play",300,100);
  fill(135,206,234);

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  fill("pink");
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  fill("yellow");
  b13.display();
  b14.display();
  b15.display();
  fill("lightgreen");
  b16.display();
  fill(254,192,203);
  b17.display();
  fill(63,224,208);
  b18.display();
  b19.display();
  b20.display();
  fill(135,206,234);
  b21.display();
  b22.display();

  chain1.display();
  ground1.display();
  ground2.display();
  ground3.display();
  imageMode(CENTER);
  image(polygonImg,this.polygon.position.x,this.polygon.position.y,40,40);
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  chain1.fly();
}
function keyPressed(){
  if(keyCode === 32){
      chain1.attach(this.polygon);
  }
  
}