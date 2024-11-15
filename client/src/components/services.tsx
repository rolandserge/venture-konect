import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Service() {

    const { t } = useTranslation()

    return (
        <div className="cards-services">
            <div className="card">
                <div className="card-icon">
                    <img 
                        src="/assets/icons/consultant.png" 
                        alt="Consultancy services"  
                    />
                </div>
                <div className="title">
                    <span>{t("about-us.service.consultancy-title")}</span>
                </div>
                <p>{t("about-us.service.consultancy-content")}</p>
                <div className="action">
                    <Link to="/services/consultancy-service" className='register'>{t("about-us.service.button")}</Link>
                </div>
            </div>
            <div className="card">
                <div className="card-icon">
                    <img 
                        src="/assets/icons/calendrier.png" 
                        alt="Consultancy services"  
                    />
                </div>
                <div className="title">
                    <span>{t("about-us.service.event-title")}</span>
                </div>
                <p>{t("about-us.service.event-content")}</p>
                <div className="action">
                    <Link to="/services/venture-konect's-events" className='register'>{t("about-us.service.button")}</Link>
                </div>
            </div>
            <div className="card">
                <div className="card-icon">
                    <img 
                        src="/assets/icons/prospection.png" 
                        alt="Consultancy services"  
                    />
                </div>
                <div className="title">
                    <span>{t("about-us.service.corporate-title")}</span>
                </div>
                <p>{t("about-us.service.corporate-content")}</p>
                <div className="action">
                    <Link to="/services/corporate-excecute-prospection" className='register'>{t("about-us.service.button")}</Link>
                </div>
            </div>
        </div>
    )
}
