import { Trans, useTranslation } from 'react-i18next'
import BannerModel from '../../components/bannerModel'

export default function Prospection() {

    const { t } = useTranslation()

    return (
        <div className='services-option-page'>
            <BannerModel
                title={"Service > " + t("about-us.service.corporate-title")}
                subtitle='We organise tailored business excursions for corporate executives to strategic markets'
            />

            <div className="content">
                <div className="part-1">
                    <span>{t("about-us.service.corporate-title")}</span>
                    <p><Trans i18nKey="services.corporate.content" /></p>
                </div>
                <div className="illustration">
                    <img 
                        src="/assets/event.jpg" 
                        alt="Corporate Execute prosoection" 
                    />
                </div>
            </div>
        </div>
    )
}
