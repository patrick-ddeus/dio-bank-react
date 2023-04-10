import React from "react";
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/welcome" element={<WelcomePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
