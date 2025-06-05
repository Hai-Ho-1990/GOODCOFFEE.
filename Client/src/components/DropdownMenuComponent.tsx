import { lazy } from 'react';
import { Product } from '../types/Product';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
const CartDrawer = lazy(() => import('./products/CartDrawer'));
import { useState } from 'react';
import { Drawer } from '@mui/material';

//MUI components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CloseIcon from '@mui/icons-material/Close';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

interface headerProps {
    cartCount: number;
    cartItems: Product[];
    onRemoveItem: (name: string) => void;
    setCartCount: (count: number) => void;
    setCartItems: (items: Product[]) => void;
}
function ButtonAppBar({
    cartCount,
    cartItems,
    onRemoveItem,
    setCartCount,
    setCartItems
}: headerProps) {
    const { isLoggedIn, isAdmin } = useAuth();
    const [open, setOpen] = useState(false);

    const toggleDrawer = (value: boolean) => {
        console.log('Drawer toggled:', value);
        setOpen(value);
    };
    return (
        <Box
            sx={{
                flexGrow: 1
            }}
        >
            <AppBar
                position="static"
                sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
            >
                <Toolbar
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{
                            mr: 2,

                            zIndex: 10
                        }}
                        onClick={() => toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor="left"
                        open={open}
                        onClose={() => toggleDrawer(false)}
                    >
                        <Box
                            sx={{
                                width: '100vw',
                                height: '100%',
                                backgroundColor: 'black'
                            }}
                            onClick={() => toggleDrawer(false)}
                            onKeyDown={() => toggleDrawer(false)}
                            role="presentation"
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    p: 1
                                }}
                            >
                                <IconButton onClick={() => toggleDrawer(false)}>
                                    <CloseIcon sx={{ color: 'white' }} />
                                </IconButton>
                            </Box>
                            <nav className="flex flex-col text-[2rem] text-white ml-8">
                                <Link
                                    to="/"
                                    onClick={() => toggleDrawer(false)}
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/products"
                                    onClick={() => toggleDrawer(false)}
                                >
                                    Products
                                </Link>
                                <Link
                                    to="/about"
                                    onClick={() => toggleDrawer(false)}
                                >
                                    About Oss
                                </Link>
                                <Link
                                    to="/contact"
                                    onClick={() => toggleDrawer(false)}
                                >
                                    Contact
                                </Link>
                            </nav>
                        </Box>
                    </Drawer>

                    <Logo />

                    <div className="z-1 flex flex-row gap-4 items-center">
                        <Link
                            to={
                                isLoggedIn
                                    ? isAdmin
                                        ? '/admin'
                                        : '/profile'
                                    : '/login'
                            }
                            className="z-1 text-lg"
                        >
                            <PersonIcon
                                fontSize="small"
                                sx={isLoggedIn ? { color: '#ffb900' } : {}}
                            />
                        </Link>

                        <FavoriteIcon fontSize="small" />
                        <CartDrawer
                            cartCount={cartCount}
                            cartItems={cartItems}
                            onRemoveItem={onRemoveItem}
                            setCartCount={setCartCount}
                            setCartItems={setCartItems}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default ButtonAppBar;
