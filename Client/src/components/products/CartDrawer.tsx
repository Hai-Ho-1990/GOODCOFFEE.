import { useState, useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import { IconButton, Button, Badge } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
const API_URL = import.meta.env.VITE_API_URL;
import axios from 'axios';
import { Product } from '../../types/Product';

const QuantitySelector = ({
    quantity,
    setQuantity
}: {
    quantity: number;
    setQuantity: (quantity: number) => void;
}) => {
    const increment = () => setQuantity(quantity + 1);
    const decrement = () => setQuantity(Math.max(1, quantity - 1));

    return (
        <div className="w-[76px] h-[25px] flex flex-row">
            <IconButton onClick={decrement}>
                <RemoveIcon sx={{ width: '18px' }} />
            </IconButton>
            <div className="w-[30px] text-[1.2rem]">{quantity}</div>
            <IconButton onClick={increment}>
                <AddIcon sx={{ width: '18px' }} />
            </IconButton>
        </div>
    );
};

const handleCheckout = async ({
    cartItems,
    setCartItems,
    setCartCount
}: {
    cartItems: Product[];
    setCartCount: (count: number) => void;
    setCartItems: (items: Product[]) => void;
}) => {
    try {
        const orderItems = cartItems.map((item) => ({
            product_id: item.id,
            quantity: item.quantity,
            unit_price: item.discount_price || item.price
        }));

        const totalPrice = cartItems.reduce(
            (sum, item) =>
                sum + (item.discount_price || item.price) * item.quantity,
            0
        );
        console.log('orderItems:', orderItems);
        console.log('totalPrice:', totalPrice);
        console.log('Cart items being sent:', cartItems);
        console.log('Order items:', orderItems);

        const token = localStorage.getItem('token');
        const response = await axios.post(
            `${API_URL}/api/checkout`,
            {
                total_price: totalPrice,
                order_date: new Date().toISOString(),
                order_items: orderItems
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        console.log('token:', token);
        if (response.status === 201) {
            console.log('Order sent sucessfully:', response.data);
            setCartItems([]);
            setCartCount(0);
            localStorage.removeItem('cartItems');
            alert('Thank you for your purchasing.');
        } else {
            alert('Could not complete your shopping');
        }
    } catch (err) {
        console.error('Checkout error.', err);
    }
};

export default function CartDrawer({
    cartCount,
    cartItems,
    onRemoveItem,
    setCartCount,
    setCartItems
}: {
    cartCount: number;
    cartItems: Product[];

    onRemoveItem: (name: string) => void;
    setCartCount: (count: number) => void;
    setCartItems: (items: Product[]) => void;
}) {
    const [open, setOpen] = useState(false);

    // Ett sätt att plocka produkts namn och dess värde lagras i en objekt.
    // i detta fall är acc en tom objekt och funkar som "tom ryggsäck" där
    // lagras varje objekt som funktionen har hittat från cartItems
    const [quantities, setQuantities] = useState<{ [key: string]: number }>(
        cartItems.reduce((acc, item) => {
            acc[item.name] = item.quantity;
            return acc;
        }, {} as { [key: string]: number })
    );

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const updateQuantity = (name: string, qty: number) => {
        // Visa ändringen direkt i UI
        setQuantities((prev) => ({ ...prev, [name]: qty }));
        //Uppdatera hela cartItems med rättvärde, om korgens produkt stämmer med produkts namn som vi ändrat, uppdatera dess kvantiten.
        const updatedCartItems = cartItems.map((item) =>
            item.name === name ? { ...item, quantity: qty } : item
        );
        // Beräknar kvantiten av den nya uppdatering.
        const newCartCount = updatedCartItems.reduce(
            (sum, item) => sum + item.quantity,
            0
        );
        //Uppdatera staten.
        setCartItems(updatedCartItems);
        setCartCount(newCartCount);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    // Det här är ett sätt att räkna total price.
    // acc i detta fall är 0 , fungerar som en mellan resultat där spraras varende resultat av varje rund.
    const totalPrice = cartItems.reduce(
        (sum, item) =>
            sum +
            (item.discount_price || item.price) * (quantities[item.name] || 1),
        0
    );

    // Denna hjälper sidan undvika NaN fel.
    useEffect(() => {
        const initialQuantities: { [key: string]: number } = {};
        cartItems.forEach((item) => {
            initialQuantities[item.name] = item.quantity;
        });
        setQuantities(initialQuantities);
    }, [cartItems]);
    const DrawerList = (
        <div className="bg-[#ffff] w-[30vw] h-full flex flex-col justify-between">
            <div className="ml-[5%] w-[90%]">
                <h2 className="border-b-1 pb-4 pt-4">YOUR CART</h2>
                {cartItems.length === 0 && <p>Your cart is empty.</p>}
                {cartItems.map((item) => (
                    <div
                        key={item.name}
                        className="flex flex-row gap-4 pt-8 border-b-1 pb-8 w-[100%]"
                    >
                        <img
                            src={item.main_image}
                            alt={item.name}
                            className="w-[25%] bg-[#d0beaa] rounded-2xl"
                        />
                        <div className="w-[100%]">
                            <div className="flex flex-row justify-between">
                                <h4 className="font-bold">{item.name}</h4>
                                <p
                                    className="cursor-pointer text-red-600"
                                    onClick={() => onRemoveItem(item.name)}
                                >
                                    REMOVE
                                </p>
                            </div>
                            <h5 className="text-[0.8rem]">
                                X {quantities[item.name] || 1} PACKS
                            </h5>
                            <div className="flex flex-row mt-4 justify-between">
                                <h5 className="text-[1.2rem]">
                                    $
                                    {(item.discount_price || item.price) *
                                        (quantities[item.name] || 1)}
                                </h5>
                                <QuantitySelector
                                    quantity={quantities[item.name] || 1}
                                    setQuantity={(qty) =>
                                        updateQuantity(item.name, qty)
                                    }
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-[20px] mb-[5%] w-[95%] pl-[5%]">
                <div className="pb-[4%] pt-[4%] border-t-1 border-b-1 border-gray-300">
                    <h4 className="text-[1rem] mb-1.5">ORDER SUMMARY</h4>
                    <div className="flex flex-row justify-between text-gray-400 mb-1.5">
                        <p>{cartCount} items</p>
                        <p>${totalPrice.toFixed(2)}</p>
                    </div>
                    <div className="flex flex-row justify-between text-gray-400">
                        <p>Delivery Cost</p>
                        <p>$0</p>
                    </div>
                </div>
                <div className="flex flex-row pb-5 justify-between items-center pt-2">
                    <h4 className="text-[1.1rem]">Total:</h4>
                    <p className="text-[1.5rem]">${totalPrice.toFixed(2)}</p>
                </div>
                <Button
                    onClick={() =>
                        handleCheckout({
                            cartItems,
                            setCartItems,
                            setCartCount
                        })
                    }
                    type="submit"
                    variant="contained"
                    size="large"
                    color="success"
                    sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        padding: '12px 24px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        width: '100%',
                        borderRadius: '5px',
                        height: '43px',
                        '&:hover': {
                            backgroundColor: 'orange'
                        }
                    }}
                >
                    CHECK OUT
                </Button>
            </div>
        </div>
    );

    return (
        <>
            <Badge badgeContent={cartCount} color="warning">
                <LocalMallOutlinedIcon
                    fontSize="medium"
                    onClick={toggleDrawer(true)}
                />
            </Badge>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </>
    );
}
