import { useTranslation } from "react-i18next";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiYoutube } from "react-icons/ci";
import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";


export default function Footer() {

    const { t } = useTranslation()

    return (
        <div className="footer">
            <div className="card-footer">

                <div className="footer-element">
                    <div className="image">
                       <img 
                            src="/assets/venture.png" 
                            alt="Le logo de VK" 
                       />
                    </div>
                    <p className="slogan">{t("home.slogan")}</p>
                </div>
                <div className="footer-element">
                    <span>{t('footer.touch')}</span>
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
                    <span>{t("footer.link")}</span>
                    <ul className="link">
                        <li>
                            <Link to="/" className="lien">
                                <FaAngleRight className="icon" />
                                {t('layout.navbar.home')}
                            </Link>
                        </li>
                        <li>
                            <Link to="/about-us/our-mission" className="lien">
                                <FaAngleRight className="icon" />
                                {t('home.about-us.title')}
                            </Link>
                        </li>
                        <li>
                            <Link to="/services/venture-konect's-events" className="lien">
                                <FaAngleRight className="icon" />
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/media/news" className="lien">
                                <FaAngleRight className="icon" />
                                Media
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="lien">
                                <FaAngleRight className="icon" />
                                {t('layout.navbar.contact')}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-element">
                    <span>{t("footer.social")}</span>
                    <div className="reseaux">
                        <Link to="#" rel="noopener" target="_blanket" className="icon">
                            <TiSocialFacebook size={20} className="fb" />
                        </Link>
                        <Link to="#" rel="noopener" target="_blanket" className="icon">
                            <BiLogoLinkedin size={20} className="in" />
                        </Link>
                        <Link to="#" rel="noopener" target="_blanket" className="icon">
                            <RiTwitterXFill size={18} className="tw" />
                        </Link>
                        <Link to="#" rel="noopener" target="_blanket" className="icon">
                            <CiYoutube size={20} className="yt" />
                        </Link>   
                    </div>
                </div>
            </div>
            <div className="en-bas">
                <p>{t("footer.bas-footer")}</p>
            </div>
        </div>
    )
}
