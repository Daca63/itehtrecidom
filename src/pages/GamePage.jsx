import { IconsContainer } from "../components/Game/IconsContainer";
import React, { useState } from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { CpuContainer } from "../components/Game/CpuContainer";
import { Result } from "../components/Game/Result";
import { calculateGameFunc } from "../util/calculateGame";
import { v4 as uuidv4 } from "uuid";
import { Card } from "../components/Card/Card";

export const GamePage = (props) => {
  const [cpuChoice, setCpuChoice] = useState("");
  const [userChoice, setUserChoice] = useState("");
  const [resultOfGame, setResultOfGame] = useState("");

  const startGameHandler = (userChoice) => {
    let cpu = Math.floor(Math.random() * 3);
    setCpuChoice(cpu);
    setUserChoice(userChoice);
    const res = calculateGameFunc(userChoice, cpu);
    setResultOfGame(res);

    props.addResultsHandler({
      id: uuidv4(),
      cpu: cpu,
      user: userChoice,
      result: res,
    });
  };

  const resetHandler = () => {
    setCpuChoice("");
    setUserChoice("");
    setResultOfGame("");
    props.resetResults();
  }

  return (
    <>
      <NavBar />
      <div className="content-container">
        <h1 className="main-title">Let's Play</h1>
        <CpuContainer cpuChoice={cpuChoice} />
        <Result win={resultOfGame} />
        <IconsContainer
          startGameHandler={(userChoice) => startGameHandler(userChoice)}
          userChoice={userChoice}
        />
        <Card
          onClick={resetHandler}
          className="new-game"
          clickable>
          <h2>Reset</h2>
        </Card>
      </div>
    </>
  );
};
