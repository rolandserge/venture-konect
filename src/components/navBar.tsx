import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { CiYoutube } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoLinkedin } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {

    const location = useLocation()

    return (
        <div className="header">
            <nav>
                <div className="head">
                    <div className="address">
                        <div className="card">
                            <div className="card-icon">
                                <HiOutlinePhone size={24} className="icon" />
                            </div>
                            <span>+44 (0) 207 129 7356</span>
                        </div>
                        <div className="card">
                            <div className="card-icon">
                                <HiOutlineEnvelope size={24} className="icon" />
                            </div>
                            <span>info@venture-konect.com</span>
                        </div>
                    </div>
                    <div className="reseaux-sociaux">
                        <Link to="#" target="_blanket" className="icon">
                            <TiSocialFacebook size={24} className="fb" />
                        </Link>
                        <Link to="#" target="_blanket" className="icon">
                            <BiLogoLinkedin size={24} className="in" />
                        </Link>
                        <Link to="#" target="_blanket" className="icon">
                            <RiTwitterXFill size={20} className="tw" />
                        </Link>
                        <Link to="#" target="_blanket" className="icon">
                            <CiYoutube size={24} className="yt" />
                        </Link>   
                    </div>
                </div>
                <div className="navbar">
                    <div className="logo">
                        <img
                            src='/assets/venture.png'
                            alt='Logo official Venture Konect'
                        />
                    </div>
                    <ul>
                        <li><Link to="/" className={location.pathname === "/" ? "contact active" : "contact"}>Home</Link></li>
                        <li>
                            <span className={location.pathname.includes("/about-us") ? "active" : "test"}>About Us</span>
                            <ul className="submenu">
                                <li className={location.pathname.includes("/our-mission") ? "sub-active" : "lrn"}>
                                    <Link to="/about-us/our-mission" className="lien">
                                        Our Mission / Vision
                                    </Link>
                                </li>
                                <li className={location.pathname.includes("/our-teams") ? "sub-active" : "lien"}>
                                    <Link to="/about-us/our-teams" className="lien">
                                        Our teams
                                    </Link>
                                </li>
                                {/* <li><Link to="/about-us/corporate-social-responsibility" className="lien">Corporate Social Responsibility</Link></li> */}
                            </ul>
                        </li>
                        <li>
                            <span className={location.pathname.includes("/services") ? "active" : "test"}>Services</span>
                            <ul className="submenu">
                                <li className={location.pathname.includes("/venture-konect's-events") ? "sub-active" : "ln"}>
                                    <Link to="/services/venture-konect's-events" className="lien">
                                        Venture Konect's Events
                                    </Link>
                                </li>
                                <li className={location.pathname.includes("/consultancy") ? "sub-active" : "ln"}>
                                    <Link to="/services/consultancy-service" className="lien">
                                        Consultancy service
                                    </Link>
                                </li>
                                <li className={location.pathname.includes("/corporate-excecute") ? "sub-active" : "la"}>
                                    <Link to="/services/corporate-excecute-prospection" className="lien">
                                        Corporate Executive Prospection
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        {/* <li>Events</li> */}
                        <li>
                            <span className={location.pathname.includes("/media") ? "active" : "test"}>Media</span> 
                            <ul className="submenu">
                                <li className={location.pathname.includes("/news") ? "sub-active" : "t"}>
                                    <Link to="/media/news" className="lien">
                                        News
                                    </Link>
                                </li>
                                <li className={location.pathname.includes("/photo-gallery") ? "sub-active" : "l"}>
                                    <Link to="/media/photo-gallery" className="lien">
                                        Photo Gallery
                                    </Link>
                                </li>
                                <li className={location.pathname.includes("/video-gallery") ? "sub-active" : "n"}>
                                    <Link to="/media/video-gallery" className="lien">
                                        Video Gallery
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/contact" className={location.pathname === "/contact" ? "contact active" : "contact"}>
                                Contact Us
                            </Link>
                        </li>
                        <li className='language'>
                            <img 
                                src='/assets/france.png' 
                                alt='Language of website' 
                            />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
