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
}
function Profile({ cartCount, cartItems, onRemoveItem }: ProfileProps) {
    return (
        <>
            <ProfileComponent
                cartCount={cartCount}
                cartItems={cartItems}
                onRemoveItem={onRemoveItem}
            />
        </>
    );
}

export default Profile;
