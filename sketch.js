function setup() {
 createCanvas(1600,400);
 bullet = createSprite(50, 200, 40, 20);
  wall = createSprite(1200, 200, thickness, height/2);
  speed = random(223,321)
  thickness = random(22,83)
  weight = random (30,52)
  wall.shapeColor = (80,80,80);
  bullet.shapecolor=("white")
}
var  bullet,wall,thickness;
var speed,weight;

function draw() {
  background(255,255,255);  
  bullet.velocityX = speed;
  
  if (hascollided( bullet,wall))
  {
    bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);

  if (damage > 10)
  {
    wall.shapecolor=(250,0,0)
  }
  if (damage < 10)
  {
    wall.shapecolor=(0,250,0)
  }
   }

  drawSprites();
}

function hascollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
   return true;
  }
  else{
   return false;
  }

} 