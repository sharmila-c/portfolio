import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import './App.css';
import Menu from './components/Menu';
import Home from "./pages/Home";
import About from './pages/About';
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

function AppWrapper() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = sessionStorage.redirect;
    if (redirect) {
      sessionStorage.removeItem("redirect");
      
      const corrected = redirect.replace("/portfolio", "");

      navigate(corrected);
    }
  }, [navigate]);

  return <App />;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/education" element={<Education />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default function Root() {
  return (
    <Router basename="/portfolio">
      <Menu />
      <AppWrapper />
    </Router>
  );
}
