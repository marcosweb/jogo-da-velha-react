import React from 'react';
import History from './History';
import Board from './Board';

export default function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <History />
      </div>
    </div>
  );
}
