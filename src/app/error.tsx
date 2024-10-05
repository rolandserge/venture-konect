import { Link } from "react-router-dom";
import BannerModel from "../components/bannerModel";

export default function Error() {

    return (
        <div className="error-page">
            <BannerModel
                title="Error 404"
                subtitle="Sorry Page Was Not Found"
            />

            <div className="content-error">
                <h1>4<span>0</span>4</h1>
                <p className="no-found">Sorry Page Was Not Found</p>
                <p className="info">We can't seem to find the page you're looking for.</p>
                <Link to="/" className="back">Go back home</Link>
            </div>
        </div>
    )
}
