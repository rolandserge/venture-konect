import ReactPlayer from 'react-player'
import BannerModel from '../../components/bannerModel'
import { videos } from '../../data'

export default function Video() {
    return (
        <div className='gallery'>
            <BannerModel />

            <div className="gallery-content">
                <div className="title-gallery">
                    <span>Video Gallery</span>
                </div>
                <div className="card-gallery">
                { videos.map(item => (
                    <div className="card-video" key={item.id}>
                        <ReactPlayer
                            controls
                            width="100%" height="100%"
                            url={item.url}
                            muted
                        />
                    </div>
                 ))}
                </div>
            </div>
        </div>
    )
}
