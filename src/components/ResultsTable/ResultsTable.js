import React from "react";
import { resultMapper, optionsMapper } from "../../constants/resultMapper";
import { MdDelete } from "react-icons/md";
import "./ResultsTable.css";

export const ResultsTable = (props) => {
    
    const onDeleteHandler = (id) =>{
        props.removeElementById(id)
    }

  return (
    <div className="overall-container">
    
    <h2 className="icons-title">Previous results</h2>
      <table>
        <thead>
          <tr>
            <th style={{ width: "10%" }}>Id</th>
            <th style={{ width: "25%" }}>User</th>
            <th style={{ width: "25%" }}>Cpu</th>
            <th style={{ width: "30%" }}>Result</th>
            <th style={{ width: "10%" }}>Delete</th>
          </tr>
          {props.results.map((r, i) => (
            <tr key={r.id}>
              <td>{i + 1}</td>
              <td>{optionsMapper[r.user]}</td>
              <td>{optionsMapper[r.cpu]}</td>
              <td>{resultMapper[r.result]}</td>
              <td className="delete-icon">
                <MdDelete onClick={() => {onDeleteHandler(r.id)}}/>
              </td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
};
