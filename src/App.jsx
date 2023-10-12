import "./App.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
