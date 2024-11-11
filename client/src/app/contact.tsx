import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
import BannerModel from "../components/bannerModel";
import { useForm } from "react-hook-form";
import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

type ContactFormsProps = {
    firstName: string,
    lastName: string,
    email: string,
    phone: number,
    company: string,
    job: string,
    industry: string,
    city: string,
    confirm: boolean,
    about: string,
    interest: string,
    message: string
}

export default function Contact() {

    const { register, control, handleSubmit } = useForm<ContactFormsProps>();

    const onSubmit = (data: ContactFormsProps) => console.log(data);

    return (
        <div className="contact-page">
            <BannerModel
                title="Contact Us"
                subtitle="Reach Out for Inquiries, Partnerships, and Opportunities at the Venture Konect"
            />

            <div className="content-page">
                <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                    <div className="form-1">
                        <input 
                            type="text" 
                            placeholder="Enter your FirstName"
                            {...register("firstName", { required: true })}
                        />
                        <input 
                            type="text" 
                            placeholder="Enter your LastName"
                            {...register("lastName", { required: true })}
                        />
                        <input 
                            type="email"
                            placeholder="Enter your Email" 
                            {...register("email", { required: true })}
                        />
                        <PhoneInputWithCountry
                            name="phone"
                            placeholder="Enter phone number"
                            control={control}
                            rules={{ required: true }}
                            defaultCountry="CI"
                        />
                        <input 
                            type="text" 
                            placeholder="Enter your Company Name"
                            {...register("company", { required: true })}
                        />
                        <input 
                            type="text" 
                            placeholder="Enter your Job description" 
                            {...register("job", { required: true })}
                        />
                        <input 
                            type="text" 
                            placeholder="Enter your Industry"
                            {...register("industry", { required: true })}
                        />
                        <input 
                            type="text" 
                            placeholder="Enter your City" 
                            {...register("city", { required: true })}
                        />
                        <div>
                            <label htmlFor="about">Where did you hear about us</label>
                            <select id="about" {...register("about", { required: true })}>
                                <option value="">Choose your answer</option>
                                <option value="Internet">Via internet</option>
                                <option value="Referrals">Referrals</option>
                                <option value="Attended event">Attended event</option>
                                <option value="Other">other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="interest">What is your interest ?</label>
                            <select id="interest" {...register("interest", { required: true })}>
                                <option value="">Choose your interest</option>
                                <option value="Consultancy">Consultancy</option>
                                <option value=" Corporate Executive Prospection">Corporate Executive Prospection</option>
                                <option value="Event">Event</option>
                            </select>
                        </div>
                    </div>
                    <div className="message">
                        <textarea
                            rows={10} 
                            {...register("message", { required: true })}
                        ></textarea>
                    </div>
                    <div className="terms">
                        <input 
                            type="checkbox" 
                            id="check" 
                            {...register("confirm", { required: true })}
                        />
                        <label htmlFor='check'>I agree with storage and handling of my data by this website.</label>
                    </div>
                    <div className="action">
                        <button>Submit</button>
                    </div>
                </form>
                <div className="contact-detail">
                    <div className="contact-1">
                        <p>Contact details</p>

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
                        <span className="title">Your contact</span>
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
