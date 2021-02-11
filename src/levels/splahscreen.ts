import Level from "../scripts/level";
import { drawDecorator } from '../scripts/canvas';

export default class SplashScreen extends Level {
  constructor() {
    super();

    
  }
  
  @drawDecorator()
  draw() {
    this.getContext().fillStyle = "#fff"
  }

  @drawDecorator()
  onDraw() {
    console.log('repaint')
  }
}