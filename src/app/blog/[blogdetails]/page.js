import React from 'react';

const blogdetailspage =async ({params}) => {
    let data = await fetch(`https://jsonplaceholder.typicode.com/users/${params.blogdetails}`);
    let blogs = await data.json()
    console.log(params.blogdetails,blogs);
    
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            Blog details page
            <div className='border border-red-500 p-5'>

            <p>id : {blogs.id}</p>
            <p>Name : {blogs.name}</p>
            <p>Username : {blogs.username}</p>
            </div>
            
        </div>
    );
};

export default blogdetailspage;