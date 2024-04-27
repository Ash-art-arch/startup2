import { useState } from 'react'

import './App.css'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import yellow from "./assets/yellow.svg"
import blue from "./assets/blue.svg"
import Navbar from './components/Navbar'
import Hero_Image from './components/Hero_Image'
import Acad_Carousel from './components/Acad_Carousel'
import { ScrollTrigger } from 'gsap/all'
import Test_Carousel from './components/Test_Carousel'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
function App() {

  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=>{
    gsap.to(".soccer",{
      scale:1,
      duration:2,
      opacity:1,
      ease:"sine.in",
      delay:4
  
    })
    gsap.to(".basketball",{
      right:0,
      duration:3,
      opacity:1,
      delay:5,
      ease:"sine.in"
    })
    gsap.to(".taekwondo",{
      left:0,
      duration:3,
      opacity:1,
      delay:5,
      ease:"sine.in"
    })
    gsap.to(".violin",{
      top:0,
      duration:2,
      opacity:1,
      delay:5.2,
      ease:"sine.in"
      })
      gsap.to(".kick",{
        bottom:0,
        duration:2,
        opacity:1,
        delay:5.2,
        ease:"sine.in"
      })
      gsap.to(".blob",{
        bottom:"-20%",
        right:0,
        duration:2,
        delay:6

      })
      gsap.to(".blue",{
        top:"-5%",
        left:0,
        duration:2,
        delay:6
      })
      gsap.from(".nav",{
        top:"-100%",
        duration:7,
      })
      gsap.to(".heading",{
        opacity:1,
        duration:4,
        ease:"sine.in",
        stagger:1,
        delay:5.1
      })
      gsap.to(".button",{
        bottom:90,
        duration:4,
        delay:4,
        ease:"sine.in"
      })
      gsap.from('.carousel',{
        left:-1000,
        duration:2,
        opacity:0,
     
        scrollTrigger:{
          trigger:'.academy',
          start: 'top center',

        }
      })
      gsap.from('.academy-text',{
        opacity:0,
        scale:0,
        duration:2,
        scrollTrigger:{
          trigger:'.academy',
          start:'top center'
        }
      })
      gsap.to('.testimomialtext',{
        opacity:1,
        duration:2,
        scrollTrigger:{
          trigger:'.testimonials',
          start:'top center'
        }
      })
      gsap.to('.testimomial-carousel',{
        right:0,
        duration:2,
        scrollTrigger:{
          trigger:'.testimonials',
          start:'top center'
        }
      })
      gsap.from('.news',{
        opacity:0,
        duration:2,
        scrollTrigger:{
          trigger:'.newsletter',
          start:'top center'
        }
      })
      gsap.to(".preloader",{
        top:-1000,
        duration:2,
        delay:4,
      })
  },[])

  return (
    <div className='w-[100vw] min-h-screen  overflow-x-hidden relative' >
      <Navbar/>
      <Preloader/>
      <div className='relative w-full h-[100vh] overflow-hidden'>
      <img src={blue} alt=""  className='absolute blue top-[-100%] left-[-100%]' />
      <div className='opacity-0 heading flex flex-col items-center relative top-[7rem] h-full  w-screen'>
      <h1 className='mb-4 text-[60px] font-[300] leading-[80px] font-[Manrope] w-[34rem] text-center'>Find the Best  Activity for your Child!             </h1>
      <button className='bg-[#3AB7FC]  rounded-[50%] w-14 h-14 flex text-center items-center text-3xl justify-center text-white shadow-lg '> 
      > 
      </button>
      </div>
      <Hero_Image/>
      <div className=' button relative text-[16px] font-[Manrope] font-[700] bottom-[-100%]  flex items-center gap-14 justify-center w-screen '> 
        <button className='bg-[#F6B40A] w-[15rem] h-[3rem] rounded-full shadow-xl  px-7 text-white '>For Academies</button>
        <button className='bg-[#F6B40A] w-[15rem] h-[3rem] rounded-full shadow-xl px-7 text-white'>SpArts in your home</button>
      </div>
    <img src={yellow} className='absolute blob bottom-[-100%] right-[-100%]' />
      </div>
      <div className='academy relative bg-[#3AB7FC] h-screen w-full overflow-hidde p-10 py-[3rem]'>
        <h1 className='text-white academy-text font-[Manrope] text-[66px] w-[30rem]'>Explore Our Top Academies</h1>
        <Acad_Carousel/>
      </div>
      <div className='testimonials relative bg-[#ddd] h-screen p-[4rem] py-[5rem]'>
        <h1 className='testimomialtext opacity-0 text-right w-full text-[60px] font-[Manrope] font-[700] leading-[60px] text-[#F6B40A]'>Happy Kids,<br></br> Satisfied Parents!</h1>
        <Test_Carousel/>
      </div>
      <div className='newsletter font-[Manrope] bg-[#F6B40A] h-[60vh] w-full flex text-white justify-center items-center'>
          
            <div
            className='news relative flex w-[40%] flex-col items-center justify-center'><h1 className='font-[Manrope] text-[60px] font-[700] leading-[60px]'>Stay Updated</h1>
              <p className='mt-4 text-[24px] font-bold'>Get the latest updates on academies near you!</p>

              <div className='mt-[4rem] flex justify-between items-center w-[90%]'>
                <input type="text" className='w-[60%] bg-[#D9D9D9] text-black p-5 rounded-xl outline-none shadow-lg' placeholder='Email'/>
                <button className='w-[30%] bg-[#3AB7FC] p-4 rounded-xl shadow-lg font-bold text-[20px]'>Subscribe</button>
              </div>
           
          </div>
      </div>
      <Footer/>
    </div>

  )
}

export default App
