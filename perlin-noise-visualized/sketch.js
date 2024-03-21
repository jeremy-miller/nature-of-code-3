"use strict";

let start = 0;
let inc = 0.01;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);

  stroke(255);
  noFill();
  beginShape();
  let xoff = start;
  for (let x = 0; x < width; x++) {
    // let y = random(height);
    let y = noise(xoff) * height; // multiply by "height" since noise value is 0 - 1
    vertex(x, y);
    xoff += inc;
  }
  endShape();
  start += inc;
}
