import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart, deleteFromCart } from '../features/cart/CartSlice';

const CartItem = () => {
    const dispatch = useDispatch();
    const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

    const handleIncrease = (item) => {
        dispatch(addToCart(item));
    };

    const handleDecrease = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleDelete = (id) => {
        dispatch(deleteFromCart(id));
    };

    const handleCheckout = () => {
        alert('Checkout feature coming soon!');
    };

    if (items.length === 0) {
        return (
            <div className="max-w-4xl mx-auto p-8 text-center">
                <div className="bg-white rounded-2xl shadow-lg p-12">
                    <div className="text-6xl mb-6">🌿</div>
                    <h2 className="text-3xl font-bold text-green-800 mb-4">Your cart is empty</h2>
                    <p className="text-gray-600 mb-8">Add some beautiful plants to your cart!</p>
                    <Link 
                        to="/plants" 
                        className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6">
            <h1 className="text-4xl font-bold text-green-800 text-center mb-10">
                Shopping Cart
            </h1>
            
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                    {items.map((item) => (
                        <div key={item.id} className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6">
                            {/* Product Image */}
                            <div className="w-32 h-32 flex-shrink-0">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            
                            {/* Product Details */}
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold text-green-800 mb-1">{item.name}</h3>
                                <p className="text-gray-500 text-sm mb-2">{item.category}</p>
                                <p className="text-lg font-semibold text-green-600">${item.price.toFixed(2)} each</p>
                            </div>
                            
                            {/* Quantity Controls */}
                            <div className="flex items-center space-x-4">
                                <button 
                                    onClick={() => handleDecrease(item.id)}
                                    className="w-10 h-10 rounded-full border-2 border-green-600 text-green-600 hover:bg-green-50 flex items-center justify-center text-xl font-bold"
                                >
                                    −
                                </button>
                                <span className="text-2xl font-bold min-w-8 text-center">{item.quantity}</span>
                                <button 
                                    onClick={() => handleIncrease(item)}
                                    className="w-10 h-10 rounded-full border-2 border-green-600 text-green-600 hover:bg-green-50 flex items-center justify-center text-xl font-bold"
                                >
                                    +
                                </button>
                            </div>
                            
                            {/* Total Price */}
                            <div className="text-right">
                                <p className="text-2xl font-bold text-green-800">${item.totalPrice.toFixed(2)}</p>
                            </div>
                            
                            {/* Delete Button */}
                            <button 
                                onClick={() => handleDelete(item.id)}
                                className="text-red-500 hover:text-red-700 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
                
                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                        <h2 className="text-2xl font-bold text-green-800 mb-6">Order Summary</h2>
                        
                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Total Items:</span>
                                <span className="font-semibold">{totalQuantity}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Subtotal:</span>
                                <span className="font-semibold">${totalAmount.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Shipping:</span>
                                <span className="font-semibold">$5.99</span>
                            </div>
                            <div className="border-t pt-4 mt-4">
                                <div className="flex justify-between text-xl font-bold">
                                    <span>Total Amount:</span>
                                    <span className="text-green-800">${(totalAmount + 5.99).toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                        
                        <button 
                            onClick={handleCheckout}
                            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg text-lg font-semibold mb-4 transition-colors shadow-md hover:shadow-lg"
                        >
                            Proceed to Checkout
                        </button>
                        
                        <Link 
                            to="/plants" 
                            className="block text-center text-green-600 hover:text-green-800 hover:bg-green-50 py-3 rounded-lg font-medium transition-colors"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;