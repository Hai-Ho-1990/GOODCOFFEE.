import './App.css';
// import { useReducer } from 'react';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Login from './pages/Login';
import Logo from './components/Logo';
import Signin from './pages/Signin';
import SmoothScrollWrapper from './components/SmoothScrollWrapper';

function App() {
    useEffect(() => {
        const API_BASE = import.meta.env.VITE_API_URL || '';

        fetch(`${API_BASE}/api`)
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.error('API error:', err));
    }, []);

    return (
        <>
            {
                <SmoothScrollWrapper>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Home /> <Logo />
                                </>
                            }
                        />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signin" element={<Signin />} />
                    </Routes>
                </SmoothScrollWrapper>
            }
        </>
    );
}

export default App;
