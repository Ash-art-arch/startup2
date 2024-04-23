import React from 'react'
import logo from "../assets/link.svg"
const Footer = () => {
  return (
    <div className='footer bottom-0 relative h-[10vh] w-full flex justify-between items-center px-6 py-[4rem]'>
        <div>
            <img src={logo} alt="" />
        </div>
        <div className='w-[70%] flex justify-between items-center pr-10 font-bold text-[16px]'>
            <a href="">Cookie Policy</a>
            <a href="">About Us</a>
            <a href="">Contact Us</a>
            <a href="">Terms & Conditions</a>
            <a href="">Privacy Policy</a>
        </div>
    </div>
  )
}

export default Footer