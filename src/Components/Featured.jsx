import { motion, useAnimate, useAnimation } from 'framer-motion'
import React from 'react'

const Featured = () => {
      const cards = [useAnimation(),useAnimation(),useAnimation(),useAnimation()];
        const handleHover = (index)=>{
            cards[index].start({y: "0"});
        }
        const handleHoverEnd = (index)=>{
          cards[index].start({y: "100%"});
      }
  return (
    <div className='w-full '>
      <div className=' py-[6vw] w-full px-[4vw] border-b-[2px] pb-[3vw] border-zinc-400'>
        <h1 className='text-[3vw] font-["Neue_Montreal"] tracking-tight '>Featured projects</h1>
      </div>
      <div className=' w-1/2 flex gap-[46vw] pt-[4vw] px-[4vw] pb-[1vw] tracking-tight font-["Neue_Montreal"]'>
          <div className='rounded-full bg-zinc-900 w-[0.9vw] h-[0.9vw] flex items-center'>
            <h1 className='p-[2vw] text-[1.1vw] '>FYDE</h1>
          </div>
          <div className='rounded-full bg-zinc-900 w-[0.9vw] h-[0.9vw] flex items-center '>
            <h1 className='p-[2vw] text-[1.1vw] '>VISE</h1>
          </div>
      </div>
      <div className='px-[3vw]'>
      <div className="cards w-full flex gap-10">
        <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className='cardcontainer relative w-1/2 h-[80vh] ' >
            <h1 className='absolute flex overflow-hidden left-[47vw] -translate-x-1/2 top-1/2 -translate-y-1/2 font-["Bebas Neue"] font-semibold text-[#cde981] z-[9] leading-none tracking-[-0.5vw] text-[6vw]'>
             {"FYDE".split("").map((item,index)=>(
              <motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease: [0.22 , 1 , 0.36 , 1], delay: index*0.05}} className='inline-block'>{item}</motion.span>
             ))} 
              </h1>
          <div className='card w-full h-full rounded-xl bg-cover bg-[url("https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png")]'></div>
        </motion.div>
        <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className='cardcontainer relative w-1/2 h-[80vh] ' >
            <h1 className='absolute  flex overflow-hidden right-[47vw] translate-x-1/2 top-1/2 -translate-y-1/2 font-["Bebas Neue"] font-semibold text-[#cde981] z-[9] leading-none tracking-[-0.5vw] text-[6vw]'>
             {"VISE".split("").map((item,index)=>(
              <motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease: [0.22 , 1 , 0.36 , 1], delay: index*0.05}} className='inline-block'>{item}</motion.span>
             ))}</h1>
          <div className='card w-full h-full rounded-xl bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg")]'></div>
        </motion.div>
      </div>
      </div>
      <div className='flex gap-[46vw] pt-[4vw] px-[4vw] pb-[1vw] tracking-tight font-["Neue_Montreal"]'>
          <div className='rounded-full bg-zinc-900 w-[0.9vw] h-[0.9vw] flex items-center'>
            <h1 className='p-[2vw] text-[1.1vw] '>TRAWA</h1>
          </div>
          <div className='rounded-full bg-zinc-900 w-[0.9vw] h-[0.9vw] flex items-center'>
            <h1 className='p-[2vw] text-[1.1vw]'>PREMIUM</h1>
          </div>
      </div>
      <div className='px-[3vw]'>
      <div className="cards w-full flex gap-10">
      <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className='cardcontainer relative w-1/2 h-[80vh] ' >
            <h1 className='absolute flex overflow-hidden left-[47vw] -translate-x-1/2 top-1/2 -translate-y-1/2 font-["Bebas Neue"] font-semibold text-[#cde981] z-[9] leading-none tracking-[-0.5vw] text-[6vw]'>
             {"TRAWA".split("").map((item,index)=>(
              <motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease: [0.22 , 1 , 0.36 , 1], delay: index*0.05}} className='inline-block'>{item}</motion.span>
             ))} 
              </h1>
          <div className='card w-full h-full rounded-xl bg-cover bg-[url("https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg")]'></div>
        </motion.div>
        <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className='cardcontainer relative w-1/2 h-[80vh] ' >
            <h1 className='absolute  flex overflow-hidden right-[47vw] translate-x-1/2 top-1/2 -translate-y-1/2 font-["Bebas Neue"] font-semibold text-[#cde981] z-[9] leading-none tracking-[-0.5vw] text-[6vw]'>
             {"PREMIUM".split("").map((item,index)=>(
              <motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease: [0.22 , 1 , 0.36 , 1], delay: index*0.05}} className='inline-block'>{item}</motion.span>
             ))}</h1>
          <div className='card w-full h-full rounded-xl bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png")]'></div>
        </motion.div>
      </div>
      </div>
      <div className='pt-[3vw] px-[3vw] flex gap-5'>
      <button className='text-lg   border-2 border-zinc-900 px-5 py-2 rounded-full'>BRAND IDENTITY</button>
      <button className='text-lg   border-2 border-zinc-900 px-5 py-2 rounded-full'>DESIGN RESEARCH</button>
      <button className='text-lg   border-2 border-zinc-900 px-5 py-2 rounded-full'>INVESTOR DECK</button>
      <button className='ml-[16vw] text-lg  border-zinc-900 border-2  px-5 py-2 rounded-full'>BRANDED TEMPLATE</button>
      </div>
      
      <div className=' py-[6vw] w-full px-[4vw] border-b-[2px] pb-[1vw] border-zinc-300'></div>
      
    </div>
  )
}

export default Featured