import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Fcard3 from './Fcard3'
import Pricings from './Pricings'
import Pagetitle from './Pagetitle'
import wd1 from '../assets/wd1.jpg'
import wd2 from '../assets/wd2.jpg'
import wd3 from '../assets/wd3.jpg'
import wd4 from '../assets/wd4.jpg'
import { SectionWrapper } from '../hoc'

const Webdev = () => {
    return (
        <div className='wrapper-body'>
            <Navbar/>

            <Pagetitle title={'Web Development'} subtitle={'for your business Website.'} subtext={'We understand that a website is the foundation of any successful online business. That\'s why we offer customized website development services to meet the unique needs of our clients. Our team of experts uses the latest technologies to create responsive, user-friendly, and optimized websites that reflect the brand message and engage with their target audience. We work closely with our clients to understand their requirements and provide them with a website that will help them achieve their business goals.'}/>
            
            
            <Fcard3/>

            <div className="relative max-w-screen-xl mx-6 p-4 px-4 bg-gray-800 sm:px-6 lg:px-8 py-26 lg:mt-20">
                <div className="relative">
                    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
                            <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
                                Features
                            </p>
                            <h4 className="mt-2 text-2xl font-extrabold leading-8  text-white sm:text-3xl sm:leading-9">
                                Complete website from scratch
                            </h4>
                            <p className="mt-4 text-lg leading-6 text-gray-300">
                                We help you choose the best platform for your business and build a website that is easy to use and maintain.
                            </p>
                            <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex">
                                        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6   bg-green-100 rounded-full  text-green-500 drark:bg-transparent">
                                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span align='left' className="ml-4 text-base font-medium leading-6  text-gray-200">
                                            SEO Friendly website using Python, JavaScript, HTML, CSS, and React
                                        </span>
                                    </div>
                                </li>
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex">
                                        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6   bg-green-100 rounded-full  text-green-500 drark:bg-transparent">
                                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span  align='left' className="ml-4 text-base font-medium leading-6  text-gray-200">
                                            Interactive and Responsive
                                        </span>
                                    </div>
                                </li>
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex">
                                        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6   bg-green-100 rounded-full  text-green-500 drark:bg-transparent">
                                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span  align='left' className="ml-4 text-base font-medium leading-6 text-gray-200">
                                            Complete personal support
                                        </span>
                                    </div>
                                </li>
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex">
                                        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 bg-green-100 rounded-full  text-green-500 drark:bg-transparent">
                                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span  align='left' className="ml-4 text-base  font-medium leading-6  text-gray-200">
                                            Attractive and modern
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
                            <div className="relative space-y-4">
                                <div className="flex items-end justify-center space-x-4 lg:justify-start">
                                    <img className="w-32 rounded-lg shadow-lg md:w-56" width="200" src={wd1}  alt="1" />
                                    <img className="w-40 rounded-lg shadow-lg md:w-64" width="260" src={wd2}  alt="2" />
                                </div>
                                <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                                    <img className="w-24 rounded-lg shadow-lg md:w-40" width="170" src={wd3}  alt="3" />
                                    <img className="w-32 rounded-lg shadow-lg md:w-56" width="200" src={wd4}  alt="4" />
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