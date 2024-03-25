let angle;
let r = 150;

function setup() {
  createCanvas(400, 400);
  background(0);
  angle = 0;
}

function draw() {  
  translate(width / 2, height / 2);
  strokeWeight(16);
  stroke(252, 238, 33);
  let x = r * cos(angle);
  let y = r * sin(angle);
  point(x, y);
  
  angle += 0.04;
  r -= 0.2;
}