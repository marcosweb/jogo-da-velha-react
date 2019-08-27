

const init = () => {
  const squares = Array(9).fill(null);
  return {
    squares,
    xIsNext: true,
    history: [[...squares]],
    current: 0,
    winner: null
  };
};

const calculateWinner = squares => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export const squareReducer = (state = init(), action) => {
  switch (action.type) {
    
    case 'HANDLE_CLICK':
      let { squares, xIsNext, history, current, winner } = { ...state };
      if (winner || squares[action.payload]) {
        return state;
      }
      squares[action.payload] = xIsNext ? 'X' : 'O';
      if (!winner) {
        winner = calculateWinner(squares);
      }
      history.push([...squares]);
      current = history.length - 1;
      xIsNext = !xIsNext;
      return { ...state, squares, xIsNext, history, current, winner };

    case 'CLICK_HISTORY':
      const index = action.payload;
      const _squares = [...state.history[index]];
      const _history = state.history.slice(0, index + 1);
      const _xIsNext = index % 2 === 0;
      return { ...state, squares: _squares, history: _history, xIsNext: _xIsNext };

    case 'CLICK_RESTART':
      return init();

    default:
      return state;
  }
};
