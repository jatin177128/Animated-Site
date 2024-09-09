import React from 'react'
import Eyes from './Eyes';
import { useRef,useState, useEffect } from 'react';
const Eye2 = () => {
    const [rotate,setRotate] = useState(0);
    useEffect(()=>{
     window.addEventListener("mousemove",(e)=>{
       let mouseX = e.clientX;
       let mouseY = e.clientY;
 
       let deltaX = mouseX - window.innerWidth/2;
       let deltaY = mouseY - window.innerHeight/2;
 
       let angle = Math.atan2(deltaY, deltaX) *(180/Math.PI);
       setRotate(angle-180);
     })
    })
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.1' className=' relative w-full bg-[#CDEA68] p-[12vw] '>
        {["REAdy", "to start" ,"the project?"].map((item,index)=>(
            <h1 className='uppercase text-black flex justify-center  text-[11vw] leading-none  tracking-tighter font-["Bebas Neue"] font-medium '>{item}</h1>
        ))}
        <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
          <div className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100'>
            <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900 '>
              <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10'>
                <div className='w-10 h-10 rounded-full bg-zinc-100 '></div>
              </div>
            </div>
          </div>
          <div className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100'>
          <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900 '>
          <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10'>
                <div className='w-10 h-10 rounded-full bg-zinc-100 '></div>
              </div>
            </div>
          </div>
        </div>
        <button className='ml-[30vw] mt-[4vw] uppercase flex gap-10 justify-items-center items-center px-[2vw] py-[1vw] bg-zinc-900 rounded-full text-white'>
                START THE PROJECT
                <div className='w-2 h-2 rounded-full bg-zinc-100'></div>
        </button>

    </div>
  )
}

export default Eye2