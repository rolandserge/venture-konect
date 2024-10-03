import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
import BannerModel from "../components/bannerModel";
import { useForm } from "react-hook-form";
import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Contact() {

    const { register, control, handleSubmit } = useForm();

    const onSubmit = (data: any) => console.log(data);

    return (
        <div className="contact-page">
            <BannerModel />

            <div className="content-page">
                <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                    <div className="form-1">
                        <input type="text" placeholder="Enter your FirstName" />
                        <input type="text" placeholder="Enter your LastName" />
                        <input type="email" placeholder="Enter your Email" />
                        <PhoneInputWithCountry
                            name="phone"
                            placeholder="Enter phone number"
                            control={control}
                            rules={{ required: true }}
                            defaultCountry="CI"
                        />
                        <input type="text" placeholder="Enter your Company Name" id="" />
                        <input type="text" placeholder="Enter your Job description" />
                        <input type="text" placeholder="Enter your Industry" />
                        <input type="text" placeholder="Enter your City" />
                        <div>
                            <label htmlFor="about">Where did you hear about us</label>
                            <select name="" id="about">
                                <option value="">Choose your answer</option>
                                <option value="Internet">Via internet</option>
                                <option value="Referrals">Referrals</option>
                                <option value="Attended event">Attended event</option>
                                <option value="Other">other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="interest">What is your interest ?</label>
                            <select name="" id="interest">
                                <option value="">Choose your interest</option>
                                <option value="Consultancy">Consultancy</option>
                                <option value=" Corporate Executive Prospection">Corporate Executive Prospection</option>
                                <option value="Event">Event</option>
                            </select>
                        </div>
                    </div>
                    <div className="message">
                        <textarea name="" rows={10} id="">

                        </textarea>
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
                <MapContainer
                    center={[51.505, -0.09]} 
                    zoom={13} 
                    style={{ height: '100%', width: '100%' }}
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
                </MapContainer>
            </div>
        </div>
    )
}
