declare class GameProps {
  constructor(canvas: HTMLCanvasElement);
}

declare class CanvasProps {

}

interface LevelProps {
  new (name: string): LevelProps;
}

type Newable<T> = { new (...args: any[]): T; };