import { HiOutlineEnvelope } from 'react-icons/hi2'
import Feature from '../components/feature'
import Mission from '../components/mission'
import Partner from '../components/partner'
import RequestForm from '../components/requestForm'
import { IoLocationOutline } from "react-icons/io5"
import { HiOutlinePhone } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import Heros from '../components/heros'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Home() {

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
            <div className="site-wapecc">
                <div className="overlay">
                    <div className="annonce">
                        <div className="head">
                            <div className="logo">
                                <img 
                                    src="/assets/wapecc.png" 
                                    alt="Logo de wapecc 23" 
                                />
                            </div>
                            <p>Events Wapecc23</p>
                        </div>
                        <p>
                            WAPECC Lome23 is the 3rd of a series of events held in the region, to bring together the key players 
                            and drive forward the region's energy and infrastructure transformation, ensuring that reliable and affordable energy becomes a reality for all... 
                        </p>
                        <div className="action-button">
                            <Link to="#" target='_blanket' className='site'>Go to the website</Link>
                        </div>
                    </div>
                </div>
            </div>
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
                    <MapContainer 
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
                    </MapContainer>
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
