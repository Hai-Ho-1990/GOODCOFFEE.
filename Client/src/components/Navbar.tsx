import { lazy } from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Product } from '../types/Product';
const CartDrawer = lazy(() => import('./products/CartDrawer'));
import { useAuth } from '../context/AuthContext';

interface navbarProps {
    cartCount: number;
    cartItems: Product[];
    onRemoveItem: (name: string) => void;
    setCartCount: (count: number) => void;
    setCartItems: (items: Product[]) => void;
}

export default function Navbar({
    cartCount,
    cartItems,
    onRemoveItem,
    setCartCount,
    setCartItems
}: navbarProps) {
    const { isLoggedIn, isAdmin } = useAuth();

    return (
        <div className="container-navbar flex items-center justify-around w-[100%] pt-4 ">
            <Logo />
            <nav className="navbar-links flex gap-15 text-lg z-10">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About Oss</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <div className="z-1 flex flex-row sm:gap-3 lg:gap-7 items-center">
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
                        fontSize="medium"
                        sx={isLoggedIn ? { color: '#ffb900' } : {}}
                    />
                </Link>

                <FavoriteIcon fontSize="medium" />
                <CartDrawer
                    cartCount={cartCount}
                    cartItems={cartItems}
                    onRemoveItem={onRemoveItem}
                    setCartCount={setCartCount}
                    setCartItems={setCartItems}
                />
            </div>
        </div>
    );
}
