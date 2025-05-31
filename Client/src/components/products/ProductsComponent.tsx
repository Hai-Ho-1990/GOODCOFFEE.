import { useState, useEffect } from 'react';
// import Rating from '@mui/material/Rating';
// import Button from '@mui/material/Button';
const API_URL = import.meta.env.VITE_API_URL;
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Rating } from '@mui/material';
import { Product } from '../../types/Product';

function ProductsComponent() {
    const [products, setProducts] = useState<Product[]>([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const activeCategory = searchParams.get('category') || 'ALL';

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                let url = `${API_URL}/api/product`;

                if (activeCategory !== 'ALL') {
                    url += `?category=${activeCategory}`;
                }
                const response = await axios.get(url);

                console.log(response.data);
                setProducts(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchProduct();
    }, [activeCategory]);

    const renderAllProducts = () => {
        return products.map((product) => (
            <div key={product.id} className="w-[25%] mt-[6rem]">
                <img
                    onClick={() => handleProductClick(product.id)}
                    src={`${API_URL}/uploads/${product.main_image}`}
                    alt=""
                    className="w-[100%] h-[100%] scale-[1.2] object-cover hover:scale-[1.35] transform transition-transform duration-500 ease-in-out"
                />
                <h2 className="text-black mt-[7%] text-[1.2rem] font-bold">
                    {product.name.toUpperCase()}
                </h2>
                <h2 className="text-black text-xl">
                    {product.discount_price}$
                </h2>
            </div>
        ));
    };

    const renderSingleProduct = (product: Product) => (
        <div
            key={product.id}
            className=" w-[100%] overflow-hidden flex flex-row items-center"
        >
            <img
                src={`${API_URL}/uploads/${product.main_image}`}
                alt=""
                className="w-[50%] h-[50%] object-cover scale-[1.2]"
            />
            <div className="flex flex-col items-center">
                <h1 className="text-black mt-5 text-[2.5rem] font-bold">
                    {product.name.toUpperCase()}
                </h1>
                <Rating
                    name="half-rating"
                    defaultValue={4.5}
                    precision={0.5}
                    size="large"
                />
                <p className="w-[60%] pt-5 text-black">{product.description}</p>

                <div className="mt-[50px] ">
                    <Button
                        onClick={() => {
                            console.log('Clicked product id:', product.id);
                            handleProductClick(product.id);
                        }}
                        variant="contained"
                        size="large"
                        color="success"
                        sx={{
                            backgroundColor: 'black',
                            color: 'white',
                            padding: '12px 24px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            width: '20vw',

                            '&:hover': {
                                backgroundColor: 'orange'
                            }
                        }}
                    >
                        GO TO PRODUCT
                    </Button>
                </div>
            </div>
        </div>
    );
    const navigate = useNavigate();
    const handleProductClick = (id: number) => {
        navigate(`/products/${id}`);
        console.log(id);
    };

    const renderContent = () => {
        if (products.length === 0) {
            return (
                <div className="text-black text-xl mt-10 text-center w-full">
                    LOADING ...
                </div>
            );
        }

        if (activeCategory === 'ALL') {
            return (
                <>
                    <div className="flex flex-wrap">{renderAllProducts()}</div>
                </>
            );
        }
        if (products.length === 1) {
            return renderSingleProduct(products[0]);
        }
    };

    const handleCategoryClick = (category: string) => {
        setSearchParams(category === 'ALL' ? {} : { category });
    };

    return (
        <>
            <section
                data-scroll-section
                className="bg-[#c4a88b] h-[100vh] w-[100vw]"
            >
                <div className="products">
                    <div className="flex flex-row justify-between pt-[3vw]">
                        <h1 className="text-[black] text-left ml-[5vw] ">
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
                                    onClick={() =>
                                        handleCategoryClick(category)
                                    }
                                    className={`text-[black] text-left ml-[4vw] pt-[5vw] hover:font-bold ${
                                        activeCategory === category
                                            ? 'font-bold'
                                            : ''
                                    }`}
                                >
                                    . {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {renderContent()}
                </div>
            </section>
        </>
    );
}

export default ProductsComponent;
