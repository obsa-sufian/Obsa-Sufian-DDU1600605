import { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    for (let [a,b,c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a];
    }
    return null;
  };

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : board.every(Boolean) ? 'Draw!' : `Next: ${xIsNext ? 'X' : 'O'}`;

  const handleClick = (i) => {
    if (board[i] || winner) return;
    const newBoard = [...board];
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="text-center">
      <h2>Tic‑Tac‑Toe</h2>
      <div className="mb-2 fs-4">{status}</div>
      <div className="board d-grid" style={{ gridTemplateColumns: 'repeat(3, 80px)', gap: '5px', justifyContent: 'center' }}>
        {board.map((cell, i) => (
          <button key={i} className="btn btn-outline-primary" style={{ height: '80px', fontSize: '2rem' }}
            onClick={() => handleClick(i)}>
            {cell}
          </button>
        ))}
      </div>
      <button className="btn btn-secondary mt-3" onClick={reset}>Reset Game</button>
    </div>
  );
};
export default TicTacToe;

