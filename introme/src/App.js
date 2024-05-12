import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import LoginPage from "./LoginPage/LoginPage";
import SignupPage from "./LoginPage/SignupPage";
import OpenSpace from "./ChatSpace/OpenSpace";
import TeamSpace from "./ChatSpace/TeamSpace";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/LoginPage" element={<LoginPage />} />
        <Route exact path="/SignupPage" element={<SignupPage />} />
        <Route exact path="/OpenSpace" element={<OpenSpace />} />
        <Route exact path="/TeamSpace" element={<TeamSpace />} />
      </Routes>
    </Router>
  );
}

export default App;
