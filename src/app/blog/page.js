import React from 'react';

const Blogpage = async () => {
    let data = await fetch('https://jsonplaceholder.typicode.com/users');
    let blogs = await data.json()
    console.log(blogs);

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            blog page
            {
                blogs.map((blog) => (
                    <div>
                        <h2>{blog.name}</h2>
                        <h3>{blog.username}</h3>
                    </div>
                ))
            }
        </div>
    );
};

export default Blogpage;