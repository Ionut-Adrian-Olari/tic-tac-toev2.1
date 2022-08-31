import React from "react";
import Square from "./ContextSquare";

const Board = ({ squares, onClick }) => (
  <div className="board">
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
  //return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
);
export default Board;
