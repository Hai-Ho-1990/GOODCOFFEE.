import Button from '@mui/material/Button';

function SaleSection() {
    return (
        <section
            data-scroll-section
            className="min-h-screen bg-black w-full flex flex-col"
        >
            <h1 className="text-amber-400 text-left ml-[5vw] pt-[7vh]">
                . OUR CAMPAIGNS
            </h1>
            <div className="sale-banner w-full relative  will-change-transform">
                <h1 className="text-[30vw] font-semibold leading-none ">50%</h1>
            </div>
            <div className="flex justify-center ">
                <h1 className="text-[6vw] font-bold text-white">
                    SUMMER DEALS
                </h1>
            </div>

            <p className=" justify-center text-[0.7rem] lg:text-[1rem]">
                Claim your cup. Enjoy our limited summer roast for refined
                coffee moments.
            </p>

            <div className="sale-product h-[full]  flex  flex-wrap justify-center">
                <div className="sale-product w-[100%]  flex mt-[7rem]">
                    <div className=" w-[49.5%] overflow-hidden flex flex-col">
                        <img
                            src="./liberica-nobg.png"
                            alt=""
                            className="w-[100%] h-[60%] lg:h-[100%] object-cover hover:scale-[1.25] transform transition-transform duration-500 ease-in-out"
                        />
                        <h2 className="text-amber-400 mt-5 text-[1rem] lg:text-[1.2rem]">
                            LIBERICA
                        </h2>

                        <h2 className="text-decoration-line: line-through">
                            14.99$
                        </h2>
                        <h2 className="text-amber-400">6.99$</h2>
                    </div>

                    <div className=" w-[49.5%] overflow-hidden flex flex-col">
                        <img
                            src="./excelsa-nobg.png"
                            alt=""
                            className="w-[100%] h-[60%] lg:h-[100%] object-cover hover:scale-[1.4] transform transition-transform duration-500 ease-in-out lg:scale-[1.2]"
                        />
                        <h2 className="text-amber-400 mt-5 text-[1rem] lg:text-[1.2rem]">
                            EXCELSA
                        </h2>

                        <h2 className="text-decoration-line: line-through">
                            14.99$
                        </h2>
                        <h2 className="text-amber-400">6.99$</h2>
                    </div>

                    <div className=" w-[49.5%] overflow-hidden flex flex-col">
                        <img
                            src="./arabica-nobg.png"
                            alt=""
                            className="w-[100%] h-[60%] lg:h-[100%] object-cover hover:scale-[1.25] transform transition-transform duration-500 ease-in-out "
                        />
                        <h2 className="text-amber-400 mt-5 text-[1rem] lg:text-[1.2rem]">
                            ARABICA
                        </h2>
                        <h2 className="text-decoration-line: line-through">
                            14.99$
                        </h2>
                        <h2 className="text-amber-400">6.99$</h2>
                    </div>
                </div>
                <div className="mt-[100px]">
                    <Button
                        variant="contained"
                        size="large"
                        color="success"
                        sx={{
                            backgroundColor: '#ffb900',
                            color: 'white',
                            padding: '12px 24px',
                            fontSize: '18px',
                            fontWeight: 'bold',

                            '&:hover': {
                                backgroundColor: 'orange'
                            }
                        }}
                    >
                        shop NOW
                    </Button>
                </div>
            </div>
        </section>
    );
}
export default SaleSection;
