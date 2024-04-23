import React from 'react'
import violin from "../assets/violin.svg"
import kick from "../assets/kick.svg"
import basketball from "../assets/basketball.svg"
import soccer from "../assets/soccer.svg"
import taekwondo from "../assets/teakwondo.svg"
const Hero_Image = () => {
  return (
    <div className='flex  overflow-hidden  absolute top-[50%] gap-10 left-[2%] h-[16rem]  w-screen md:scale-[0.9]'>
    <img src={taekwondo} alt=""className='taekwondo relative -auto left-[-100%] opacity-0' />
    <img src={violin} alt=""className='violin relative md:left-auto top-[-100%] opacity-0' />
    <img src={soccer} alt="" className='soccer relative md:left-auto  scale-0 opacity-0'/>
    <img src={kick} alt="" className='kick relative md:left-auto bottom-[-100%] opacity-0'/>
    <img src={basketball} alt=""className='basketball md:left-auto relative right-[-100%] opacity-0' />
  </div>
  )
}

export default Hero_Image