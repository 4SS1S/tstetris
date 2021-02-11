export default class Canvas {
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;

  constructor() {
    const canvas = document.querySelector("canvas");

    if(!canvas) {
      return;
    }

    this.setCanvas(canvas as HTMLCanvasElement)
    this.setContext(canvas)
  }

  getCanvas(): HTMLCanvasElement {
    return this.canvas as HTMLCanvasElement;
  }

  setCanvas(canvas: HTMLCanvasElement)  {
    this.canvas = canvas;
  }

  getContext(): CanvasRenderingContext2D {
    return this.ctx as CanvasRenderingContext2D;
  }

  setContext(canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  }

  clearscreen() {
    if(!this.ctx) {
      throw new Error('Fail at paint screen');
    }

    this.ctx.fillStyle = "#000";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}