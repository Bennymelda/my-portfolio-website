import { Routes, Route } from "react-router-dom";
import Home from './home';
import About from './about';
import Service from './service';
import Project from './project';
import Contact from './contact';
import Navbar from "./navbar";
import { useState, useEffect } from "react";
import './index.css';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
  const html = document.documentElement;
  if (darkMode) {
    html.classList.add('dark');    // dark mode ON
  } else {
    html.classList.remove('dark'); // dark mode OFF
  }
 
}, [darkMode]);


  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div
        style={{ backgroundColor: "var(--bg-main)", color: "var(--text)" }}
        className="min-h-screen transition-colors duration-500"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
