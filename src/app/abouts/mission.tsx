import BannerModel from '../../components/bannerModel'
import Service from '../../components/services'

export default function Mission() {

    return (
        <div className='about-us-page'>
            <BannerModel />
            
            <div className="about-us-content">
                {/* <div className="card-about">
                    <div className="infos">
                        <span>About us</span>
                        <p>
                            We are a company with an emerging market-focused team of professionals specialising in promoting and facilitating socio-economic 
                            development, with particular focus on supporting private sector engagement towards local institutions. <br /><br />
                            At Venture Konect, we believe that our experience, skills and passion can impact socio-economic de velopment across the globe. 
                            Our aim is to develop a strong partnership with both locales institutions and the global stakeholders. <br /> This is achieved through 
                            an uncompromising commitment to the highest standards of <strong>Professionalism</strong>, <strong>Integrity</strong> & <strong>Confidentiality.</strong>
                        </p>
                    </div>
                    <div className="image">
                        <img 
                            src="/assets/slide/slide3.jpg" 
                            alt="about us" 
                        />
                    </div>
                </div> */}
                <div className="card-part-1">
                    <div className="part">
                        <span>Our Mission</span>

                        <div className="mission-card">
                            <div className="card">
                                <p>
                                    At Venture Konect, our mission is to facilitate sustainable and viable investment opportunities by bridging the gap 
                                    between emerging markets and global investors. Through our consultancy services, we source high-potential 
                                    local projects from key institutions and connect them with international investors and technology providers 
                                    seeking opportunities across the globe.
                                </p>
                            </div>
                            <div className="card">
                                <p>
                                    We also empower corporate executives by organizing strategic business excursions to critical markets, 
                                    enabling them to meet and engage with key business partners and unlock new ventures
                                </p>
                            </div>
                            <div className="card">
                                <p>
                                    In addition, our tailored events focus on addressing challenges in the energy, mining, and industrial sectors of emerging markets. 
                                    By fostering targeted dialogues, we create a platform where global investors can build relationships with credible 
                                    stakeholders and contribute to meaningful sector development
                                </p>
                            </div>
                            <div className="card">
                                <p>
                                    At Venture Konect, we are dedicated to driving growth by fostering connections, innovation, and impactful 
                                    partnerships in the world's most dynamic industries.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <img src="/assets/slide/slide2.jpg" alt="image de la mission" />
                    </div>
                </div>
                <div className="visions-section">
                    <span>Our Vision</span>
                    <p className='vision'>
                        Our vision at Venture Konect is to be the leading global bridge between emerging market opportunities and international investors, 
                        fostering sustainable development and innovation in key industries such as energy, mining, and industrial sectors. <br /><br /> We strive to create 
                        lasting partnerships that drive economic growth, empower local communities, and address global challenges by connecting the right 
                        projects with the right investors and technology providers. <br /><br />Through our commitment to excellence, we aim to shape the future of 
                        emerging markets, making them engines of global progress and prosperity.
                    </p>
                </div>
                <div className="services">
                    <p className='title-service'>Our Services</p>
                    <Service />
                </div>
            </div>  
        </div>
    )
}
