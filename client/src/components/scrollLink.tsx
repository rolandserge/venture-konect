import { Link } from 'react-scroll';

interface ScrollLinkProps {
    title: string;
    lien: string;
}
export default function ScrollLink({ title, lien } : ScrollLinkProps) {
    return (
        <Link 
            to={lien} 
            spy={true} 
            smooth={true} 
            duration={500}
            delay={100}
            className='lien'
            style={{ cursor: "pointer"}}
        >
            {title}
        </Link>
    )
}
