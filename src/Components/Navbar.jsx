'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();   
    return (
        <div className='container mx-auto flex justify-between p-5 bg-slate-200'>
            <div>
                <h2 className='font-bold text-3xl'>Next.<span className='text-red-500'>js</span></h2>
            </div>
            <div>
                <ul className='flex'>
                    <li><Link className={`mr-3 ${pathName === '/' && 'text-red-500'}`} href={`/`}>Home</Link></li>
                    <li><Link className={`mr-3 ${pathName === '/about' && 'text-red-500'}`} href={`/about`}>About</Link></li>
                    <li><Link className={`mr-3 ${pathName === '/services' && 'text-red-500'}`} href={`/services`}>Service</Link></li>
                    <li><Link className={`mr-3 ${pathName === '/blog'&& 'text-red-500'}`} href={`/blog`}>Blog</Link></li>
                </ul>
            </div>
            <div>
                <button className='bg-red-500 px-5 py-2 rounded-md text-white' type="button">login</button>
            </div>
        </div>
    );
};

export default Navbar;
