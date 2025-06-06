import Navbar from '../Navbar';
import HeroProduct from './HeroProduct';
import { Product } from '../../types/Product';
import DropdownMenuComponent from '../../components/DropdownMenuComponent';

interface ProductHeaderProps {
    cartCount: number;
    cartItems: Product[];
    onRemoveItem: (name: string) => void;
    setCartCount: (count: number) => void;
    setCartItems: (items: Product[]) => void;
}
function ProductHeader({
    cartCount,
    cartItems,
    onRemoveItem,
    setCartCount,
    setCartItems
}: ProductHeaderProps) {
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

                <HeroProduct />
                <div
                    // ref={heroRef}
                    className="overflow-hidden absolute top-0 left-0 w-full h-[100vh] flex items-center justify-center "
                    data-scroll
                    data-scroll-speed="3"
                >
                    <div>
                        <h1 className="text-[3rem] sm:text-[5rem] lg:text-[9rem] text-[#d4a010] font-extrabold lg:leading-25 w-[100%]">
                            SUMMER 2025
                        </h1>
                        <h4 className="sm:text-[1.5rem] lg:text-[2rem] font-extrabold">
                            SHOP NOW
                        </h4>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductHeader;
