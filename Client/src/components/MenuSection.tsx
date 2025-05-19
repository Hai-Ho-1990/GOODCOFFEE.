function FindUs() {
    return (
        <>
            <section
                data-scroll-section
                className=" h-[100vh] flex justify-between mt-[100px]"
            >
                <div className="w-[50%]  flex flex-wrap gap-2">
                    <a href="" className="w-[49%] h-[50%] group relative">
                        <img
                            src="./menu1.png"
                            className="h-[100%] object-cover transition duration-300 group-hover:grayscale group-hover:brightness-75"
                        />
                        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100  text-amber-400 font-extrabold transition text-[3rem] leading-11">
                            OUR CUSTOMERS
                        </button>
                    </a>
                    <a href="" className="w-[49%] group relative ">
                        <img
                            src="./freeship.png"
                            className="h-[100%] object-cover transition duration-300 group-hover:grayscale group-hover:brightness-75"
                        />
                        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100  text-amber-400 font-extrabold transition text-[3rem] leading-11">
                            SHIPPING POLICIES
                        </button>
                    </a>
                    <a href="" className="group relative">
                        <img
                            src="./instruction.avif"
                            className="w-[49vw] h-[49vh] object-cover transition duration-300 group-hover:grayscale group-hover:brightness-75"
                        />
                        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100  text-amber-400 font-extrabold transition text-[4rem] leading-11">
                            INSPIRATIONS
                        </button>
                    </a>
                </div>
                <a href="" className="group relative w-[50%] ">
                    <img
                        src="./store.png"
                        alt=""
                        className="top-0 left-0  h-[100%] w-[99%] object-cover opacity-100 transition duration-300 group-hover:grayscale group-hover:brightness-75"
                    />
                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100  text-amber-400 font-extrabold transition text-[7rem] leading-22 ">
                        OUR STORES
                    </button>
                </a>
            </section>
        </>
    );
}

export default FindUs;
