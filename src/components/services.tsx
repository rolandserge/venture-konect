import { Link } from 'react-router-dom'

export default function Service() {

    return (
        <div className="cards-services">
            <div className="card">
                <div className="card-icon">
                    <img 
                        src="/assets/icons/consultant.png" 
                        alt="Consultancy services"  
                    />
                </div>
                <div className="title">
                    <span>Consultancy service</span>
                </div>
                <p>
                    At Venture Konect, we help create sustainable and viable investments solutions, via sourcing for local projects from key local institutions...
                    {/* and bring them 
                    to our network of global investors and technology providers seeking key opportunities emerging market across the globe. */}
                </p>
                <div className="action">
                    <Link to="#" className='register'>Explore more</Link>
                </div>
            </div>
            <div className="card">
                <div className="card-icon">
                    <img 
                        src="/assets/icons/calendrier.png" 
                        alt="Consultancy services"  
                    />
                </div>
                <div className="title">
                    <span>Venture Konect's Events</span>
                </div>
                <p>
                    VK believes that there is no better way to accompany our partners than providing key industry talks with perspective to tackle...
                    {/* key challenges.
                    Our targeted dialogues focused specifically on the Energy, Mines and industrial sectors development in the emerging markets, where international 
                    investors can build relationships with credible sector stakeholders. The aim is to debate key frameworks in term of regulations, legislation ,policies and international best 
                    practice that go along with project development. */}
                </p>
                <div className="action">
                    <Link to="#" className='register'>Explore more</Link>
                </div>
            </div>
            <div className="card">
                <div className="card-icon">
                    <img 
                        src="/assets/icons/prospection.png" 
                        alt="Consultancy services"  
                    />
                </div>
                <div className="title">
                    <span>Corporate Executive Prospection</span>
                </div>
                <p>
                    We prepare grounds and  organise business excursions to countries that matters to our audience to meet their key business partners.
                </p>
                <div className="action">
                    <Link to="#" className='register'>Explore more</Link>
                </div>
            </div>
        </div>
    )
}
