import {Link} from 'react-scroll';

const NavItem = ({id, text}) => {
    return (
        <Link
            className={"hover:text-amber-300"}
            to={id}
            smooth={true}
            duration={700}
        >
            <div className={"text-xs md:text-base"}>{text}</div>
        </Link>
    )
}

export default NavItem;
