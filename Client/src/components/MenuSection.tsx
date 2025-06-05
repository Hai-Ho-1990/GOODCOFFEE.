function FindUs() {
    return (
        <>
            <section
                data-scroll-section
                className=" h-[100vh] flex flex-col lg:flex-row lg:justify-between mt-[100px]"
            >
                <div className="w-[100%]  lg:w-[50%] lg:h-[100vh] flex flex-col lg:flex-row lg:flex-wrap lg:gap-2 ">
                    <a
                        href=""
                        className="h-[25vh] lg:w-[49%] lg:h-[50%] group relative"
                    >
                        <img
                            src="./menu1.png"
                            className="brightness-75 grayscale lg:grayscale-0 h-[24.5vh] lg:h-[100%] w-[100%] object-cover transition duration-300 group-hover:grayscale group-hover:brightness-75"
                        />
                        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:opacity-0 group-hover:opacity-100  text-amber-400 font-extrabold transition text-[3rem] leading-11">
                            OUR CUSTOMERS
                        </button>
                    </a>
                    <a
                        href=""
                        className="h-[25vh] lg:w-[49%] lg:h-[50%] group relative "
                    >
                        <img
                            src="./freeship.png"
                            className="brightness-75 grayscale lg:grayscale-0 h-[24.5vh] lg:h-[100%] w-[100%] object-cover transition duration-300 group-hover:grayscale group-hover:brightness-75"
                        />
                        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:opacity-0 group-hover:opacity-100  text-amber-400 font-extrabold transition text-[3rem] leading-11">
                            SHIPPING POLICIES
                        </button>
                    </a>
                    <a
                        href=""
                        className="h-[25vh] lg:w-[100%] lg:h-[50%] group relative"
                    >
                        <img
                            src="./instruction.avif"
                            className="brightness-75 grayscale lg:grayscale-0 w-[100%] lg:w-[49vw] h-[24.5vh] lg:h-[49vh] object-cover transition duration-300 group-hover:grayscale group-hover:brightness-75"
                        />
                        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:opacity-0 group-hover:opacity-100  text-amber-400 font-extrabold transition text-[2rem] sm:text-[3.2rem] lg:text-[4rem] leading-11">
                            INSPIRATIONS
                        </button>
                    </a>
                </div>
                <a
                    href=""
                    className="h-[25vh] lg:h-[100%] group relative lg:w-[50%] "
                >
                    <img
                        src="./store.png"
                        alt=""
                        className=" grayscale lg:grayscale-0 top-0 left-0  h-[24.5vh] lg:h-[100%] w-[99%] object-cover opacity-100 transition duration-300 group-hover:grayscale group-hover:brightness-75"
                    />
                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:opacity-0 group-hover:opacity-100  text-amber-400 font-extrabold transition text-[3.2rem] lg:text-[7rem] leading-12 lg:leading-22 ">
                        OUR STORES
                    </button>
                </a>
            </section>
        </>
    );
}

export default FindUs;
