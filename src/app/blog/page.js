import Link from 'next/link';
import React from 'react';

const Blogpage = async () => {
    let data = await fetch('https://jsonplaceholder.typicode.com/users');
    let blogs = await data.json()
 

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-10">
            blog 
            <div className='grid grid-cols-4 gap-5'>

            {
                blogs.map((blog) => (
                    <div className='border border-red-500 p-5'>
                        <h2>Name :{blog.name}</h2>
                        <h3>username : {blog.username}</h3>
                        <Link href={`/blog/${blog.id}`}>
                        <button type='button' className='bg-red-500 px-5 py-2 mt-3 rounded-md'>Details</button>
                        </Link>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default Blogpage;