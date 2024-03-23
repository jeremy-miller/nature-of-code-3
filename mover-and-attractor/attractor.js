class Attractor {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.mass = mass;
    this.r = sqrt(this.mass);
  }
  
  attract(mover) {
    const G = 1;  // gravitational constant
    let force = p5.Vector.sub(this.pos, mover.pos);
    const distanceSquared = constrain(force.magSq(), 100, 1000);
    const strength = G * (this.mass * mover.mass) / distanceSquared;
    force.setMag(strength);
    mover.applyForce(force);
  }
  
  draw() {
    noStroke();
    fill(255, 0, 100);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}