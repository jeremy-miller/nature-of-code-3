let movers = [];
const mu = 0.1;  // coefficient of friction

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i++) {
    movers[i] = new Mover(random(width), 200, random(1, 8));
  }
}

function draw() {
  background(0);
  
  const wind = createVector(0.1, 0);
  const gravity = createVector(0, 0.2);
  
  for (let mover of movers) {
    if (mouseIsPressed) {
      mover.applyForce(wind);
    }

    const weight = p5.Vector.mult(gravity, mover.mass);
    mover.applyForce(weight);

    mover.friction();
    mover.step();
    mover.edges();
    mover.draw();
  }
}