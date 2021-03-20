var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles ;
var plinkos = [];
var divisions=[]
var divisionHeight=300;
var score =0;
var gameState="play"
var s1,s2,s3,s4,s5,s6,s7,s8,s9,s10;
var score=0
var count=0
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

    
//oppl=createSprite(400,400,800,800);
//oppl.visibility=false;
s1=100
s2=50
s3=500
s4=400
s5=350
s6=300
s7=450
s8=50
s9=400
s10=550
    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  
  
textSize(30)   
  text(s1,20,650)   
  text(s2,100,650)          
  text(s3,180,650)   
  text(s4,260,650)   
  text(s5,340,650)   
  text(s6,420,650)   
  text(s7,500,650)   
  text(s8,580,650)   
  text(s9,660,650)   
  text(s10,740,650)   
 

                  
 
  //mousePressed();
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   textSize(30);
text("score-"+score,10,30)

   if(particles!=null&&gameState!="end")
   {
     particles.display();
    if(particles.body.position.y>780)
    {
      if(particles.body.position.x>0&&particles.body.position.x<80)
      {
        score=score+s1
      }
      if(particles.body.position.x>80&&particles.body.position.x<160)
      {
        score=score+s2
      }
      if(particles.body.position.x>160&&particles.body.position.x<240)
      {
        score=score+s3
      }
      if(particles.body.position.x>240&&particles.body.position.x<320)
      {
        score=score+s4
      }
      if(particles.body.position.x>320&&particles.body.position.x<400)
      {
        score=score+s5
      }
      
      if(particles.body.position.x>400&&particles.body.position.x<480)
      {
        score=score+s6
      }
      if(particles.body.position.x>480&&particles.body.position.x<560)
      {
        score=score+s7
      }
      if(particles.body.position.x>560&&particles.body.position.x<640)
      {
        score=score+s8
      }
      if(particles.body.position.x>640&&particles.body.position.x<720)
      {
        score=score+s9
      }
      if(particles.body.position.x>720&&particles.body.position.x<800)
      {
        score=score+s10
      }
      
      particles=null;

    }
                 
   }
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(count===5)
   {
     gameState="end"
   }
   if(gameState==="end")
   {
     textSize(100)
     text("GAME OVER",100,500)
   }
}

function mousePressed()
{
if(gameState!=="end")
  {
    particles=new Particle(mouseX,10,10,10)
  }
  count=count+1
}
//if(frameCount%60===0){
     //particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   //} 
  //for (var j = 0; j < particles.length; j++) {   
    // particles[j].display();