import { Link } from "react-router-dom";
import BannerModel from "../components/bannerModel";
import { useTranslation } from "react-i18next";

export default function Error() {

    const { t } = useTranslation()

    return (
        <div className="error-page">
            <BannerModel
                title={t("error.title")}
                subtitle={t("error.subtitle")}
            />

            <div className="content-error">
                <h1>4<span>0</span>4</h1>
                <p className="no-found">{t("error.subtitle")}</p>
                <p className="info">{t("error.info")}</p>
                <Link to="/" className="back">{t("error.button")}</Link>
            </div>
        </div>
    )
}
