import { Trans, useTranslation } from 'react-i18next'
import BannerModel from '../../components/bannerModel'

export default function Consultancy() {

    const { t } = useTranslation()

    return (
        <div className='services-option-page'>
            <BannerModel 
                title={"Service > " + t("about-us.service.consultancy-title")}
                subtitle='At Venture Konect, we specialize in identifying and creating sustainable investment opportunities.'
            />

            <div className="content">
                {/* <Service /> */}
                <div className="part-1">
                    <span>{t("about-us.service.consultancy-title")}</span>
                    <p><Trans i18nKey="services.consultancy.content" /></p>
                </div>
                <div className="illustration">
                    <img 
                        src="/assets/consultancy.jpg" 
                        alt="Corporate Execute prosoection" 
                    />
                </div>
            </div>
        </div>
    )
}
