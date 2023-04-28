import React from "react";
import "./ResetButton.css";
export const ResetButton = ({ resetBoard, resetGame }) => {
  return (
    <div class="btn-group">
      <button className="reset-btn" onClick={resetBoard}>
        Reset
      </button>
      <button className="reset-btn" onClick={resetGame}>
        New game
      </button>
    </div>
  );
};
//  const ResetGame = ({}) => {
//      return(
//          <button className="resetGame-btn" onClick = {ResetGame}>ResetGame</button>
//      )
//  }
