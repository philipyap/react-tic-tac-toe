import React from 'react';
import './App.css';
import Square from './Square'
import Board from './Board'
import Game from './Game'


function App() {
  return (
    <div className="App">
      <Square />
      <Game />
      <Board />
    </div>
  );
}

export default App;
