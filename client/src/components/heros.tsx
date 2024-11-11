import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade'

// import required modules
import { Autoplay, Navigation, Mousewheel } from 'swiper/modules';
import { Link } from 'react-router-dom';
import ScrollLink from './scrollLink';
// import { Link } from 'react-scroll';


export default function Heros() {

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
                        <h1>Infrastructure Enabling Everyone</h1>
                        <p>For productivity growth, Human Development and to reduce levels of poverty</p>
                        <div className="button-action">
                            <ScrollLink
                                title='Initate a project with us'
                                lien='request-form'
                            />
                            <Link to="#" className="lien">About Us</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mySlide">
                    <img 
                        src="/assets/slide/slide4.jpg" 
                        alt="banner fond"
                    />
                    <div className="overlay">
                        <h1>Project Sourcing Key People , Business insights</h1>
                        <p>Connecting you and your business , Helping you take your Company to new heights</p>
                        <div className="button-action">
                            <ScrollLink
                                title='Initate a project with us'
                                lien='request-form'
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mySlide">
                    <img 
                        src="/assets/slide/slide3.jpg" 
                        alt="banner fond"
                    />
                    <div className="overlay">
                        <h1>Power For Everyone</h1>
                        <p>Most emerging markets have many untapped resources for power generation with huge potential</p>
                        <div className="button-action">
                            <ScrollLink
                                title='Initate a project with us'
                                lien='request-form'
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
