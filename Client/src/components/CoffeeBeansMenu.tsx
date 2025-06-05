import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useRef } from 'react';
type coffeProps = {
    id: number;
    name: string;
    content: string;
};

const coffeeData: coffeProps[] = [
    {
        id: 1,
        name: 'ARABICA',
        content: 'SMOOTHER'
    },
    {
        id: 2,
        name: 'ROBUSTA',
        content: 'BITTER'
    },
    {
        id: 3,
        name: 'LIBERICA',
        content: 'SWEET'
    },
    {
        id: 4,
        name: 'EXCELSA',
        content: 'UNIQUE'
    }
];

function CoffeeBeansMenu() {
    const [isHovered, setIsHovered] = useState<number | null>(null);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (isHovered !== null) {
            const el = contentRefs.current[isHovered - 1];
            if (el) {
                gsap.fromTo(
                    el,
                    { y: 30 },
                    { y: 0, duration: 1, ease: 'power2.out' }
                );
            }
        }
    }, [isHovered]);

    return (
        <section data-scroll-section className="min-h-screen bg-[black]">
            <h1 className="text-amber-400 text-left ml-[5vw] pt-[7vh]">
                . OUR COFFEE BEANS
            </h1>
            <nav className="navbar-links flex flex-col text-left font-bold ml-[15vw] mt-[12vh] leading-[0.8] text-[14vw] sm:text-[10vw] lg:text-[8vw]">
                {coffeeData.map((coffee, id) => (
                    <div
                        key={id}
                        className="coffee-item flex items-end gap-[30%]"
                    >
                        <Link
                            to={`/${coffee.name}`}
                            className="z-1 transform transition-transform duration-500 hover:translate-x-30"
                            onMouseEnter={() => {
                                setIsHovered(coffee.id);
                            }}
                        >
                            {isHovered === coffee.id && (
                                <span className="text-amber-400 ">.</span>
                            )}
                            {coffee.name}
                        </Link>
                        {isHovered === coffee.id && (
                            <div
                                ref={(el) => {
                                    contentRefs.current[id] = el;
                                }}
                                className="coffee-content flex flex-col text-right text-[2vw] font-light"
                            >
                                <p>
                                    0{coffee.id}/ {coffee.content}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </nav>
        </section>
    );
}

export default CoffeeBeansMenu;
