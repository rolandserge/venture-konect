import ReactPlayer from 'react-player'
import BannerModel from '../../components/bannerModel'
import { videos } from '../../data'
import { useTranslation } from 'react-i18next'

export default function Video() {

    const { t } = useTranslation()

    return (
        <div className='gallery'>
            <BannerModel 
                title={'Media > ' + t("media.video.title")}
                subtitle='Dive into our video gallery to experience highlights, stories, and events through dynamic visuals.'
            />

            <div className="gallery-content">
                <div className="title-gallery">
                    <span>{t("media.video.title")}</span>
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
