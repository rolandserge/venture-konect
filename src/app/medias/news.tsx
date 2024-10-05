import { Link } from 'react-router-dom'
import BannerModel from '../../components/bannerModel'

export default function News() {

    return (
        <div className='news-page'>
            <BannerModel
                title='Media > News'
                subtitle='Stay updated with the latest news and insights from our industry, covering key developments and trends shaping the future.'
            />

            <div className="news-content-infos">
                <div className="title-news">
                    <span>News</span>
                </div>
                <div className="card-news">
                    <div className="news">
                        <div className="card-image">
                            <Link to="#">
                                <img 
                                    src="/assets/reseau.webp" 
                                    alt="reseau post" 
                                />
                            </Link>
                        </div>
                        <div className="infos">
                            <Link to="#" className='title'>A digital prescription for the pharma industry...</Link>
                            <div className="option">
                                <span>Technologie</span>
                                <p>12 min read</p>
                            </div>
                        </div>
                    </div>
                    <div className="news">
                        <div className="card-image">
                            <Link to="#">
                                <img 
                                    src="/assets/energie.jpeg" 
                                    alt="reseau post" 
                                />
                            </Link>
                        </div>
                        <div className="infos">
                            <Link to="#" className='title'>A digital prescription for the pharma industry</Link>
                            <div className="option">
                                <span>Technologie</span>
                                <p>17 hours ago read</p>
                            </div>
                        </div>
                    </div>
                    <div className="news">
                        <div className="card-image">
                            <Link to="#">
                                <img 
                                    src="/assets/mission.jpg" 
                                    alt="reseau post" 
                                />
                            </Link>
                        </div>
                        <div className="infos">
                            <Link to="#" className='title'>A digital prescription for the pharma industry</Link>
                            <div className="option">
                                <span>Societé</span>
                                <p>December 2, 2018 read</p>
                            </div>
                        </div>
                    </div>
                    <div className="news">
                        <div className="card-image">
                            <Link to="#">
                                <img 
                                    src="/assets/energie.jpeg" 
                                    alt="reseau post" 
                                />
                            </Link>
                        </div>
                        <div className="infos">
                            <Link to="#" className='title'>A digital prescription for the pharma industry</Link>
                            <div className="option">
                                <span>Technologie</span>
                                <p>17 hours ago read</p>
                            </div>
                        </div>
                    </div>
                    <div className="news">
                        <div className="card-image">
                            <Link to="#">
                                <img 
                                    src="/assets/mission.jpg" 
                                    alt="reseau post" 
                                />
                            </Link>
                        </div>
                        <div className="infos">
                            <Link to="#" className='title'>A digital prescription for the pharma industry</Link>
                            <div className="option">
                                <span>Societé</span>
                                <p>December 2, 2018 read</p>
                            </div>
                        </div>
                    </div>
                    <div className="news">
                        <div className="card-image">
                            <Link to="#">
                                <img 
                                    src="/assets/reseau.webp" 
                                    alt="reseau post" 
                                />
                            </Link>
                        </div>
                        <div className="infos">
                            <Link to="#" className='title'>A digital prescription for the pharma industry</Link>
                            <div className="option">
                                <span>Technologie</span>
                                <p>12 min read</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
