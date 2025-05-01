import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faLinkedinIn,
    faXTwitter
} from '@fortawesome/free-brands-svg-icons';

function ProductIntro() {
    return (
        <section
            data-scroll-section
            className="bg-[#D0BEAA] min-h-screen flex justify-between"
        >
            <div
                className="w-[50%] relative bottom-[8%]"
                // data-scroll
                // data-scroll-speed="2"
            >
                <h1 className="text-[black] text-left ml-[5vw] mt-[5vw]">
                    . WHO WE ARE
                </h1>
                <h1 className="text-[black] text-left ml-[5vw] mt-[8vw] text-[3.3vw] font-bold leading-13">
                    WELCOME TO THE GREATEST CITY IN THE WORLD. FEEL AT HOME IN
                    PARIS.
                </h1>
                <p className="text-[black] text-left ml-[5vw] mt-[5vw] text-[1.2rem]">
                    Nestled in the heart of Paris, we are a dedicated production
                    services company, committed to crafting stunning visual
                    experiences for clients from around the globe. Regardless
                    the scale of your project, from an agile shoot in the
                    streets of Paris to complex campaigns mixing real locations
                    and studio work, we're here to make things easy for you.
                    We’ll get it done smoothly and cost-effectively.
                </p>
                <div className="icons mt-[6.5rem] flex gap-5.5 justify-center">
                    <FontAwesomeIcon
                        icon={faInstagram}
                        className="text-[gray] text-[2rem] hover:text-[black] transition duration-300 "
                    />
                    <FontAwesomeIcon
                        icon={faLinkedinIn}
                        className="text-[gray] text-[2rem] hover:text-[black] transition duration-300"
                    />
                    <FontAwesomeIcon
                        icon={faXTwitter}
                        className="text-[gray] text-[2rem] hover:text-[black] transition duration-300"
                    />
                </div>
            </div>
            <img
                src="./test-sale1.png"
                alt=""
                className="top-0 left-0  h-auto max-h-[100vh] w-[45vw] object-cover opacity-100"
            />

            {/* <video
                className=" top-0 left-0  h-[100vh] w-[45vw] object-cover opacity-100"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="./src/video/209419_tiny.mp4" type="video/mp4" />
            </video> */}
        </section>
    );
}

export default ProductIntro;
