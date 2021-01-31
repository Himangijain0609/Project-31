const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var drops = [];

function preload(){
    
}

function setup(){
   engine = Engine.create();
   world = engine.world;

   createCanvas(400,700);
   if(frameCount % 100 === 0){ 
       for(var i=0; i<100; i++){
        drops.push(new Drop(random(0,400), random(0,400)))
       }
   
   }
   
}

function draw(){
    Engine.update(engine);
    background(0);
    for(var i = 0; i<drops.length; i++){
        drops[i].display();
        drops[i].update();
    }

}   

