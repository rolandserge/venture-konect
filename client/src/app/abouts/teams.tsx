import BannerModel from '../../components/bannerModel'
import { Link } from 'react-router-dom'

export default function Teams() {

    return (
        <div className='teams-page'>
            <BannerModel 
                title='About > Teams'
                subtitle='Our teams are dedicated to delivering innovative solutions, combining expertise and collaboration to achieve excellence in every project.'
            />
            
            <div className="our-teams">
                <p className='description'>
                    We are a company with an emerging market-focused team of professionals specialising in  promoting and 
                    facilitating socio-economic development, with particular focus on supporting private sector engagement towards local institutions.
                    <br />
                    At Venture Konect, we believe that our experience, skills and passion can impact the future of Africa.
                </p>
                <div className="card-teams">
                    <div className="card">
                        <div className="card-image">
                            <img src="/assets/user.webp" alt="user of teams" />
                        </div>
                        <div className="info">
                            <div className="head">
                                <p>John Doe</p>
                                <span>Intermediaire</span>
                            </div>
                            <p className="role">She is an accomplished business developer. Her skills at creating relationships with clients...</p>
                            <div className="action">
                                <div className='rond' />
                                <Link to="#" className='more'>Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src="/assets/florence.jpg" alt="user of teams" />
                        </div>
                        <div className="info">
                            <div className="head">
                                <p>Florence Maxwell-Aylwin</p>
                                <span>Deputy Director</span>
                            </div>
                            <p className="role">She is an accomplished business developer. Her skills at creating relationships with clients...</p>
                            <div className="action">
                                <div className='rond' />
                                <Link to="#" className='more'>Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src="/assets/user.webp" alt="user of teams" />
                        </div>
                        <div className="info">
                            <div className="head">
                                <p>John Doe</p>
                                <span>Intermediaire</span>
                            </div>
                            <p className="role">She is an accomplished business developer. Her skills at creating relationships with clients...</p>
                            <div className="action">
                                <div className='rond' />
                                <Link to="#" className='more'>Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src="/assets/florence.jpg" alt="user of teams" />
                        </div>
                        <div className="info">
                            <div className="head">
                                <p>Florence Maxwell-Aylwin</p>
                                <span>Deputy Director</span>
                            </div>
                            <p className="role">She is an accomplished business developer. Her skills at creating relationships with clients...</p>
                            <div className="action">
                                <div className='rond' />
                                <Link to="#" className='more'>Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
