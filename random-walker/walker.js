class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(1, 0);
  }

  step() {
    this.pos.x = this.pos.x + this.vel.x;
    this.pos.y = this.pos.y + this.vel.y;
  }

  draw() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, 32);
  }
}
