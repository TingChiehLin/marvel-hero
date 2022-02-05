import React, {useState,useEffect} from 'react';

const HeroIntro = () => {

    const [offsetY, setOffsetY] = useState(0)

    const handleScroll = () => {
        setOffsetY(window.pageYOffset)
    }

    useEffect(() => {
       window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [offsetY]);

    return (
        <div className={"relative"}>
            <div style={{transform: `translateY(${offsetY * 0.3}px)`}} className={"absolute inset-0 bg-black bg-opacity-75 z-10"}></div>
            <div style={{transform: `translateY(${offsetY * 0.3}px)`}}
                 className={"bg-hero-background bg-cover bg-center w-full h-screen"}></div>
            <div className={"absolute top-40 md:top-60 left-10 md:left-40 transform z-10"}>
                <div style={{transform: `translateY(${offsetY * 0.5}px)`}}
                     className={"w-[24rem] md:w-[40rem]"}
                >
                    <div className={"text-white text-5xl md:text-7xl font-bold text-left"}>Welcome to</div>
                    <div className={"text-white text-5xl md:text-7xl font-bold text-left"}>Marvel Universe</div>
                    <div className={"mt-4 text-white text-base md:text-xl font-light text-left"}>
                        The Avengers with heros saving the world and show their abilities in order to defend exotic species
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroIntro;
