import { RefObject, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollTriggerH1 = (ref: RefObject<HTMLElement | null>) => {
    useEffect(() => {
        if (!ref.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ref.current,
                {
                    y: 100,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: ref.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                        // markers: true // ← Avkommentera för att debugga
                    }
                }
            );
            //parallax scroll
            gsap.fromTo(
                ref.current,
                {
                    y: 100 // Startposition (lite längre ner)
                },
                {
                    y: -100, // Slutposition (lite längre upp)
                    ease: 'none', // Inga "easing" effekter för parallax
                    scrollTrigger: {
                        trigger: ref.current,
                        start: 'top bottom', // När toppen av <h1> når botten av viewport
                        end: 'bottom top', // När botten av <h1> når toppen av viewport
                        scrub: true // Scrollen styr animationen
                        // markers: true // Använd för debugging
                    }
                }
            );
        }, ref);
        return () => ctx.revert();
    }, [ref]);
};
