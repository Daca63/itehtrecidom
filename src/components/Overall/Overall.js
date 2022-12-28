import React from "react";
import {resultMapperInverse} from "../../constants/resultMapper"

export const Overall = (props) => {
  return (
    <div className="overall-container">
      <h2 className="icons-title">Overall</h2>
      <table>
        <thead>
          <tr>
            <th>Win</th>
            <th>Lose</th>
            <th>Draw</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.results.filter(r=> r.result === resultMapperInverse["Win"]).length}</td>
            <td>{props.results.filter(r=> r.result === resultMapperInverse["Lose"]).length}</td>
            <td>{props.results.filter(r=> r.result === resultMapperInverse["Tie"]).length}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
