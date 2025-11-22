
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dark, setDark] = useState(false)
  function darkMode(){
    setDark(!dark)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <nav className="bg-zinc-800 p-3 mb-5 flex  items-center justify-between sticky top-0 z-50">
      {/* Logo / Brand */}
      <button onClick={darkMode}
  className="px-4 py-2 rounded bg-gray-200 dark:bg-red-700 text-black  dark:text-white"
>
  {dark ? "Light mode" : "Dark mode"}
</button>

      
      <div className="text-md  text-white">𝓜𝔂 𝓟𝓸𝓻𝓽𝓯𝓸𝓵𝓲𝓸</div>

      {/* Desktop Links */}
      <div className="hidden sm:flex gap-4">
        <NavLink to="/"  className=
        {({isActive}) => isActive ? "text-orange-600 font-bold" : "text-white  hover:underline"
        }  >Home</NavLink>
        <NavLink to="/about" className=
        {({isActive}) => isActive ? "text-orange-600 font-bold" : "text-white  hover:underline"
        }  >About</NavLink>
        <NavLink to="/contact"  className=
        {({isActive}) => isActive ? "text-orange-600 font-bold" : "text-white  hover:underline"
        }  >Contact</NavLink>

        <NavLink to="/project"  className=
        {({isActive}) => isActive ? "text-orange-600 font-bold" : "text-white  hover:underline"
        }  >Projects</NavLink>
        <NavLink to="/Service"  className=
        {({isActive}) => isActive ? "text-orange-600 font-bold" : "text-white  hover:underline"
        }  >Service</NavLink>
      </div>

      {/* Hamburger Icon */}
      <div className="sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} className="text-orange-600 " /> : <FaBars 
          className="text-white" size={24} />}
        </button>
      </div>

      {/* Mobile Menu overlay */}
      <div
        className={`
          mobile fixed top-0 right-0 h-screen w-52 bg-zinc-800 z-50 flex flex-col  items-start p-6 gap-4
          transform transition-transform duration-500 ease-in-out 
          ${isOpen ? "translate-x-0 shadow transition-opacity duration-500 ease-in-out  opacity-100" : "translate-x-full"}
        `}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4  right-4 text-white"
        >
          <FaTimes size={24} />
        </button>

        {/* Links */}
                
                <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className={({isActive}) =>
            isActive ? "text-orange-600 font-bold w-full pt-20  p-2 rounded" : "text-white w-full p-2 rounded hover:bg-gray-800"
          }
        >
          Home
        </NavLink> 
         <NavLink
          to="/about"
          onClick={() => setIsOpen(false)}
          className={({isActive}) =>
            isActive ? "text-orange-600 font-bold w-full p-2 rounded" : "text-white w-full p-2 rounded hover:bg-gray-800"
          }
        >
          About
        </NavLink>

         <NavLink
          to="/contact"
          onClick={() => setIsOpen(false)}
          className={({isActive}) =>
            isActive ? "text-orange-600 font-bold w-full p-2 rounded" : "text-white w-full p-2 rounded hover:bg-gray-800"
          }
        >
          Contact
        </NavLink>
         <NavLink
          to="/project"
          onClick={() => setIsOpen(false)}
          className={({isActive}) =>
            isActive ? "text-orange-600 font-bold w-full p-2 rounded" : "text-white w-full p-2 rounded hover:bg-gray-800"
          }
        >
          Projects
        </NavLink>
         <NavLink
          to="/service"
          onClick={() => setIsOpen(false)}
          className={({isActive}) =>
            isActive ? "text-orange-600 font-bold w-full p-2 rounded" : "text-white w-full p-2 rounded hover:bg-gray-800"
          }
        >
          Service
        </NavLink>
       
      </div>
    </nav>
  );
}

export default Navbar;
