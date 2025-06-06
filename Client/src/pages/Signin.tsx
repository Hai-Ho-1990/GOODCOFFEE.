import SignupComponent from '../components/SigninComponent';
import { Product } from '../types/Product';
import Navbar from '../components/Navbar';

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
            className="h-full w-[100vw] flex flex-col justify-center items-center"
        >
            <Navbar
                cartCount={cartCount}
                cartItems={cartItems}
                onRemoveItem={onRemoveItem}
                setCartCount={setCartCount}
                setCartItems={setCartItems}
            />
            <SignupComponent />
        </section>
    );
}

export default Signin;
