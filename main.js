"use strict";
import { MyCanvas } from "./CanvasClass.js";

main();
// add canvas element
function main() {
  const myCanvas = new MyCanvas();
  myCanvas.standard();
  const ctx = myCanvas.ctx;
  ctx.clearColor(0.0, 0.0, 0.0, 1.0);
  ctx.clear(ctx.COLOR_BUFFER_BIT);
}

/* function createCanvas() {
  console.log("Creating canvas");

  const canvas = document.createElement("canvas");
  const body = document.querySelector("body");
  body.append(canvas);
}

function setCanvasSize(height, width) {}
 */
