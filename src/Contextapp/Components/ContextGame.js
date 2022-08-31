import React, { useState, createContext } from "react";
import Board from "./ContextBoard";
import { calculateWinner } from "./CalculateWinner";

const initialContext = { squares: Array(9).fill(null), onClick: (i) => {} };
export const GameContext = createContext(initialContext);
const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const XsauO = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[stepNumber];
    const squares = [...current];
    if (winner || squares[i]) {
      return;
    }
    squares[i] = XsauO;
    setHistory([...newHistory, squares]);
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };
  const status = winner
    ? "Winner" + winner
    : stepNumber === 9
    ? "Draw! Go to game start!"
    : "Next Player: " + XsauO;
  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };
  const renderMoves = () =>
    history.map((step, move) => {
      const dest = move ? "Go to move # " + move : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{dest}</button>
        </li>
      );
    });
  return (
    <GameContext.Provider value={{ squares, onClick: handleClick }}>
      <Board />
      <div className="info-wrapper">
        <div>
          <h3>History</h3>
          {renderMoves()}
        </div>
        <h3>{status}</h3>
      </div>
    </GameContext.Provider>
    /* <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">
        <div>
          <h3>History</h3>
          {renderMoves()}
        </div>
        <h3>{status}</h3>
      </div>
    </>*/
  );
};
export default Game;
