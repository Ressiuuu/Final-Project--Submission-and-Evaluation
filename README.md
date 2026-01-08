
# Paradise Nursery Shopping Application

A modern e-commerce application for purchasing houseplants with beautiful UI and smooth shopping experience.

## Features

- Browse houseplants by categories
- Add plants to shopping cart
- Manage cart items (update quantity, remove items)
- Responsive design
- Redux for state management

## Technologies Used

- React
- Redux Toolkit
- CSS3
- Vite

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the app: `npm run dev`

import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        `<div className="about-us-container">`
            `<h1>`About Paradise Nursery`</h1>`
            `<div className="about-content">`
                `<p>`
                    Welcome to Paradise Nursery, your premier destination for beautiful houseplants
                    since 2010. We believe that every home deserves a touch of nature's beauty.
                `</p>`

    `<h2>`Our Mission`</h2>`
                `<p>`
                    To provide high-quality, healthy plants that bring life and joy to your living spaces
                    while promoting sustainable gardening practices.
                `</p>`

    `<h2>`Our Values`</h2>`
                `<ul>`
                    `<li>`Quality: We source only the healthiest plants`</li>`
                    `<li>`Sustainability: Eco-friendly packaging and practices`</li>`
                    `<li>`Education: Helping you become a better plant parent`</li>`
                    `<li>`Community: Connecting plant lovers nationwide`</li>`
                `</ul>`

    `<h2>`Contact Us`</h2>`
                `<p>`Email: info@paradisenursery.com`</p>`
                `<p>`Phone: (555) 123-PLANT`</p>`
                `<p>`Address: 123 Green Street, Garden City`</p>`
            `</div>`
        `</div>`
    );
};

export default AboutUs;
