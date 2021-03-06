var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = []; 
var divisions = [];

var divisionHeight=300;
var score = 0;
var particle 
var turn = 0;
var gameState = "start"
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30); 
 text("500",15,600)
 text("500",90,600)
 text("500",165,600)
 text("500",250,600) 
 text("100",325,600)
 text("100",415,600)
 text("100",510,600)
 text("200",600,600)
 text("200",675,600)
 text("200",745,600)
  Engine.update(engine);
 

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
     if(particle!=null){
      particle.display();
    
        if (particle.body.position.y>760){
          if (particle.body.position.x < 300){
            score=score+500;
            particle=null 
            turn = turn+1 
            if (turn>=5) gameState="end";
          }
        }
    } 
    if(particle!=null){
      particle.display(); 
    
        if(particle.body.position.y>760){
          if (particle.body.position.x>301&&particle.body.position.x<600){
            score=score+100
            particle=null 
            turn=turn+1
            if (turn>=5) gameState="end" 
          }
        } 
    } 
    if (particle!=null){
      particle.display(); 
    
        if(particle.body.position.y>760){
          if (particle.body.position.x>601&&particle.body.position.x<900){
            score=score+200 
            partice=null 
            turn = turn+1
            if (turn>=5) gameState="end"
          }
        }
    }

       
      }
    } 
    if(particle!=null){
      particle.display();
    
        if (particle.body.position.y>760){
          if (particle.body.position.x < 300){
            score=score+500;
            particle=null 
            turn = turn+1 
            if (turn>=5) gameState="end";
          }
        }
    } 
    if(particle!=null){
      particle.display(); 
    
        if(particle.body.position.y>760){
          if (particle.body.position.x>301&&particle.body.position.x<600){
            score=score+100
            particle=null 
            turn=turn+1
            if (turn>=5) gameState="end" 
          }
        } 
    } 
    if (particle!=null){
      particle.display(); 
    
        if(particle.body.position.y>760){
          if (particle.body.position.x>601&&particle.body.position.x<900){
            score=score+200 
            partice=null 
            turn = turn+1
            if (turn>=5) gameState="end"
          }
        } 
        if(gameState="end"){
          text("Game Over",100,100)
          particle=null
        }
    }
    
     
   
   function mousePressed(){
    if(gameState=="start"){
      score++;
      particle=new Particle(mouseX,10,10,10)
    }
   } 
   