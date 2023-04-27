import React from 'react'
import "./ScoreBoard.css"
export const ScoreBoard =({scores, xPlayer}) => {
    const {xScore, oScore} = scores
    return (
        <div className="scoreboard">
            <span className={`score x-score ${!xPlayer && "inactive"} `}>Player 1(X) - {xScore}</span>
            <span className={`score o-score ${xPlayer && "inactive"} `}>Player 2(O) - {oScore}</span>
        </div>
    )
}