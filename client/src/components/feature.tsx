import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

interface featuresProps {
    image: string;
    title: string;
    description: string;
    button: string;
    redirect: string;
}

export default function Feature() {

    const { t } = useTranslation()

    const featuresElement = t('home.features', { returnObjects: true});

    return (
        <div className='feature-container'>
            {Object.values(featuresElement).map((feature: featuresProps, index: number) => (    
                <div className="card" key={index}>
                    <img 
                        src={feature.image} 
                        alt={feature.title}
                    />
                    <div className="overlay">
                        <span>{feature.title}</span>
                        <p>{feature.description}</p>
                        <Link to={feature.redirect} className='more'>{feature.button}</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}
