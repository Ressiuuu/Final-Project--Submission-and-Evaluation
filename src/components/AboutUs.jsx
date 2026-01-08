import React from 'react';

const AboutUs = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 md:p-8">
            <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">
                About Paradise Nursery
            </h1>
            
            <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                    Welcome to Paradise Nursery, your premier destination for beautiful houseplants 
                    since 2010. We believe that every home deserves a touch of nature's beauty.
                </p>
                
                <div>
                    <h2 className="text-2xl font-bold text-green-700 mb-3">Our Mission</h2>
                    <p className="text-gray-700">
                        To provide high-quality, healthy plants that bring life and joy to your living spaces 
                        while promoting sustainable gardening practices.
                    </p>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold text-green-700 mb-3">Our Values</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><span className="font-semibold">Quality:</span> We source only the healthiest plants</li>
                        <li><span className="font-semibold">Sustainability:</span> Eco-friendly packaging and practices</li>
                        <li><span className="font-semibold">Education:</span> Helping you become a better plant parent</li>
                        <li><span className="font-semibold">Community:</span> Connecting plant lovers nationwide</li>
                    </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold text-green-700 mb-3">Contact Us</h2>
                    <div className="space-y-2 text-gray-700">
                        <p><span className="font-semibold">Email:</span> info@paradisenursery.com</p>
                        <p><span className="font-semibold">Phone:</span> (555) 123-PLANT</p>
                        <p><span className="font-semibold">Address:</span> 123 Green Street, Garden City</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;