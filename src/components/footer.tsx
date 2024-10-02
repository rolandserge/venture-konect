import { BiLogoLinkedin } from "react-icons/bi";
import { CiYoutube } from "react-icons/ci";
import { RiTwitterXFill, RiTwitterXLine } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <>
            <div className="footer-element">
                <div className="image">
                    <img
                        src="/assets/venture.png"
                        alt="Le logo de venture konect"
                    />
                </div>
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
                    <div className="card-el">
                        <div className="card-icon">
                            <RiTwitterXLine size={20} className="icon" />
                        </div>
                        <Link to="#" target="_blanket" className="lien">
                            Under the patronage of the Ministry Republic of Senegal...
                        </Link>
                    </div>
                </div>
            </div>
            <div className="footer-element">
                <span>Extra Links</span>
                <ul className="element">
                    <li><Link to="#" className="footer-nav">Home</Link></li>
                    <li><Link to="#" className="footer-nav">About Us</Link></li>
                    <li><Link to="#" className="footer-nav">Consultancy</Link></li>
                    <li><Link to="#" className="footer-nav">Events</Link></li>
                    <li><Link to="#" className="footer-nav">Media</Link></li>
                    <li><Link to="#" className="footer-nav">Contact Us</Link></li>
                    <li className="langue"><img src="/assets/france.png" alt="changement de langue" /></li>
                </ul>
            </div>
        </>
    )
}
