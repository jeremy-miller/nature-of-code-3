class Walker {
  constructor(x, y) {
    this.x = width / 2;
    this.y = height / 2;
  }

  step() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }

  draw() {
    stroke(255);
    point(this.x, this.y);
  }
}
