import React from "react";
import { FaQuestion } from "react-icons/fa";
import { Card } from "../Card/Card";
import { FaHandPaper, FaHandRock, FaHandScissors } from 'react-icons/fa';

export const CpuContainer = (props) => {
  return (
    <div className="center-container">
      <h2 className="icons-title">Cpu</h2>
      <Card>
        {props.cpuChoice==='' && <FaQuestion size={"7rem"} />}
        {props.cpuChoice === 0 && <FaHandRock className="icon" size={"7rem"} />}
        {props.cpuChoice === 1 && <FaHandPaper className="icon" size={"7rem"} />}
        {props.cpuChoice === 2 && <FaHandScissors className="icon" size={"7rem"} />}
      </Card>
    </div>
  );
};
