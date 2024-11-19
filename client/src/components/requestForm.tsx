import 'react-phone-number-input/style.css'
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
import { useForm } from "react-hook-form";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { useTranslation } from 'react-i18next';
import { UseAxios } from '../context/axiosContext';
import { Loader } from '@mantine/core';
import { useState } from 'react';
import { toast } from 'react-toastify';

interface FormDataProps {
    name: string,
    jobTitle: string;
    company: string;
    email: string,
    phone: number,
    interest: string,
}

export default function RequestForm() {

    const { register, formState: { errors }, reset, control, handleSubmit } = useForm<FormDataProps>();
    const [loading, setLoading] = useState(false);
    const axios = UseAxios()
    const { t } = useTranslation()

    const onSubmit = async(data: FormDataProps) => {

        setLoading(true);

        try {
            const res = await axios.post("/project", data)
            
            if(res.status == 200) {
                reset()
                toast.success(<p>Success. We'll be in touch. Thank you for your confidence <br />See you soon</p>);
            } else if(res.status == 400) {
                toast.error(res.data.message);
            }
        } catch (error: any ) {
            if(error.status == 400) {
                toast.error(error.response.data.message)
            }
            console.log(error)
            setLoading(false)
        } finally {
            setLoading(false);
        }
    }

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
                <form onSubmit={handleSubmit(onSubmit)} id='form'>
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
                        {...register("jobTitle", { required: true, minLength: 3 })}
                    />
                    {errors.jobTitle?.type === "required" && <span style={{ color: "red"}}>This field is required</span>}
                    {errors.jobTitle?.type === "minLength" && <span style={{ color: "red"}}>This field at least 3 characters</span>}
                    <input 
                        type="text" 
                        placeholder={t("contact.formulaires.company")}
                        {...register("company", { required: true, minLength: 5 })}
                    />
                    {errors.company?.type === "required" && <span style={{ color: "red"}}>This field is required</span>}
                    {errors.company?.type === "minLength" && <span style={{ color: "red"}}>This field at least 5 characters</span>}
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
                    <button>
                        { loading ? <Loader size="sm" color="white" /> : t("contact.formulaires.button")}
                    </button>
                </form>
            </div>
        </div>
    )
}
