import './index.css';
import { useState } from 'react';

function Project() {
  const projects = [
    {
      title: "Recipe App",
      img: "/images/Screenshot 2025-11-16 072838.png",
      demo: "https://frontend-recipe-iwsw.onrender.com",
      code: "https://github.com/Bennymelda/frontend-recipe",
      technologies: ["React", "CSS"]
    },
    {
      title: "E-commerce Dessert",
      img: "/images/cart.png",
      demo: "https://bennymelda.github.io/e-commerce-dessert-/",
      code: "https://github.com/Bennymelda/e-commerce-dessert-",
      technologies: ["Javascript", "CSS"]
    },
    {
      title: "Earth Challenge",
      img: "/images/earth.png",
      demo: "https://bennymelda.github.io/frontend-mentor-earth-challenge/work.html",
      code: "https://github.com/Bennymelda/frontend-mentor-earth-challenge",
      technologies: ["Javascript", "CSS"]
    },
    {
      title: "Bookmark Challenge",
      img: "/images/bookmaerk.png",
      demo: "https://bennymelda.github.io/frontend-mentor-intermediate-bookmark-challenge-main/",
      code: "https://github.com/Bennymelda/frontend-mentor-intermediate-bookmark-challenge-main",
      technologies: ["Javascript", "CSS"]
    }
  ];

  // State to track which overlays are active on mobile
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleOverlay = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-(--bg-main) px-5 mb-20 lg:mx-8">
      {/* Header */}
      <div className="flex flex-col pb-5">
        <h2 className="text-(--head) font-semibold text-2xl">Projects</h2>
        <span className="relative after:block after:content-[''] after:w-20 after:h-0.5 
         after:bg-(--text-main) after:mt-1"></span>
        <span className="relative after:block after:content-[''] after:w-12 after:h-0.5
          after:bg-(--text-main) after:mt-1"></span>
        <span className="relative after:block after:content-[''] after:w-6 after:h-0.5
          after:bg-(--text-main) after:mt-1"></span>
      </div>

      <h2 className="text-2xl pb-5 font-bold">Major Projects I Have Worked On</h2>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col">
            {/* Card with hover overlay */}
            <div
              className="relative rounded-lg overflow-hidden bg-(--background) shadow-[2px_8px_25px_var(--card-bg)] group"
              onClick={() => toggleOverlay(index)} // mobile click
            >
              <img src={project.img} alt={project.title} className="w-full rounded-lg" />

              {/* Hover / Click Overlay */}
              <div
                className={`absolute inset-0 flex items-center justify-center gap-4
                  bg-black bg-opacity-50 opacity-0
                  group-hover:opacity-70
                  ${activeIndex === index ? 'opacity-70' : ''}
                  transition-opacity duration-300 rounded-lg`}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.demo, "_blank");
                  }}
                  className="bg-white text-(--text-main) font-bold px-3 py-1 rounded-lg
                    hover:bg-(--text-main) hover:text-white transition-all duration-300 ease-in-out hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.code, "_blank");
                  }}
                  className="bg-white text-(--text-main) font-bold px-3 py-1 rounded-lg
                    hover:bg-(--text-main) hover:text-white transition-all duration-300 ease-in-out hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>

            {/* Technologies */}
            <div className="mt-4 md:text-center">
              <p className="font-bold text-lg pb-2">Technologies</p>
              <div className="flex gap-2 flex-wrap md:items-center md:justify-center">
                {project.technologies.map((tech, i) => (
                  <button
                    key={i}
                    className="rounded px-3 py-0.5 bg-(--show) font-semibold 
                    shadow-[2px_4px_8px_rgba(255,255,255,0.6)] text-(--ann)"
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
