import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Fcard3 from './Fcard3'
import Pricings from './Pricings'
import Pagetitle from './Pagetitle'
import { SectionWrapper } from '../hoc'

const Webdev = () => {
    return (
        <div className='wrapper-body'>
            <Navbar/>

            <Pagetitle title={'Web Development'} subtitle={'for your business Website.'} subtext={'We understand that a website is the foundation of any successful online business. That\'s why we offer customized website development services to meet the unique needs of our clients. Our team of experts uses the latest technologies to create responsive, user-friendly, and optimized websites that reflect the brand message and engage with their target audience. We work closely with our clients to understand their requirements and provide them with a website that will help them achieve their business goals.'}/>
            
            
            <Fcard3/>

            <div class="relative max-w-screen-xl mx-6 p-4 px-4 bg-gray-800 sm:px-6 lg:px-8 py-26 lg:mt-20">
                <div class="relative">
                    <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div class="ml-auto lg:col-start-2 lg:max-w-2xl">
                            <p class="text-base font-semibold leading-6 text-indigo-500 uppercase">
                                Features
                            </p>
                            <h4 class="mt-2 text-2xl font-extrabold leading-8  text-white sm:text-3xl sm:leading-9">
                                Complete website from scratch
                            </h4>
                            <p class="mt-4 text-lg leading-6 text-gray-300">
                                We help you choose the best platform for your business and build a website that is easy to use and maintain.
                            </p>
                            <ul class="gap-6 mt-8 md:grid md:grid-cols-2">
                                <li class="mt-6 lg:mt-0">
                                    <div class="flex">
                                        <span class="flex items-center justify-center flex-shrink-0 w-6 h-6   bg-green-100 rounded-full  text-green-500 drark:bg-transparent">
                                            <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span align='left' class="ml-4 text-base font-medium leading-6  text-gray-200">
                                            SEO Friendly website using Python, JavaScript, HTML, CSS, and React
                                        </span>
                                    </div>
                                </li>
                                <li class="mt-6 lg:mt-0">
                                    <div class="flex">
                                        <span class="flex items-center justify-center flex-shrink-0 w-6 h-6   bg-green-100 rounded-full  text-green-500 drark:bg-transparent">
                                            <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span  align='left' class="ml-4 text-base font-medium leading-6  text-gray-200">
                                            Interactive and Responsive
                                        </span>
                                    </div>
                                </li>
                                <li class="mt-6 lg:mt-0">
                                    <div class="flex">
                                        <span class="flex items-center justify-center flex-shrink-0 w-6 h-6   bg-green-100 rounded-full  text-green-500 drark:bg-transparent">
                                            <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span  align='left' class="ml-4 text-base font-medium leading-6 text-gray-200">
                                            Complete personal support
                                        </span>
                                    </div>
                                </li>
                                <li class="mt-6 lg:mt-0">
                                    <div class="flex">
                                        <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 bg-green-100 rounded-full  text-green-500 drark:bg-transparent">
                                            <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span  align='left' class="ml-4 text-base  font-medium leading-6  text-gray-200">
                                            Attractive and modern
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
                            <div class="relative space-y-4">
                                <div class="flex items-end justify-center space-x-4 lg:justify-start">
                                    <img class="w-32 rounded-lg shadow-lg md:w-56" width="200" src="src/assets/wd1.jpg" alt="1" />
                                    <img class="w-40 rounded-lg shadow-lg md:w-64" width="260" src="src/assets/wd2.jpg" alt="2" />
                                </div>
                                <div class="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                                    <img class="w-24 rounded-lg shadow-lg md:w-40" width="170" src="src/assets/wd3.jpg" alt="3" />
                                    <img class="w-32 rounded-lg shadow-lg md:w-56" width="200" src="src/assets/wd4.jpg" alt="4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Pricings/>

            <Footer/>

        </div>
    )
}

export default (Webdev)