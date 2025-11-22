 function About(){
    return(
        <div className=" mb-10 text-white text-base px-3 md:px-10 lg:px-10  ">
        
        <div className="mb-8">
            <div className="mb-10 ">
      <h2 className="text-white text-2xl relative inline-block  font-bold ">About Me </h2>
        <span className="after:block  after:content-['']
                after:w-20  after:h-0.5 after:bg-orange-600 text-center after:mt-1"></span>
                <span className="after:block after:content-['']
                after:w-12  after:h-0.5 after:bg-orange-600 after:mt-1"></span>
                <span className="after:block  after:content-['']
                after:w-6 after:h-0.5  after:bg-orange-600 after:mt-1"></span>
               
    </div>
            <div className="mb-3">
            <span className="text-xl font-bold md:text-2xl lg:text-2xl">I'm ibesi benedicta</span><span className="text-orange-500 font-bold"> a Frontend Developer</span>
            </div>
            
            <p className="text-base text-gray-200 md:text-xl lg:text-xl sm:text-xl">I'm dedicated to creating clean, mordern,
            and engaging digital experience. I love turning ideas into visually appealing designs that connect
            with user and provide intuitive experience. I belive that great design is not just about looks
            but about crafting a seamless interaction that makes people enjoy using the web.</p>
            
        </div>

        <div className="md:flex md:gap-20 md:flex-row md:justify-between md:items-center md:px-5
        lg:flex lg:gap-20 lg:flex-row lg:justify-between lg:items-center lg:px-5">
        <div className=" md:w-full lg:w-full">
        <div className="  py-5  grid grid-cols-[1fr_1fr] gap-5 text-center md:text-start  lg:text-start">
            
            
            <div className="flex flex-col" >
                <span className="font-bold text-white">Age:</span>
                <span className="text-orange-600">22</span>
            </div>
            <div className="flex flex-col">
                <span className="font-bold text-white">LinkedIn:</span>
                <a
                    href="https://ng.linkedin.com/in/benny-ibesi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 sm:flex sm:flex-wrap hover:underline"
                >
                    https://ng.linkedin.com/in/benny-ibesi
                </a>
                </div>

            <div className="flex flex-col">
                <span className="font-bold text-white">Email:</span>
                <span className="text-orange-600">benedicta45@gmail.com</span>
            </div>
            <div className="flex flex-col sm:flex sm:flex-wrap">
            <span className="font-bold text-white">GitHub</span>
            <a
                href="https://github.com/Bennymelda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 whitespace-normal sm:flex sm:flex-wrap hover:underline"
            >
                https://github.com/Bennymelda
            </a>
            </div>

            <div className="flex flex-col" >
                <span className="font-bold text-white">Degree:</span>
                <span className="text-orange-600">Integrated Science</span>
            </div>
            <div className="flex flex-col">
                <span className="font-bold text-white">Country:</span>
                <span className="text-orange-600">Nigeria</span>
            </div>
            <div className="flex flex-col">
                <span className="font-bold text-white">City:</span>
                <span className="text-orange-600">Anambra</span>
            </div>
            <div className="flex flex-col">
                <span className="font-bold text-white">Freelance:</span>
                <span className="text-orange-600">Available</span>
            </div>
        </div>
        <div className="flex justify-center items-center gap-5 md:justify-start lg:justify-start">
            <button className="bg-orange-600 text-white font-bold px-8 py-2 mt-10 rounded-3xl
                     hover:bg-white cursor-pointer outline-0  hover:text-orange-600 transition-all 
                     duration-300 ease-in-out hover:scale-105">
                     <a
                href="/Ibesi benedicta CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className=" whitespace-normal sm:flex sm:flex-wrap "
            >
                Download Cv
            </a>
                     </button>
            <button className="bg-orange-600 text-white font-bold px-8 py-2 mt-10 rounded-3xl
                     hover:bg-white cursor-pointer outline-0  hover:text-orange-600 transition-all 
                     duration-300 ease-in-out hover:scale-105">Hire Me</button>
        </div>
        </div>
                <div className="flex flex-col gap-4 mt-10 md:w-full lg:w-full">
            <div className="flex flex-col gap-2">
            <span className="font-bold text-orange-500">Html</span>
               <div className="bg-zinc-800 h-2 rounded w-full relative">
            <div className="w-11/12 absolute left-0 top-0 h-full rounded bg-white"></div>
        </div>
            </div>
            <div>
            <span className="font-bold text-orange-500">Css</span>
                <div className="bg-zinc-800 h-2 rounded w-full relative">
            <div className="w-11/12 absolute left-0 top-0 h-full rounded bg-white"></div>
        </div>
            </div>
            <div>
            <span className="font-bold text-orange-500">Javascript</span> 
                <div className="bg-zinc-800 h-2 rounded w-full relative">
            <div className="w-3/4 absolute left-0 top-0 h-full rounded bg-white"></div> 
        </div>
            </div>
            <div>
            <span className="font-bold text-orange-500">Tailwind</span>
                 <div className="bg-zinc-800 h-2 rounded w-full relative">
            <div className="w-11/12 absolute left-0 top-0 h-full rounded bg-white"></div>
        </div>
            </div>
            <div>
            <span className="font-bold text-orange-500 ">React</span>
               <div className="bg-zinc-800 h-2 rounded w-full relative">
            <div className="w-2/3 absolute left-0 top-0 h-full rounded bg-white"></div>
        </div>
            </div>
            <div>
            <span className="font-bold text-orange-500">Git</span>
                 <div className="bg-zinc-800 h-2 rounded w-full relative">
            <div className="w-4/5 absolute left-0 top-0 h-full rounded bg-white"></div>
        </div>
            </div>
            <div>
            <span className="font-bold text-orange-500" >Github</span> 
                 <div className="bg-zinc-800 h-2 rounded w-full relative">
            <div className="w-4/5 absolute left-0 top-0 h-full rounded bg-white"></div>
        </div>
            </div>
        </div>

        
            
        
        </div>
        <div className="md:flex md:gap-20 md:pt-10  md:justify-between md:items-center md:flex-row-reverse">
        <div className="md:w-full lg:w-full">
        <h2 className="font-bold text-2xl mt-10 mb-10 md:mt-0 ">Education</h2>
        
        <div  className="bg-zinc-900 rounded py-5 md:py-0 md:w-full">
        
            
             <div className="timeline text-gray-300 pl-4   w-full relative">
            
            <div className=" relative pl-5 pb-10 before:content-[''] before:w-1 
            before:absolute before:h-40 before:left-1 before:top-0 before:bg-orange-500">
         <div className=" absolute left-0 top-0 h-3 w-3 rounded-full bg-orange-600"></div>
            <div>
                <span className=" text-sm text-white">2004-2020</span>
                <p className="font-semibold  text-md">Government Girl's Secondary School Dutse</p>
                <p><span className="font-bold text-white">Qualification:</span> <span>Seconadry School Certificate</span></p>
                <p>Focused on maths, physcis, biology, chemistry and participated in clubs, projects and competition.</p>
            </div>
            </div>
        </div>

             <div className=" text-gray-300 pl-4   w-full relative">
            
            <div className=" relative pl-5 pb-10 before:content-[''] before:w-1 
            before:absolute before:h-30 before:left-1 before:top-0 before:bg-orange-500">
         <div className=" absolute left-0 top-0 h-3 w-3 rounded-full
          bg-orange-600"></div>
            <div>
            <span className="text-sm">2021-2025</span>
            <h2 className="font-bold text-xl text-white">University/Degree</h2>
                <p>University of Nigeria Nsuka</p>
                <span>Bachelor's Degree in Integrated Science</span>
            </div>
            </div>
        </div>
        </div>
        </div>
        <div>

            <h2 className="font-bold text-2xl my-5">Experience</h2>
            <div className="bg-zinc-900 pt-3 font-base rounded">
             <div className=" text-gray-300 pl-4 fontt-base  w-full relative">
            
            <div className=" relative pl-5 before:content-[''] before:w-1 
            before:absolute before:h-77  before:left-1 before:top-0 before:bg-orange-500">
         <div className=" absolute left-0 top-0 h-3 w-3 rounded-full bg-orange-600"></div>
            <div className="text-base">
                <p className="text-gray-200">2024-2025</p>
                <p className="text-xl text-white font-bold mb-2">Collaboration</p>
                <span className="block">collaborated with colleauges to build a comprehensive trackexpense Website
                as our final capstone project.</span>
                <span className="block">
                    contributed to layout design, interface development, and overrall user experince.
                </span>
                <span className="block">
                    coordinated with team members to ensure a cohesive, functional, and visually appealing final product
                </span>
            </div>
            </div>
            </div>
            <div className=" b-white pl-4  text-gray-300 w-full relative">
            
            <div className=" relative pl-5 pb-0 before:content-[''] before:w-1 
            before:absolute before:h-62 md:before:h-52 before:left-1 before:top-0 before:bg-orange-500">
                <div className=" absolute left-0 top-0 h-3 w-3 rounded-full bg-orange-600"></div>
            <div className="text-base">
            
            <h2 className="text-xl font-bold text-white pb-2 mt-10">Porfolio website _personal project</h2>
            <span>Designed and developed my personal portgolio website from scratch</span>
            <span>Built a responsive layout, navigation, and interactive features using mordern web design
            principles</span>
            <span>Experimenting with web design , React components, and interactive web pages
            </span>
            </div>
            </div>
            </div>
            <div className=" pl-4   text-white w-full font-base relative">
            
            <div className=" relative pl-5 pb-10 before:content-[''] before:w-1 
            before:absolute before:h-52 md:before:h-35 lg:before:h-35 before:left-1 before:top-0 before:bg-orange-500">
                <div className=" absolute left-0 top-0 h-3 w-3 rounded-full bg-orange-600"></div>
            <div className="text-gray-300">
                <h2 className="font-bold text-white mt-10 pb-2 text-xl">University Coursework</h2>
                <span>Completed various science based projects that involved research, data analysis, and
                problem solving</span>
                <span>Applied critical thinking to plan, execute, and present experiments and findings
                </span>
                <span>Developed teamwork and collaboration skills through group assignments and lab work</span>
            </div>
            </div>
            </div>
            </div>
        </div>
        </div>








        
        </div>
    )
}
export default About