import Navbar from '../Navbar';
import { Rating, Button } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const API_URL = import.meta.env.VITE_API_URL;
import axios from 'axios';
import { Product } from '../../types/Product';
import DropdownMenuComponent from '../DropdownMenuComponent';

interface ProductProps {
    onAddToCart: (product: Product) => void;
    cartCount: number;
    cartItems: Product[];
    onRemoveItem: (name: string) => void;
    setCartCount: (count: number) => void;
    setCartItems: (items: Product[]) => void;
}

function ProductDetail({
    cartCount,
    onAddToCart,
    cartItems,
    onRemoveItem,
    setCartItems,
    setCartCount
}: ProductProps) {
    const [product, setProduct] = useState<Product | null>(null);
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(
                    `${API_URL}/api/products/${id}`
                );
                setProduct(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchProduct();
    }, [id]);

    return (
        <>
            {product && (
                <section
                    data-scroll-section
                    className="w-[100vw] h-[100vh] flex flex-col "
                >
                    <div className="hidden md:block">
                        <Navbar
                            cartCount={cartCount}
                            cartItems={cartItems}
                            onRemoveItem={onRemoveItem}
                            setCartCount={setCartCount}
                            setCartItems={setCartItems}
                        />
                    </div>
                    <div className="block md:hidden z-10">
                        <DropdownMenuComponent
                            cartCount={cartCount}
                            cartItems={cartItems}
                            onRemoveItem={onRemoveItem}
                            setCartCount={setCartCount}
                            setCartItems={setCartItems}
                        />
                    </div>
                    <div className=" w-[100%] md:mt-[1rem] xl:mt-[3rem] flex flex-col xl:flex-row ">
                        <img
                            src={`${API_URL}/uploads/${product.main_image}`}
                            alt=""
                            className=" xl:w-[50vw] h-[35vh] md:h-[45vh] xl:h-[75vh] bg-[#c4a88b] object-cover"
                        />
                        <div className="product-detail w-[100%]  xl:w-[50vw] h-[60vh] xl:h-[100%] md:text-left md:pt-5 xl:pl-[8rem]  bg-[#d4cec2] md:flex md:flex-col md:items-center xl:items-start">
                            <div className="leading-[1.2] xl:mb-[5%] w-full flex flex-col items-center xl:items-start lg:mt-[6%]">
                                <p className="bg-[black] w-[30px] xl:w-[50px] h-[25px] xl:h-[35px] rounded-[5px] xl:mt-[10%] pl-0.5 xl:pl-1.5 pt-2 text-[0.65rem] xl:text-[1rem] text-center lg:text-left hidden xl:block">
                                    -50%
                                </p>
                                <h1 className="text-black text-[1.4rem] md:text-[2.5rem] lg:text-[3rem] xl:text-left font-extrabold pt-7 xl:pt-0">
                                    {product.name.toUpperCase()}, 500g
                                </h1>
                                <div>
                                    <Rating
                                        name="half-rating"
                                        defaultValue={4.5}
                                        precision={0.5}
                                        className="self-start"
                                        sx={{
                                            fontSize: {
                                                xs: '1.2rem',
                                                sm: '1.8rem',
                                                md: '2rem'
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row gap-3 justify-center md:justify-start">
                                <h1 className="text-orange-700  md:text-[1.5rem] md:mt-[10px] font-bold">
                                    {product.discount_price}$
                                </h1>
                                <h1 className="text-black  md:text-[1.5rem] md:mt-[10px]  text-decoration-line: line-through">
                                    {product.price}$
                                </h1>
                            </div>

                            <div className=" flex flex-row items-center gap-2 justify-center md:justify-start">
                                {product.stock >= 50 ? (
                                    <div className="w-[5px]  md:w-[10px] h-[5px]  md:h-[10px] rounded-full bg-green-700"></div>
                                ) : product.stock > 0 ? (
                                    <div className="w-[5px]  md:w-[10px] h-[5px]  md:h-[10px] rounded-full bg-yellow-700"></div>
                                ) : (
                                    <div className="w-[5px]  md:w-[10px] h-[5px]  md:h-[10px] rounded-full bg-red-700"></div>
                                )}

                                <p className="text-black text-[0.7rem]  md:text-[1rem]">
                                    {product.status} ({product.stock})
                                </p>
                            </div>
                            <div className="flex flex-col mt-5 pl-[1rem] md:pl-0 ">
                                <ol>
                                    <li className="flex flex-row mb-1.5 gap-1">
                                        <DoneIcon sx={{ color: 'black' }} />
                                        <p className="text-black text-[0.8rem] md:text-[1rem]">
                                            Especially gentle long roasting
                                        </p>
                                    </li>
                                    <li className="flex flex-row mb-1.5 gap-1">
                                        <DoneIcon sx={{ color: 'black' }} />
                                        <p className="text-black text-[0.8rem]  md:text-[1rem]">
                                            Balanced flavor
                                        </p>
                                    </li>
                                    <li className="flex flex-row mb-1.5 gap-1">
                                        <DoneIcon sx={{ color: 'black' }} />
                                        <p className="text-black text-[0.8rem]  md:text-[1rem]">
                                            Suitable for various brewing methods
                                        </p>
                                    </li>
                                    <li className="flex flex-row gap-1">
                                        <DoneIcon sx={{ color: 'black' }} />
                                        <p className="text-black text-[0.8rem] md:text-[1rem]">
                                            Organic quality
                                        </p>
                                    </li>
                                </ol>
                            </div>
                            <div className="mt-[20px] flex flex-col items-center xl:items-start">
                                <Button
                                    onClick={() => {
                                        const token =
                                            localStorage.getItem('token');
                                        if (!token) {
                                            navigate('/login');
                                            return;
                                        }
                                        console.log(
                                            'Adding to cart product:',
                                            product
                                        );
                                        onAddToCart(product);
                                    }}
                                    type="submit"
                                    variant="contained"
                                    color="success"
                                    disabled={product.stock === 0}
                                    sx={{
                                        backgroundColor: 'black',
                                        color: 'white',

                                        fontSize: {
                                            xs: '10px',
                                            xl: '14px'
                                        },
                                        fontWeight: 'bold',
                                        width: {
                                            xs: '85%',
                                            sm: '300%',
                                            xl: '250%'
                                        },
                                        borderRadius: '5px',
                                        height: '43px',

                                        '&:hover': {
                                            backgroundColor: 'orange'
                                        }
                                    }}
                                >
                                    ADD TO CART
                                </Button>
                            </div>
                            <div className="flex flex-row items-center gap-2 justify-center md:justify-start mt-[-1%] md:mt-0">
                                <img
                                    src="../paypal.png"
                                    alt=""
                                    className="w-[42px] md:w-[55px]"
                                />
                                <p className="text-black text-[0.7rem] md:text-[0.8rem]">
                                    Pay after 30 days with PayPal
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

export default ProductDetail;
