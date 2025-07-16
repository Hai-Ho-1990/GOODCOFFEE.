// Importerar React-hooken useEffect som används för att köra kod vid sidladdning
import { useEffect } from 'react';

// Importerar Lenis (smooth scroll-bibliotek)
import Lenis from '@studio-freight/lenis';

// Detta är en React-komponent som inte returnerar något visuellt (den är bara "logik")
export default function LenisProvider() {
    // useEffect körs en gång när komponenten monteras (t.ex. när sidan laddas)
    useEffect(() => {
        // Skapar en ny Lenis-instans (dvs. aktiverar smooth scrolling)
        const lenis = new Lenis({
            duration: 1.2, // Hur lång tid scroll-animationen ska ta (valfritt värde)
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            // En funktion som styr hur mjuk scrollen känns – detta ger en "ease out"-effekt
        });

        // Funktion som körs varje frame (~60 gånger per sekund)
        function raf(time: number) {
            lenis.raf(time); // Uppdaterar scrollposition baserat på tiden
            requestAnimationFrame(raf); // Fortsätter loopa med nästa frame
        }

        // Startar animation-loopen direkt
        requestAnimationFrame(raf);

        // Städfunktion som körs när komponenten tas bort (t.ex. om man byter sida)
        return () => {
            lenis.destroy(); // Stänger av scroll-effekterna och frigör resurser
        };
    }, []); // Tom dependency-array = körs bara en gång när komponenten laddas

    // Komponentens return – den renderar inget i gränssnittet
    return null;
}
