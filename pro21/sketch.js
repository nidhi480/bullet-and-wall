var car,wall;
var speed,weight;

function setup(){
  createCanvas(1600,400);

  car= createSprite(200,200,50,50);
  wall= createSprite(1200,200,60,100);
  
  speed=random(50,100);
  weight=random(500,1500);

  car.velocityX=-5;
}

function draw(){
  background("black");

  if (wall.x-car.x < (car.width+wall.width/2)){
    car.velocityX=0;
    var deformation=0.5 * weight * speed *speed/22509;
  
    if (deformation>180){
      car.shapecolor=color ("red");
      wall.shapecolor=color ("white");
    }


if (deformation<180 && deformation>100){
  car.shapecolor=color ("yellow");
  wall.shapecolor=color ("white");
}

if (deformation<100){
  car.shapecolour=colour ("green");
  wall.shapecolour=colour ("white")
}







  


  }
draSprites ();
}