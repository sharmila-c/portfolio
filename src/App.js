<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
=======
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
>>>>>>> aa8371a1d7bc32324ec298c6a4c5118d7b1729df
import './App.css';
import Home from './components/Home';
import About from './pages/About';
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";

function App() {
  return (
    <Router basename="/portfolio">
      <Home />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
<<<<<<< HEAD
        </Routes>
=======
        {/* Redirect any unknown route to About */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
>>>>>>> aa8371a1d7bc32324ec298c6a4c5118d7b1729df
    </Router>
  );
}

export default App;
