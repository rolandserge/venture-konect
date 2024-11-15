import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade'

// import required modules
import { Autoplay, Navigation, Mousewheel } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import { Link } from 'react-scroll';


export default function Heros() {

    const { t } = useTranslation()

    return (
        <div className="heros">
            <Swiper
                cssMode={true}
                navigation={true} 
                mousewheel={true}
                effect={'fade'}
                loop={true}
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Autoplay, Mousewheel]}
                className="mySwiper"
            >
                <SwiperSlide className="mySlide">
                    <img 
                        src="/assets/slide/slide5.jpg" 
                        alt="banner fond"
                    />
                    <div className="overlay">
                        <h1>{t("home.heros.slide-title-1")}</h1>
                        <p>{t("home.heros.slide-content-1")}</p>
                        <div className="button-action">
                            <Link to="/initate-project-forms" className='lien'>{t("home.heros.button")}</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mySlide">
                    <img 
                        src="/assets/slide/slide4.jpg" 
                        alt="banner fond"
                    />
                    <div className="overlay">
                        <h1>{t("home.heros.slide-title-2")}</h1>
                        <p>{t("home.heros.slide-content-2")}</p>
                        <div className="button-action">
                            <Link to="/initate-project-forms" className='lien'>{t("home.heros.button")}</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mySlide">
                    <img 
                        src="/assets/slide/slide3.jpg" 
                        alt="banner fond"
                    />
                    <div className="overlay">
                        <h1>{t("home.heros.slide-title-3")}</h1>
                        <p>{t("home.heros.slide-content-3")}</p>
                        <div className="button-action">
                            <Link to="/initate-project-forms" className='lien'>{t("home.heros.button")}</Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
