import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/swiper-bundle.css';
import { partners } from "../data";

export default function Partner() {

    return (
        <div className='partner-container'>
            <div className="title">
                <p>Our partners</p>
            </div>
            <Swiper
                spaceBetween={25}
                slidesPerView={2}
                modules={[Autoplay]}
                className='mySwiper'
                loop={true}
                speed={9000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                breakpoints={{
                    600: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    900: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                    1200: {
                        slidesPerView: 6,
                        spaceBetween: 70
                    }
                }}
            >
                { partners.map(item => (
                    <SwiperSlide key={item.id} className="image-card">
                        <img 
                            src={item.image} 
                            alt="images des sponsors" 
                        />
                    </SwiperSlide> 
                ))}
            </Swiper>
        </div>
    )
}
