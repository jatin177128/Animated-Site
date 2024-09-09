
import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'
import Cards from './Components/Cards'
import Eye2 from './Components/Eye2'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
function App() {
  
  const locomotiveScroll = new LocomotiveScroll();

  return (
  <div data-theme ="retro" className='w-full min-h-screen'>
     <Navbar/>
     <LandingPage/>
     <Marquee/>
     <About/>
     <Eyes/>
     <Featured/>
     <Cards/>
     <Eye2/>
     <Footer/>  
    </div>
    
     
  )
}

export default App