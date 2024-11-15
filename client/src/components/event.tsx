import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Event() {

    const { t } = useTranslation()

    return (
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
                            <p>{t("home.events-title")}</p>
                        </div>
                        <p>{t("home.events-description")}</p>
                        <div className="action-button">
                            <Link to="#" target='_blanket' className='site'>{t("home.events-button")}</Link>
                        </div>
                    </div>
                </div>
        </div>
  )
}
