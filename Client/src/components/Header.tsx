import Hero from './Hero';
import Navbar from './Navbar';

function Header({ cartCount }: { cartCount: number }) {
    return (
        <>
            <section data-scroll-section className="h-[100vh] w-[100vw]">
                <Navbar cartCount={cartCount} />
                <Hero />
                <div
                    // ref={heroRef}
                    className="overflow-hidden absolute top-0 left-0 w-full h-[100vh] flex items-center justify-center "
                    data-scroll
                    data-scroll-speed="3"
                >
                    <h1 className=" text-[7rem] text-[#d4a010] font-extrabold leading-25 w-[55%]">
                        FULL PRODUCTION SERVICES BASED IN PARIS
                    </h1>
                </div>
            </section>
        </>
    );
}

export default Header;
