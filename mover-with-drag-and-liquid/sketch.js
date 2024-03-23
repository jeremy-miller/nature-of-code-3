let movers = [];
let mu = 0.1;  // coefficient of friction
let coefficientOfDrag = 0.2;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i++) {
    movers[i] = new Mover(random(width), 10, random(1, 8));
  }
}

function draw() {
  background(0);

  // create liquid
  fill(255, 125);
  noStroke();
  rect(0, height / 2, width, height / 2);

  for (let mover of movers) {
    if (mouseIsPressed) {
      const wind = createVector(0.1, 0);
      mover.applyForce(wind);
    }
    const gravity = createVector(0, 0.2);
    const weight = p5.Vector.mult(gravity, mover.mass);
    mover.applyForce(weight);

    if (mover.pos.y > height / 2) {
      mover.drag(coefficientOfDrag);
    }
    mover.step();
    mover.edges();
    mover.draw();
  }
}