import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen flex items-center px-[4vw] gap-5  '>
        <div className='cardcontainer h-[50vh] w-1/2'>
            <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center '>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='left-10 bottom-10 text-lg text-[#cde981] border-[#cde981] border-2 absolute px-5 py-2 rounded-full'>&copy;2019-2022</button>
            </div>  
        </div>
        <div className='cardcontainer h-[50vh] w-1/2 flex gap-5'>
            <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212121]'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='left-10 bottom-10 text-lg text-zinc-200 border-zinc-200 border-2 absolute px-5 py-2 rounded-full'>Rating 5.0 on Clutch</button>
            </div>
            <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212121]'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='left-10 bottom-10 text-lg text-zinc-200 border-zinc-200 border-2 absolute px-5 py-2 rounded-full'>Business Bootcamp Alumni</button>
            </div>
        </div>

    </div>
  )
}

export default Cards