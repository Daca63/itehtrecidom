import { ResultsTable } from "../components/ResultsTable/ResultsTable";
import React from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { Overall } from "../components/Overall/Overall";

export const ResultsPage = (props) => {
  return (
    <>
      <NavBar />
      <div className="content-container">
        <h1 className="main-title">Result history</h1>
        <Overall results={props.results}/>
        <ResultsTable results={props.results} removeElementById={props.removeElementById}/>
      </div>
    </>
  );
};
