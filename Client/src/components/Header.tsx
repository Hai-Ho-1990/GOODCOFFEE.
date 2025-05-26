import Hero from './Hero';
import Navbar from './Navbar';
import { Product } from '../types/Product';

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
                <Navbar
                    cartCount={cartCount}
                    cartItems={cartItems}
                    onRemoveItem={onRemoveItem}
                    setCartCount={setCartCount}
                    setCartItems={setCartItems}
                />
                <Hero />
                <div
                    // ref={heroRef}
                    className="overflow-hidden absolute top-0 left-0 w-full h-[100vh] flex items-center justify-center "
                    data-scroll
                    data-scroll-speed="3"
                >
                    <h1 className=" text-[7rem] text-[#d4a010] font-extrabold leading-25 w-[55%]">
                        FULL PRODUCTION SERVICES BASED IN PARIS
                    </h1>
                </div>
            </section>
        </>
    );
}

export default Header;
