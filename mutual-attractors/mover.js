class Mover {
  constructor(pos, velocity, mass) {
    this.pos = pos;
    this.vel = velocity;
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.r = sqrt(this.mass) * 2;
  }
  
  applyForce(force) {
    const f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }
  
  attract(mover) {
    const G = 0.75;  // gravitational constant
    let force = p5.Vector.sub(this.pos, mover.pos);
    const distanceSquared = constrain(force.magSq(), 100, 1000);
    const strength = G * (this.mass * mover.mass) / distanceSquared;
    force.setMag(strength);
    mover.applyForce(force);
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