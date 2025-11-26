import {FaLaptop} from "react-icons/fa"
import {FaMobileScreenButton} from "react-icons/fa6"
import {MdDesignServices} from "react-icons/md"
import {FaFolderOpen} from "react-icons/fa"
import './index.css'
 function Service(){
    return(
    <div className="px-5 mb-5 text-white text-base bg-(-bg--main) flex flex-col gap-4">
    
        <div className="mb-10 lg:mx-8">
      <h2 className="text-(--head) text-2xl  relative inline-block  font-bold ">Services </h2>
        <span className="after:block  after:content-['']
                after:w-20  after:h-0.5 after:bg-(--text-main) text-center after:mt-1"></span>
                <span className="after:block after:content-['']
                after:w-12  after:h-0.5 after:bg-(--text-main) after:mt-1"></span>
                <span className="after:block  after:content-['']
                after:w-6 after:h-0.5  after:bg-(--text-main) after:mt-1"></span>
               
    </div>
    <div className="flex flex-col gap-5 md:grid md:grid-cols-2 lg:px-8 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-2">
        <div className=' bg-(--background) shadow-[2px_5px_20px_var(--card-bg)] flex transform transition duration-300 ease-in-out rounded flex-col items-center 
        justify-center hover:scale-90 p-5'>
        <div className="hover:bg-(--text-main) hover:rounded-full p-3 mb-4 transition-all duration-300">
        <FaLaptop className="text-(--text-main) text-4xl hover:text-(--head)"></FaLaptop>
        </div>
            
            <p className='text-lg pb-1 font-bold text-(--head)'>Web Design</p>
            <span className='text-(--gray) text-base text-center'>I create clean and mordern website layouts that makes your ideas come to life.
            My designs focus on borth aesthetics and usability to give users a seamless expereince
            </span>
        </div>
        <div className='bg-(--background) shadow-[2px_8px_20px_var(--card-bg)] hover:scale-90 rounded transform transition duration-300 ease-in-out flex flex-col items-center 
        justify-center p-5'>
        <div className="hover:bg-(--text-main) hover:rounded-full p-3 mb-4 transition-all duration-300">
        <FaMobileScreenButton className="text-(--text-main) hover:text-(--head) text-4xl" />
        </div>
            
            <p className='text-lg pb-1 font-bold text-(--head)'>Responsive Design</p>
            <span className='text-(--gray) text-base text-center'>I ensure your website looks perfect on all devices, from mobile phones to large desktop
            screens, so every visitor has a smooth experince</span>
        </div>
        <div className='bg-(--background) shadow-[2px_8px_20px_var(--card-bg)] rounded transform transition duration-300 ease-in-out hover:scale-90 flex flex-col items-center 
        justify-center p-5'>
        <div className="hover:bg-(--text-main) hover:rounded-full p-3 mb-4 transition-all duration-300">
        <FaFolderOpen className="text-(--text-main)
         hover:text-(--head) text-4xl " ></FaFolderOpen>
        </div>
        
            <span className='text-lg pb-1 font-bold text-(--head)' >personal portfolio website</span>
            <span className='text-(--gray) text-base text-center' >I build portfolio website that highlight your work and skills,
            making it easy for others to see your talent and connect with you</span>
        </div>
        <div className='bg-(--background) shadow-[2px_8px_20px_var(--card-bg)] hover:scale-90 rounded flex transform transition duration-300 ease-in-out flex-col items-center 
        justify-center p-5 '>
        <div className="hover:bg-(--text-main) hover:rounded-full p-3 mb-4 transition-all duration-300">
        <MdDesignServices className="text-(--text-main)
         hover:text-(--head) text-4xl "></MdDesignServices>
        </div>
        
            <span className='text-lg pb-1 font-bold text-(--head)'>UI/UX Consultation</span>
            <span className='text-(--gray) text-base text-center'>I provide advice on improving website usability, navigtion, and overrall
            user experience to help your site perform better.</span>
        </div>
        </div>
    </div>
    )
}
export default Service