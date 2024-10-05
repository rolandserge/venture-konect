import BannerModel from '../../components/bannerModel'

export default function Photo() {

    return (
        <div className='gallery'>
            <BannerModel
                title='Media > Photo Gallery'
                subtitle='Explore our photo gallery to capture moments that showcase our journey, achievements, and memorable events.'
            />

            <div className="gallery-content">
                <div className="title-gallery">
                    <span>Photo Gallery</span>
                </div>
                <div className="card-gallery">
                    <div className="card">
                        <img 
                            src="/assets/gallery/networking1.jpg" 
                            alt="Gallery 1" 
                        />
                    </div>
                    <div className="card">
                        <img 
                            src="/assets/gallery/networking2.jpg" 
                            alt="Gallery 1" 
                        />
                    </div>
                    <div className="card">
                        <img 
                            src="/assets/gallery/networking3.jpg" 
                            alt="Gallery 1" 
                        />
                    </div>
                    <div className="card">
                        <img 
                            src="/assets/gallery/networking4.jpg" 
                            alt="Gallery 1" 
                        />
                    </div>
                    <div className="card">
                        <img 
                            src="/assets/gallery/networking5.jpg" 
                            alt="Gallery 1" 
                        />
                    </div>
                    <div className="card">
                        <img 
                            src="/assets/gallery/networking6.jpg" 
                            alt="Gallery 1" 
                        />
                    </div>
                    <div className="card">
                        <img 
                            src="/assets/gallery/networking7.jpg" 
                            alt="Gallery 1" 
                        />
                    </div>
                    <div className="card">
                        <img 
                            src="/assets/gallery/networking2.jpg" 
                            alt="Gallery 1" 
                        />
                    </div>
                    <div className="card">
                        <img 
                            src="/assets/gallery/networking9.jpg" 
                            alt="Gallery 1" 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
