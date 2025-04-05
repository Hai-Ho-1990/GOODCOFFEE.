import { Link } from 'react-router-dom';
import { useState } from 'react';

type coffeProps = {
    id: number;
    name: string;
    content: string;
};

const coffeeData: coffeProps[] = [
    {
        id: 1,
        name: 'ARABICA',
        content: 'Smoother, Sweeter, Lower Caffein'
    },
    {
        id: 2,
        name: 'ROBUSTA',
        content: 'Bitter, Higher Caffein, Lower Altitude'
    },
    {
        id: 3,
        name: 'LIBERICA',
        content: 'Sweet, Fruity, High Caffein'
    },
    {
        id: 4,
        name: 'EXCELSA',
        content: 'Unique, Fruity, Limited Availability'
    }
];

function CoffeeBeansMenu() {
    const [isHovered, setIsHovered] = useState<number | null>(null);

    return (
        <div>
            <nav className="navbar-links flex flex-col text-left font-bold ml-[15vw] mt-[12vh] leading-[0.7] text-[8vw]">
                {coffeeData.map((coffee, id) => (
                    <div key={id} className="coffee-item flex items-end">
                        <Link
                            to={`/${coffee.name}`}
                            className="z-1"
                            onMouseEnter={() => setIsHovered(coffee.id)}
                            onMouseLeave={() => setIsHovered(null)}
                        >
                            {coffee.name}
                        </Link>
                        {isHovered === coffee.id && (
                            <div className="coffee-content flex flex-col text-right text-[0.8vw] ">
                                <p>
                                    0{coffee.id}. {coffee.content}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </nav>
        </div>
    );
}

export default CoffeeBeansMenu;
