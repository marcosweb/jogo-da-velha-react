import React from 'react';
import Square from './Square';

export default function Board(props) {
  const { status, squares } = props.state;
  const showSquare = i => (
    <Square value={squares[i]} onClick={() => props.handleClick(i)} />
  );
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {showSquare(0)}
        {showSquare(1)}
        {showSquare(2)}
      </div>
      <div className="board-row">
        {showSquare(3)}
        {showSquare(4)}
        {showSquare(5)}
      </div>
      <div className="board-row">
        {showSquare(6)}
        {showSquare(7)}
        {showSquare(8)}
      </div>
    </div>
  );
}
