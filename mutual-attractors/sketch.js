let movers = [];
let sun;

function setup() {
  createCanvas(600, 600);
  sun = new Mover(createVector(0, 0), createVector(0, 0), 500);
  for (let i = 0; i < 10; i++) {
    let pos = p5.Vector.random2D();
    let velocity = pos.copy();
    velocity.setMag(random(10, 15));
    pos.setMag(random(100, 150));
    velocity.rotate(PI / 2);
    const mass = random(10, 15);
    movers[i] = new Mover(pos, velocity, mass);
  }
}

function draw() {
  background(0, 20);
  
  translate(width / 2, height / 2);
  
  for (let mover of movers) {
    sun.attract(mover);
    for (let other of movers) {
      if (mover !== other) {
        mover.attract(other);
      }
    }
  }
  
  for (let i = 0; i < movers.length; i++) {
    movers[i].step();
    movers[i].draw();
  }
  
  // sun.draw();
}