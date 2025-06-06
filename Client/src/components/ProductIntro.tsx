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
            className="bg-[#D0BEAA] min-h-screen xl:flex justify-between"
        >
            <div className="sm:w-[100%] xl:w-[50%] relative bottom-[8%] md:h-[50vh]">
                <h1 className="text-[black] text-left ml-[5vw] pt-[5vw]">
                    . WHO WE ARE
                </h1>
                <h1 className="text-[black] text-left ml-[5vw] mt-[5vw] text-[2.2rem] leading-9 xl:text-[3.3vw] font-bold xl:leading-13 w-[90%]">
                    WELCOME TO THE WORLD OF FINE COFFEE. SAVOUR EVERY CUP FROM
                    STOCKHOLM.
                </h1>
                <p className="text-[black] text-left ml-[5vw] pt-[5vw] sm:text-[1.2rem] w-[90%]">
                    Nestled in the heart of Stockholm, we are a boutique coffee
                    brand devoted to delivering exceptional, hand-roasted beans
                    to coffee lovers around the world. Whether you're brewing a
                    quiet morning cup or curating a full café experience, we’re
                    here to bring you refined flavors and uncompromising
                    quality. Always smooth, always distinctive — and always
                    roasted to perfection.
                </p>
                <div className="icons mt-[3.5rem] xl:mt-[6.5rem] flex gap-5.5 justify-center">
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
                className="top-0 left-0  h-auto max-h-[100vh] mt-[8vh]  xl:mt-[0] xl:w-[45vw] object-cover opacity-100"
            />
        </section>
    );
}

export default ProductIntro;
