// components/CartDrawer.tsx

import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { IconButton, Button, Badge } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

const QuantitySelector = () => {
    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity((q) => q + 1);
    const decrement = () => setQuantity((q) => Math.max(1, q - 1));

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

export default function CartDrawer({ cartCount }: { cartCount: number }) {
    const [open, setOpen] = useState(false);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <div className="bg-[#ffff] w-[30vw] h-full flex flex-col justify-between">
            <div className="ml-[5%] w-[90%]">
                <h2 className="border-b-1 pb-4 pt-4">YOUR CART</h2>
                <div className="flex flex-row gap-4 pt-8 border-b-1 pb-8 w-[100%]">
                    <img
                        src="../liberica-nobg.png"
                        alt=""
                        className="w-[25%] bg-[#d0beaa] rounded-2xl"
                    />
                    <div className="w-[100%]">
                        <div className="flex flex-row justify-between">
                            <h4 className="font-bold">LIBERICA, 500G</h4>
                            <p>REMOVE</p>
                        </div>
                        <h5 className="text-[0.8rem]">X 2 PACKS</h5>
                        <div className="flex flex-row mt-4 justify-between">
                            <h5 className="text-[1.2rem]">13.98$</h5>
                            {<QuantitySelector />}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[20px] mb-[5%] w-[95%] pl-[5%]">
                <div className="pb-[4%] pt-[4%] border-t-1 border-b-1 border-gray-300">
                    <h4 className="text-[1rem] mb-1.5">ORDER SUMMARY</h4>
                    <div className="flex flex-row justify-between text-gray-400 mb-1.5">
                        <p>2 items</p>
                        <p>13.98$</p>
                    </div>
                    <div className="flex flex-row justify-between text-gray-400">
                        <p>Delivery Cost</p>
                        <p>0$</p>
                    </div>
                </div>
                <div className="flex flex-row pb-5 justify-between items-center pt-2">
                    <h4 className="text-[1.1rem]">Total:</h4>
                    <p className="text-[1.5rem]">13.98$</p>
                </div>
                <Button
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
