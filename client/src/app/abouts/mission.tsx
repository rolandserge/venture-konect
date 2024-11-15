import { Trans, useTranslation } from 'react-i18next'
import BannerModel from '../../components/bannerModel'
import Service from '../../components/services'

export default function Mission() {

    const { t } = useTranslation()

    return (
        <div className='about-us-page'>
            <BannerModel 
                title={t("home.about-us.title") + ' > Mission / Vision'}
                subtitle={t("about-us.subtitle-about")}
            />
            
            <div className="about-us-content">
                <div className="card-part-1">
                    <div className="part">
                        <span>{t('about-us.mission.title')}</span>

                        <div className="mission-card">
                            <div className="card">
                                <p>{t('about-us.mission.content-1')}</p>
                            </div>
                            <div className="card">
                                <p>{t("about-us.mission.content-2")}</p>
                            </div>
                            <div className="card">
                                <p>{t("about-us.mission.content-3")}</p>
                            </div>
                            <div className="card">
                                <p>{t("about-us.mission.content-4")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <img src="/assets/slide/slide2.jpg" alt="image de la mission" />
                    </div>
                </div>
                <div className="visions-section">
                    <span>{t("about-us.vision.title")}</span>
                    <p className='vision'><Trans i18nKey="about-us.vision.content" /></p>
                </div>
                <div className="services">
                    <p className='title-service'>{t("about-us.service.title")}</p>
                    <Service />
                </div>
            </div>  
        </div>
    )
}
