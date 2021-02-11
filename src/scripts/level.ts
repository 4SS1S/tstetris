import Canvas from './canvas'

export default class Level {
  constructor() {
    new Canvas().clearscreen();

    window.requestAnimationFrame(this.draw)
  }

  loadLevel(level: Newable<any>) {
    return new level(this);
  }

  draw() {
    setTimeout(() => {
      console.log('ok')
    }, 300)
  }
}