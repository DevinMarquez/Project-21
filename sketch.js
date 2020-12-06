var wall,thickness;
var bullet,speed,weight;
var damage;

function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(50,200,60,30);
  wall = createSprite(1200,200,thickness,height/2);
  bullet.velocityX = speed;
}

function draw() {
  background(51); 
  if(hasCollided(bullet,wall)) {
    bullet.velocityX = 0;
    damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  }
  if(damage > 10) {
    wall.shapeColor = "red";
  } else if(damage < 10) {
    wall.shapeColor = "green";
  }
  console.log(damage);
  drawSprites();
}

function hasCollided(lbullet,lwall) {
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge) {
    return true;
  } else {
    return false;
  }
}