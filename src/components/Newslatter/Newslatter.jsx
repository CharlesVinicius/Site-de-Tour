import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Newslatter.css"
import { Pagination, Navigation, Autoplay } from "swiper";
import clientlogo1 from "../../images/client-logo-1.png";
import clientlogo2 from "../../images/client-logo-2.png";
import clientlogo3 from "../../images/client-logo-3.png";
import clientlogo4 from "../../images/client-logo-4.png";


const Newslatter = () =>{
    return(
            <section className="newslatter">

                <div className="news"> 
                    <h1>Assine a nossa Newslatter</h1>
                    <p>é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI</p>
                    <input type="e-mail" placeholder="E-mail" />
                    <button>Assinar</button>
                </div>


                <>

                    <div className="client_container">

                        <Swiper
                            slidesPerView={1}
                            spaceBetween={20}
                            grabCursor={true}
                            loop={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            
                        
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },

                                640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                                },
                                768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                                },
                                1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                                },
                            }}
                            
                            
                            modules={[Pagination, Navigation, Autoplay]}
                            className="mySwiper"
                        >

                        <SwiperSlide>

                            <div className="client_logo">
                                <img src={clientlogo1} alt="" />
                            </div>

                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="client_logo">
                                <img src={clientlogo2} alt="" />
                            </div>

                            </SwiperSlide>
                            <SwiperSlide>
                            
                            <div className="client_logo">
                                <img src={clientlogo3} alt="" />
                            </div>

                            </SwiperSlide>
                            <SwiperSlide> 

                            <div className="client_logo">
                                <img src={clientlogo4} alt="" />
                            </div>
                            
                            </SwiperSlide>
                           
                        </Swiper>
                    </div>
                </>
            </section>
    )
}

export default Newslatter