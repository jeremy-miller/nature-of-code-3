class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
  }

  step() {
    this.pos.x = this.pos.x + random(-1, 1);
    this.pos.y = this.pos.y + random(-1, 1);
  }

  draw() {
    stroke(255);
    point(this.pos.x, this.pos.y);
  }
}
