var bullet1,wall;
var speed, weight;
var thickness;

function setup() {

  createCanvas(1600,400);
 thickness = random(22,83);
 wall = createSprite(1200,200,thickness,height/2);
 fill("green");
 bullet1 = createSprite(100, 100, 30, 10);
 bullet1_speed = random(20,30);
 bullet1_weight = random(500,1500);
 bullet1.velocityX = bullet1_speed;

 bullet2 = createSprite(100, 200, 30, 10);
 bullet2_speed = random(16,20);
 bullet2_weight = random(150,500);
 bullet2.velocityX = bullet2_speed;

 bullet3 = createSprite(100, 300, 30, 10);
 bullet3_speed = random(8,12);
 bullet3_weight = random(100,200);
 bullet3.velocityX = bullet3_speed; 
}

function draw() {

  background(255,255,200);  
  createEdgeSprites();
  calculateDamage(bullet1,bullet1_weight,bullet1_speed);
  calculateDamage(bullet2,bullet2_weight,bullet2_speed);
  calculateDamage(bullet3,bullet3_weight,bullet3_speed);
  drawSprites();

}

function calculateDamage(car,weight,speed){

  if(wall.x - car.x < (car.width + wall.width)/2){
 
    car.velocityX = 0
    car.collide(wall);
    
    var damage =  0.5 * weight * speed^2 / thickness^3
   // console.log(deformation);

    if(damage > 180){
    car.shapeColor = "red";
    
    }

    if(damage<180 && damage>80){
    car.shapeColor = "yellow";
    }

    if(damage<80){
    car.shapeColor = "green";
    }

    }
    
}


