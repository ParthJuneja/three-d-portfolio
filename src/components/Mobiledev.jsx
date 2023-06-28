import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Fcard4 from './Fcard4'
import Pricings from './Pricings'
import Pagetitle from './Pagetitle'
import md1 from '../assets/md1.jpg'
import md2 from '../assets/md2.jpg'
import md3 from '../assets/md3.jpg'
import md4 from '../assets/md4.jpg'
import { SectionWrapper } from '../hoc'

const Mobiledev = () => {
    return (
        <div className='wrapper-body'>
            <Navbar/>

            <Pagetitle title={'Developing Android and iOS application'} subtitle={'for your business.'} subtext={'Application development services cover a wide range of platforms, including iOS, Android, and web-based applications. We use agile methodologies to develop robust and scalable applications that are designed to meet the unique needs of our clients. From idea to implementation, we work closely with our clients to ensure that their applications are developed to their exact specifications.'}/>

            <Fcard4/>

            <div className="relative max-w-screen-xl mx-6 p-4 px-4 bg-gray-800 sm:px-6 lg:px-8 py-26 lg:mt-20">
                <div className="relative">
                    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
                            <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
                                Features
                            </p>
                            <h4 className="mt-2 text-2xl font-extrabold leading-8 text-white-900 dark:text-white sm:text-3xl sm:leading-9">
                                Complete app from scratch
                            </h4>
                            <p className="mt-6 text-base leading-6 text-gray-200">
                                We help you choose the best platform for your business and build a iOS/Android that is easy to use and maintain.
                            </p>
                            <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex">
                                        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span align='left' className="ml-4 text-base font-medium leading-6 text-gray-300 dark:text-gray-200">
                                            Atrractive and modern app using Flutter and React Native
                                        </span>
                                    </div>
                                </li>
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex">
                                        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span align='left' className="ml-4 text-base font-medium leading-6 text-gray-300 dark:text-gray-200">
                                            Interactive and Responsive
                                        </span>
                                    </div>
                                </li>
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex">
                                        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span align='left' className="ml-4 text-base font-medium leading-6 text-gray-300 dark:text-gray-200">
                                            Complete personal support
                                        </span>
                                    </div>
                                </li>
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex">
                                        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span align='left' className="ml-4 text-base font-medium leading-6 text-gray-300 dark:text-gray-200">
                                            Attractive and modern
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
                            <div className="relative space-y-4">
                                <div className="flex items-end justify-center space-x-4 lg:justify-start">
                                    <img className="w-32 rounded-lg shadow-lg md:w-56" width="200" src={md1}  alt="1" />
                                    <img className="w-40 rounded-lg shadow-lg md:w-64" width="260" src={md2}  alt="2" />
                                </div>
                                <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                                    <img className="w-24 rounded-lg shadow-lg md:w-40" width="170" src={md3}  alt="3" />
                                    <img className="w-32 rounded-lg shadow-lg md:w-56" width="200" src={md4}  alt="4" />
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

export default Mobiledev