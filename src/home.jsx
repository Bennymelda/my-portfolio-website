import {useNavigate} from 'react-router-dom'
import './index.css'
 function Home(){
    const navigate=useNavigate()
return(<div className=' text-white pb-5 py-5 md:py-0 px-5 flex flex-col 
md:flex-row-reverse items-center md:justify-center gap-3' >
    <div className='flex items-center gap-2 md:mb-5 flex-col sm:flex md:hidden'> 
        <h2 className='text-(--head) font-bold text-2xl'>Hello, my name is</h2>
        <span className='text-(--text-main) font-cursive mb-2'>𝓘𝓫𝓮𝓼𝓲 𝓑𝓮𝓷𝓮𝓭𝓲𝓬𝓽𝓪</span>
    </div>
    <div className=' md:flex md:w-[50] md:mx-auto md:my-0'>
        <img src="/images/prof2.png" alt="" />
    </div>

    <div className='md:w-[70%] mb-5 md:mx-auto md:my-0'>
    <div className=' items-start gap-2 hidden flex-col sm:hidden md:flex'> 
        <h2 className='text-white font-bold text-2xl'>Hello, my name is</h2>
        <span className='text-(--text-main) '>𝓘𝓫𝓮𝓼𝓲 𝓑𝓮𝓷𝓮𝓭𝓲𝓬𝓽𝓪</span>
    </div>
    <div className='mt-5'>
     <p className='text-xl text-(--head) font-bold '>i'm a <span className='text-xl text-(--text-main)'>
      𝓕𝓻𝓸𝓷𝓽𝓮𝓷𝓭 𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓻</span></p>
    <span className='text-(--gray)'>i'm a Frontend Developer dedicated to creating visually appealing and user friendly digital 
    experinces.I enjoy bringing ideas to life through clean, modern designs that engage and
    inspire users.</span>
    <button className='block cursor-pointer mt-10 bg-(--text-main) text-sm py-2 px-8 rounded-3xl'
    onClick={() => navigate("/about")}>More About Me 
    </button>
    </div>
   </div>
</div>)
}
export default Home