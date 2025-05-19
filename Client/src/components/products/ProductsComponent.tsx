import { useState } from 'react';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

function ProductsComponent() {
    const [activeCategory, SetActiveCategory] = useState('ALL');

    const renderContent = () => {
        switch (activeCategory) {
            case 'SMOOTHER':
                return <div></div>;
            case 'SWEET':
                return <div></div>;
            case 'UNIQUE':
                return (
                    <>
                        <div className=" w-[100%] overflow-hidden flex flex-row items-center">
                            <img
                                src="./excelsa-nobg.png"
                                alt=""
                                className="w-[45%] h-[50%%] object-cover scale-[1.2] transform transition-transform duration-500 ease-in-out"
                            />
                            <div className="flex flex-col items-center">
                                <h1 className="text-black mt-5 text-[2.5rem] font-bold">
                                    EXCELSA
                                </h1>
                                <Rating
                                    name="half-rating"
                                    defaultValue={4.5}
                                    precision={0.5}
                                    size="large"
                                />
                                <p className="w-[60%] pt-5 text-black">
                                    Excelsa is a rare and distinctive coffee
                                    variety, part of the Liberica family. Grown
                                    mainly in Southeast Asia, it’s known for its
                                    complex flavor profile—fruity, tart, and
                                    often with dark berry or spiced notes.
                                    Excelsa adds depth and uniqueness to blends,
                                    making it a favorite among adventurous
                                    coffee lovers.
                                </p>

                                <div className="mt-[50px] ">
                                    <Button
                                        variant="contained"
                                        size="large"
                                        color="success"
                                        sx={{
                                            backgroundColor: '#ffb900',
                                            color: 'black',
                                            padding: '12px 24px',
                                            fontSize: '18px',
                                            fontWeight: 'bold',
                                            width: '10vw',

                                            '&:hover': {
                                                backgroundColor: 'orange'
                                            }
                                        }}
                                    >
                                        6.99$
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </>
                );
            case 'BITTER':
                return <div></div>;
            case 'ALL':
            default:
                return (
                    <>
                        <div className=" w-[49.5%] overflow-hidden flex flex-col">
                            <img
                                src="./liberica-nobg.png"
                                alt=""
                                className="w-[100%] h-[100%] object-cover hover:scale-[1.25] transform transition-transform duration-500 ease-in-out"
                            />
                            <h2 className="text-black mt-5 text-[1.2rem] font-bold">
                                LIBERICA
                            </h2>

                            <h2 className="text-black">6.99$</h2>
                        </div>

                        <div className=" w-[49.5%] overflow-hidden flex flex-col">
                            <img
                                src="./excelsa-nobg.png"
                                alt=""
                                className="w-[100%] h-[100%] object-cover hover:scale-[1.25] transform transition-transform duration-500 ease-in-out "
                            />
                            <h2 className="text-black mt-5 text-[1.2rem] font-bold">
                                EXCELSA
                            </h2>

                            <h2 className="text-black">6.99$</h2>
                        </div>

                        <div className=" w-[49.5%] overflow-hidden flex flex-col">
                            <img
                                src="./arabica-nobg.png"
                                alt=""
                                className="w-[100%] h-[30rem] object-cover hover:scale-[1.25] transform transition-transform duration-500 ease-in-out "
                            />
                            <h2 className="text-black mt-5 text-[1.2rem] font-bold">
                                ARABICA
                            </h2>

                            <h2 className="text-black">6.99$</h2>
                        </div>
                        <div className=" w-[49.5%] overflow-hidden flex flex-col">
                            <img
                                src="./robusta-nobg.png"
                                alt=""
                                className="w-[100%] h-[30rem] object-cover hover:scale-[1.25] transform transition-transform duration-500 ease-in-out "
                            />
                            <h2 className="text-black mt-5 text-[1.2rem] font-bold">
                                ROBUSTA
                            </h2>

                            <h2 className="text-black">6.99$</h2>
                        </div>
                    </>
                );
        }
    };

    return (
        <>
            <section
                data-scroll-section
                className="bg-[#c4a88b] h-[100vh] w-[100vw]"
            >
                <div className="products">
                    <div className="flex flex-row justify-between">
                        <h1 className="text-[black] text-left ml-[5vw] pt-[5vw]">
                            . OUR PRODUCTS
                        </h1>
                        <div className="flex flex-row justify-between pr-[6vw]">
                            {[
                                'ALL',
                                'SMOOTHER',
                                'SWEET',
                                'UNIQUE',
                                'BITTER'
                            ].map((category) => (
                                <button
                                    key={category}
                                    onClick={() => SetActiveCategory(category)}
                                    className={`text-[black] text-left ml-[4vw] pt-[5vw] hover:font-bold ${
                                        activeCategory === category
                                            ? 'font-bold'
                                            : ''
                                    }`}
                                >
                                    . {category}
                                </button>
                            ))}

                            {/* <button className="text-[black] text-left ml-[4vw] pt-[5vw] hover:font-bold ">
                                . SMOOTHER
                            </button>
                            <button className="text-[black] text-left ml-[4vw] pt-[5vw] hover:font-bold ">
                                . SWEET
                            </button>
                            <button className="text-[black] text-left ml-[4vw] pt-[5vw] hover:font-bold ">
                                . UNIQUE
                            </button>
                            <button className="text-[black] text-left ml-[4vw] pt-[5vw] hover:font-bold ">
                                . BITTER
                            </button> */}
                        </div>
                    </div>
                    <div className="  flex  flex-wrap justify-center">
                        <div className="product w-[100%]  flex mt-[5rem]">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductsComponent;
