
interface BannerProps {
    title: string,
    subtitle: string,
}

export default function BannerModel({ title, subtitle } : BannerProps) {

    return (
        <div className="banner-model">
            <span>{title}</span>
            <p>{subtitle}</p>
        </div>
    )
}
