import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "../Shop/Shop.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import product from "../../images/product-1.jpg"
import product2 from "../../images/product-2.jpg"
import product3 from "../../images/product-3.jpg"
import product4 from "../../images/product-4.jpg"
import product5 from "../../images/product-5.jpg"
import product6 from "../../images/product-6.jpg"


// import required modules
import { Pagination, Navigation } from "swiper";

const Shop = () =>{
    return(
        
    <>

        <section className="shop" id="produtos">
        <h1>Produtos</h1>

        <div className="shopContainer">


      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        grabCursor={true}
        loop={true}
        
       
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
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide>

            <div className="contentShop">
                <img src={product} alt="" />
                <h3>Survival</h3>
                <h5>R$20,00</h5> 
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="contentShop">
                <img src={product2} alt="" />
                <h3>Survival</h3>
                <h5>R$20,00</h5> 
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="contentShop">
                <img src={product3} alt="" />
                <h3>Survival</h3>
                <h5>R$20,00</h5> 
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="contentShop">
                <img src={product4} alt="" />
                <h3>Survival</h3>
                <h5>R$20,00</h5> 
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="contentShop">
                <img src={product5} alt="" />
                <h3>Survival</h3>
                <h5>R$20,00</h5> 
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="contentShop">
                <img src={product6} alt="" />
                <h3>Survival</h3>
                <h5>R$20,00</h5> 
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
        </div>

        </section>
    </>
              
    )
}

export default Shop