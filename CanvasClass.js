export class MyCanvas {
  #Height;
  #Width;

  #ParentNode;

  Canvas;
  ctx;
  canvasId = "glCanvas";

  constructor() {
    this.Canvas = document.createElement("canvas");
    console.log("Creating Canvas");
    window.onresize = () => {
      this.setSize();
    };
  }

  standard(node) {
    this.setSize();
    this.setParentNode();
    this.appendCanvas();
    this.setId();
    this.setCtx();
  }

  setCtx(ctx) {
    ctx = ctx ?? "webgl2";
    this.ctx = this.Canvas.getContext(ctx);
    if (this.ctx === null) {
      alert("Unable to initialize WebGL. Your browser may not support it");

      return;
    }
    console.log("Setting context: " + this.ctx);
  }

  setId(id) {
    this.canvasId = id ?? this.canvasId;
    this.Canvas.setAttribute("id", this.canvasId);
    console.log("Setting Id");
  }

  setSize(height = window.innerHeight, width = window.innerWidth) {
    this.#Height = height;
    this.#Width = width;
    console.log("Height: " + this.#Height + " Width: " + this.#Width);

    this.Canvas.width = this.#Width;
    this.Canvas.height = this.#Height;
  }

  setParentNode(parentNode = document.body) {
    this.#ParentNode = parentNode;
    console.log("Setting parent node as: " + this.#ParentNode);
  }

  appendCanvas(canvas = this.Canvas, parentNode = this.#ParentNode) {
    parentNode.appendChild(canvas);
  }
}
