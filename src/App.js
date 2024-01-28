import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_NEWS_API;
  const routesName = [
    "business",
    "entertainment",
    "general",
    "technology",
    "health",
  ];
  const setProgressBar = (progress) => {
    setProgress(progress);
  };
  return (
    <div>
      <BrowserRouter>
        <Navbar routesName={routesName} />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          {routesName.map((element, index) => {
            return (
              <Route
                exact
                key={index}
                path={"/" + element}
                element={
                  <News
                    setProgress={setProgressBar}
                    key={index}
                    pageSize={5}
                    country={"in"}
                    apiKey={apiKey}
                    category={element}
                  />
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
