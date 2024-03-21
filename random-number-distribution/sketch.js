"use strict";

let randomCounts = [];
const totalBuckets = 20;

function setup() {
  createCanvas(640, 240);

  for (let i = 0; i < totalBuckets; i++) {
    randomCounts[i] = 0;
  }
}

function draw() {
  background(51);

  const index = floor(random(totalBuckets));
  randomCounts[index]++;

  stroke(0);
  fill(127);

  const w = width / totalBuckets;
  for (let x = 0; x < totalBuckets; x++) {
    rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
  }
}
