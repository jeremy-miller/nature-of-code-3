class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(0.5, 2));
    this.acc = createVector(0, 0);
    this.r = 32;
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
    
    this.lifetime -= 6;
  }

  show() {
    tint(150, 40, 80, this.lifetime);
    imageMode(CENTER);
    image(img, this.pos.x, this.pos.y, this.r, this.r);
  }
}