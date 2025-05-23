import './App.css';
// import { useReducer } from 'react';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Login from './pages/Login';
import Logo from './components/Logo';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import SmoothScrollWrapper from './components/SmoothScrollWrapper';
import ProductDetail from './components/products/ProductDetail';

interface Product {
    name: string;
    price: number;
    discount_price: number;
    main_image: string;
    status: string;
    quantity: number;
}

function App() {
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState<Product[]>([]);

    useEffect(() => {
        const API_BASE = import.meta.env.VITE_API_URL || '';

        const savedCart = localStorage.getItem('cartItems');
        if (savedCart) {
            const parseCart = JSON.parse(savedCart);
            setCartItems(parseCart);
            setCartCount(parseCart.length);
        }

        fetch(`${API_BASE}/api`)
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.error('API error:', err));
    }, []);

    const handleAddToCart = (product: Product) => {
        const updatedCart = [...cartItems, product];
        setCartCount(updatedCart.length);
        setCartItems(updatedCart);
        //Förvandlar arrayen cartItems till sträng så att kunna lagras den i webbläsare
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    return (
        <>
            {
                <SmoothScrollWrapper>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Home cartCount={cartCount} /> <Logo />
                                </>
                            }
                        />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route
                            path="/products"
                            element={<Products cartCount={cartCount} />}
                        />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route
                            path="/profile"
                            element={<Profile cartCount={cartCount} />}
                        />

                        <Route
                            path="/products/:id"
                            element={
                                <ProductDetail
                                    onAddToCart={handleAddToCart}
                                    cartCount={cartCount}
                                />
                            }
                        />
                    </Routes>
                </SmoothScrollWrapper>
            }
        </>
    );
}

export default App;
