import React from 'react'
import { SectionWrapper } from '../hoc';
import {  useNavigate } from 'react-router-dom';




const Pagetitle = ({ title }) => {
    const navigate= useNavigate();
    return (
        <div className='px-6'>
            <div class="mt-16 py-5  bg-gray-800 ">
                <div class="text-start w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
                        <span class="block">
                            {title}
                        </span>
                        <span class="block text-indigo-500">
                         for your business Website.
                        </span>
                    </h2>
                    {/* <p className='py-4' >we understand that a website is the foundation of any successful online business. That's why we offer customized website development services to meet the unique needs of our clients. Our team of experts uses the latest technologies to create responsive, user-friendly, and optimized websites that reflect the brand message and engage with their target audience. We work closely with our clients to understand their requirements and provide them with a website that will help them achieve their business goals.</p> */}
                    <div class="lg:mt-0 lg:flex-shrink-0">
                            <div class="mt-12 inline-flex rounded-md shadow">
                        <a >
                                <button onClick={()=>navigate("/ContactUs")} type="button" class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Get a Quote
                                </button>
                        </a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default (Pagetitle);