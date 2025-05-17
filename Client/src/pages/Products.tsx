import Navbar from '../components/Navbar';
import ProductsComponent from '../components/products/ProductsComponent';

export default function Products() {
    return (
        <section data-scroll-section className="h-[500vh] w-[100vw]">
            <Navbar />
            <ProductsComponent />
        </section>
    );
}
