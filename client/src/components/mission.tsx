import { Trans, useTranslation } from "react-i18next";

export default function Mission() {

    const { t } = useTranslation()

    return (
        <div className="mission-container">
            <h2>{t('home.about-us.title')}</h2>
            <div className="mission-illustration">
                <img 
                    src="/assets/pictures.jpg" 
                    alt="Our mission illustration" 
                />
            </div>
            <div className="mission">
                <p className="description"><Trans i18nKey="home.about-us.content" /></p>
            </div>
        </div>
    )
}
