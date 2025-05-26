import ProductsComponent from '../components/products/ProductsComponent';
import Footer from '../components/Footer';
import ProductHeader from '../components/products/ProductHeader';
import NewsletterComponent from '../components/products/NewsletterComponent';
import RecensionComponent from '../components/products/RecensionComponent';

interface Product {
    name: string;
    price: number;
    discount_price: number;
    main_image: string;
    status: string;
    quantity: number;
    stock: number;
}

interface ProductProps {
    cartCount: number;
    cartItems: Product[];
    onRemoveItem: (name: string) => void;
    setCartCount: (count: number) => void;
    setCartItems: (items: Product[]) => void;
}

export default function Products({
    cartCount,
    cartItems,
    onRemoveItem,
    setCartCount,
    setCartItems
}: ProductProps) {
    return (
        <>
            <ProductHeader
                cartCount={cartCount}
                cartItems={cartItems}
                onRemoveItem={onRemoveItem}
                setCartCount={setCartCount}
                setCartItems={setCartItems}
            />
            <ProductsComponent />
            <RecensionComponent />
            <NewsletterComponent />
            <Footer />
        </>
    );
}
