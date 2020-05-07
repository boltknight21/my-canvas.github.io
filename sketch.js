var canvas;
var brush,brushButton;
var eraser,eraserButton;
var ribbon;
var value=255;
var value2=0;
function setup() {
  createCanvas(800,400);
  background(0); 
  //createSprite(400, 200, 50, 50);
  //brush = createSprite(mouseX,mouseY,20,20);
  Button1=createButton("red");
  Button1.position(10,50);
  Button1.mousePressed(()=>{
  value="red";  
  });
  Button2=createButton("blue");
  Button2.position(10,70);
  Button2.mousePressed(()=>{
  value="blue";  
  });
  Button3=createButton("green");
  Button3.position(10,90);
  Button3.mousePressed(()=>{
  value="green";  
  });
  Button4=createButton("purple");
  Button4.position(10,110);
  Button4.mousePressed(()=>{
  value="purple";  
  });
  Button5=createButton("white");
  Button5.position(10,130);
  Button5.mousePressed(()=>{
  value="white";  
  });
  Button6=createButton("pink");
  Button6.position(10,150);
  Button6.mousePressed(()=>{
  value="pink";  
  });
  Button7=createButton("brown");
  Button7.position(10,170);
  Button7.mousePressed(()=>{
  value="brown";  
  });
  Button8=createButton("orange");
  Button8.position(10,190);
  Button8.mousePressed(()=>{
  value="orange";
  });
  Button9=createButton("yellow");
  Button9.position(10,210);
  Button9.mousePressed(()=>{
  value="yellow";  
  });
  //eraser= createSprite(mouseX,mouseY,10,10);
  eraserButton=createButton("eraser");
  eraserButton.size(50,50);
  eraserButton.position(10,380);
  eraserButton.mousePressed(()=>{
  value="black"; 
 // value2=0; 
  //strokeWeight(value2);
  });
  ribbon = createSprite(10,200,20,400);
  //ribbon.shapeColor =("gray");
}

function draw() { 
  strokeWeight(4);
  stroke(value);
  if(mouseIsPressed===true) {
    line(mouseX,mouseY,pmouseX,pmouseY);
  }
  drawSprites();
}