import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/swiper-bundle.css';
import { partners } from "../data";
import { useTranslation } from "react-i18next";

export default function Partner() {

    const { t } = useTranslation()

    return (
        <div className='partner-container'>
            <div className="title">
                <p>{t("home.our-partner")}</p>
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
                        slidesPerView: 5,
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
