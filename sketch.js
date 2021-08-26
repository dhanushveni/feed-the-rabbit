var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  spawnApples();
}


function createApples() {
  apple = createSprite(random(50,350), 40, 10, 10);
  //Add image to apple sprite
  apple = loadImage("apple.png");
  apple.scale = 0.01;
  apple.veloxityY = -4;
  apple.lifetime = 134;

  
}


function spawnApples(){
  var apple = Math.round(random(1,2));

  if (frameCount % 80 == 0){
    if (apple == 1){
      apple = createSprite(350,100,10,40);
      apple.addImage(apple);
      apple.y Math.round(random(10,60));
      apple.scale = 0.01;
      apple.veloxityY = -4;

      

    }
   }
  }