import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faLinkedinIn,
    faXTwitter
} from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return (
        <footer data-scroll-section className="h-[100vh]">
            <h1 className="logo text-[7rem] font-extrabold text-[#d4a010] z-1 pt-[4rem] text-left pl-[5%]">
                GOODCOFFEE.
            </h1>
            <div className="flex flex-row justify-around pt-[9rem]">
                <div className="flex flex-col items-start leading-10 text-[1.5rem]">
                    <a href="">SHOP</a>
                    <a href="">ABOUT</a>
                    <a href="">JOURNAL</a>
                    <a href="">CARRER</a>
                    <a href="">LOGIN</a>
                </div>
                <div className="social-wrapper ">
                    <p className="w-[50%] text-left">
                        We are a specialty coffee bean e-commerce store based in
                        Sweden, delivering fresh beans nationwide – from Malmö
                        to Kiruna!
                    </p>
                    <div className="icons mt-[1.5rem] flex gap-5.5 justify-items-start">
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
                <div className="h-[47vh]">
                    <div className="address-wrapper justify-items-start ">
                        <p>ADDRESS</p>
                        <p>Nekvagen 41 , Spanga, Stockholm</p>
                    </div>
                    <div className="phone-wrapper justify-items-start pt-7">
                        <p>PHONE</p>
                        <p>0046-873-2983</p>
                    </div>
                    <div className="email-wrapper justify-items-start pt-7">
                        <p>EMAIL</p>
                        <p>hello@goodcoffee.com</p>
                    </div>
                </div>
            </div>
            <div className="copy-right-wrapper flex flex-row justify-center gap-[60%]">
                <div className="copy-rights">
                    <p>Copyright 2025, All Right Reserved</p>
                </div>
                <div className="flex flex-row gap-5">
                    <p>FAG</p>
                    <p>Term of Service</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
