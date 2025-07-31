import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import { Product } from '../types/Product';
import Footer from '../components/Footer';
import { useMaskedTextAnimation } from '../animations/MaskedTextAnimation';
import { useScrollTriggerFade } from '../animations/ScrollTriggerFade';
import useSplitTextAnimation from '../animations/SplitTextEffect';

gsap.registerPlugin(ScrollTrigger);

interface ArabicaProps {
    cartCount: number;
    cartItems: Product[];
    onRemoveItem: (name: string) => void;
    setCartCount: (count: number) => void;
    setCartItems: (items: Product[]) => void;
}

function Arabica({
    cartCount,
    cartItems,
    onRemoveItem,
    setCartCount,
    setCartItems
}: ArabicaProps) {
    useMaskedTextAnimation('.maskedText');
    useScrollTriggerFade('.scrollFade');

    useSplitTextAnimation();

    return (
        <>
            <section className="h-[100vh] bg-black text-white">
                <Navbar
                    cartCount={cartCount}
                    cartItems={cartItems}
                    onRemoveItem={onRemoveItem}
                    setCartCount={setCartCount}
                    setCartItems={setCartItems}
                />
                <div className=" leading-30 mt-[10rem]">
                    <h1 className="scrollFade text-[3rem] sm:text-[5rem] lg:text-[9rem] xl:text-[14rem] text-[#d4a010] font-extrabold">
                        ARABICA
                    </h1>
                    <h4 className="scrollFade text-[2rem]  text-[white] font-bold">
                        good coffee enhance smart decision
                    </h4>
                </div>
                <div className="scrollFade flex justify-center">
                    <img
                        src="../public/arabica-nobg.png"
                        alt=""
                        className="w-[80%] sm:w-[100%] xl:w-[50%] h-[50%] object-cover scale-[1.2]"
                    />
                </div>
            </section>
            <section className="scrollFade h-[100vh] flex flex-col justify-center">
                <p className=" w-[60%] self-center text-[1.5rem] ">
                    Arabica, or Coffea arabica, is the most well-known and
                    appreciated coffee variety in the world. Around 60–70% of
                    all coffee produced globally comes from Arabica beans, and
                    it’s easy to understand why. With its rich heritage, complex
                    flavors, and smooth character, Arabica has become the first
                    choice for coffee lovers worldwide.
                </p>
            </section>
            <section className="h-[100vh] flex flex-col justify-center bg-[#d0bea9]">
                <h1 className="scrollFade w-[80%] self-center text-[2.5rem] text-black uppercase pb-[5rem] font-bold">
                    The origins of Arabica coffee
                </h1>
                <p className="scrollFade w-[80%] self-center text-[1.5rem] text-black">
                    The origins of Arabica coffee trace back to the highlands of
                    Ethiopia, where legend tells of a goat herder who noticed
                    his goats becoming especially energetic after eating berries
                    from a particular tree. From there, coffee spread to Yemen
                    and eventually across the globe. Arabica thrives at high
                    altitudes, typically between 900 and 2000 meters above sea
                    level, where cool nights and slow maturation help develop
                    the bean’s nuanced flavors.
                </p>
            </section>

            <section className=" h-[100vh] flex flex-col justify-center">
                <video
                    className=" top-0 left-0 w-full h-[100vh] object-cover opacity-85 "
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="./video/209419_tiny.mp4" type="video/mp4" />
                </video>
            </section>
            <section className="h-[100vh] flex flex-col justify-center ">
                <h1 className="scrollFade w-[80%] self-center text-[2.5rem] text-white uppercase pb-[5rem] font-bold">
                    The flavor profile
                </h1>
                <p className="scrollFade w-[70%] self-center text-[1.5rem] text-white">
                    The flavor profile can vary depending on origin and roast,
                    but common notes include chocolate, berries, caramel,
                    citrus, or jasmine. That’s why Arabica is especially popular
                    among specialty coffee producers and baristas who aim to
                    showcase coffee as a craft – not just a caffeine fix.
                </p>
            </section>
            <section className=" h-[100vh] flex flex-col justify-center">
                <p className="splitTexts w-[80%] self-center text-[2rem] ">
                    In terms of effect, Arabica is gentler than Robusta due to
                    its lower caffeine levels. It offers a smoother and more
                    balanced energy boost, with less risk of jitters or heart
                    palpitations. Many appreciate Arabica for delivering a truly
                    enjoyable coffee experience – both in taste and feeling. In
                    summary, Arabica is more than just a coffee variety – it is
                    a symbol of quality, tradition, and refined flavor.
                </p>
            </section>
            <Footer />
        </>
    );
}

export default Arabica;
