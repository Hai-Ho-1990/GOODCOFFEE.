import './App.css';
// import { useReducer } from 'react';
import { lazy } from 'react';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
import About from './pages/About';
import Contact from './pages/Contact';
const Login = lazy(() => import('./pages/Login'));
const Signin = lazy(() => import('./pages/Signin'));
import Logo from './components/Logo';
const Profile = lazy(() => import('./pages/Profile'));

import SmoothScrollWrapper from './components/SmoothScrollWrapper';
import ProductDetail from './components/products/ProductDetail';
import { Product } from '../src/types/Product';

function App() {
    const [cartCount, setCartCount] = useState(0);
    // Produkter som kund lägger i korgen
    const [cartItems, setCartItems] = useState<Product[]>([]);

    useEffect(() => {
        const API_BASE = import.meta.env.VITE_API_URL || '';

        const savedCart = localStorage.getItem('cartItems');
        if (savedCart) {
            const parseCart = JSON.parse(savedCart);
            setCartItems(parseCart);
            setCartCount(
                parseCart.reduce(
                    (sum: number, item: Product) => sum + item.quantity,
                    0
                )
            );
        }

        fetch(`${API_BASE}/api`)
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.error('API error:', err));
    }, []);

    const handleAddToCart = (product: Product) => {
        const existingProduct = cartItems.find(
            (item) => item.name === product.name
        );

        let updatedCart;

        if (existingProduct) {
            updatedCart = cartItems.map((item) =>
                item.name === product.name
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        } else {
            updatedCart = [...cartItems, { ...product, quantity: 1 }];
        }

        setCartCount(updatedCart.reduce((sum, item) => sum + item.quantity, 0));
        setCartItems(updatedCart);
        //Förvandlar arrayen cartItems till sträng så att kunna lagras den i webbläsare
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    const handleRemoveItem = (name: string) => {
        const updatedCart = cartItems.filter((item) => item.name !== name);
        setCartItems(updatedCart);
        setCartCount(updatedCart.reduce((sum, item) => sum + item.quantity, 0));
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
                                    <Home
                                        cartCount={cartCount}
                                        cartItems={cartItems}
                                        onRemoveItem={handleRemoveItem}
                                        setCartCount={setCartCount}
                                        setCartItems={setCartItems}
                                    />{' '}
                                    <Logo />
                                </>
                            }
                        />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route
                            path="/products"
                            element={
                                <Products
                                    cartCount={cartCount}
                                    cartItems={cartItems}
                                    onRemoveItem={handleRemoveItem}
                                    setCartCount={setCartCount}
                                    setCartItems={setCartItems}
                                />
                            }
                        />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route
                            path="/profile"
                            element={
                                <Profile
                                    cartCount={cartCount}
                                    cartItems={cartItems}
                                    onRemoveItem={handleRemoveItem}
                                    setCartCount={setCartCount}
                                    setCartItems={setCartItems}
                                />
                            }
                        />

                        <Route
                            path="/products/:id"
                            element={
                                <ProductDetail
                                    onAddToCart={handleAddToCart}
                                    cartCount={cartCount}
                                    cartItems={cartItems}
                                    onRemoveItem={handleRemoveItem}
                                    setCartCount={setCartCount}
                                    setCartItems={setCartItems}
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
