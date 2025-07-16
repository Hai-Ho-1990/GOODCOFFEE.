import SplitType from 'split-type';
import gsap from 'gsap';
import { useEffect, RefObject } from 'react';

function SplitTextSection(ref: RefObject<HTMLElement | null>) {
    useEffect(() => {
        if (ref.current) {
            // Dela upp texten i rader och ord
            const split = new SplitType(ref.current, {
                types: 'lines,words'
            });

            // Se till att varje rad kan maskas
            if (split.lines) {
                split.lines.forEach((line) => {
                    (line as HTMLElement).style.overflow = 'hidden';
                    (line as HTMLElement).style.display = 'block';
                });
            }

            //starta onsynligt
            gsap.set(split.words, { y: '100%', opacity: 0 });

            // Animera varje ord in med stagger
            const el = ref.current;
            gsap.to(split.words, {
                y: '0%',
                opacity: 1,
                duration: 0.6,
                ease: 'power3.out',
                stagger: 0.03,
                delay: 0.2,
                scrollTrigger: {
                    trigger: el,
                    start: 'top 60%',
                    end: 'top 30%',
                    scrub: true,
                    markers: true
                }
            });
        }
    }, [ref]);
}

export default SplitTextSection;
