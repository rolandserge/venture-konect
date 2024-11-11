import BannerModel from '../../components/bannerModel'
import Event from '../../components/event'

export default function Events() {

    return (
        <div className='services-option-page'>
            <BannerModel
                title='Services > Events'
                subtitle='We believe that impactful discussions and collaboration are essential for addressing'
            />

            <div className="content">
                <div className="part-1">
                    <span>Venture Konect's Events</span>
                    <p>
                        We believe that impactful discussions and collaboration are essential for addressing the challenges in emerging markets. 
                        Venture Konect organizes targeted industry dialogues, particularly focused on the energy, mining, and industrial sectors.<br /><br /> 
                        Our events bring together global investors and credible sector stakeholders to discuss trends, share insights, and forge partnerships.<br />
                        These events provide a platform for fostering innovation and sustainable development in key industries across the globe.
                    </p>
                </div>
            </div>
                <div className="wapecc-illustration">
                   
                  <Event />
                </div>
        </div>
    )
}
