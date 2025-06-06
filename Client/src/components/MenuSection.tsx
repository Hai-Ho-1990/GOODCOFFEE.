function FindUs() {
    return (
        <>
            <section
                data-scroll-section
                className=" h-[100vh] flex flex-col xl:flex-row xl:justify-between mt-[100px]"
            >
                <div className="w-[100%]  xl:w-[50%] xl:h-[100vh] flex flex-col xl:flex-row xl:flex-wrap lg:gap-2 ">
                    <a
                        href=""
                        className="h-[25vh] xl:w-[49%] xl:h-[50%] group relative"
                    >
                        <img
                            src="./menu1.png"
                            className="brightness-75 grayscale xl:grayscale-0 h-[24.5vh] xl:h-[100%] w-[100%] object-cover transition duration-300 group-hover:grayscale group-hover:brightness-75"
                        />
                        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:opacity-0 group-hover:opacity-100  text-amber-400 font-extrabold transition text-[3rem] leading-11">
                            OUR CUSTOMERS
                        </button>
                    </a>
                    <a
                        href=""
                        className="h-[25vh] xl:w-[49%] xl:h-[50%] group relative "
                    >
                        <img
                            src="./freeship.png"
                            className="brightness-75 grayscale xl:grayscale-0 h-[24.5vh] xl:h-[100%] w-[100%] object-cover transition duration-300 group-hover:grayscale group-hover:brightness-75"
                        />
                        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:opacity-0 group-hover:opacity-100  text-amber-400 font-extrabold transition text-[3rem] leading-11">
                            SHIPPING POLICIES
                        </button>
                    </a>
                    <a
                        href=""
                        className="h-[25vh] xl:w-[100%] xl:h-[50%] group relative"
                    >
                        <img
                            src="./instruction.avif"
                            className="brightness-75 grayscale xl:grayscale-0 w-[100%] xl:w-[49vw] h-[24.5vh] xl:h-[49vh] object-cover transition duration-300 group-hover:grayscale group-hover:brightness-75"
                        />
                        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:opacity-0 group-hover:opacity-100  text-amber-400 font-extrabold transition text-[2rem] sm:text-[3.2rem] xl:text-[4rem] leading-11">
                            INSPIRATIONS
                        </button>
                    </a>
                </div>
                <a
                    href=""
                    className="h-[25vh] xl:h-[100%] group relative xl:w-[50%] "
                >
                    <img
                        src="./store.png"
                        alt=""
                        className=" grayscale xl:grayscale-0 top-0 left-0  h-[24.5vh] xl:h-[100%] w-[99%] object-cover opacity-100 transition duration-300 group-hover:grayscale group-hover:brightness-75"
                    />
                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:opacity-0 group-hover:opacity-100  text-amber-400 font-extrabold transition text-[3.2rem] xl:text-[7rem] leading-12 xl:leading-22 ">
                        OUR STORES
                    </button>
                </a>
            </section>
        </>
    );
}

export default FindUs;
