import Logo from './Logo';
import { Link } from 'react-router-dom';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Badge from '@mui/material/Badge';
export default function Navbar() {
    const isLoggedin = () => {
        return !!localStorage.getItem('token');
    };

    return (
        <div
            className="container-navbar flex items-center justify-around w-[100%] pt-4
    "
        >
            <Logo />
            <div>
                <nav className="navbar-links flex gap-15 text-lg">
                    <Link to="/" className="z-1">
                        Home
                    </Link>
                    <Link to="/products" className="z-1">
                        Products
                    </Link>
                    <Link to="/about" className="z-1">
                        About Oss
                    </Link>
                    <Link to="/contact" className="z-1">
                        Contact
                    </Link>
                </nav>
            </div>
            <div className="z-1 flex flex-row gap-7 items-center">
                {isLoggedin() ? (
                    <Link to="/profile" className="z-1 text-lg">
                        <PersonIcon
                            fontSize="medium"
                            sx={{ color: '#ffb900' }}
                        />
                    </Link>
                ) : (
                    <Link to="/login" className="z-1 text-lg">
                        <PersonIcon fontSize="medium" />
                    </Link>
                )}

                <FavoriteIcon fontSize="medium" />
                <div className="shoping-cart flex flex-row gap-1 relative">
                    <Badge badgeContent={1} color="warning">
                        <LocalMallOutlinedIcon fontSize="medium" />
                    </Badge>
                </div>
            </div>
        </div>
    );
}
