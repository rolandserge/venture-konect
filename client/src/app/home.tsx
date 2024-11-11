import { HiOutlineEnvelope } from 'react-icons/hi2'
import Feature from '../components/feature'
import Mission from '../components/mission'
import Partner from '../components/partner'
import RequestForm from '../components/requestForm'
import { IoLocationOutline } from "react-icons/io5"
import { HiOutlinePhone } from 'react-icons/hi'
import Heros from '../components/heros'

// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Event from '../components/event'
// import { useTranslation } from 'react-i18next'

export default function Home() {

    // const { t } = useTranslation()

    return (
        <div className='home-page'>
            <Heros />
            <div className="texte">
                <p>Bringing Business Partners Together.</p>
            </div>
            <Feature />
            <Mission />
            <div className="business-connection">
                <div className="overlay">
                    <h2>Connecting Business Partners From Across The Globe</h2>
                </div>
            </div>
            
            <Event />

            <Partner />
            <div className="localisation">
                <div className="infos">
                    <div className="card">
                        <div className='head'>
                            <p>London Office</p>
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
                            <p>Paris Office</p>
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
                            <p>Abidjan Office</p>
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
                            <p>Dakar Office</p>
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
                        style={{ border: 0 }}
                        referrerPolicy='no-referrer-when-downgrade'
                        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=abidjan&amp;t=p&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                    </iframe>
                    {/* <MapContainer 
                        center={[51.505, -0.09]} 
                        zoom={13} style={{ height: '100%', width: '100%' }}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[51.505, -0.09]}>
                            <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer> */}
                </div>
            </div>
            <div className="bringing-business">
                <div className="overlay">
                    <h2>Bringing Business Partners Together.</h2>
                </div>
            </div>
            
            <RequestForm />

            <div className="corporate-social">
                <div className="text">
                    <h1>Corporate Social Responsibility</h1>
                    <p>Through our CSR initiatives, Venture Konect strives to contribute to the sustainable transformation of emerging markets, ensuring that our activities leave a lasting, positive impact on the environment, society, and economy.</p>
                </div>
                <div className="card-image">
                    <img src="/assets/csr.jpg" alt="crs image" />
                </div>
            </div>
        </div>
    )
}
