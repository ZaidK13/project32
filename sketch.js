const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundColor
var engine, world;
var score = 0;
function preload() {

    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

  stand = new Ground(390,300,250,10);
  stand2 = new Ground(700,200,200,10);
ball = Bodies.circle(50,200,20);
 World.add(world,ball);

 slingShot = new SlingShot(this.ball,{
     x:100, y:200
 })
  
  box1 = new Box(300,275,30,40);
  box2 = new Box(330,275,30,40);
  box3 = new Box(360,275,30,40);
  box4 = new Box(390,275,30,40);
  box5 = new Box(420,275,30,40);
  box6 = new Box(450,275,30,40);
  box7 = new Box(480,275,30,40);
  
  box8 = new Box(330,235,30,40);
  box9 = new Box(360,235,30,40);
  box10 = new Box(390,235,30,40);
  box11 = new Box(420,235,30,40);
  box12 = new Box(450,235,30,40);
  
  box13 = new Box(360,195,30,40);
  box14 = new Box(390,195,30,40);
  box15 = new Box(420,195,30,40);

  box16 = new Box(390,155,30,40);

  //second platform
  box17 = new Box(640,195,30,40);
  box18= new Box(670,195,30,40);
  box19 = new Box(700,195,30,40);
  box20= new Box(730,195,30,40);
  box21 = new Box(760,195,30,40);
 
  box22 = new Box(670,160,30,40);
  box23 = new Box(700,160,30,40);
  box24 = new Box(730,160,30,40); 
  box25 =new Box(700,140,30,40);
 
}

function draw(){
    if(backgroundColor){
        background(backgroundColor);
    }
    
    fill("red")
    text("scores: "+score,750,50)
    Engine.update(engine);
    strokeWeight(4);
    
    ground.display();
    stand.display();
    stand2.display();
    
    fill("orange")
    imageMode(CENTER);
    image(polygonImg,ball.position.x, ball.position.y,40,40);
    slingShot.display();
    
    fill("red")
    box1.display();
    fill("blue")
    box2.display();
    fill("green")
    box3.display();
    fill("purple")
    box4.display();
    fill("black")
    box5.display();
    fill("orange")
    box6.display();
    fill("brown")
    box7.display();
    fill("white")
    box8.display();
    fill("lightblue")
    box9.display();
    fill("cyan")
    box10.display();
    fill("red")
    box11.display();
    fill("blue")
    box12.display();
    fill("green")
    box13.display();
    fill("pink")
    box14.display();
    fill("yellow")
    box15.display();
    fill("orange")
    box16.display();
    fill("white")
    box17.display();
    fill("yellow")
    box18.display();
    fill("cyan")
    box19.display();
    fill("purple")
    box20.display();
    fill("brown")
    box21.display();
    fill("lightgreen")
    box22.display();
    fill("grey")
    box23.display();
    fill("green")
    box24.display();
    fill("yellow")
    box25.display();
    box1.Score();
    box2.Score();
    box3.Score();
    box4.Score();
    box5.Score();
    box6.Score();
    box7.Score();
    box8.Score();
    box9.Score();
    box10.Score();
    box11.Score();
    box12.Score();
    box13.Score();
    box14.Score();
    box15.Score();
    box16.Score();
    box17.Score();
    box19.Score();
    box20.Score();
    box21.Score();
    box22.Score();
    box23.Score();
    box24.Score();
    box25.Score();
    
}
function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
    if (keyCode === 32){
        slingShot.attach(this.ball);
    }
}
async function getBackgroundImage(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Australia/Melbourne")
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime
    var hour= datetime.slice(11,13);
    if(hour>=06 && hour<= 12){
        
        bg="bg.png"
        
    } 
    else{bg="bg2.jpg"}
    backgroundColor=(bg);
}