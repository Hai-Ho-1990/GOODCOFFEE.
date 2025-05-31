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
                <h1 className="text-[black] text-left ml-[5vw] mt-[5vw] text-[3.3vw] font-bold leading-13">
                    WELCOME TO THE WORLD OF FINE COFFEE. SAVOUR EVERY CUP FROM
                    STOCKHOLM.
                </h1>
                <p className="text-[black] text-left ml-[5vw] mt-[5vw] text-[1.2rem]">
                    Nestled in the heart of Stockholm, we are a boutique coffee
                    brand devoted to delivering exceptional, hand-roasted beans
                    to coffee lovers around the world. Whether you're brewing a
                    quiet morning cup or curating a full café experience, we’re
                    here to bring you refined flavors and uncompromising
                    quality. Always smooth, always distinctive — and always
                    roasted to perfection.
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
