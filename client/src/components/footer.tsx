import { useTranslation } from "react-i18next";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiYoutube } from "react-icons/ci";
import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { RiTwitterXFill, RiTwitterXLine } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";
import { Link } from "react-router-dom";
import { LuNewspaper } from "react-icons/lu";

type ItemProps = {
    lien: string;
    texte: string;
}

interface FooterElementProps {
    id: string;
    title: string;
    content: Array<ItemProps>;
}

export default function Footer() {

    const { t } = useTranslation()

    const footerElement = t('footer.links', { returnObjects: true});

    return (
        <div className="footer">
            <div className="card-footer">

                <div className="footer-element">
                    <span>{t("footer.social")}</span>
                    <div className="reseaux">
                        <Link to="#" rel="noopener" target="_blanket" className="icon">
                            <TiSocialFacebook size={26} className="fb" />
                        </Link>
                        <Link to="#" rel="noopener" target="_blanket" className="icon">
                            <BiLogoLinkedin size={25} className="in" />
                        </Link>
                        <Link to="#" rel="noopener" target="_blanket" className="icon">
                            <RiTwitterXFill size={23} className="tw" />
                        </Link>
                        <Link to="#" rel="noopener" target="_blanket" className="icon">
                            <CiYoutube size={25} className="yt" />
                        </Link>   
                    </div>
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
                {Object.values(footerElement).map((el: FooterElementProps) => (
                    <div className="footer-element" key={el.id}>
                        <span>{el.title}</span>
                        <div className="element">
                            {el.content.map((item, index: number) => (
                                <div className="card-el" key={index}>
                                    <div className="card-icon">
                                    {el.id === "tweet" ? (
                                        <RiTwitterXLine size={20} className="icon" />
                                    ) : <LuNewspaper size={20} className="icon"/>}
                                    </div>
                                    <Link to={item.lien} className="lien">{item.texte}</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="en-bas">
                <p>{t("footer.bas-footer")}</p>
            </div>
        </div>
    )
}
