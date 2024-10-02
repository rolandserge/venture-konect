import BannerModel from '../../components/bannerModel'

export default function Consultancy() {

    return (
        <div className='consultancy-page'>
            <BannerModel />

            <div className="content">
                {/* <Service /> */}
                <div className="part-1">
                    <span>Consultancy service</span>
                    <p>
                        At Venture Konect, we help create sustainable and viable investments solutions, via sourcing for local projects from 
                        key local institutions and bring them to our network of global investors and technology providers seeking key opportunities emerging market across the globe.
                    </p>
                </div>
            </div>
        </div>
    )
}
