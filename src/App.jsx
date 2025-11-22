import { Routes,Route } from "react-router-dom"
import Home from './home'
import About from './about'
import Service from './service'
import Project from './project'
import Contact from './contact'
import Navbar from "./navbar"
import { CiMenuBurger } from "react-icons/ci"
import './index.css'
import './App.css'




function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      </>
  );
}

export default App
