import { useEffect, useRef } from 'react';
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

    return (
        <div ref={containerRef} data-scroll-container>
            {children}
        </div>
    );
}
