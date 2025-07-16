import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import { Product } from '../types/Product';
import Footer from '../components/Footer';
import { MaskedTextAnimation } from '../animations/MaskedTextAnimation';
import SplitTextSection from '../animations/SplitTextEffect';

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
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    MaskedTextAnimation(titleRef);

    const textRef = useRef<HTMLParagraphElement | null>(null);
    SplitTextSection(textRef);

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

                <div className="overflow-hidden h-[17rem] mt-5">
                    <h1
                        ref={titleRef}
                        className="arabica text-[3rem] sm:text-[5rem] lg:text-[9rem] xl:text-[14rem] text-[#d4a010] font-extrabold"
                    >
                        ARABICA
                    </h1>
                </div>
            </section>
            <section className=" h-[100vh] flex flex-col justify-center">
                <p
                    className="splitTexts w-[80%] self-center text-[2rem] "
                    ref={textRef}
                >
                    Arabica, or Coffea arabica, is the most well-known and
                    appreciated coffee variety in the world. Around 60–70% of
                    all coffee produced globally comes from Arabica beans, and
                    it’s easy to understand why. With its rich heritage, complex
                    flavors, and smooth character, Arabica has become the first
                    choice for coffee lovers worldwide.
                </p>
            </section>
            <section className="h-[100vh] flex flex-col justify-center bg-[#d0bea9]">
                <p className="splitTexts w-[80%] self-center text-[2rem] text-black">
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
                <p className="splitTexts w-[80%] self-center text-[2rem]">
                    What sets Arabica apart is its mild, well-balanced flavor
                    profile, with notes of sweetness, acidity, and often fruity
                    or floral tones. Unlike the Robusta bean (the other major
                    coffee variety), Arabica contains less bitterness and
                    significantly lower caffeine content – usually around
                    1–1.5%. This makes Arabica a smoother and more drinkable
                    coffee, with a rounder, more refined taste.
                </p>
            </section>
            <section className="h-[100vh] flex flex-col justify-center bg-[#d0bea9]">
                <p className="splitTexts w-[80%] self-center text-[2rem] text-black">
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
