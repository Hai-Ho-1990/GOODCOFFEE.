import Navbar from '../Navbar';
import HeroProduct from './HeroProduct';
function ProductHeader() {
    return (
        <>
            <section data-scroll-section className="h-[100vh] w-[100vw]">
                <Navbar />
                <HeroProduct />
                <div
                    // ref={heroRef}
                    className="overflow-hidden absolute top-0 left-0 w-full h-[100vh] flex items-center justify-center "
                    data-scroll
                    data-scroll-speed="3"
                >
                    <div>
                        <h1 className=" text-[9rem] text-[#d4a010] font-extrabold leading-25 w-[100%]">
                            SUMMER 2025
                        </h1>
                        <h4 className="text-[2rem] font-extrabold">SHOP NOW</h4>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductHeader;
