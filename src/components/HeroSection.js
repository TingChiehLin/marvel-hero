import React from 'react';

const HeroSection = ({id, title, description, img}) => {
    return (
        <section
            id={id}
            className="h-screen
                     bg-gray-100
                     pt-12
                     md:pt-24
                     flex
                     justify-around
                     items-center
                     even:flex-row-reverse
                     flex-wrap
                 "
        >
            <div className={"max-w-xl h-80 bg-black p-8 text-white rounded shadow-md z-50"}>
                <div className={"font-bold text-2xl mb-6"}>{title}</div>
                <div className={""}>{description}</div>
            </div>
            <img className={"h-96 z-50"} src={img} alt={title}/>
        </section>
    )
}

export default HeroSection;
