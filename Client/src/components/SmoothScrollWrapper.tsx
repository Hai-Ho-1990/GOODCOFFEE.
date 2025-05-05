import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import './SmoothScrollWrapper.css';

export default function SmoothScrollWrapper({
    children
}: {
    children: React.ReactNode;
}) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const scrollRef = useRef<LocomotiveScroll | null>(null);

    useEffect(() => {
        if (containerRef.current) {
            scrollRef.current = new LocomotiveScroll({
                el: containerRef.current,
                smooth: true,
                lerp: 0.1,
                multiplier: 1.2
            });
        }

        const interval = setInterval(() => {
            scrollRef.current?.update(); // Uppdaterar Locomotive Scroll
        }, 2500);

        return () => {
            clearInterval(interval); // Rensa intervallet vid unmount
            scrollRef.current?.destroy(); // Rensa Locomotive Scroll
        };
    }, []);

    const location = useLocation();

    useEffect(() => {
        // Används för att smoothscroll och innehållet ska appliceras även i andra path
        setTimeout(() => {
            scrollRef.current?.update();
        }, 100); // liten delay för att låta DOM uppdateras
    }, [location.pathname]);

    return (
        <div ref={containerRef} data-scroll-container>
            {children}
        </div>
    );
}
