class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  step() {
    const xStep = random(-1, 1);
    const yStep = random(-1, 1);
    this.x += xStep;
    this.y += yStep;
  }

  draw() {
    stroke(255);
    point(this.x, this.y);
  }
}
