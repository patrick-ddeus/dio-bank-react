import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import AuthProvider from "./contexts/Auth/AuthProvider";
import MainPage from "./pages/HomePage";
import "@fontsource/roboto";
import TransferPage from "./pages/TransferPage";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/home/transferences" element={<TransferPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
