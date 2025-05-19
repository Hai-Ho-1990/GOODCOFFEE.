// import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import Input from '@mui/material/Input';
function Newsletter() {
    const ariaLabel = { 'aria-label': 'description' };

    return (
        <>
            <section
                data-scroll-section
                className="w-[100vw]  h-[100vh] flex flex-col justify-start "
            >
                <img
                    src="./bg.jpg"
                    alt=""
                    className="object-cover h-[100vh] w-[100vw] blur-[1px] absolute brightness-60"
                />
                <h1 className="text-amber-400 text-left ml-[5vw] pt-[7vh] relative">
                    . SUBSCRIBE US
                </h1>
                <h1 className="logo text-[7rem] font-extrabold text-[#d4a010] z-1 pt-[4rem] text-left pl-[5%] relative">
                    NEWSLETTER
                </h1>
                <p className="relative text-left w-[70%] pl-[5%] text-[1.2rem]">
                    Subscribe to our newsletter for updates on new blends,
                    special offers, brewing tips, and more. Get the latest
                    coffee news delivered straight to your inbox. No spam—just
                    fresh updates brewed to your taste. Enter your email and
                    stay connected with everything happening in our coffee
                    world!
                </p>
                <Input
                    className="pl-[5%]"
                    defaultValue="Enter Your Email Here"
                    inputProps={ariaLabel}
                    sx={{
                        fontSize: '1.5rem',
                        position: 'relative',
                        color: 'white',
                        width: '40%',
                        '& input': {
                            color: 'white'
                        },
                        '&:before': {
                            borderBottom: '1px solid white', // default underline
                            left: '10%'
                        },
                        '&:after': {
                            borderBottom: '2px solid white' // active underline
                        },
                        '&:hover:not(.Mui-disabled):before': {
                            borderBottom: '1px solid white' // hover underline
                        }
                    }}
                />
            </section>
        </>
    );
}

export default Newsletter;
