import Canvas from './canvas'

export default class Level extends Canvas {
  constructor() {
    super();

    this.clearscreen();
  }

  drawLevel() {
    this.draw();
  }

  loadLevel(level: Newable<any>) {
    this.drawLevel()

    return new level(this);
  }
}