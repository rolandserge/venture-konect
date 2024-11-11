import BannerModel from '../../components/bannerModel'

export default function Prospection() {

    return (
        <div className='services-option-page'>
            <BannerModel
                title='Service > Corporate Executive Prospection'
                subtitle='We organise tailored business excursions for corporate executives to strategic markets'
            />

            <div className="content">
                <div className="part-1">
                    <span>Corporate Executive Prospection</span>
                    <p>
                        We organise tailored business excursions for corporate executives to strategic markets, 
                        enabling them to meet with key business partners and explore new opportunities. <br /><br />
                        Venture Konect carefully prepares the groundwork for these excursions, ensuring that our 
                        clients connect with the right stakeholders in countries critical to their industries. <br />These 
                        missions foster meaningful relationships that drive business growth and open doors to new ventures.
                    </p>
                </div>
                <div className="illustration">
                    <img 
                        src="/assets/event.jpg" 
                        alt="Corporate Execute prosoection" 
                    />
                </div>
            </div>
        </div>
    )
}
