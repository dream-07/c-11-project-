
function preload(){
  //pre-load images
  if(path.y>400){
    path.y = height/2;
  }
  
run = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;


}

function draw() {
  
}
