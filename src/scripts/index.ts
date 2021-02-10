import Canvas from './canvas'

export default class Game implements GameProps {
  private ctx: CanvasRenderingContext2D | undefined;

  constructor() {
  }

  boot(canvas: HTMLCanvasElement) {
    const cv = new Canvas();
    cv.setCanvas(canvas);
    cv.setContext(canvas);

    this.ctx = cv.getContext();

    this.ctx.fillStyle = "#000";
    this.ctx.fillRect(0, 0, cv.getCanvas().width, cv.getCanvas().height);
  }
}