import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import LoginPage from "./LoginPage/LoginPage";
import SignupPage from "./LoginPage/SignupPage";
import OpenSpace from "./ChatSpace/OpenSpace";
import TeamSpace from "./ChatSpace/TeamSpace";
import CreateProject from "./ChatSpace/CreateProject";
import CreateChat from "./ChatSpace/CreateChat";
import UpdateChat from "./ChatSpace/UpdateChat";
import UpdateProject from "./ChatSpace/UpdateProject";
import Wallet from "./WalletPage/Wallet";
import MyPage from "./MyPage/MyPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/LoginPage" element={<LoginPage />} />
        <Route exact path="/SignupPage" element={<SignupPage />} />
        <Route exact path="/OpenSpace" element={<OpenSpace />} />
        <Route exact path="/TeamSpace" element={<TeamSpace />} />
        <Route exact path="/CreateProject" element={<CreateProject />} />
        <Route exact path="/CreateChat" element={<CreateChat />} />
        <Route exact path="/UpdateProject" element={<UpdateProject />} />
        <Route exact path="/UpdateChat" element={<UpdateChat />} />
        <Route exact path="/Wallet" element={<Wallet />} />
        <Route exact path="/Mypage" element={<MyPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
