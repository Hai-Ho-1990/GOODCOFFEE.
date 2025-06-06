import LoginComponent from '../components/LoginComponent';
import Navbar from '../components/Navbar';
import { Product } from '../types/Product';

interface loginProps {
    cartCount: number;
    cartItems: Product[];
    onRemoveItem: (name: string) => void;
    setCartCount: (count: number) => void;
    setCartItems: (items: Product[]) => void;
}

export default function Login({
    cartCount,
    cartItems,
    onRemoveItem,
    setCartCount,
    setCartItems
}: loginProps) {
    return (
        <section
            data-scroll-section
            className="h-full w-[100vw] flex flex-col justify-center items-center"
        >
            <Navbar
                cartCount={cartCount}
                cartItems={cartItems}
                onRemoveItem={onRemoveItem}
                setCartCount={setCartCount}
                setCartItems={setCartItems}
            />
            <LoginComponent />
        </section>
    );
}
