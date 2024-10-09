import 'react-phone-number-input/style.css'
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
import { useForm } from "react-hook-form";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";

interface FormDataProps {
    lastName: string,
    firstName: string,
    email: string,
    phone: number,
    interest: string,
    confirm: boolean,
}

export default function RequestForm() {

    const { register, control, handleSubmit } = useForm<FormDataProps>();

    const onSubmit = (data: FormDataProps) => console.log(data);

    return (
        <div className='request-form'>
            <div className="title">
                <h1>Request a call back</h1>
            </div>
            <div className="container-request">
                <div className='infos-container'>
                    <div className="card-image">
                        <img
                            src='/assets/box.jpg'
                            alt="image d'illustration"
                            />

                    </div>
                    <p>Would you like to speak to one of our advisers over the phone? Just submit your details and we’ll be in touch shortly. You can also email us if you would prefer.</p>
                    <div className="contact">
                        <div className="adresse">
                            <div className="icon">
                                <LuPhone size={24} color='#808080' />
                            </div>
                            <div className="info">
                                <span>Phone</span>
                                <p>+44 (0) 207 129 7356</p>
                            </div>
                        </div>
                        <div className="adresse">
                            <div className="icon">
                                <IoLocationOutline size={24} color='#808080' />
                            </div>
                            <div className="info">
                                <span>Address</span>
                                <p>128 Cannon Workshops, Cannon Drive, 
                                London E14 4AS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input 
                        type="text" 
                        placeholder='Enter your FirstName'
                        {...register("firstName", { required: true })}
                    />
                    <input 
                        type="text" 
                        placeholder='Enter your LastName'
                        {...register("lastName", { required: true })}
                    />
                    <input 
                        type="email"
                        placeholder='Enter your Email'
                        {...register("email", { required: true })}
                    />
                    <PhoneInputWithCountry
                        name="phone"
                        placeholder="Enter phone number"
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
                            <label htmlFor="interest">Consultancy</label>
                        </div>
                        <div>
                            <input 
                                type="radio" 
                                id='interest1'
                                value="events"
                                {...register("interest", { required: true })}
                            />
                            <label htmlFor="interest1">Events</label>
                        </div>
                    </div>
                    <div className='flex-check'>
                        <input 
                            type="checkbox" 
                            id="check" 
                            {...register("confirm", { required: true })}
                        />
                        <label htmlFor='check'>I agree with storage and handling of my data by this website.</label>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}
