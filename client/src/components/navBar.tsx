import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { CiYoutube } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoLinkedin } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type ArrayProps = {
    title: string,
    lien: string,
}

interface NavbarProps {
    title: string;
    key: string;
    submenu: Array<ArrayProps>
}

export default function NavBar() {

    const location = useLocation()
    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(0)
    const navigate = useNavigate()

    const { t, i18n: { changeLanguage, language } } = useTranslation()
    const [currentLanguage, setCurrentLanguage] = useState(language)

    const handleChangeLanguage = () => {
        setActive(false)
        const newLanguage = currentLanguage === "en" ? "fr" : "en";
        setCurrentLanguage(newLanguage);
        changeLanguage(newLanguage);
    }
    const navItems = t("layout.navbar.items", { returnObjects: true})

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
                        <Link to="#" rel="noopener" target="_blanket" className="icon">
                            <TiSocialFacebook size={20} className="fb" />
                        </Link>
                        <Link to="#" rel="noopener" target="_blanket" className="icon">
                            <BiLogoLinkedin size={20} className="in" />
                        </Link>
                        <Link to="#" rel="noopener" target="_blanket" className="icon">
                            <RiTwitterXFill size={20} className="tw" />
                        </Link>
                        <Link to="#" rel="noopener" target="_blanket" className="icon">
                            <CiYoutube size={20} className="yt" />
                        </Link>   
                    </div>
                </div>
                <div className="navbar">
                    <div className="logo">
                        <img
                            src='/assets/venture.png'
                            alt='Logo official Venture Konect'
                            onClick={() => navigate("/")}
                        />
                    </div>
                    <ul className="nav-destkop">
                        <li><Link to="/" className={location.pathname === "/" ? "contact active" : "contact"}>{t("layout.navbar.home")}</Link></li>
                        {Object.values(navItems).map((items: NavbarProps, index: number) => (
                            <li key={index}>
                                <span className={location.pathname.includes(items.key) ? "active" : "test"}>{items.title}</span>
                                <ul className="submenu">
                                    {items.submenu.map((item, index: number) => (
                                        <li className={location.pathname === item.lien ? "sub-active" : "lrn"} key={index}>
                                            <Link to={item.lien} className="lien">{item.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                        <li>
                            <Link to="/contact" className={location.pathname === "/contact" ? "contact active" : "contact"}>
                                {t("layout.navbar.contact")}
                            </Link>
                        </li>
                        <li className='language' onClick={handleChangeLanguage}>
                            <img 
                                src={currentLanguage === "en" ? '/assets/france.png' : "/assets/londres.webp"}
                                alt={currentLanguage === "en" ? "Website in English" : "Le site web en francais"}
                            />
                        </li>
                    </ul>
                    <div className="burger-card">
                        <RxHamburgerMenu 
                            size={30} 
                            className="burger" 
                            onClick={() => setActive(!active)}
                        />
                        <div className={active ? "modal open" : "modal"}>
                            <ul className="nav-mobile">
                                <li>
                                    <Link 
                                        to={"/"} 
                                        className={location.pathname === "/" ? "active contact": "contact"}
                                        onClick={() => setActive(false)}
                                    >
                                        {t("layout.navbar.home")}
                                    </Link>
                                </li>
                                {Object.values(navItems).map((items: NavbarProps, count: number) => (
                                    <li key={count}>
                                        <span 
                                            className={location.pathname.includes(items.key) ? "active": "test"}
                                            onClick={() => { setOpen(!open); setIndex(count)}}
                                            key={items.key}
                                        >
                                            {items.title}
                                        </span>
                                        <div className={open && index == count ? "accordeons open" : "accordeons"}>
                                            <ul>
                                                {items.submenu.map((item, index: number) => (
                                                    <li key={index}>
                                                        <Link 
                                                            to={item.lien} 
                                                            className="lien"
                                                            onClick={() => setActive(false)}
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </li>
                                ))}
                                <li>
                                    <Link 
                                        to="/contact" 
                                        className={location.pathname === "/contact" ? "contact active": "contact"}
                                        onClick={() => setActive(false)}
                                    >
                                        {t("layout.navbar.contact")}
                                    </Link>
                                </li>
                                <li className="image-li" onClick={handleChangeLanguage}>
                                    <img 
                                        src={currentLanguage === "en" ? '/assets/france.png' : "/assets/londres.webp"}
                                        alt={currentLanguage === "en" ? "Website in English" : "Le site web en francais"}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
