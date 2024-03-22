let walker;

function setup() {
  createCanvas(400, 400);
  background(0);
  walker = new Walker(width / 2, height / 2);
}

function draw() {
  walker.step();
  walker.draw();
}