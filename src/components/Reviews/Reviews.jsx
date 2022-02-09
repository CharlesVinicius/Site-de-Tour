import React from "react";
import "./Reviews.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import picture1 from "../../images/pic-1.png";
import picture2 from "../../images/pic-2.png";
import picture3 from "../../images/pic-3.png";
import picture4 from "../../images/pic-4.png";
import picture5 from "../../images/pic-5.png";
import picture6 from "../../images/pic-6.png";

const Reviews = () =>{
    return(


        <section className="reviews" id="reviews">
            <h1>Feedback de nossos clientes</h1>
        <>

        <div className="review">

            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                grabCursor={true}
                loop={true}
                autoplay={{
                    delay: 3500,
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
                
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >

            <SwiperSlide>

                <div className="client">
                    <img src={picture1} alt="" />
                    <h3>John</h3>
                    <h4>UX Designer</h4>
                    <div className="background">
                        <p>é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, </p>
                    </div>
                </div>

                </SwiperSlide>
                <SwiperSlide>
                <div className="client">
                    <img src={picture2} alt="" />
                    <h3>Julia</h3>
                    <h4>UX Writter</h4>
                    <div className="background">
                        <p>é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, </p>
                    </div>
                </div>

                </SwiperSlide>
                <SwiperSlide>
                
                <div className="client">
                    <img src={picture3} alt="" />
                    <h3>Walter</h3>
                    <h4>Atleta e CTO at MOV</h4>
                    <div className="background">
                        <p>é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, </p>
                    </div>
                </div>

                </SwiperSlide>
                <SwiperSlide> 

                <div className="client">
                    <img src={picture4} alt="" />
                    <h3>Mariana Jake</h3>
                    <h4>Publicitária</h4>
                    <div className="background">
                        <p>é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, </p>
                    </div>
                </div>
                
                </SwiperSlide>
                <SwiperSlide>
                <div className="client">
                    <img src={picture5} alt="" />
                    <h3>Kevin Heltz</h3>
                    <h4>Jornalista</h4>
                    <div className="background">
                        <p>é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, </p>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="client">
                    <img src={picture6} alt="" />
                    <h3>Tatianne Hellen</h3>
                    <h4>Analista de Dados</h4>
                         <div className="background">
                            <p>é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, </p>
                        </div>
                </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
    </>


            
    </section>
    )
}

export default Reviews