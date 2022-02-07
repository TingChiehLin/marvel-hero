import React, {useEffect, useState} from "react";

import Logo from '../imgs/avenger_logo.png';
import NavItem from "../components/NavItem";

const Header = () => {

    const navItems = [{id: 'iron-man', text: 'IRON MAN'}, {id: 'spider-man', text: "SPIDER-MAN"},
                      {id: 'thor', text: "THOR"}, {id: 'black-widow', text: "BLACK WIDOW"}]

    const [navBarAni, setNavBarAni] = useState("")

    useEffect(() => {
        const toggleHeader = () => {
            const pixels = window.pageYOffset

            if (pixels > 60) {
                setNavBarAni("opacity-70 transition duration-700 ease-in-out shadow-xl")
            } else {
                setNavBarAni("")
            }
        }

        document.addEventListener('scroll', toggleHeader)
        return () => window.removeEventListener('scroll', toggleHeader)
    }, [navBarAni])

    return (
        <header className={`fixed 
                                top-0 
                                left-0 
                                h-16 
                                w-full 
                                bg-gray-900 
                                z-10 
                                flex
                                justify-between
                                items-center
                                px-16
                                z-[100]
                                ${navBarAni}`}
        >
            <a href={"https://marvel.com"} target={"_blank"} rel={"noreferrer noopener"}>
                <img className="z-2 w-10" src={Logo} alt={"logo"}/>
            </a>
            <div className="flex justify-center items-center gap-2 md:gap-10 text-white cursor-pointer font-bold">
                {
                    navItems.map(e => <NavItem key={e.id} id={e.id} text={e.text}/>)
                }
            </div>
        </header>
    )
}

export default Header;
