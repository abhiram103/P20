var bg, sleep, brush, gym, eat, bath, move, astronaut
var edges

function preload() {
  bg = loadImage("iss.png")
  sleep = loadAnimation("sleep.png")
  brush = loadAnimation("brush.png")
  gym = loadAnimation("gym1.png", "gym1.png", "gym2.png", "gym2.png")
  eat = loadAnimation("eat1.png", "eat1.png", "eat2.png", "eat2.png")
  move = loadAnimation("move.png","move.png", "move1.png", "move1.png")
  bath = loadAnimation("bath1.png", "bath1.png", "bath2.png", "bath2.png")
}

function setup() {
  createCanvas(600,500);
  astronaut = createSprite(300, 230, 50, 50);
  astronaut.addAnimation("sleeping", sleep)
  astronaut.scale = 0.1
  
}

function draw() {
  
  background(bg)
  drawSprites();
  edges = createEdgeSprites();
  astronaut.bounceOff(edges);
  
  if(keyDown("m")){
    astronaut.addAnimation("moving", move)
    astronaut.changeAnimation("moving")
    astronaut.velocity.x = 1
    astronaut.velocity.y = 1
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing", bath)
    astronaut.changeAnimation("bathing")
    astronaut.x = 300
    astronaut.velocity.x = 0
    astronaut.velocity.y = 0
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating", eat)
    astronaut.changeAnimation("eating")
    astronaut.x=150
    astronaut.y=350
    astronaut.velocity.x = 0.5
    astronaut.velocity.y = 0.5
  }

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush)
    astronaut.changeAnimation("brushing")
    astronaut.y = 350
    astronaut.velocity.x = 0
    astronaut.velocity.y = 0
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym)
    astronaut.changeAnimation("gymming")
    astronaut.y = 350
    astronaut.velocity.x = 0
    astronaut.velocity.y = 0
  }
  
}