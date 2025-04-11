function SaleSection() {
    return (
        <section className="h-[100vh] bg-[black]">
            <h1 className="text-amber-400 text-left ml-[5vw] pt-[7vh]">
                . OUR CAMPAIGNS
            </h1>
            <div className="flex justify-around pt-[3vh]">
                <h1 className="text-[10vw] font-bold text-amber-400">SUMMER</h1>
                <h1 className="text-[10vw] font-bold text-amber-400">DEAL</h1>
            </div>
            <div className="sale-product pt-[5vh] flex justify-between flex-wrap">
                {/* <video
                    className=" top-0 left-0  h-[62vh] w-[40vw] object-cover opacity-100"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="./src/video/sale.mp4" type="video/mp4" />
                </video> */}

                <div className="sale-product w-[100%] flex flex-col items-center pt-[10vh] ">
                    <div className="arabica w-[100%] pb-[7%] flex justify-around items-end">
                        <h1 className="text-amber-400 text-left ml-[0.5vw] pt-[1vh] text-[1.5rem]">
                            .ARABICA
                        </h1>
                        <img src="./exempel.png" alt="" className="w-[40%] " />

                        <h1 className="text-amber-400 pt-[1vh] mr-[0.5vw] text-[1.5rem]">
                            40.00 $
                        </h1>
                    </div>

                    {/* <div className="robusta w-[100%] pb-[7%] flex justify-around items-end">
                        <h1 className="text-amber-400 text-left ml-[0.5vw] pt-[1vh] text-[1.5rem]">
                            .ROBUSTA
                        </h1>
                        <img src="./robusta.png" alt="" className="w-[40%] " />
                        <h1 className="text-amber-400 pt-[1vh] mr-[0.5vw] text-[1.5rem]">
                            40.00 $
                        </h1>
                    </div>
                    <div className="liberica w-[100%] pb-[7%] flex justify-around items-end">
                        <h1 className="text-amber-400 text-left ml-[0.5vw] pt-[1vh] text-[1.5rem]">
                            .ROBUSTA
                        </h1>
                        <img src="./liberica.png" alt="" className="w-[40%] " />
                        <h1 className="text-amber-400 pt-[1vh] mr-[0.5vw] text-[1.5rem]">
                            40.00 $
                        </h1>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default SaleSection;
