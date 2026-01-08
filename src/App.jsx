import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';

// Landing Page Component dengan Tailwind
const LandingPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center p-8">
            <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-4">
                Paradise Nursery
            </h1>
            <p className="text-xl md:text-2xl text-green-600 mb-12 max-w-2xl">
                Bring nature indoors with our collection of beautiful, healthy houseplants 
                that purify your air and uplift your spirits.
            </p>
            <Link 
                to="/plants" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
                Get Started
            </Link>
        </div>
    );
};

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="bg-paradise-nursery min-h-screen">
                    <div className="min-h-screen bg-white/90 backdrop-blur-sm">
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<LandingPage />} />
                            <Route path="/about" element={<AboutUs />} />
                            <Route path="/plants" element={<ProductList />} />
                            <Route path="/cart" element={<CartItem />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </Provider>
    );
}

export default App;