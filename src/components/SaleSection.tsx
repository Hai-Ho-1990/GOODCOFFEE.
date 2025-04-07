function SaleSection() {
    return (
        <section className="h-[100vh] bg-[black]">
            <h1 className="text-amber-400 text-left ml-[5vw] pt-[7vh]">
                . OUR CAMPAIGNS
            </h1>
            <div className="flex justify-around pt-[3vh]">
                <h1 className="text-[10vw] font-bold">SUMMER</h1>
                <h1 className="text-[10vw] font-bold">SALE</h1>
            </div>
            <div className="sale-product pt-[5vh] flex justify-between">
                <div className="arabica w-[32vw]">
                    <img src="./exempel.png" alt="" />
                    <div className="price flex justify-between">
                        <h1 className="text-amber-400 text-left ml-[0.5vw] pt-[1vh]">
                            .ARABICA
                        </h1>
                        <h1 className="text-amber-400 pt-[1vh] mr-[0.5vw]">
                            40.00 $
                        </h1>
                    </div>
                </div>
                <div className="robusta w-[32vw]">
                    <img src="./robusta.png" alt="" />
                    <div className="price flex justify-between">
                        <h1 className="text-amber-400 text-left ml-[0.5vw] pt-[1vh]">
                            .ROBUSTA
                        </h1>
                        <h1 className="text-amber-400 pt-[1vh] mr-[0.5vw]">
                            40.00 $
                        </h1>
                    </div>
                </div>
                <div className="liberica w-[32vw]">
                    <img src="./liberica.png" alt="" />
                    <div className="price flex justify-between">
                        <h1 className="text-amber-400 text-left ml-[0.5vw] pt-[1vh]">
                            .LIBERICA
                        </h1>
                        <h1 className="text-amber-400 pt-[1vh] mr-[0.5vw]">
                            40.00 $
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SaleSection;
