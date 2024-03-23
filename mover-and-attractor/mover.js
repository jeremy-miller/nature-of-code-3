class Mover {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(5);
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.r = sqrt(this.mass) * 2;
  }
  
  applyForce(force) {
    const f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }
  
  step() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
  
  draw() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}