import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';

import Products from './Products';
import Users from './Users';
import Orders from './Orders';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import StoreIcon from '@mui/icons-material/Store';
import GroupIcon from '@mui/icons-material/Group';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

//
interface DashboardLayoutProps {
    cartCount: number;
    cartItems: Product[];
    onRemoveItem: (name: string) => void;
    setCartCount: (count: number) => void;
    setCartItems: (items: Product[]) => void;
}
interface Product {
    id: number;
    name: string;
    price: number;
    discount_price: number;
    main_image: string;
    status: string;
    quantity: number;
    stock: number;
}

function AdminDashboardLayout({
    cartCount,
    cartItems,
    onRemoveItem,
    setCartCount,
    setCartItems
}: DashboardLayoutProps) {
    const navigate = useNavigate();
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    const handleListItemClick = (_event: unknown, index: number) => {
        setSelectedIndex(index);
    };

    const renderContent = () => {
        switch (selectedIndex) {
            case 0:
                return <Products />;
            case 1:
                return <Users />;
            case 2:
                return <Orders />;
            case 3:
                return <div>Inställningar</div>;
            default:
                return <div>Välj en sektion i menyn</div>;
        }
    };

    return (
        <section className="h-[100vh] w-[100vw] flex flex-col items-center">
            <Navbar
                cartCount={cartCount}
                cartItems={cartItems}
                onRemoveItem={onRemoveItem}
                setCartCount={setCartCount}
                setCartItems={setCartItems}
            />
            <div className="h-[90vh] w-full mt-[56px] flex flex-row justify-center">
                {/* SIDOMENY */}
                <div className="w-[15vw] h-full bg-[#1f1f1f] flex flex-col  text-white">
                    <ol className="flex flex-col pt-20 w-full text-sm">
                        <li>
                            <ListItemButton
                                selected={selectedIndex === 0}
                                onClick={(e) => handleListItemClick(e, 0)}
                            >
                                <ListItemIcon>
                                    <StoreIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Products" />
                            </ListItemButton>
                        </li>
                        <li>
                            <ListItemButton
                                selected={selectedIndex === 1}
                                onClick={(e) => handleListItemClick(e, 1)}
                            >
                                <ListItemIcon>
                                    <GroupIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Users" />
                            </ListItemButton>
                        </li>
                        <li>
                            <ListItemButton
                                selected={selectedIndex === 2}
                                onClick={(e) => handleListItemClick(e, 2)}
                            >
                                <ListItemIcon>
                                    <ShoppingCartIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Orders" />
                            </ListItemButton>
                        </li>
                        <li>
                            <ListItemButton
                                selected={selectedIndex === 3}
                                onClick={(e) => handleListItemClick(e, 3)}
                            >
                                <ListItemIcon>
                                    <SettingsIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Settings" />
                            </ListItemButton>
                        </li>
                    </ol>
                    <div className="mt-auto pb-6">
                        <ListItemButton onClick={handleLogout}>
                            <ListItemIcon>
                                <LogoutIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Logga ut" />
                        </ListItemButton>
                    </div>
                </div>

                {/* INNEHÅLL */}
                <div className="w-[100vw] bg-white  p-6 overflow-y-auto">
                    {renderContent()}
                </div>
            </div>
        </section>
    );
}

export default AdminDashboardLayout;
