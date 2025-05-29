import Navbar from '../Navbar';
import { Rating, Button } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const API_URL = import.meta.env.VITE_API_URL;
import axios from 'axios';
import { Product } from '../../types/Product';

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
                    <Navbar
                        cartCount={cartCount}
                        cartItems={cartItems}
                        onRemoveItem={onRemoveItem}
                        setCartCount={setCartCount}
                        setCartItems={setCartItems}
                    />
                    <div className=" w-[100%]  mt-[3rem] flex flex-row ">
                        <img
                            src={`${API_URL}/uploads/${product.main_image}`}
                            alt=""
                            className=" w-[50vw] h-[75vh] bg-[#c4a88b] object-cover"
                        />
                        <div className="product-detail w-[50vw] text-left pt-5 pl-[8rem] bg-[#d4cec2]">
                            <div className="leading-[1.2] mb-[5%]">
                                <p className="bg-[black] w-[50px] h-[35px] rounded-[5px] mt-[10%] pl-1.5 pt-2">
                                    -50%
                                </p>
                                <h1 className="text-black text-[3rem] text-left font-extrabold">
                                    {product.name.toUpperCase()}, 500g
                                </h1>
                                <Rating
                                    name="half-rating"
                                    defaultValue={4.5}
                                    precision={0.5}
                                    size="large"
                                    className="self-start"
                                />
                            </div>
                            <div className="flex flex-row gap-3 items-center">
                                <h1 className="text-orange-700 text-[1.5rem] mt-[10px] font-bold">
                                    {product.discount_price}$
                                </h1>
                                <h1 className="text-black text-[1.5rem] mt-[10px]  text-decoration-line: line-through">
                                    {product.price}$
                                </h1>
                            </div>

                            <div className=" flex flex-row items-center gap-2">
                                {product.stock >= 50 ? (
                                    <div className="w-[10px] h-[10px] rounded-full bg-green-700"></div>
                                ) : product.stock > 0 ? (
                                    <div className="w-[10px] h-[10px] rounded-full bg-yellow-700"></div>
                                ) : (
                                    <div className="w-[10px] h-[10px] rounded-full bg-red-700"></div>
                                )}

                                <p className="text-black">
                                    {product.status} ({product.stock})
                                </p>
                            </div>
                            <div className="flex flex-col mt-5">
                                <ol>
                                    <li className="flex flex-row mb-1.5 gap-1">
                                        <DoneIcon sx={{ color: 'black' }} />
                                        <p className="text-black">
                                            Especially gentle long roasting
                                        </p>
                                    </li>
                                    <li className="flex flex-row mb-1.5 gap-1">
                                        <DoneIcon sx={{ color: 'black' }} />
                                        <p className="text-black">
                                            Balanced flavor
                                        </p>
                                    </li>
                                    <li className="flex flex-row mb-1.5 gap-1">
                                        <DoneIcon sx={{ color: 'black' }} />
                                        <p className="text-black">
                                            Suitable for various brewing methods
                                        </p>
                                    </li>
                                    <li className="flex flex-row gap-1">
                                        <DoneIcon sx={{ color: 'black' }} />
                                        <p className="text-black">
                                            Organic quality
                                        </p>
                                    </li>
                                </ol>
                            </div>
                            <div className="mt-[20px] ">
                                <Button
                                    onClick={() => {
                                        console.log(
                                            'Adding to cart product:',
                                            product
                                        );
                                        onAddToCart(product);
                                    }}
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    color="success"
                                    disabled={product.stock === 0}
                                    sx={{
                                        backgroundColor: 'black',
                                        color: 'white',
                                        padding: '12px 24px',
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        width: '40%',
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
                            <div className="flex flex-row items-center gap-2">
                                <img
                                    src="../paypal.png"
                                    alt=""
                                    className="w-[55px]"
                                />
                                <p className="text-black text-[0.8rem]">
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
