import Logo from '../imgs/marvel_logo.png';

const Footer = () => {
    return (
        <div className="w-full h-16 bg-gray-900 flex justify-center items-center">
            <a href={"https://marvel.com"} target={"_blank"} rel={"noreferrer noopener"}>
                <img className="w-24" src={Logo} alt="marvel"/>
            </a>
        </div>
    )
}

export default Footer;
