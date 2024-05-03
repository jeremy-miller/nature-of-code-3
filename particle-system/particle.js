class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(1, 5));
    this.acc = createVector(0, 0);
    this.r = 4;
    this.lifetime = 255;
  }
  
  applyForce(force) {
    this.acc.add(force);
  }
  
  finished() {
    return this.lifetime <= 0;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
    
    this.lifetime -= 5;
  }

  show() {
    stroke(255, this.lifetime);
    strokeWeight(2);
    fill(255, this.lifetime);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}