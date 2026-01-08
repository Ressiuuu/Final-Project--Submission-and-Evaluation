import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaHome, FaLeaf, FaShoppingCart, FaInfoCircle } from 'react-icons/fa';

const Navbar = () => {
    const totalQuantity = useSelector(state => state.cart.totalQuantity);

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Brand */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold text-green-800 flex items-center">
                            🌿 Paradise Nursery
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-8">
                        <Link 
                            to="/" 
                            className="text-gray-700 hover:text-green-700 font-medium flex items-center space-x-2 transition-colors"
                        >
                            <FaHome />
                            <span>Home</span>
                        </Link>
                        
                        <Link 
                            to="/about" 
                            className="text-gray-700 hover:text-green-700 font-medium flex items-center space-x-2 transition-colors"
                        >
                            <FaInfoCircle />
                            <span>About Us</span>
                        </Link>
                        
                        <Link 
                            to="/plants" 
                            className="text-gray-700 hover:text-green-700 font-medium flex items-center space-x-2 transition-colors"
                        >
                            <FaLeaf />
                            <span>Plants</span>
                        </Link>
                        
                        <Link 
                            to="/cart" 
                            className="relative text-gray-700 hover:text-green-700 font-medium flex items-center space-x-2 transition-colors"
                        >
                            <FaShoppingCart />
                            <span>Cart</span>
                            {totalQuantity > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                                    {totalQuantity}
                                </span>
                            )}
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button className="text-gray-700">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className="md:hidden bg-white border-t">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link to="/" className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md">
                        Home
                    </Link>
                    <Link to="/about" className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md">
                        About Us
                    </Link>
                    <Link to="/plants" className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md">
                        Plants
                    </Link>
                    <Link to="/cart" className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md flex justify-between items-center">
                        <span>Cart</span>
                        {totalQuantity > 0 && (
                            <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
                                {totalQuantity}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;