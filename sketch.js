var bg, bgImg;
var cat, cat1, cat2, cat3;
var mouse, mouse1, mouse2, mouse3;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    mouse1 = loadAnimation("mouse4.png");
    mouse2 = loadAnimation("mouse2.png", "mouse3.png");
    mouse3 = loadAnimation("mouse1.png");
    cat1 = loadAnimation("cat1.png");
    cat2 = loadAnimation("cat2.png", "cat3.png");
    cat3 = loadAnimation("cat4.png");
}

function setup(){
    createCanvas(1000,800);
        //create tom and jerry sprites here
    bg = createSprite(500, 400, 20, 20)
    bg.addImage("bgLabel", bgImg);
    bg.scale=1.4;

    mouse = createSprite(200, 650, 20, 20);
    mouse.addAnimation("searching", mouse1);
    mouse.scale = .3;

    cat = createSprite(800, 650, 20, 20);
    cat.addAnimation("resting", cat1);
    cat.scale=.3;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<cat.width/2-mouse.width/2)
    {
        mouse.addAnimation("happy", mouse3);
        mouse.changeAnimation("happy")
        //cat.velocityX=0;
        cat.addAnimation("standing", cat3);
        cat.changeAnimation("standing")
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode == LEFT_ARROW){
        cat.velocityX=-5;
        mouse.addAnimation("teasing", mouse2);
        mouse.changeAnimation("teasing")
        cat.addAnimation("walking", cat2);
        cat.changeAnimation("walking");
        mouse.frameDelay=25;
    }

}
