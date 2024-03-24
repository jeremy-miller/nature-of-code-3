let movers = [];
let attractor;

function setup() {
  createCanvas(600, 600);
  attractor = new Attractor(width / 2, height / 2, 100);
  for (let i = 0; i < 10; i++) {
    const x = random(width);
    const y = random(height);
    const mass = random(50, 150);
    movers[i] = new Mover(x, y, mass);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < 10; i++) {
    movers[i].step();
    movers[i].draw();
    attractor.attract(movers[i]);
  }
  attractor.draw();
}