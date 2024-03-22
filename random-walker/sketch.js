"use strict";

let walker;

function setup() {
  createCanvas(400, 400);
  background(0); // draw the background once, so we can see the walker's path
  walker = new Walker(width / 2, height / 2);
}

function draw() {
  walker.step();
  walker.draw();
}
