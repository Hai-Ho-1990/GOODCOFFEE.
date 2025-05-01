import Header from '../components/Header.tsx';
import CoffeeBeansMenu from '../components/CoffeeBeansMenu.tsx';
import ProductIntro from '../components/ProductIntro.tsx';
import SaleSection from '../components/SaleSection.tsx';
import Footer from '../components/Footer.tsx';
import MenuSection from '../components/MenuSection.tsx';

export default function Home() {
    return (
        <>
            <Header />
            <CoffeeBeansMenu />
            <ProductIntro />
            <SaleSection />
            <MenuSection />
            <Footer />
        </>
    );
}
