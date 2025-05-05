import './App.css';
// import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Login from './pages/Login';
import Logo from './components/Logo';
import SmoothScrollWrapper from './components/SmoothScrollWrapper';

function App() {
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
                    </Routes>
                </SmoothScrollWrapper>
            }
        </>
    );
}

export default App;
