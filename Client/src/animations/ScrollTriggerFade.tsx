import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Animerar alla element med en given klass vid scroll.
 * Varje element får sin egen scroll-trigger + en automatisk fördröjning beroende på ordning.
 * @param selector CSS-selector för att rikta in sig på elementen (t.ex. '.scrollFade')
 */
export const useScrollTriggerFade = (selector: string = '.scrollFade') => {
    useEffect(() => {
        const elements = document.querySelectorAll<HTMLElement>(selector);
        const triggers: ScrollTrigger[] = [];

        elements.forEach((el, index) => {
            // Fade + slide in per element, med fördröjning beroende på index
            gsap.fromTo(
                el,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: 'power4.out',
                    delay: index * 0.3, // 👈 Sekventiell fördröjning (justera 0.2 vid behov)
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 60%',
                        toggleActions: 'play none none reverse',
                        markers: true,
                        onToggle: (st) => triggers.push(st)
                    }
                }
            );

            // Parallax-effekt (utan delay, så den rör sig direkt med scroll)
            // const parallax = gsap.fromTo(
            //     el,
            //     { y: 100 },
            //     {
            //         y: -100,
            //         ease: 'none',
            //         scrollTrigger: {
            //             trigger: el,
            //             start: 'top bottom',
            //             end: 'bottom top',
            //             scrub: true
            //             // markers: true
            //         }
            //     }
            // );

            // if (parallax.scrollTrigger) {
            //     triggers.push(parallax.scrollTrigger);
            // }
        });

        // Rensa alla triggers vid unmount
        return () => {
            triggers.forEach((trigger) => trigger.kill());
        };
    }, [selector]);
};
