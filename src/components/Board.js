import React from "react";
import { Box } from "./Box";
import "./Board.css";
export const Board = ({ board, onClick, winners }) => {
  return (
    <div className="board">
      {board.map((value, idx) => {
        const isWinner = winners.includes(idx) ? "winner" : "";
        return (
          <Box
            value={value}
            winner={isWinner}
            onClick={() => value == null && onClick(idx)}
          />
        );
      })}
    </div>
  );
};
