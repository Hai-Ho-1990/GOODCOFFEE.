// import { RefObject, useEffect } from 'react';
// import gsap from 'gsap';

// export const MaskedTextAnimation = (ref: RefObject<HTMLElement | null>) => {
//     useEffect(() => {
//         if (ref.current) {
//             const el = ref.current;

//             gsap.to(el, {
//                 y: 0,
//                 stagger: 0.05,
//                 delay: 0.2,
//                 duration: 0.1,
//                 scrollTrigger: {
//                     trigger: el,
//                     start: 'top 90%',
//                     end: 'top 60%',
//                     scrub: true
//                 }
//             });
//         }
//     }, [ref]);
// };

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useMaskedTextAnimation = (selector: string = '.maskedText') => {
    useEffect(() => {
        const elements = document.querySelectorAll(selector);

        elements.forEach((el) => {
            gsap.to(el, {
                y: 0,
                stagger: 0.05,
                delay: 0.2,
                duration: 0.1,
                scrollTrigger: {
                    trigger: el,
                    start: 'top 90%',
                    end: 'top 60%',
                    scrub: true
                }
            });
        });
    }, [selector]);
};
