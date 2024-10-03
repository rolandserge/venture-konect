import BannerModel from '../../components/bannerModel'

export default function Consultancy() {

    return (
        <div className='services-option-page'>
            <BannerModel />

            <div className="content">
                {/* <Service /> */}
                <div className="part-1">
                    <span>Consultancy service</span>
                    <p>
                        At Venture Konect, we specialize in identifying and creating sustainable investment opportunities. <br />
                        We source high-potential local projects from key institutions in emerging markets and connect them with our global network of 
                        investors and technology providers. <br /> <br /> By leveraging our expertise, we facilitate viable solutions that meet the needs of both local 
                        stakeholders and international partners, ensuring a mutually beneficial outcome for all parties involved.
                    </p>
                </div>
                <div className="illustration">
                    <img 
                        src="/assets/consultancy.jpg" 
                        alt="Corporate Execute prosoection" 
                    />
                </div>
            </div>
        </div>
    )
}
