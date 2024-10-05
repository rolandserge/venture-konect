import { BiLogoLinkedin } from "react-icons/bi";
import { CiYoutube } from "react-icons/ci";
import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { RiTwitterXFill, RiTwitterXLine } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <div className="footer">
            <div className="card-footer">

                <div className="footer-element">
                    <span>Social Network</span>
                    <div className="reseaux">
                        <Link to="#" target="_blanket" className="icon">
                            <TiSocialFacebook size={24} className="fb" />
                        </Link>
                        <Link to="#" target="_blanket" className="icon">
                            <BiLogoLinkedin size={20} className="in" />
                        </Link>
                        <Link to="#" target="_blanket" className="icon">
                            <RiTwitterXFill size={20} className="tw" />
                        </Link>
                        <Link to="#" target="_blanket" className="icon">
                            <CiYoutube size={20} className="yt" />
                        </Link>   
                    </div>
                </div>
                <div className="footer-element">
                    <span>Latest Tweets</span>
                    <div className="element">
                        <div className="card-el">
                            <div className="card-icon">
                                <RiTwitterXLine size={20} className="icon" />
                            </div>
                            <Link to="#" target="_blanket" className="lien">
                                Under the patronage of the Ministry of Petroleum and Energy Senegal...
                            </Link>
                        </div>
                        <div className="card-el">
                            <div className="card-icon">
                                <RiTwitterXLine size={20} className="icon" />
                            </div>
                            <Link to="#" target="_blanket" className="lien">
                                Under the patronage of the Ministry of Petroleum of Senegal...
                            </Link>
                        </div>
                        <div className="card-el">
                            <div className="card-icon">
                                <RiTwitterXLine size={20} className="icon" />
                            </div>
                            <Link to="#" target="_blanket" className="lien">
                                Under the patronage of the Ministry of Petroleum of Senegal...
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="footer-element">
                    <span>Get in Touch</span>
                    <div className="element">
                        <div className="card-el">
                            <div className="card-icon">
                                <HiOutlinePhone size={20} className="icon" />
                            </div>
                        <p>+44 (0) 207 129 7356</p>
                        </div>
                        <div className="card-el">
                            <div className="card-icon">
                                <HiOutlineEnvelope size={20} className="icon" />
                            </div>
                            <p>info@venture-konect.com</p>
                        </div>
                        <div className="card-el">
                            <div className="card-icon">
                                <IoLocationOutline size={20} className="icon" />
                            </div>
                            <p>128 Cannon Workshops, Cannon Drive, London E14 4AS</p>
                        </div>
                    </div>
                </div>
                <div className="footer-element">
                    <span>Recent News</span>
                    <div className="element">
                        <div className="card-el">
                            <Link to="#" className="lien">
                                Under the patronage of the Ministry of Petroleum and Energy Senegal...
                            </Link>
                        </div>
                        <div className="card-el">
                            <Link to="#" className="lien">
                                Under the patronage of the Ministry of Petroleum of Senegal...
                            </Link>
                        </div>
                        <div className="card-el">
                            <Link to="#" className="lien">
                                Under the patronage of the Ministry of Petroleum of Senegal...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="en-bas">
                <p>Copyright © 2024 Venture Konect All Rights Reserved</p>
            </div>
        </div>
    )
}
