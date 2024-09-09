import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import ochii from "../assets/Screenshot from 2024-09-08 23-57-31.png"
import { motion } from 'framer-motion';
const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.3' className='w-full h-screen pt-1'>
        <div className='textstructure mt-[12vw] px-20'>
            {["WE CREATE","Eye-Opening","Presentations"].map((item,index)=>{
            return (
                <div className='masker'>
                <div className='w-fit flex '>
                    {index===1&&(<motion.div
                    initial={{width:0}}
                    animate={{width:"8vw"}}
                    transition={{ease:[0.76, 0 , 0.24 ,1], duration:1}}
                     className='mr-[1vw] w-[8vw] rounded-md h-[5vw] top-[0.65vw] relative '>
                        <img src={ochii} alt="ochii" />
                    </motion.div>)}
                <h1 className='uppercase text-[7vw] leading-[6vw] tracking-tighter font-["Bebas Neue"] font-medium'>{item}</h1>
                </div>
                </div>
            );
        })}
        </div>
        <div className='border-t-[1.5px]  border-black  mt-[10vw] flex justify-between items-center py-5 px-20'>
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
            <p className='text-md font-light tracking-tight leading-none'>{item}
            </p>
            ))}
            <div className='start flex items-center gap-2'>
                <button className="px-5 py-2 border-2 border-black rounded-full font-light text-md uppercase capatalize">Start the project</button>
                <button className='w-10 h-10  border-black  flex items-center justify-center border-2 rounded-full '>
                    <span className='rotate-[45deg]'>
                        <FaArrowUpLong/>
                    </span>
                    
                </button>
            </div>
        </div>
    </div>
  )
}

export default LandingPage