import { useTranslation } from 'react-i18next'
import BannerModel from '../../components/bannerModel'
import RequestForm from '../../components/requestForm'

export default function Forms() {

    const { t } = useTranslation()

    return (
        <div className='form-interest'>
            <BannerModel
                title={t("home.heros.button")}
                subtitle='Register your interest for Venture Konect'
            />
            <div className="forms-interest-container">
                <RequestForm
                />
            </div>
        </div>
    )
}
