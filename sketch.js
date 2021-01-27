var c1
var ai
var i1, i1, i3, i4, k1, k2, k3, k4, k5, p1, p2, p3, s1, s2, sa1, sa2, sa3, sa4;

function preload(){
    // i1 = loadAnimation("images/idle1.png");
    // p1 = loadImage("images/punch.png");
    // p2 = loadImage("images/punch2.png");
    // p3 = loadImage("images/punch3.png");
    // s1 = loadImage("images/special1.png");
    // s2 = loadImage("images/special2.png");
    
    // k1 = loadAnimation("images/kick1.png", "images/kick2.png", "images/kick3.png", "images/kick4.png", "images/kick5.png");

    // sa1 = loadAnimation("images/specialAttack1.png", "images/specialAttack2.png", "images/specialAttack3.png", "images/specialAttack4.png");

}
function setup(){
    createCanvas(displayWidth, displayHeight);
    //Sprites
    c1 = createSprite(200, 200);
    ai = createSprite(400,200);

    // c1.addAnimation("idle", i1);
    // c1.addAnimation("kick", k1);
    // c1.addImage("kick1", k1);
    // c1.addImage("kick2", k2);
    // c1.addImage("kick3", k3);
    // c1.addImage("kick4", k4);
    // c1.addImage("kick5", k5);
    // c1.addImage("punch1", p1);
    // c1.addImage("punch2", p2);
    // c1.addImage("punch3", p3);
    // c1.addImage("special1", s1);
    // c1.addImage("special2", s2);
    // c1.addImage("specialAttack", sa1);

    // ai.addAnimation("idle", i1);
}
function draw(){
    if(keyIsDown("SPACE")){
        c1.changeAnimation("kick", k1);
    }else{
        c1.changeAnimation("idle", i1);
    }

    if(keyIsDown("L")){
        c1.changeAnimation("specialAttack", sa1);
    }else{
        c1.changeAnimation("idle", i1);
    }

    if(keyIsDown("K")){
        c1.changeAnimation();
    }
    drawSprites();
}