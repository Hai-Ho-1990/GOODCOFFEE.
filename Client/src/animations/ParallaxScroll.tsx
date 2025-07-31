// hooks/useParallaxScroll.ts
import { RefObject, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook som animerar ett enskilt element med parallax + fade-in.
 */
export const useParallaxScroll = (ref: RefObject<HTMLElement | null>) => {
    useEffect(() => {
        if (!ref.current) return;

        const ctx = gsap.context(() => {
            // Fade-in
            gsap.fromTo(
                ref.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: ref.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                        // markers: true
                    }
                }
            );

            // Parallax scroll
            gsap.fromTo(
                ref.current,
                { y: 100 },
                {
                    y: -100,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: ref.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true
                        // markers: true
                    }
                }
            );
        }, ref);

        return () => ctx.revert(); // Rensa GSAP context vid unmount
    }, [ref]);
};
