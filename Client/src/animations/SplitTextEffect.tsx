// Importerar Reacts useEffect-hook för att köra kod när komponenten mountas.
import { useEffect } from 'react';

// Importerar biblioteket SplitType som delar upp text i t.ex. ord, bokstäver eller rader.
import SplitType from 'split-type';

// Importerar GSAP (GreenSock Animation Platform) för att animera element.
import gsap from 'gsap';

// Importerar ScrollTrigger-pluginet för att koppla animationer till scroll-position.
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrerar ScrollTrigger så GSAP vet om att det används.
gsap.registerPlugin(ScrollTrigger);

// Exporterar hooken. Den tar ett CSS-selektor-namn, standard är '.splitTexts'.
export default function useSplitTextAnimation(
    selector: string = '.splitTexts'
) {
    // Kör när komponenten mountas eller när 'selector' ändras.
    useEffect(() => {
        // Hittar alla element på sidan som matchar den angivna CSS-selektorn.
        const elements = document.querySelectorAll(selector);

        // Loopar igenom varje element och skapar en animation.
        elements.forEach((el) => {
            // Delar upp texten i rader och ord med SplitType.
            const split = new SplitType(el as HTMLElement, {
                types: 'lines,words' // vi vill dela upp både rader och ord
            });

            // Om texten har blivit uppdelad i rader...
            if (split.lines) {
                // Sätt stil på varje rad för att kunna maska orden i animationen.
                split.lines.forEach((line) => {
                    (line as HTMLElement).style.overflow = 'hidden'; // döljer innehåll som går utanför
                    (line as HTMLElement).style.display = 'block'; // ser till att rader beter sig som block
                });
            }

            // Sätter startposition för varje ord: osynliga och flyttade neråt.
            gsap.set(split.words, { y: '100%', opacity: 0 });

            // Skapar själva animationen med GSAP för varje ord.
            gsap.to(split.words, {
                y: '0%', // flytta upp till originalposition
                opacity: 1, // fade in till full synlighet
                duration: 0.6, // hur lång varje ord-animation är
                ease: 'power3.out', // typ av rörelse (ease)
                stagger: 0.03, // fördröjning mellan varje ords animation
                delay: 0.2, // liten paus innan animationen börjar
                scrollTrigger: {
                    trigger: el, // starta animation när detta element scrollas in
                    start: 'top 60%', // animation börjar när toppen av elementet är vid 60% av viewporten
                    end: 'top 30%', // animation slutar när toppen når 30%
                    scrub: true // animation synkas med scroll (fram och tillbaka)
                    // markers: true // sätt till true för att se var animationen triggas (debug)
                }
            });
        });

        // useEffect körs om 'selector' ändras (men vanligtvis bara vid första render).
    }, [selector]);
}
