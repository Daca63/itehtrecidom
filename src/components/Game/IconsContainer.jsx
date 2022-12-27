import { Card } from "../Card/Card";
import React from "react";
import { FaHandPaper, FaHandRock, FaHandScissors } from "react-icons/fa";
import "./IconsContainer.css";

export const IconsContainer = (props) => {
  return (
    <div className="center-container">
      <h2 className="icons-title">
        {props.userChoice !== "" ? "Pick again" : "Play your first move"}
      </h2>
      <div className="icons-container">
        <Card
          clickable
          onClick={() => props.startGameHandler(0)}
          selected={props.userChoice === 0}>
          <FaHandRock className="icon" size={"7rem"} />
        </Card>
        <Card
          clickable
          onClick={() => props.startGameHandler(1)}
          selected={props.userChoice === 1}>
          <FaHandPaper className="icon" size={"7rem"} />
        </Card>
        <Card
          clickable
          onClick={() => props.startGameHandler(2)}
          selected={props.userChoice === 2}>
          <FaHandScissors className="icon" size={"7rem"} />
        </Card>
      </div>
    </div>
  );
};
