import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faLinkedinIn,
    faXTwitter
} from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return (
        <footer data-scroll-section className="h-[100vh] w-full">
            <h1 className="logo text-[2.5rem] sm:text-[5rem] lg:text-[7rem] font-extrabold text-[#d4a010] z-1 pt-[4rem] text-left pl-[5%]">
                GOODCOFFEE.
            </h1>
            <div className="flex flex-col lg:flex-row justify-around pt-[3rem] lg:pt-[9rem]">
                <div className="flex lg:flex-col self-center lg:self-start lg:items-start lg:leading-10  md:text-[1.5rem] gap-2.5 lg:gap-0 lg:pl-10 xl:pl-0">
                    <a href="">SHOP</a>
                    <a href="">ABOUT</a>
                    <a href="">JOURNAL</a>
                    <a href="">CARRER</a>
                    <a href="">LOGIN</a>
                </div>
                <div className="social-wrapper lg:pl-[10%]">
                    <p className="w-[100%] sm:w-[90%] lg:w-[50%] lg:text-left pt-[20%] sm:pl-[10%] lg:pl-0 lg:pt-0 text-[0.8rem] sm:text-[1rem] lg:text-[1rem]">
                        We are a specialty coffee bean e-commerce store based in
                        Sweden, delivering fresh beans nationwide – from Malmö
                        to Kiruna!
                    </p>
                    <div className="icons mt-[1.5rem] flex gap-5.5 justify-center lg:justify-start lg:justify-items-start">
                        <FontAwesomeIcon
                            icon={faInstagram}
                            className="text-[gray] text-[2rem] hover:text-[#d4a010] transition duration-300 "
                        />
                        <FontAwesomeIcon
                            icon={faLinkedinIn}
                            className="text-[gray] text-[2rem] hover:text-[#d4a010] transition duration-300"
                        />
                        <FontAwesomeIcon
                            icon={faXTwitter}
                            className="text-[gray] text-[2rem] hover:text-[#d4a010] transition duration-300"
                        />
                    </div>
                </div>
                <div className="h-[40vh] sm:h-[47vh] lg:h-[47vh] lg:pr-10 xl:pr-0">
                    <div className="address-wrapper lg:justify-items-start pt-7 sm:pt-[20%] lg:pt-0 ">
                        <p className="text-[0.8rem] sm:text-[1rem]">ADDRESS</p>
                        <p className="lg:text-left text-[0.8rem] sm:text-[1rem]">
                            Nekvagen 41 , Spanga, Stockholm
                        </p>
                    </div>
                    <div className="phone-wrapper lg:justify-items-start pt-7">
                        <p className="text-[0.8rem] sm:text-[1rem]">PHONE</p>
                        <p className="text-[0.8rem] sm:text-[1rem]">
                            0046-873-2983
                        </p>
                    </div>
                    <div className="email-wrapper lg:justify-items-start pt-7">
                        <p className="text-[0.8rem] sm:text-[1rem]">EMAIL</p>
                        <p className="text-[0.8rem] sm:text-[1rem]">
                            hello@goodcoffee.com
                        </p>
                    </div>
                </div>
            </div>
            <div className="copy-right-wrapper flex flex-col lg:flex-row justify-center text-[0.7rem] lg:text-[1rem] gap-[20%]  lg:gap-[40%] xl:gap-[60%] lg:mt-[23%] xl:mt-5 ">
                <div className="copy-rights">
                    <p>Copyright 2025, All Right Reserved</p>
                </div>
                <div className="flex flex-row gap-5 self-center ">
                    <p>FAG</p>
                    <p>Term of Service</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
