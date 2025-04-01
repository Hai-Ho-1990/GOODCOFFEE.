// import { gsap } from 'gsap';
// import { useEffect } from 'react';
// import SplitType from 'split-type';
import Hero from './Hero';
import Navbar from './Navbar';
function Header() {
    // useEffect(() => {
    //     const splitText = new SplitType('.hisui-text', { types: 'chars' });

    //     gsap.from(splitText.chars, {
    //         y: 500,
    //         stagger: 0.05,
    //         ease: 'power3.out',
    //         duration: 1
    //     });
    // }, []);

    return (
        <>
            <Navbar />
            <Hero />
            <div className="overflow-hidden absolute top-0 left-0 w-full h-[100vh] flex items-center justify-center">
                <h1 className=" hisui-text text-[7rem] text-[#d4a010] font-extrabold leading-25 w-[70%]">
                    Full production services based in Paris
                </h1>
            </div>
        </>
    );
}

export default Header;
