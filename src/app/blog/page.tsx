import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'

function page() {
    return (
        <>
            <Navbar />
            <div className='bg-fuchsia-700 w-full h-full flex flex-col md:flex-row items-center md:items-start'>
                <div className='bg-white m-6 p-6 rounded-lg flex flex-col items-center md:w-1/3 shadow-lg'>
                    <img src="nuitrition-food.jpeg" alt="" />
                    <h1 className='font-serif font-bold text-black'>
                        The Importance of Balanced Nutrition and Dieting for a Healthy Lifestyle
                    </h1>
                    <p className='text-gray-500'>
                        In today’s fast-paced world, maintaining a balanced diet is more crucial than ever. With the rise of convenience foods and busy schedules, it’s easy to overlook the importance of proper nutrition. However, a well-rounded diet is the cornerstone of a healthy lifestyle and can significantly impact overall well-being. Understanding the basics of nutrition and making informed dietary choices can lead to improved energy levels, better mental clarity, and a reduced risk of chronic diseases.

                    </p>
                    <Link href="/blog-1" legacyBehavior>
                    <a className='text-blue-600'>Learn More</a>
                    </Link>
                </div>
                <div className='bg-white m-6 p-6 rounded-lg flex flex-col items-center md:w-1/3 shadow-lg'>
                    <img src="e-2.jpg" alt="" />
                    <h2 className='font-serif font-bold text-black'>
                        The Power of Fitness Workouts: A Path to a Healthier You
                    </h2>
                    <p className='text-gray-500'>
                        Fitness workouts are a fundamental part of leading a healthy lifestyle. Whether you’re a beginner or a seasoned athlete, incorporating regular physical activity into your routine offers a multitude of benefits that go beyond just physical appearance. From improving cardiovascular health to boosting mental well-being, fitness workouts are key to a balanced, fulfilling life. With the growing awareness of health and fitness, it’s important to understand the variety of workout options available and how they can be tailored to meet individual goals and needs.
                    </p>
                    <Link href="/blog-2" legacyBehavior>
                    <a className='text-blue-600'>Learn More</a>
                    </Link>
                </div>
                <div className='bg-white m-6 p-6 rounded-lg flex flex-col items-center md:w-1/3 shadow-lg'>
                    <img src="blog-3.jpeg" alt="" />
                    <h2 className='font-serif font-bold text-black'>
                        Sports and Performance: Elevating Athletic Excellence
                    </h2>
                    <p className='text-gray-500'>
                        Sports have always been a powerful platform for showcasing human performance, resilience, and skill. Whether it’s on the world stage or at a local competition, athletes continually push the boundaries of physical and mental capabilities. Performance in sports is not only about natural talent but also the combination of strategic training, nutrition, mental toughness, and recovery. This blog explores how athletes can enhance their performance, improve their skills, and achieve peak physical condition through a holistic approach.
                    </p>
                    <Link href="/blog-3" legacyBehavior>
                    <a className='text-blue-600'>Learn More</a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default page