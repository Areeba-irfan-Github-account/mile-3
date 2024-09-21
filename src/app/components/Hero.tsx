
import React from 'react'

function Hero() {
    return (
        <>
            <div className='relative bg-cover bg-center h-screen flex items-center justify-center overflow-hidden bg-gray-200'>
                <img src="home.jpg" alt="" className='absolute inset-0 object-cover w-full h-full opacity-60' />
                <div className='relative text-center z-10 font-bold text-3xl'>
                    <h1 className='text-5xl mf:text-4xl text-sky-800 font-extrabold'>
                        Empower your well-being with balanced health and fitness.
                    </h1>
                    <p className='mt-4 text-lg text-rose-700'>
                    Your journey to a healthier and happier life starts here.

                    </p>
                </div>
            </div>
        </>
    )
}

export default Hero