import Logo from './Logo';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div
            className="container-navbar flex items-center justify-around w-[100%] pt-4
    "
        >
            <Logo />
            <div>
                <nav className="navbar-links flex gap-15">
                    <Link to="/" className="z-1">
                        Home
                    </Link>
                    <Link to="/about" className="z-1">
                        About Oss
                    </Link>
                    <Link to="/contact" className="z-1">
                        Contact
                    </Link>
                    <Link to="/products" className="z-1">
                        Products
                    </Link>
                </nav>
            </div>
            <Link to="/login" className="z-1">
                Login
            </Link>
        </div>
    );
}
