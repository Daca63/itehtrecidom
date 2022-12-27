import React from "react";
import { resultMapper } from "../../constants/resultMapper";
import { Card } from "../Card/Card";
import './Result.css'

export const Result = (props) => {
  return (
    <div className="center-container" style={{ margin: "1rem 0" }}>
      <h2 className="icons-title">Result</h2>
        <Card className={`${resultMapper[props.win]} result-card`}>
          <h2 className="icons-title">{resultMapper[props.win] || 'Play'}</h2>
        </Card>
    </div>
  );
};
