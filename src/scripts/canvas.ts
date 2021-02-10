export default class Canvas {
  private canvas: HTMLCanvasElement | undefined;
  private ctx: CanvasRenderingContext2D | undefined;

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
}