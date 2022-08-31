/*import React, { useState } from "react";
import Board from "./board";
import { calculateWinner } from "./calcWinnre";*/
/*
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      stepNumber: 0,
      xIsNext: true,
    };
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([{ squares: squares }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }
  jumpTo(step) {
    this.setState({ stepNumber: step, xIsNext: step % 2 === 0 });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? "Go to move # " + move : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}*/
/*const Game = () => {
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
    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">
        <div>
          <h3>History</h3>
          {renderMoves()}
        </div>
        <h3>{status}</h3>
      </div>
    </>
  );
};
export default Game;*/
import React, { useState, createContext } from "react";
import Board from "./board";
import { calculateWinner } from "./calcWinnre";

const initialContext = {
  squares: Array(9).fill(null),
  onClick: () => {},
};
export const GameContext = createContext(initialContext);
const Game = () => {
  const [history, setHistory] = useState([initialContext.squares]);
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
    <GameContext.Provider value={React.useContext(GameContext)}>
      <Board squares={history[stepNumber]} onClick={handleClick} />
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
