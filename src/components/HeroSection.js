import React, {useRef, useEffect} from 'react';
import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const HeroSection = ({id, title, description, img}) => {

    const imgRef = useRef(null)
    const textRef = useRef(null)

    useEffect(() => {

        gsap.fromTo(
            textRef.current,
            {
                y: '100px',
                autoAlpha: 0,
            },
            {
                y: '0',
                autoAlpha: 1,
                duration: 0.7,
                scrollTrigger: {
                    id:id,
                    trigger: textRef.current,
                    start: 'top center+=300',
                    toggleActions: 'play none none reverse',
                }
            }
        )

        gsap.fromTo(imgRef.current,
            {autoAlpha: 0},
            {
                duration: 1,
                autoAlpha: 1,
                ease: 'ease-in-out',
                scrollTrigger: {
                    id: id,
                    trigger: imgRef.current,
                    start: 'top center',
                    toggleActions: 'play none none reverse',
                }
            })
    }, []);

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
                <div ref={textRef}>
                    <div className={"font-bold text-2xl mb-6"}>{title}</div>
                    <div className={""}>{description}</div>
                </div>
            </div>
            <img
                ref={imgRef}
                className={"h-96 z-50"}
                src={img}
                alt={title}
            />
        </section>
    )
}

export default HeroSection;
