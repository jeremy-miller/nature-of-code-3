let r = 10;
let waves = [];

class Wave {
  constructor(amplitude, period, phase) {
    this.amplitude = amplitude;
    this.period = period;
    this.phase = phase;
  }
  
  evaluate(x) {
    return sin(this.phase + TWO_PI * x / this.period) * this.amplitude;
  }
  
  update() {
    this.phase += 0.05;
  }
}

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 5; i++) {
    let amplitude = random(20, 80);
    let period = random(100, 600);
    let phase_ = random(0, TWO_PI);  // add _ to not clash with built-in function
    waves[i] = new Wave(amplitude, period, phase_);
  }
}

function draw() {
  background(0);
  for (let x = 0; x < width; x += 10) {
    let y = 0;
    for (let wave of waves) {
      y += wave.evaluate(x);
    }
    noStroke();
    circle(x, y + height / 2, r);
  }
  
  for (let wave of waves) {
    wave.update();
  }
}
