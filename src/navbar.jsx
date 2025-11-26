import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {FaSun, FaMoon} from "react-icons/fa";
import {CiLight} from "react-icons/ci";


function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-(--bars) shadow-[2px_5px_20px_var(--card-bg)] p-3 mb-5 flex items-center
     justify-between sticky top-0 z-50 transition-colors duration-500">
      
      {/* Dark Mode Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 rounded bg-(--text-main)  text-white transition-colors duration-300"
      >
        {darkMode ?  <FaMoon /> : <FaSun />}
      </button>

      {/* Logo / Brand */}
      <div className="text-md text-(--head) text-center font-bold">
        𝓜𝔂 𝓟𝓸𝓻𝓽𝓯𝓸𝓵𝓲𝓸
      </div>

      {/* Desktop Links */}
      <div className="hidden sm:flex gap-4">
        {["/", "/about", "/contact", "/project", "/service"].map((path, idx) => {
          const labels = ["Home", "About", "Contact", "Projects", "Service"];
          return (
            <NavLink
              key={idx}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-(--text-main) font-bold"
                  : "text-(--head) hover:underline"
              }
            >
              {labels[idx]}
            </NavLink>
          );
        })}
      </div>

      {/* Hamburger Icon */}
      <div className="sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} className="text-(--text-main)" /> : <FaBars size={24} 
          className="text-(--head)" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          fixed top-0 right-0 h-screen w-52 z-50 flex flex-col items-start p-6 gap-4
          bg-(--bars)  shadow-[2px_5px_20px_var(--card-bg)]
          transform transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
        `}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-(--head) "
        >
          <FaTimes size={24} />
        </button>

        {/* Mobile Links */}
        {["/", "/about", "/contact", "/project", "/service"].map((path, idx) => {
          const labels = ["Home", "About", "Contact", "Projects", "Service"];
          return (
            <NavLink
              key={idx}
              to={path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-(--text-main) font-bold w-full p-2 rounded"
                  : "text-(--head)  w-full p-2 rounded hover:bg-(--text-main)"
              }
            >
              {labels[idx]}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
