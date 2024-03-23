class Mover {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.r = sqrt(this.mass) * 10;
  }
  
  edges() {
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    }
    
    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    } else if (this.pos.x < this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
  }
  
  friction() {
    const distanceFromBottom = height - (this.pos.y + this.r);
    if (distanceFromBottom < 1) {
      // direction of friction
      let friction = this.vel.copy();
      friction.normalize();
      friction.mult(-1);
      
      // magnitude of friction
      const normalForce = this.mass;
      friction.setMag(mu * normalForce);
      
      this.applyForce(friction);
    }
  }
  
  drag() {
    // direction of drag
    let drag = this.vel.copy();
    drag.normalize();
    drag.mult(-1);
    
    // magnitude of drag
    const coefficientOfDrag = 0.1;
    const speedSquared = this.vel.magSq();
    drag.setMag(coefficientOfDrag * speedSquared);
       
    this.applyForce(drag);
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