import React,{useState} from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/bundle'

import {Navigation,FreeMode,Autoplay,EffectCoverflow} from 'swiper/modules'
import testimonials from '../details/tesdtimonials'
import SwiperButton from './SwiperButton'
import Testimonial_Button from './Testimonial_Button'
const Test_Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(-1);
    const swiper = useSwiper()
      const handleSlideChange=()=>{
        setCurrentIndex((currentIndex + 1)%testimonials.length);
        console.log(currentIndex)
      }
      const calculateSlideSize = (index) => {
   
        let height = "80%"; 
    
        
        if (index === currentIndex) {
          height = "90%"; 
        }
    
        return { height: height };
      };
  return (
    <div className='testimomial-carousel w-full mt-[4rem] relative right-[-100%]  h-[70%]'>

    <Swiper

      modules={[EffectCoverflow,Navigation,FreeMode,Autoplay]}
    
    
      spaceBetween={30}
      slidesPerView={3}
      autoFocus={true}
      freeMode={true}
      loop={true}
      className='max-w-[90%] h-[100%] p-6 mySwipper'
    onSlideChange={handleSlideChange}
      onSwiper={(swiper) => console.log(swiper)}
    >
     {
        testimonials.map((d,index)=>{
            return(
                <SwiperSlide className='items-center flex' key={index}>
            
                <div className='relative w-[100%] h-[80%] bg-slate-300 rounded-lg shadow-lg transition-all'style={calculateSlideSize(index)}>
                    <div className='bg-slate-700 w-20 h-20 rounded-full absolute bottom-3 right-3 bg-cover bg-center' style={{backgroundImage:`url(${d.img})`}}/>
                </div>
                </SwiperSlide>
            )
        })
     }
    <Testimonial_Button/>
    </Swiper>

      
    </div>
  )
}

export default Test_Carousel