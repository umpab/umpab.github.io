let gameover = false;
const xStart = 0;
const yStart = 250;
const jxStart = 250;
const jyStart = 250;
const speed = 10;
let xCor = xStart;
let yCor = yStart;
let jxCor = jxStart;
let jyCor = jyStart;
let distance = 0;
let bigness = 10;
let signess = 50; 
let score = 0;
let distElem;
let fram = 0;
let maxride = 120
function setup() {
  distElem = createDiv(distance);
  distElem.position(20,20);
  distElem.id = 'distance';
  distElem.style('color','purple');
  createCanvas(500,500);
  frameRate(30);
  stroke(225);
  strokeWeight(bigness);
  pink = loadImage("pixil-frame-0-3.png")
  sun = loadImage("sun.png")
}
function draw() {
  fram += 1;
  if (!gameover){
  stroke(255)
  distance = Math.sqrt((jxCor - xCor)**2 + (jyCor - yCor)**2)
  distance = Math.round(distance)
  distElem.html(score)
  text(score, 20, 20)
  background(20,220,180);
    //origin 20 50 90
  let adjust = Math.round(bigness/2);
  image(pink,xCor-adjust,yCor-adjust,bigness,bigness);
  stroke(255);
  strokeWeight(bigness);
  //point(xCor, yCor);
  if(distance<(signess/2+bigness/2)){
    stroke(255,49,13)//red angry mode
    jxCor = Math.floor(Math.random()*301);
    jyCor = Math.floor(Math.random()*301);
    signess = Math.floor(Math.random()*100+50);
    if (signess<bigness){
      score = score + 1;
    }
    if (bigness<=signess){
      score = score -1;
    }
  
  }
  if (fram%150==0){
    jxCor = Math.floor(Math.random()*301);
    jyCor = Math.floor(Math.random()*301);
    signess = Math.floor(Math.random()*100+50);
  }
    image(sun,jxCor,jyCor,signess,signess)
}}
function keyPressed(){
  switch (keyCode) {
    case 65:
      if (bigness<maxride){
      bigness += 10;}
      xCor -= speed;
      break;
    case 68:
      if (bigness<maxride){
      bigness += 10;}
      xCor += speed;
      break;
    case 87:
      if(bigness>0)
        {bigness -= 10;
      }
      yCor -= speed;
      break;
    case 83:
      if(bigness>0)
        {bigness -= 10;
      }
      yCor += speed;
      break;
  }
} 
