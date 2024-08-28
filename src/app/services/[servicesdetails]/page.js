import React from 'react';
const services = [
    {
        "id": 1,
        "title": "Introduction to Next.js",
        "description": "A beginner's guide to building applications with Next.js, covering the basics and key features."
    },
    {
        "id": 2,
        "title": "Understanding React Hooks",
        "description": "An in-depth exploration of React Hooks, including useState, useEffect, and custom hooks."
    },
    {
        "id": 3,
        "title": "Advanced JavaScript Techniques",
        "description": "Explore advanced JavaScript concepts such as closures, asynchronous programming, and ES6 features."
    },
    {
        "id": 4,
        "title": "CSS Grid and Flexbox",
        "description": "Learn how to use CSS Grid and Flexbox to create responsive web layouts that adapt to different screen sizes."
    },
    {
        "id": 5,
        "title": "Building RESTful APIs with Node.js",
        "description": "A comprehensive guide to building RESTful APIs using Node.js, Express, and MongoDB."
    }
]

const servicesDetails = ({ params }) => {
    console.log(params.servicesdetails);
    // Fetch the specific service based on the id
    const service = services.find((service) => service.id === parseInt(params.servicesdetails));

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <h2>Services Details Page</h2>
            <h3>{service.id}</h3>
            <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
            <p className="text-lg text-gray-700 mb-6">{service.description}</p>

        </div>
    );
};

export default servicesDetails;