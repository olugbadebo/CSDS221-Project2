import React, { useState } from "react";
import "./App.css";
import { Board } from "./components/Board";
import { ScoreBoard } from "./components/ScoreBoard";
import { ResetButton } from "./components/ResetButton";
function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlayer, setXplayer] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [winners, setWinners] = useState(Array(3).fill(null));
  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlayer === true ? "X" : "O";
      } else {
        return value;
      }
    });
    const winner = checkWinner(updatedBoard);
    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else if (winner === "X") {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }

    setBoard(updatedBoard);
    setXplayer(!xPlayer);
  };
  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        console.log(board[x]);
        // [].style.backgroundcolor: green;
        setWinners([x, y, z]);
        setGameOver(true);
        return board[x];
      }
    }
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
    setWinners(Array(3).fill(null));
    // let{oScore} = scores;
    // oScore = 0
    // let{xScore} = scores;
    // xScore = 0;
    // setScores({xScore, oScore})
  };

  const resetGame = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
    setWinners(Array(3).fill(null));
    let { oScore } = scores;
    oScore = 0;
    let { xScore } = scores;
    xScore = 0;
    setScores({ xScore, oScore });
  };

  // const startOver = () => {
  //   oScore=0;
  //   xScore=0;
  // }
  // const board = ["X","X","X","X","X","X","X","X","X"]
  return (
    <div className="App">
      <h1>
        <center>Tic-Tac-Toe</center>
      </h1>
      <ScoreBoard scores={scores} xPlayer={xPlayer} />
      <Board
        board={board}
        winners={winners}
        onClick={gameOver ? resetBoard : handleBoxClick}
      />
      <ResetButton resetBoard={resetBoard} resetGame={resetGame} />
      {/* <ResetButton resetGame={resetGame}/> */}
      <h3 className="h3">Made by Olugbadebo Adesina</h3>
    </div>
  );
}

export default App;
