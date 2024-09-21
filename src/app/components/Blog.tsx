import { link } from 'fs';
import Link from 'next/link';
import React from 'react'
interface Blog {
  id: number,
  title: string;
  image: string;
  link: string;
  description: string;

}

const BlogSection: Blog[] = [
  { id: 1, title: "The Importance of Balanced Nutrition and Dieting for a Healthy Lifestyle", image: "/nuitrition-food.jpeg ", description: " ", link: "/blog-1" },
  { id: 2, title: " The Power of Fitness Workouts: A Path to a Healthier You", image: "/e-2.jpg", description: " ", link: "/blog-2" },
  { id: 3, title: "Sports and Performance: Elevating Athletic Excellence ", image: "/blog-3.jpeg", description: " ", link: "/blog-3" },
]
function Blog() {
  return (
    <div>
      <section className='py-12 bg-gray-300'>
        <section id='blog ' className='my-8'>

        </section>
        <div className='container mx-auto px-4'>

          <h2 className='text-4xl font-extrabold text-center mb-6 hover:underline cursor-pointer '>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {BlogSection.map((Blog) => (
                <a href={Blog.link}
                  key={Blog.id}
                  className="block bg-pink-600 rounded-lg overflow-hidden shadow-md hover:shadow-2xl hover:p-2 hover:m-2 transition-shadow duration-300">
                  <img src={Blog.image} alt={Blog.title} className="w-full h-48 object-cover" />
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-bold">{Blog.title}</h3>
                  </div>
                </a>
              ))}

            </div>
          </h2>
        </div>
      </section>

F
    </div >
  )
}

export default Blog