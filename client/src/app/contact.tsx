import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
import BannerModel from "../components/bannerModel";
import { useForm } from "react-hook-form";
import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

type ContactFormsProps = {
    name: string,
    email: string,
    phone: number,
    company: string,
    job: string,
    industry: string,
    city: string,
    about: string,
    interest: string,
    message: string
}

export default function Contact() {

    const { register, formState: { errors }, control, handleSubmit } = useForm<ContactFormsProps>();
    const { t } = useTranslation()

    const onSubmit = (data: ContactFormsProps) => {

        console.log(data);

        try {
           console.log("test") 
        } catch (error) {
            console.log(error)
        }
    } 

    return (
        <div className="contact-page">
            <BannerModel
                title={t("layout.navbar.contact")}
                subtitle="Reach Out for Inquiries, Partnerships, and Opportunities at the Venture Konect"
            />

            <div className="content-page">
                <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                    <div style={{ marginBottom: "2em" }}>
                        <input 
                            type="text" 
                            placeholder={t("contact.formulaires.name")}
                            {...register("name", { required: true, minLength: 5 })}
                            style={{ width: "100%", marginBottom: ".5em"}}
                        />
                        {errors.name?.type === "required" && <span style={{ color: "red"}}>This field is required</span>}
                        {errors.name?.type === "minLength" && <span style={{ color: "red"}}>This field at least 5 characters</span>}
                    </div>
                    <div className="form-1">
                        <div className="error-input">
                            <input 
                                type="email"
                                placeholder={t("contact.formulaires.email")}
                                {...register("email", { required: true, minLength: 5 })}
                            />
                            {errors.email?.type === "required" && <span style={{ color: "red"}}>This field is required</span>}
                            {errors.email?.type === "minLength" && <span style={{ color: "red"}}>This field at least 5 characters</span>}

                        </div>
                        <div className="error-input">
                            <PhoneInputWithCountry
                                name="phone"
                                placeholder={t("contact.formulaires.phone")}
                                control={control}
                                rules={{ required: true }}
                                defaultCountry="CI"
                            />
                            {errors.phone?.type === "required" && <span style={{ color: "red"}}>This field is required</span>}
                        </div>
                        <div className="error-input">
                            <input 
                                type="text" 
                                placeholder={t("contact.formulaires.company")}
                                {...register("company", { required: true , minLength: 3})}
                            />
                            {errors.company?.type === "required" && <span style={{ color: "red"}}>This field is required</span>}
                            {errors.company?.type === "minLength" && <span style={{ color: "red"}}>This field at least 3 characters</span>}
                        </div>
                        <div className="error-input">
                            <input 
                                type="text" 
                                placeholder={t("contact.formulaires.job")}
                                {...register("job", { required: true, minLength: 3 })}
                            />
                            {errors.job?.type === "required" && <span style={{ color: "red"}}>This field is required</span>}
                            {errors.job?.type === "minLength" && <span style={{ color: "red"}}>This field at least 3 characters</span>}
                        </div>
                        <div className="error-input">
                            <input 
                                type="text" 
                                placeholder={t("contact.formulaires.industry")}
                                {...register("industry", { required: true, minLength: 3 })}
                            />
                            {errors.industry?.type === "required" && <span style={{ color: "red"}}>This field is required</span>}
                            {errors.industry?.type === "minLength" && <span style={{ color: "red"}}>This field at least 3 characters</span>}
                        </div>
                        <div className="error-input">
                            <input 
                                type="text" 
                                placeholder={t("contact.formulaires.city")}
                                {...register("city", { required: true, minLength: 3 })}
                            />
                            {errors.city?.type === "required" && <span style={{ color: "red"}}>This field is required</span>}
                            {errors.city?.type === "minLength" && <span style={{ color: "red"}}>This field at least 3 characters</span>}
                        </div>
                        <div className="error-input">
                            <div>
                                <label htmlFor="about">{t("contact.formulaires.about-us.title")}</label>
                                <select id="about" {...register("about", { required: true })}>
                                    <option value="">{t("contact.formulaires.about-us.choose")}</option>
                                    <option value="Internet">{t("contact.formulaires.about-us.internet")}</option>
                                    <option value="Referrals">{t("contact.formulaires.about-us.referral")}</option>
                                    <option value="Attended event">{t("contact.formulaires.about-us.attended")}</option>
                                    <option value="Other">{t("contact.formulaires.about-us.other")}</option>
                                </select>
                            </div>
                            {errors.about?.type === "required" && <span style={{ color: "red"}}>This field is required</span>}
                        </div>
                        <div className="error-input">
                            <div>
                                <label htmlFor="interest">{t("contact.formulaires.interest.title")}</label>
                                <select id="interest" {...register("interest", { required: true })}>
                                    <option value="">{t("contact.formulaires.interest.choose")}</option>
                                    <option value="Consultancy">{t("contact.formulaires.interest.consultancy")}</option>
                                    <option value=" Corporate Executive Prospection">{t("contact.formulaires.interest.corporate")}</option>
                                    <option value="Event">{t("contact.formulaires.interest.event")}</option>
                                </select>
                            </div>
                            {errors.interest?.type === "required" && <span style={{ color: "red"}}>This field is required</span>}
                        </div>
                    </div>
                    <div className="message">
                        <textarea
                            rows={10} 
                            {...register("message")}
                            placeholder={t("contact.formulaires.message")}
                        ></textarea>
                    </div>
                    <div className="action">
                        <button>{t("contact.formulaires.button")}</button>
                    </div>
                </form>
                <div className="contact-detail">
                    <div className="contact-1">
                        <p>{t("contact.detail-contact")}</p>

                        <div className="contact">
                            <div className="col">
                                <div className="card-icon">
                                    <HiOutlinePhone size={23} className="icon" />
                                </div>
                                <span>+44 (0) 207 129 7356</span>
                            </div>
                            <div className="col">
                                <div className="card-icon">
                                    <HiOutlineEnvelope size={23} className="icon" />
                                </div>
                                <span>info@venturekonect.com</span>
                            </div>
                            <div className="col">
                                <div className="card-icon">
                                    <IoLocationOutline size={23} className="icon" />
                                </div>
                                <span>128 Cannon Workshops, Cannon Drive, London E14 4AS</span>
                            </div>
                        </div>
                    </div>
                    <div className="contact-2">
                        <span className="title">{t("contact.contact-title")}</span>
                        <div className="card">
                            <div className="image-card">
                                <img 
                                    src="/assets/florence.jpg" 
                                    alt="Madame Florence" 
                                />
                            </div>
                            <div className="info">
                                <p className="nom">Florence Maxwell-Aylwin</p>
                                <p className="role">Deputy Director</p>
                                <p className="email">Email: <span>florence@venturekonect.com</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map-container">
                {/* <MapContainer
                    center={[51.505, -0.09]} 
                    zoom={13} 
                    style={{ height: '100%', width: '100%' }}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer> */}
                <iframe 
                    height="100%" width="100%" 
                    loading="lazy"
                    allowFullScreen
                    style={{ border: 0 }}
                    referrerPolicy='no-referrer-when-downgrade'
                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;coord=52.70967533219885,-8.020019531250002&amp;q=abidjan&amp;t=p&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                </iframe>
            </div>
        </div>
    )
}
