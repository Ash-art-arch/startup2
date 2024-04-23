import React from 'react'
import { useSwiper } from 'swiper/react'
const SwiperButton = ({color}) => {
    const swiper = useSwiper()
  return (
    <div className='z-[999999] absolute right-0 top-[50%]'>
        <button className={` shadow-sm bg-[${color}] text-white w-[3rem] h-[3rem] text-2xl rounded-full flex items-center justify-center`} onClick={()=>{swiper.slideNext()}}>></button>
    </div>
  )
}

export default SwiperButton