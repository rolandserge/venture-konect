import 'react-phone-number-input/style.css'
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
import { useForm } from "react-hook-form";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { useTranslation } from 'react-i18next';

interface FormDataProps {
    name: string,
    jobTile: string;
    compagny: string;
    email: string,
    phone: number,
    interest: string,
}

export default function RequestForm() {

    const { register, formState: { errors }, control, handleSubmit } = useForm<FormDataProps>();
    const { t } = useTranslation()

    const onSubmit = (data: FormDataProps) => console.log(data);

    return (
        <div className='request-form' id='request-form'>
            <div className="title">
                <h1>{t("register.register")}</h1>
            </div>
            <div className="container-request">
                <div className='infos-container'>
                    <div className="card-image">
                        <img
                            src='/assets/box.jpg'
                            alt="image d'illustration"
                        />

                    </div>
                    <p>{t("register.content")}</p>
                    <div className="contact">
                        <div className="adresse">
                            <div className="icon">
                                <LuPhone size={24} color='#808080' />
                            </div>
                            <div className="info">
                                <span>{t("register.phone")}</span>
                                <p>+44 (0) 207 129 7356</p>
                            </div>
                        </div>
                        <div className="adresse">
                            <div className="icon">
                                <IoLocationOutline size={24} color='#808080' />
                            </div>
                            <div className="info">
                                <span>{t("register.address")}</span>
                                <p>128 Cannon Workshops, Cannon Drive, 
                                London E14 4AS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input 
                        type="text" 
                        placeholder={t("contact.formulaires.name")}
                        {...register("name", { required: true, minLength: 5 })}
                    />
                    {errors.name?.type === "required" && <span style={{ color: "red"}}>This field is required</span>}
                    {errors.name?.type === "minLength" && <span style={{ color: "red"}}>This field at least 5 characters</span>}
                    <input 
                        type="text" 
                        placeholder={t("contact.formulaires.title")}
                        {...register("jobTile", { required: true, minLength: 3 })}
                    />
                    {errors.jobTile?.type === "required" && <span style={{ color: "red"}}>This field is required</span>}
                    {errors.jobTile?.type === "minLength" && <span style={{ color: "red"}}>This field at least 3 characters</span>}
                    <input 
                        type="text" 
                        placeholder={t("contact.formulaires.company")}
                        {...register("compagny", { required: true, minLength: 5 })}
                    />
                    {errors.compagny?.type === "required" && <span style={{ color: "red"}}>This field is required</span>}
                    {errors.compagny?.type === "minLength" && <span style={{ color: "red"}}>This field at least 5 characters</span>}
                    <input 
                        type="email"
                        placeholder={t("contact.formulaires.email")}
                        {...register("email", { required: true, minLength: 5 })}
                    />
                    {errors.email?.type === "required" && <span style={{ color: "red"}}>This field is required</span>}
                    {errors.email?.type === "minLength" && <span style={{ color: "red"}}>This field at least 3 characters</span>}
                    <PhoneInputWithCountry
                        name="phone"
                        placeholder={t("contact.formulaires.phone")}
                        control={control}
                        rules={{ required: true }}
                        defaultCountry="CI"
                    />
                    <div className='flex'>
                        <div>
                            <input 
                                type="radio" 
                                value="Consultancy"
                                id='interest'
                                {...register("interest", { required: true })}
                            />
                            <label htmlFor="interest">{t("contact.formulaires.interest.consultancy")}</label>
                        </div>
                        <div>
                            <input 
                                type="radio" 
                                id='interest1'
                                value="events"
                                {...register("interest", { required: true })}
                            />
                            <label htmlFor="interest1">{t("contact.formulaires.interest.event")}</label>
                        </div>
                        <div>
                            <input 
                                type="radio" 
                                id='interest2'
                                value="corporate"
                                {...register("interest", { required: true })}
                            />
                            <label htmlFor="interest2">{t("contact.formulaires.corporate")}</label>
                        </div>
                    </div>
                    {/* <div className='flex-check'>
                        <input 
                            type="checkbox" 
                            id="check" 
                            {...register("confirm", { required: true })}
                        />
                        <label htmlFor='check'>I agree with storage and handling of my data by this website.</label>
                    </div> */}
                    <button>{t("contact.formulaires.button")}</button>
                </form>
            </div>
        </div>
    )
}
