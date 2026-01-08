import React from 'react';

const PlantCard = ({ plant, onAddToCart, isInCart }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            {/* Plant Image */}
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50">
                <img 
                    src={plant.image} 
                    alt={plant.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        plant.category === 'Low Light' 
                            ? 'bg-blue-100 text-blue-800'
                            : plant.category === 'Medium Light'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-orange-100 text-orange-800'
                    }`}>
                        {plant.category}
                    </span>
                </div>
                
                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow">
                    <span className="text-lg font-bold text-green-700">${plant.price.toFixed(2)}</span>
                </div>
            </div>
            
            {/* Plant Info */}
            <div className="p-5">
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-green-900 mb-2 line-clamp-1">{plant.name}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2 min-h-[40px]">{plant.description}</p>
                </div>
                
                {/* Add to Cart Button */}
                <button 
                    onClick={() => onAddToCart(plant)}
                    disabled={isInCart}
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                        isInCart 
                            ? 'bg-green-700 text-white cursor-not-allowed opacity-90' 
                            : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white hover:shadow-lg active:scale-[0.98]'
                    }`}
                >
                    {isInCart ? (
                        <>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Added to Cart
                        </>
                    ) : (
                        <>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Add to Cart
                        </>
                    )}
                </button>
                
                {/* Quick Info */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        30-day guarantee
                    </span>
                    <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                        Pet friendly
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PlantCard;