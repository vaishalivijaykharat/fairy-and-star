var starImg,bgImg;
var star, starBody;
var f,fai,fs;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	fai=loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
    fs= loadSound("sound/joyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
fs.play();
	//create fairy sprite and add animation for fairy
      f=createSprite(130,520,50,50);
      f.addAnimation("fly",fai);
	f.scale=0.4;
	  star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
 if(star.y > 470 && starBody.position.y > 470){
	 Matter.Body.setStatic(starBody,true);
 }




  drawSprites();

}
function keyPressed() {

	if (keyCode === RIGHT_ARROW) {
		f.x=f.x+20; 
	}


	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	
}
