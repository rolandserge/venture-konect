import { Link } from "react-router-dom";

export default function Event() {

    return (
        <div className="site-wapecc">
                <div className="overlay">
                    <div className="annonce">
                        <div className="head">
                            <div className="logo">
                                <img 
                                    src="/assets/wapecc.png" 
                                    alt="Logo de wapecc 23" 
                                />
                            </div>
                            <p>Events Wapecc23</p>
                        </div>
                        <p>
                            WAPECC Lome23 is the 3rd of a series of events held in the region, to bring together the key players 
                            and drive forward the region's energy and infrastructure transformation, ensuring that reliable and affordable energy becomes a reality for all... 
                        </p>
                        <div className="action-button">
                            <Link to="#" target='_blanket' className='site'>Go to the website</Link>
                        </div>
                    </div>
                </div>
        </div>
  )
}
