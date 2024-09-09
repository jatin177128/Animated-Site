import React from 'react'
import {motion} from 'framer-motion'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.1' className='w-full py-[4vw] rounded-tl-3xl rounded-tr-3xl text-white bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-400  flex overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:10}} className='text-[24vw] mb-2 tracking-[-2vw] leading-[18vw] font-["Bebas Neue"] uppercase font-semibold border-cover pr-20 '>We are Ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:10}} className='text-[24vw] tracking-[-2vw] mb-2 leading-[18vw] font-["Bebas Neue"] uppercase font-semibold border-cover pr-20 '>We are Ochi</motion.h1>
            {/* <motion.h1 initial={{x:50%}} animate={{x:"-200%"}} transition={{ease: "linear", repeat: Infinity,duration:5}} className='text-[20vw] tracking-tighter mb-2 leading-none font-["Test Founders Grotesk X-Condensed"] uppercase font-semibold '> We are Ochi</motion.h1> */}
        </div>
    </div>
  )
}

export default Marquee
