import SignupComponent from '../components/SigninComponent';
import { Product } from '../types/Product';
import Navbar from '../components/Navbar';

import DropdownMenuComponent from '../components/DropdownMenuComponent';

interface signInProps {
    cartCount: number;
    cartItems: Product[];
    onRemoveItem: (name: string) => void;
    setCartCount: (count: number) => void;
    setCartItems: (items: Product[]) => void;
}

function Signin({
    cartCount,
    cartItems,
    onRemoveItem,
    setCartCount,
    setCartItems
}: signInProps) {
    return (
        <section
            data-scroll-section
            className="h-full w-[100vw] flex flex-col "
        >
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
            <SignupComponent />
        </section>
    );
}

export default Signin;
