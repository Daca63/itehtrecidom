import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { GamePage } from "../pages/GamePage";
import { ResultsPage } from "../pages/ResultsPage";

export const AppRoutes = () => {
  const [results, setResults] = useState([]);

  const addResultsHandler = (result) => {
    setResults((prevRes) => [...prevRes, result]);
  };

  const resetResults = () => {
    setResults([]);
  };

  const removeElementById = (id) => {
    setResults((prevRes) => prevRes.filter((r) => r.id !== id));
  };

  console.log(results)
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/game"
          element={
            <GamePage
              addResultsHandler={addResultsHandler}
              resetResults={resetResults}
            />
          }
        />
        <Route path="/results" element={<ResultsPage results={results} removeElementById={removeElementById}/>} />
        <Route path="*" element={<Navigate replace to="/game" />} />
      </Routes>
    </BrowserRouter>
  );
};
