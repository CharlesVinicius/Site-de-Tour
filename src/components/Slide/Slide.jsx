import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Slide.css";
import home from "../../images/home-bg-1.jpg"
import home1 from "../../images/home-bg-2.jpg"
import home2 from "../../images/home-bg-3.jpg"

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

const Slide = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation, Autoplay, Pagination]}   autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true} className="mySwiper">
        <SwiperSlide><img src={home} alt=""/>
        
        <div className="content">
              <h2>Nunca pare de</h2>
              <h1>EXPLORAR</h1>
              <span>é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI</span>
              <button>Vamos lá</button>
        </div>

        
        
        </SwiperSlide>
        <SwiperSlide ><img src={home1} alt=""/>
        
        <div className="content1">
              <h2>Faça um Tour</h2>
              <h1>INCRÍVEL</h1>
              <span>é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI</span>
              <button>Vamos lá</button>
        </div>

        </SwiperSlide>
        <SwiperSlide><img src={home2} alt=""/>
        
        <div className="content">
              <h2>Explore o</h2>
              <h1>MUNDO</h1>
              <span>é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI</span>
              <button>Vamos lá</button>
        </div>
        
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slide