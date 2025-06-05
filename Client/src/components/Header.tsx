import Hero from './Hero';
import Navbar from './Navbar';
import { Product } from '../types/Product';
import DropdownMenuComponent from '../components/DropdownMenuComponent';

interface headerProps {
    cartCount: number;
    cartItems: Product[];
    onRemoveItem: (name: string) => void;
    setCartCount: (count: number) => void;
    setCartItems: (items: Product[]) => void;
}

function Header({
    cartCount,
    cartItems,
    onRemoveItem,
    setCartCount,
    setCartItems
}: headerProps) {
    return (
        <>
            <section data-scroll-section className="h-[100vh] w-[100vw]">
                <div className="hidden md:block">
                    <Navbar
                        cartCount={cartCount}
                        cartItems={cartItems}
                        onRemoveItem={onRemoveItem}
                        setCartCount={setCartCount}
                        setCartItems={setCartItems}
                    />
                </div>
                <div className="block md:hidden z-10">
                    <DropdownMenuComponent
                        cartCount={cartCount}
                        cartItems={cartItems}
                        onRemoveItem={onRemoveItem}
                        setCartCount={setCartCount}
                        setCartItems={setCartItems}
                    />
                </div>
                <Hero />
                <div
                    // ref={heroRef}
                    className="overflow-hidden absolute top-0 left-0 w-full h-[100vh] flex items-center justify-center "
                    data-scroll
                    data-scroll-speed="3"
                >
                    <h1 className=" text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] text-[#d4a010] font-extrabold md:leading-22 lg:leading-25 w-[55%] ">
                        PREMIUM COFFEE ROASTING. BASED IN STOCKHOLM
                    </h1>
                </div>
            </section>
        </>
    );
}

export default Header;
