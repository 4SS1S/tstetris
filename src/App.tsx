import React, { useEffect, useRef } from 'react';
import './App.css';
import SplashScreen from './levels/splahscreen';

import Game from './scripts'
import Level from './scripts/level';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if(!canvasRef.current) {
      return;
    }

    const game = new Game();
    game.loadLevel(SplashScreen)
  }, [])

  return (
    <div className="App">
      <canvas ref={canvasRef} width="512" height="512" />
    </div>
  );
}

export default App;
