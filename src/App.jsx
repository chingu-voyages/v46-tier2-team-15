import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext , useState } from "react";
import Header from "./components/Header";
import AboutPage from "./components/AboutPage";
import AppTeamPage from "./components/AppTeamPage";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
export const ThemeContext = createContext(null);

function App() {

  const [theme , setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{theme , toggleTheme}}>
    <div className="w-full h-screen flex flex-col items-center" id={theme}>
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
    </ThemeContext.Provider>
  );
}

export default App;
