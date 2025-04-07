// import { gsap } from 'gsap';
// import { useEffect, useRef } from 'react';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

import Hero from './Hero';
import Navbar from './Navbar';
function Header() {
    // const heroRef = useRef(null);

    // useEffect(() => {
    //     if (heroRef.current) {
    //         gsap.fromTo(
    //             heroRef.current,
    //             { y: 50 },
    //             {
    //                 y: 80,

    //                 ease: 'power1.out',
    //                 scrollTrigger: {
    //                     trigger: heroRef.current,
    //                     start: 'top 0%',
    //                     end: 'top 5%',
    //                     markers: true,
    //                     scrub: 1
    //                 }
    //             }
    //         );
    //     }
    // }, []);
    return (
        <>
            <div className="h-[100vh]">
                <Navbar />
                <Hero />
                <div
                    // ref={heroRef}
                    className="overflow-hidden absolute top-0 left-0 w-full h-[100vh] flex items-center justify-center "
                >
                    <h1
                        className=" hisui-text text-[7rem] text-[#d4a010] font-extrabold leading-25 w-[55%]"
                        data-scroll
                        data-scroll-speed="3"
                    >
                        FULL PRODUCTION SERVICES BASED IN PARIS
                    </h1>
                </div>
            </div>
        </>
    );
}

export default Header;
