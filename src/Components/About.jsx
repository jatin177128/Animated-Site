import React from 'react'
import fimg from '../assets/pexels-hardeep-17839085.jpg'
const About = () => {
  return (
    <div className='w-full rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68]'>
      <h1 className='p-[2vw] font-["NeueMontreal"] text-[4vw] leading-[4vw] text-zinc-900 tracking-tight'>
        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='w-full flex p-[1vw] border-t-[1px] border-[#5c6e1b]'>
          <div className='w-1/2 ml-[3vw]'>
            <h1 className='text-[3vw] text-zinc-900'>Our apporach : </h1>
              <button className='uppercase flex gap-10 items-center px-[2vw] py-[1vw] mt-[1vw] bg-zinc-900 rounded-full text-white'>
                Read More
                <div className='w-2 h-2 rounded-full bg-zinc-100'></div>
              </button>
          </div>
          <div className='w-1/2'>
              <img src={fimg} alt="" className='ml-[8vw] w-[70vh] h-[100vh] rounded-3xl'/>
          </div>
        </div>
    </div>
     
  )
}

export default About