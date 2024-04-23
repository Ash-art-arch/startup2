// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo  from "../assets/link.svg"
const Navbar = () => {
  return (
    <div className='nav bg-[#F6B40AB2] flex justify-between items-center fixed top-0 w-full h-20 p-2 px-10 z-10'>
      <div >
        <img src={logo} alt="" />
      </div>
      <div className='font-[Manrope] font-bold text-white text-xl leading-5 flex justify-between w-[33%]'>
        <a href="" >Our Customers</a>
        <a href="" >SpArts Advantage</a>
        <a href="" >Contact Us</a>
      </div>
    </div>
  )
}

export default Navbar