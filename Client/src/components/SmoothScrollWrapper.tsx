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
    const location = useLocation();

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
            scrollRef.current?.update();
        }, 2500);

        return () => {
            clearInterval(interval);
            scrollRef.current?.destroy();
        };
    }, []);

    // Uppdatera scroll vid sidbyte
    useEffect(() => {
        setTimeout(() => {
            scrollRef.current?.update();
        }, 100);
    }, [location.pathname]);

    // När alla bilder laddats, uppdatera scroll
    useEffect(() => {
        const handleImagesLoaded = () => {
            scrollRef.current?.update();
        };

        const images = containerRef.current?.querySelectorAll('img');
        if (!images) return;

        let loaded = 0;
        images.forEach((img) => {
            if (img.complete) {
                loaded++;
            } else {
                img.addEventListener('load', () => {
                    loaded++;
                    if (loaded === images.length) {
                        handleImagesLoaded();
                    }
                });
            }
        });

        if (loaded === images.length) {
            handleImagesLoaded();
        }
    }, [children]);

    return (
        <div ref={containerRef} data-scroll-container>
            {children}
        </div>
    );
}
