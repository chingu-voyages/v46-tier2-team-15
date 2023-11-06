import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import AboutPage from "./components/AboutPage";
import AppTeamPage from "./components/AppTeamPage";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<AppTeamPage />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
