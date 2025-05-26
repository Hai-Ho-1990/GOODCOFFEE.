import ProfileComponent from '../components/ProfileComponent';

interface Product {
    name: string;
    price: number;
    discount_price: number;
    main_image: string;
    status: string;
    quantity: number;
    stock: number;
}

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
