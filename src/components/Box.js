import React from "react";
import "./Box.css";
export const Box = ({ value, onClick, winner }) => {
  const boxType = value === "X" ? "Box x" : "Box o";
  const style = "" + boxType + " " + winner;
  console.log(style);
  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};
