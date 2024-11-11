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
                <p>At Venture Konect, we help create sustainable and viable investments solutions, via sourcing for local projects from key local institutions...</p>
                <div className="action">
                    <Link to="/services/consultancy-service" className='register'>Explore more</Link>
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
                <p>VK believes that there is no better way to accompany our partners than providing key industry talks with perspective to tackle...</p>
                <div className="action">
                    <Link to="/services/venture-konect's-events" className='register'>Explore more</Link>
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
                <p>We prepare grounds and  organise business excursions to countries that matters to our audience to meet their key business partners.</p>
                <div className="action">
                    <Link to="/services/corporate-excecute-prospection" className='register'>Explore more</Link>
                </div>
            </div>
        </div>
    )
}
