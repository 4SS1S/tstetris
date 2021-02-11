import Canvas from './canvas'

export default class Level {
  constructor() {
    new Canvas().clearscreen();
  }

  loadLevel(level: Newable<any>) {
    return new level(this);
  }
}