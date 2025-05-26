import ProfileComponent from '../components/ProfileComponent';
import { Product } from '../types/Product';

interface ProfileProps {
    cartCount: number;
    cartItems: Product[];
    onRemoveItem: (name: string) => void;
    setCartCount: (count: number) => void;
    setCartItems: (items: Product[]) => void;
}
function Profile({
    cartCount,
    cartItems,
    onRemoveItem,
    setCartCount,
    setCartItems
}: ProfileProps) {
    return (
        <>
            <ProfileComponent
                cartCount={cartCount}
                cartItems={cartItems}
                onRemoveItem={onRemoveItem}
                setCartCount={setCartCount}
                setCartItems={setCartItems}
            />
        </>
    );
}

export default Profile;
