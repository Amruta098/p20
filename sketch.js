var fixedRect, movingRect;
var o1,o2,o3,o4,o5,o6;

function setup() {
    createCanvas(800, 800);
    
    
    fixedRect = createSprite(600, 400, 50, 80);
    fixedRect.shapeColor = "green";

    movingRect= createSprite(600, 400, 50, 80);
    movingRect.shapeColor = "black";

    o1 = createSprite(100, 400, 50, 80);
    o1.shapeColor = "orange";

    o2 = createSprite(200, 400, 50, 80);
    o2.shapeColor = "brown";

    o3 = createSprite(300, 400, 50, 80);
    o3.shapeColor = "skyblue";

    o4 = createSprite(400, 400, 50, 80);
    o4.shapeColor = "purple";

    o5 = createSprite(500, 400, 50, 80);
    o5.shapeColor = "red";

    o6= createSprite(700, 400, 50, 80);
    o6.shapeColor = "blue";


}

function draw() {
    background("white");

    movingRect.x = mouseX;
    movingRect.y = mouseY;
if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="pink"
    fixedRect.shapeColor="pink"
}
else if(isTouching(movingRect,o1)){
    movingRect.shapeColor="pink"
    o1.shapeColor="pink"
}
else if(isTouching(movingRect,o2)){
    movingRect.shapeColor="pink"
    o2.shapeColor="pink"
}
else if(isTouching(movingRect,o3)){
    movingRect.shapeColor="pink"
    o3.shapeColor="pink"
}
else if(isTouching(movingRect,o4)){
    movingRect.shapeColor="pink"
    o4.shapeColor="pink"
}
else if(isTouching(movingRect,o5)){
    movingRect.shapeColor="pink"
    o5.shapeColor="pink"
}
else if(isTouching(movingRect,o6)){
    movingRect.shapeColor="pink"
    o6.shapeColor="pink"
}


else{movingRect.shapeColor="black"
fixedRect.shapeColor="green"
o1.shapeColor="orange"
o2.shapeColor="brown"
o3.shapeColor="skyBlue"
o4.shapeColor="purple"  
o5.shapeColor="red"
o6.shapeColor="blue"
}
    drawSprites();
}