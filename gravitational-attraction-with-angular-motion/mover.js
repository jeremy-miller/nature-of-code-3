class Mover {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(5);
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.r = sqrt(this.mass) * 2;
    this.angle = 0;
    this.angularVel = 0;
    this.angularAcc = 0;
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
    push();
    translate(this.pos.x, this.pos.y);
    this.angle = this.vel.heading();
    rotate(this.angle);
    triangle(-this.r, -this.r / 2, -this.r, this.r / 2, this.r, 0);
    pop();
  }
}