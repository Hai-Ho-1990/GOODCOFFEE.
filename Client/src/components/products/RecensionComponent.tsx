import Rating from '@mui/material/Rating';
function RecensionComponent() {
    return (
        <>
            <section data-scroll-section className="h-[100vh] w-[100vw]">
                <h1 className="text-amber-400 text-left ml-[5vw] pt-[7vh]">
                    . WHAT CUSTOMERS THINK
                </h1>
                <div className="flex flex-col xl:flex-row mt-[25%] sm:mt-[10%] w-[100%] ">
                    <div className="flex flex-col items-center w-[100%]">
                        <img
                            src="./avatar.avif"
                            alt=""
                            className="rounded-[100%] w-[17%]"
                        />
                        <Rating
                            name="size-medium"
                            defaultValue={5}
                            className="mt-5"
                            sx={{
                                fontSize: {
                                    xs: '1rem',
                                    sm: '1.5rem',
                                    md: '2.5rem'
                                }
                            }}
                        />
                        <p className="w-[50%] mt-5">
                            "Strong, bold flavor with a real caffeine kick.
                            Perfect for mornings—Robusta beans make a powerful
                            and energizing cup every time!"
                        </p>
                        <p className="font-extrabold mt-5">HAI HO</p>
                    </div>
                    <div className="xl:flex sm:flex-col items-center w-[150%]   xl:mt-[1%] hidden">
                        <img
                            src="./avatar1.jpg"
                            alt=""
                            className="rounded-[100%] w-[17%]"
                        />
                        <Rating
                            name="size-medium"
                            defaultValue={5}
                            className="mt-5"
                            sx={{
                                fontSize: {
                                    xs: '1rem',
                                    sm: '1.5rem',
                                    md: '2.5rem'
                                }
                            }}
                        />
                        <p className="w-[40%] mt-5">
                            "Smooth and aromatic with a hint of
                            sweetness—Arabica coffee is my go-to for a rich and
                            balanced cup every day!"
                        </p>
                        <p className="font-extrabold mt-5">MARKUS</p>
                    </div>
                    <div className="sm:flex sm:flex-col items-center sm:mt-[15%] xl:mt-0 w-[100%] hidden ">
                        <img
                            src="./avatar2.jpg"
                            alt=""
                            className="rounded-[100%] w-[17%]"
                        />
                        <Rating
                            name="size-medium"
                            defaultValue={5}
                            className="mt-5"
                            sx={{
                                fontSize: {
                                    xs: '1rem',
                                    sm: '1.5rem',
                                    md: '2.5rem'
                                }
                            }}
                        />
                        <p className="w-[50%] mt-5">
                            "Excelsa has a unique, fruity flavor with a tangy
                            twist—unexpected and delightful. It adds depth to
                            every coffee blend I try!"
                        </p>
                        <p className="font-extrabold mt-5">LISA</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default RecensionComponent;
