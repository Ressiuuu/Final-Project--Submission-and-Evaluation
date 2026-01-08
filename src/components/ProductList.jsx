import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/CartSlice';
import PlantCard from './PlantCard';

// Plant Data - 6 plants per category, 3 categories = 18 plants total
const plantData = {
    lowLight: [
        {
            id: 1,
            name: "Snake Plant",
            price: 24.99,
            category: "Low Light",
            description: "Purifies air, thrives in low light",
            image: "https://images.unsplash.com/photo-1593482892290-5d188b9e59de?w=400&h=400&fit=crop"
        },
        {
            id: 2,
            name: "ZZ Plant",
            price: 29.99,
            category: "Low Light",
            description: "Drought tolerant, glossy leaves",
            image: "https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?w=400&h=400&fit=crop"
        },
        {
            id: 3,
            name: "Golden Pothos",
            price: 19.99,
            category: "Low Light",
            description: "Trailing vine, easy to grow",
            image: "https://images.unsplash.com/photo-1593693399467-df5d5d1b1164?w=400&h=400&fit=crop"
        },
        {
            id: 4,
            name: "Peace Lily",
            price: 34.99,
            category: "Low Light",
            description: "Beautiful white flowers, air purifier",
            image: "https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?w=400&h=400&fit=crop"
        },
        {
            id: 5,
            name: "Heartleaf Philodendron",
            price: 27.99,
            category: "Low Light",
            description: "Heart-shaped leaves, fast grower",
            image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=400&fit=crop"
        },
        {
            id: 6,
            name: "Cast Iron Plant",
            price: 32.99,
            category: "Low Light",
            description: "Extremely hardy, nearly indestructible",
            image: "https://images.unsplash.com/photo-1545243421-89e5c9b6d12c?w=400&h=400&fit=crop"
        },
    ],
    mediumLight: [
        {
            id: 7,
            name: "Monstera Deliciosa",
            price: 49.99,
            category: "Medium Light",
            description: "Iconic split leaves, statement plant",
            image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&h=400&fit=crop"
        },
        {
            id: 8,
            name: "Rubber Plant",
            price: 39.99,
            category: "Medium Light",
            description: "Large glossy leaves, elegant appearance",
            image: "https://images.unsplash.com/photo-1598880940080-ff2c1cbf8d69?w=400&h=400&fit=crop"
        },
        {
            id: 9,
            name: "Spider Plant",
            price: 16.99,
            category: "Medium Light",
            description: "Produces babies, great for beginners",
            image: "https://images.unsplash.com/photo-1561212049-8d41cf5b50c1?w=400&h=400&fit=crop"
        },
        {
            id: 10,
            name: "Chinese Money Plant",
            price: 22.99,
            category: "Medium Light",
            description: "Round coin-shaped leaves, brings luck",
            image: "https://images.unsplash.com/photo-1598880940080-ff2c1cbf8d69?w=400&h=400&fit=crop"
        },
        {
            id: 11,
            name: "Calathea Orbifolia",
            price: 28.99,
            category: "Medium Light",
            description: "Striking patterned leaves, prayer plant",
            image: "https://images.unsplash.com/photo-1561212024-cb9ad0c2d61e?w=400&h=400&fit=crop"
        },
        {
            id: 12,
            name: "Dracaena Marginata",
            price: 26.99,
            category: "Medium Light",
            description: "Architectural form, red-edged leaves",
            image: "https://images.unsplash.com/photo-1545243421-89e5c9b6d12c?w=400&h=400&fit=crop"
        },
    ],
    brightLight: [
        {
            id: 13,
            name: "Fiddle Leaf Fig",
            price: 89.99,
            category: "Bright Light",
            description: "Large fiddle-shaped leaves, trendy",
            image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&h=400&fit=crop"
        },
        {
            id: 14,
            name: "Aloe Vera",
            price: 18.99,
            category: "Bright Light",
            description: "Medicinal gel, succulent leaves",
            image: "https://images.unsplash.com/photo-1561212024-cb9ad0c2d61e?w=400&h=400&fit=crop"
        },
        {
            id: 15,
            name: "Jade Plant",
            price: 21.99,
            category: "Bright Light",
            description: "Money plant, thick succulent leaves",
            image: "https://images.unsplash.com/photo-1598880940080-ff2c1cbf8d69?w=400&h=400&fit=crop"
        },
        {
            id: 16,
            name: "String of Pearls",
            price: 23.99,
            category: "Bright Light",
            description: "Trailing succulent, pearl-like leaves",
            image: "https://images.unsplash.com/photo-1561212024-cb9ad0c2d61e?w=400&h=400&fit=crop"
        },
        {
            id: 17,
            name: "Prickly Pear Cactus",
            price: 14.99,
            category: "Bright Light",
            description: "Flat pads, produces edible fruit",
            image: "https://images.unsplash.com/photo-1598880940080-ff2c1cbf8d69?w=400&h=400&fit=crop"
        },
        {
            id: 18,
            name: "Succulent Collection",
            price: 39.99,
            category: "Bright Light",
            description: "Assorted 6 succulents, various colors",
            image: "https://images.unsplash.com/photo-1561212024-cb9ad0c2d61e?w=400&h=400&fit=crop"
        },
    ],
};

const ProductList = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleAddToCart = (plant) => {
        dispatch(addToCart(plant));
    };

    const getPlantsByCategory = () => {
        if (selectedCategory === 'all') {
            return [...plantData.lowLight, ...plantData.mediumLight, ...plantData.brightLight];
        }
        return plantData[selectedCategory] || [];
    };

    // Categories for display
    const categories = [
        { id: 'all', name: 'All Plants', count: 18 },
        { id: 'lowLight', name: 'Low Light Plants', count: 6 },
        { id: 'mediumLight', name: 'Medium Light', count: 6 },
        { id: 'brightLight', name: 'Bright Light', count: 6 },
    ];

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 min-h-screen">
            {/* Header Section */}
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
                    Our Plant Collection
                </h1>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                    Discover beautiful houseplants for every corner of your home.
                    Each plant is carefully selected and nurtured for your indoor garden.
                </p>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-5 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.id
                            ? 'bg-green-600 text-white shadow-lg transform scale-105'
                            : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700 hover:shadow-md'
                            }`}
                    >
                        <span>{category.name}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${selectedCategory === category.id
                            ? 'bg-green-700'
                            : 'bg-gray-200'
                            }`}>
                            {category.count}
                        </span>
                    </button>
                ))}
            </div>

            {/* Selected Category Info */}
            {selectedCategory !== 'all' && (
                <div className="mb-8 text-center">
                    <h2 className="text-2xl font-bold text-green-700 mb-2">
                        {categories.find(c => c.id === selectedCategory)?.name}
                    </h2>
                    <p className="text-gray-600">
                        Perfect for areas with {selectedCategory === 'lowLight' ? 'minimal' :
                            selectedCategory === 'mediumLight' ? 'moderate' : 'plenty of'} natural light
                    </p>
                </div>
            )}

            {/* Plants Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {getPlantsByCategory().map((plant) => (
                    <PlantCard
                        key={plant.id}
                        plant={plant}
                        onAddToCart={handleAddToCart}
                        isInCart={cartItems.some(item => item.id === plant.id)}
                    />
                ))}
            </div>

            {/* Cart Summary */}
            <div className="mt-12 p-6 bg-green-50 rounded-2xl shadow-inner">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div>
                        <h3 className="text-xl font-bold text-green-800">
                            Ready to bring nature home?
                        </h3>
                        <p className="text-gray-600 mt-1">
                            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
                        </p>
                    </div>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="px-6 py-3 border-2 border-green-600 text-green-600 rounded-lg font-medium hover:bg-green-50 transition-colors"
                        >
                            Back to Top
                        </button>
                        <a
                            href="/cart"
                            className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors shadow-md"
                        >
                            View Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
                        </a>
                    </div>
                </div>
            </div>

            {/* Empty State */}
            {getPlantsByCategory().length === 0 && (
                <div className="text-center py-16">
                    <div className="text-6xl mb-4">🌿</div>
                    <h3 className="text-2xl font-bold text-gray-700 mb-2">No plants found</h3>
                    <p className="text-gray-500">Try selecting a different category</p>
                </div>
            )}
        </div>
    );
};

export default ProductList;