import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <div className='bg-gray-300 w-full pt-0 sticky top-0'>
            <div className='flex space-x-4'>
                <img src="logo.jpg"
                    width={100} height={100} className="w-20 h-auto py-2" alt="" />
                <h1 className='text-black font-bold text-3xl items-center pt-3'>Healthy Active Life</h1>

                <div className="container m-4 flex justify-end space-x-4">
                    <Link href="/"className="text-gray-700
                    hover:text-white hover:bg-gray-700  font-bold text-lg px-4 py-2 rounded transition duration-300" >
                        Home
                    </Link>
                    <Link href="/contact" className="text-gray-700
                    hover:text-white hover:bg-gray-700  font-bold text-lg px-4 py-2 rounded transition duration-300">
                        Contact
                    </Link>
                    <Link href="/blog"  className="text-gray-700
                    hover:text-white font-bold text-lg px-4 py-2 rounded transition duration-300">
                    Blog
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar