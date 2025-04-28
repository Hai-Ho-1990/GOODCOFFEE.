function FindUs() {
    return (
        <>
            <section className="bg-[#D0BEAA] h-[100vh] flex justify-between mt-[100px]">
                <div className="w-[50%] relative bottom-[8%]">
                    <h1 className="text-[black] text-left ml-[5vw] mt-[6vw]">
                        . FIND US HERE
                    </h1>

                    <h1 className="text-[black] text-center ml-[5vw] mt-[7vw] text-[2.5vw] leading-13">
                        OUR STORES
                    </h1>

                    <h3 className="text-[black] text-center ml-[5vw] mt-[3vw] text-[1vw] leading-10">
                        Drottninggatan 68, Stockholm
                    </h3>
                    <h3 className="text-[black] text-center ml-[5vw] mt-[1vw] text-[1vw] leading-5">
                        Mall Of Scandinavian, Solna
                    </h3>
                </div>
                <img
                    src="./store.png"
                    alt=""
                    className="top-0 left-0  h-[100vh] w-[45vw] object-cover opacity-100"
                />
            </section>
        </>
    );
}

export default FindUs;
