import Header from '../components/Header.tsx';
import CoffeeBeansMenu from '../components/CoffeeBeansMenu.tsx';
import ProductIntro from '../components/ProductIntro.tsx';
import SaleSection from '../components/SaleSection.tsx';
import Footer from '../components/Footer.tsx';
import MenuSection from '../components/MenuSection.tsx';
import { Product } from '../types/Product';

interface HomeProps {
    cartCount: number;
    cartItems: Product[];
    onRemoveItem: (name: string) => void;
    setCartCount: (count: number) => void;
    setCartItems: (items: Product[]) => void;
}

export default function Home({
    cartCount,
    cartItems,
    onRemoveItem,
    setCartCount,
    setCartItems
}: HomeProps) {
    return (
        <>
            <Header
                cartCount={cartCount}
                cartItems={cartItems}
                onRemoveItem={onRemoveItem}
                setCartCount={setCartCount}
                setCartItems={setCartItems}
            />
            <CoffeeBeansMenu />
            <ProductIntro />
            <SaleSection />
            <MenuSection />
            <Footer />
        </>
    );
}
