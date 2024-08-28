import React from 'react';

const page = ({params}) => {
    console.log(params);
    console.log(params.products[0]);
    
    return (

        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            Catch-all Segments
        </div>
    );
};

export default page;