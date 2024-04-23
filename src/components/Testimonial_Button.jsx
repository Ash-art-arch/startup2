import React from "react";
import { useSwiper } from "swiper/react";
const Testimonial_Button = () => {
  const swiper = useSwiper()
    return (
    <div className="z-[999999] absolute right-[0px] top-[45%]">
      <button
        className={` shadow-sm bg-[#3AB7FC] text-white w-[3rem] h-[3rem] text-2xl rounded-full flex items-center justify-center`}
        onClick={() => {
          swiper.slideNext();
        }}
      >
        >
      </button>
    </div>
  );
};

export default Testimonial_Button;
