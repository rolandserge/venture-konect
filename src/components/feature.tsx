import { Link } from 'react-router-dom'

export default function Feature() {

    return (
        <div className='feature-container'>
            <div className="card">
                <img 
                    src="/assets/energie.jpeg" 
                    alt="Image d'illustration" 
                />
                <div className="overlay">
                    <span>To find out about local projects</span>
                    <p>find top priority local projects needing investment and fulfil governments’ needs for funding and technology</p>
                    <Link to="#" className='more'>Open your project with us</Link>
                </div>
            </div>
            <div className="card">
                <img 
                    src="/assets/energie.jpeg" 
                    alt="Image d'illustration" 
                />
                <div className="overlay">
                    <span>To connect with key people</span>
                    <p>connect one to one with the right people and get the information that really matters to your business</p>
                    <Link to="#" className='more'>Let us connect you</Link>
                </div>
            </div>
            <div className="card">
                <img 
                    src="/assets/energie.jpeg" 
                    alt="Image d'illustration" 
                />
                <div className="overlay">
                    <span>To get the best business insight</span>
                    <p>get the best industry insight from relevant experts at our meetings</p>
                    <Link to="#" className='more'>At our regional meeting</Link>
                </div>
            </div>
        </div>
    )
}
