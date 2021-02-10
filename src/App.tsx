import React, { useEffect, useRef } from 'react';
import './App.css';

import Game from './scripts'

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if(!canvasRef.current) {
      return;
    }

    new Game(canvasRef.current);
  }, [])

  return (
    <div className="App">
      <canvas ref={canvasRef} width="512" height="512" />
    </div>
  );
}

export default App;
