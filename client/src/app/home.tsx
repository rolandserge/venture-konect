import { HiOutlineEnvelope } from 'react-icons/hi2'
import Feature from '../components/feature'
import Mission from '../components/mission'
import Partner from '../components/partner'
import { IoLocationOutline } from "react-icons/io5"
import { HiOutlinePhone } from 'react-icons/hi'
import Heros from '../components/heros'
import Event from '../components/event'
import { useTranslation } from 'react-i18next'

export default function Home() {

    const { t } = useTranslation()

    return (
        <div className='home-page'>
            <Heros />
            <div className="texte">
                <p>{t('home.slogan')}</p>
            </div>
            <Feature />
            <Mission />
            <div className="business-connection">
                <div className="overlay">
                    <h2>{t('home.connecting-business')}</h2>
                </div>
            </div>
            
            <Event />

            <Partner />

            <div className="bringing-business">
                <div className="overlay">
                    <h2>{t('home.bringing-business')}</h2>
                </div>
            </div>

            <div className="localisation">
                <div className="infos">
                    <div className="card">
                        <div className='head'>
                            <p>{t('home.localisation.london-office')}</p>
                            <div className="flag">
                                <img 
                                    src="/assets/londres.webp" 
                                    alt="Image d'illustration" 
                                />
                            </div>
                        </div>

                        <div className="elements">
                            <div className="col">
                                <div className="card-icon">
                                    <HiOutlinePhone size={23} className="icon" />
                                </div>
                                <span>+44 (0) 207 129 7356</span>
                            </div>
                            <div className="col">
                                <div className="card-icon">
                                    <HiOutlineEnvelope size={23} className="icon" />
                                </div>
                                <span>info@venture-konect.com</span>
                            </div>
                            <div className="col">
                                <div className="card-icon">
                                    <IoLocationOutline size={23} className="icon" />
                                </div>
                                <span>128 Cannon Workshops, Cannon Drive, London E14 4AS</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className='head'>
                            <p>{t('home.localisation.paris-office')}</p>
                            <div className="flag">
                                <img 
                                    src="/assets/france.png" 
                                    alt="Image d'illustration" 
                                />
                            </div>
                        </div>

                        <div className="elements">
                            <div className="col">
                                <div className="card-icon">
                                    <HiOutlinePhone size={23} className="icon" />
                                </div>
                                <span>+33 (0) 6 72 25 60 17</span>
                            </div>
                            <div className="col">
                                <div className="card-icon">
                                    <HiOutlineEnvelope size={23} className="icon" />
                                </div>
                                <span>info@venture-konect.com</span>
                            </div>
                            <div className="col">
                                <div className="card-icon">
                                    <IoLocationOutline size={23} className="icon" />
                                </div>
                                <span>Tour Montparnasse, 14ème 75015 Paris, France</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="head">
                            <p>{t('home.localisation.abidjan-office')}</p>
                            <div className="flag">
                                <img 
                                    src="/assets/civ.png" 
                                    alt="Image d'illustration" 
                                />
                            </div>
                        </div>

                        <div className="elements">    
                            <div className="col">
                                <div className="card-icon">
                                    <HiOutlinePhone size={23} className="icon" />
                                </div>
                                <span>+225 07 08 26 31 26</span>
                            </div>
                            <div className="col">
                                <div className="card-icon">
                                    <HiOutlineEnvelope size={23} className="icon" />
                                </div>
                                <span>info@venture-konect.com</span>
                            </div>
                            <div className="col">
                                <div className="card-icon">
                                    <IoLocationOutline size={23} className="icon" />
                                </div>
                                <span>Cocody Cité des Arts Côte d'Ivoire</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="head">
                            <p>{t('home.localisation.dakar-office')}</p>
                            <div className="flag">
                                <img 
                                    src="/assets/senegal.png" 
                                    alt="Image d'illustration" 
                                />
                            </div>
                        </div>

                        <div className="elements">    
                            <div className="col">
                                <div className="card-icon">
                                    <HiOutlinePhone size={23} className="icon" />
                                </div>
                                <span>+44 (0) 207 129 7356</span>
                            </div>
                            <div className="col">
                                <div className="card-icon">
                                    <HiOutlineEnvelope size={23} className="icon" />
                                </div>
                                <span>info@venture-konect.com</span>
                            </div>
                            <div className="col">
                                <div className="card-icon">
                                    <IoLocationOutline size={23} className="icon" />
                                </div>
                                <span>Dakar Senegal</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map-container">
                    <iframe 
                        height="100%" width="100%"
                        loading="lazy"
                        allowFullScreen
                        aria-hidden="false"
                        tabIndex={0}
                        style={{ border: 0 }}
                        referrerPolicy='no-referrer-when-downgrade'
                        src="https://www.google.com/maps/d/embed?mid=1h5SkPcCTYsJCjnHJfy8acDnSnjrMUQY&ehbc=2E312F&noprof=1" 
                    >
                    </iframe>
                </div>
            </div>

            <div className="corporate-social">
                <div className="text">
                    <h1>{t('home.corporate-title')}</h1>
                    <p>{t('home.corporate-content')}</p>
                </div>
                <div className="card-image">
                    <img src="/assets/csr.jpg" alt="crs image" />
                </div>
            </div>
        </div>
    )
}
