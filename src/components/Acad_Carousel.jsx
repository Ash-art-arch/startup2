import React, { useState } from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import data from "../details/details" 
import 'swiper/css'
import 'swiper/css/bundle'
import {Navigation,FreeMode,Autoplay} from 'swiper/modules'
import SwiperButton from './SwiperButton'
const Acad_Carousel = () => {
  console.log(data)
  const [currentIndex, setCurrentIndex] = useState(-1);
const swiper = useSwiper()
  const handleSlideChange=()=>{
    setCurrentIndex((currentIndex + 1)%data.length);
    console.log(currentIndex)
  }

  const calculateSlideSize = (index) => {
   
    let height = "85%"; 

    
    if (index === currentIndex || index === (currentIndex + 1)%data.length) {
      height = "100%"; 
    }

    return { height: height };
  };
  return (
    <div className=' carousel m-4 absolute left-[-25px] overflow-hidden items-center w-full h-[60%] flex gap-6'>
      <Swiper
      modules={[Navigation,FreeMode,Autoplay]}
    

      spaceBetween={15}
      slidesPerView={4}
      autoFocus={true}
      freeMode={true}
      loop={true}
      className='max-w-[100%] h-[100%] p-6 mySwipper'
      onSlideChange={handleSlideChange}
      onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((d,index)=>{
          return(<SwiperSlide key={index} className='items-center flex '>
              
            <div className='w-[90%] h-[100%] relative group  bg-white rounded-lg shadow-lg cursor-pointer transition-all' style={calculateSlideSize(index)}>
              <div className='absolute inset-0 bg-cover  bg-no-repeat bg-center rounded-lg  ' style={{backgroundImage:`url(${d.url})`,}}></div>
              <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-50 rounded-lg'/>

            </div>
          </SwiperSlide >
          )
        })}
        <SwiperButton color={"#F6B40A"}/>
      </Swiper>
     
    </div>
  )
}

export default Acad_Carousel