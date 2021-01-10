const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var p1,p2,p3,p4,p5,p6,p7,pin_img;
var lane_img,lane,bowl_img,bowl;

function preload(){
lane_img=loadImage("court.png");
pimg=loadImage("pin.png");
bimg=loadImage("bowl.png");


}
function setup(){
createCanvas(displayWidth,displayHeight-147);
engine=Engine.create();
world=engine.world;


lane=createSprite(700,350);
lane.addImage(lane_img);
lane.scale=0.11;

//stand1=Bodies.rectangle(645,120,300,50,PI/4,{isStatic:true});
//World.add(world,stand1);
//s1=new Stand(630,90,100,PI/10);
pin1=createSprite(665,80);
pin1.addImage(pimg);
pin1.scale=0.15;

pin2=createSprite(715,60);
pin2.addImage(pimg);
pin2.scale=0.15;

pin3=createSprite(615,60);
pin3.addImage(pimg);
pin3.scale=0.15;

pin4=createSprite(765,80);
pin4.addImage(pimg);
pin4.scale=0.15;

pin5=createSprite(565,80);
pin5.addImage(pimg);
pin5.scale=0.15;

pin6=createSprite(815,60);
pin6.addImage(pimg);
pin6.scale=0.15;

pin7=createSprite(515,60);
pin7.addImage(pimg);
pin7.scale=0.15;

pin8=createSprite(665,120);
pin8.addImage(pimg);
pin8.scale=0.15;

pin9=createSprite(715,100);
pin9.addImage(pimg);
pin9.scale=0.15;

pin10=createSprite(615,100);
pin10.addImage(pimg);
pin10.scale=0.15;

bowl=createSprite(650,600);
bowl.addImage(bimg);
bowl.scale=0.15;


//p1=new Pin(650,80);
//p2=new Pin(690,60);
//p3=new Pin(610,60);
//p4=new Pin(730,40);
//p5=new Pin(570,40);
//p6=new Pin(530,20);
//p7=new Pin(780,20);
///p8=new Pin(650,40);
//p9=new Pin(600,20);
//p10=new Pin(700,20);
//bowl=new Bowl(280,280,70);

Engine.run(engine);
}
function draw(){
    background("lightyellow");

    edges=createEdgeSprites();
    bowl.bounceOff(edges[2]);
    bowl.bounceOff(edges[3]);
    if(bowl.y<10){
    bowl.velocityY=10;

    }
    if(bowl.isTouching(pin1)){
       bowl.y=pin1.y+100;
    }
    drawSprites();
   // p10.display();

   // p9.display();
   // p2.display();
   /// p3.display();
  //  p4.display();
  //  p5.display();
   // p6.display();
   // p7.display();
   /// p8.display();
   // p1.display();
   // s1.display();
   // rect(stand1.position.x,stand1.position.y,300,50);
  // bowl.display();
}
function mouseDragged() 
{
  bowl.x=mouseX;
  bowl.y=mouseY;

  }
function mouseReleased(){
   bowl.y=bowl.y-300;
}