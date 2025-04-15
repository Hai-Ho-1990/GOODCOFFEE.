import React from 'react';

function SaleSection() {
    return (
        <section className=" bg-black w-full">
            <h1 className="text-amber-400 text-left ml-[5vw] pt-[7vh]">
                . OUR CAMPAIGNS
            </h1>
            <div className="sale-banner w-full relative  will-change-transform">
                <h1 className="text-[30vw] font-semibold leading-none ">50%</h1>
            </div>
            <div className="flex justify-center ">
                <h1 className="text-[6vw] font-bold text-amber-400">SUMMER</h1>
                <h1 className="text-[6vw] font-bold text-amber-400">DEALS</h1>
            </div>

            <div className="sale-product h-[full]  flex  flex-wrap justify-center">
                <div className="sale-product w-[70%]  flex flex-wrap pt-[10vh]  gap-1">
                    <video
                        className=" top-0 left-0  h-[51vh] w-[49.5%]  object-cover opacity-100"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="./src/video/summer.mp4" type="video/mp4" />
                    </video>
                    <div className="arabica w-[49.5%]  overflow-hidden ">
                        {/* <h1 className="text-amber-400 text-left ml-[0.5vw] pt-[1vh] text-[1.5rem]">
                            .ARABICA
                        </h1> */}
                        <img
                            src="./test-sale.png"
                            alt=""
                            className="w-[100%] h-[100%] object-cover hover:scale-[1.25] transform transition-transform duration-500 ease-in-out"
                        />

                        {/* <h1 className="text-amber-400 pt-[1vh] mr-[0.5vw] text-[1.5rem]">
                            40.00 $
                        </h1> */}
                    </div>

                    {/* <div className="robusta w-[49.5%]  overflow-hidden relative">
                        <h1 className="text-amber-400 text-left ml-[0.5vw] pt-[1vh] text-[1.5rem]">
                            .ROBUSTA
                        </h1>
                        <img
                            src="./robusta.png"
                            alt=""
                            className="w-[100%] h-[100%] object-cover hover:scale-[1.25] transform transition-transform duration-500 ease-in-out "
                        />
                        <h1 className="text-amber-400 pt-[1vh] mr-[0.5vw] text-[1.5rem]">
                            40.00 $
                        </h1>
                    </div> */}
                    <div className="liberica w-[49.5%] overflow-hidden ">
                        {/* <h1 className="text-amber-400 text-left ml-[0.5vw] pt-[1vh] text-[1.5rem]">
                            .LIBERICA
                        </h1> */}
                        <img
                            src="./test-sale1.png"
                            alt=""
                            className="w-[100%] h-[100%] object-cover hover:scale-[1.25] transform transition-transform duration-500 ease-in-out "
                        />
                        {/* <h1 className="text-amber-400 pt-[1vh] mr-[0.5vw] text-[1.5rem]">
                            40.00 $
                        </h1> */}
                    </div>
                    {/* <div className="excelsa w-[49.5%] overflow-hidden ">
                        <h1 className="text-amber-400 text-left ml-[0.5vw] pt-[1vh] text-[1.5rem]">
                            .LIBERICA
                        </h1>
                        <img
                            src="./excelsa.png"
                            alt=""
                            className="w-[100%] h-[100%] object-cover hover:scale-[1.25] transform transition-transform duration-500 ease-in-out "
                        />
                        <h1 className="text-amber-400 pt-[1vh] mr-[0.5vw] text-[1.5rem]">
                            40.00 $
                        </h1>
                    </div> */}
                    <div className="sale-button w-[49.5%] overflow-hidden bg-[#e1dcd0] hover:bg-[#d0beaa]">
                        <h2 className="text-7xl font-bold">Click to buy</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default SaleSection;
