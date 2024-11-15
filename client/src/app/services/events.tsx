import { Trans, useTranslation } from 'react-i18next'
import BannerModel from '../../components/bannerModel'
import Event from '../../components/event'

export default function Events() {
    
    const { t } = useTranslation()

    return (
        <div className='services-option-page'>
            <BannerModel
                title={'Services > ' + t("about-us.service.event-title")}
                subtitle='We believe that impactful discussions and collaboration are essential for addressing'
            />

            <div className="content">
                <div className="part-1">
                    <span>{t("about-us.service.event-title")}</span>
                    <p><Trans i18nKey="services.events.content" /></p>
                </div>
            </div>
            <div className="wapecc-illustration"> 
                  <Event />
            </div>
        </div>
    )
}
