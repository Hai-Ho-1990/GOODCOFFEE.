import { Button } from '@mui/material';
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
                <h1
                    data-scroll
                    data-scroll-speed="1"
                    className="logo text-[3rem] lg:text-[550%] font-extrabold text-[#d4a010] z-1 pt-[4rem]  lg:text-left lg:pl-[5%] relative"
                >
                    NEWSLETTER
                </h1>
                <p
                    data-scroll
                    data-scroll-speed="1"
                    className="relative lg:text-left w-[90%] sm:w-[60%] lg:w-[36%] self-center lg:self-start lg:pl-[5%] mt-[80%]  md:mt-[70%] lg:mt-[2%] text-[0.8rem] lg:text-[1.1rem] lg:leading-[2]"
                >
                    Subscribe to our newsletter for updates on new blends,
                    special offers, brewing tips, and more. Get the latest
                    coffee news delivered straight to your inbox. No spam—just
                    fresh updates brewed to your taste. Enter your email and
                    stay connected with everything happening in our coffee
                    world!
                </p>
                <div
                    data-scroll
                    data-scroll-speed="1"
                    className=" xl:ml-[40%]  mt-[5%] lg:mt-[50%] xl:mt-[12%] flex flex-row justify-center w-[90%] sm:w-[100%] xl:w-[80%]"
                >
                    <Input
                        className="pl-[5%] relative "
                        defaultValue="Enter Your Email Here"
                        inputProps={ariaLabel}
                        sx={{
                            fontSize: {
                                sx: '0.9rem',
                                lg: '1.5rem'
                            },
                            position: 'relative',
                            color: 'white',
                            width: {
                                sx: '100%',
                                lg: '35%'
                            },
                            '& input': {
                                color: 'white'
                            },
                            '&:before': {
                                borderBottom: '1px solid white',
                                left: '10%'
                            },
                            '&:after': {
                                borderBottom: '1px solid white'
                            },
                            '&:hover:not(.Mui-disabled):before': {
                                borderBottom: '1px solid white'
                            }
                        }}
                    />
                    <div className="mt-[10px] ml-5">
                        <Button
                            variant="outlined"
                            size="large"
                            color="success"
                            type="submit"
                            sx={{
                                color: 'white',
                                padding: '12px 24px',
                                fontSize: '11px',
                                fontWeight: 'bold',
                                width: '100%',
                                border: '1px solid white',
                                height: '43px',

                                '&:hover': {
                                    backgroundColor: '#d4a010'
                                }
                            }}
                        >
                            submit
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Newsletter;
