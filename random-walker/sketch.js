"use strict";

let walker;

function setup() {
  createCanvas(400, 400);
  background(51); // draw the background once, so we can see the walker's path
  walker = new Walker();
}

function draw() {
  walker.step();
  walker.draw();
}
