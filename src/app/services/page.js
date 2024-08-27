import Link from 'next/link';
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


const Servicespage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <h3 className='text-3xl mb-4'>Services page</h3>
            <div className='grid grid-cols-3 gap-5'>
                {
                    services.map((service) => (
                        <div key={service.id} className="p-4 bg-gray-100 rounded-lg flex flex-col items-center w-full sm:w-auto">
                            <h2 className="mb-3 text-xl font-semibold">{service.title}</h2>
                            <p className="mb-3 text-gray-700">{service.description}</p>
                            <div className="mt-auto">
                                <Link href={`/services/${service.id}`}>
                                <button className='bg-red-500 px-5 py-2 rounded-md text-white' type="button">Details</button>
                                </Link>
                            </div>
                        </div>

                    ))
                }

            </div>
            <Link href="/services/car">Car</Link>
        </div>
    );
};

export default Servicespage;