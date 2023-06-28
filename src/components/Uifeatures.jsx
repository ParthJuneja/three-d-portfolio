import React from 'react'
import Fcard from './Fcard'
import Footer from './Footer'
import Navbar from './Navbar'
import Pricings from './Pricings'
import Pagetitle from './Pagetitle'
import uiux1 from '.././assets/uiux1.jpg'
import uiux2 from '.././assets/uiux2.jpg'
import uiux3 from '.././assets/uiux3.jpg'
import uiux4 from '.././assets/uiux4.jpg'
import { SectionWrapper } from '../hoc'

const Uifeatures = () => {
    return (
        <div className='wrapper-body'>
            <Navbar/>

            <Pagetitle title={'We create highly interactive UI/UX Design'} subtitle={'for Modern web applications.'} subtext={'We specialize in providing top-notch UI/UX designing, website development, application development, software development, and digital advertising services. We have a team of experienced professionals who are dedicated to delivering the best results for our clients'}/>
            
            
            <Fcard/>
            
            <div className="relative max-w-screen-xl mx-6 p-4 px-4 bg-gray-800 sm:px-6 lg:px-8 py-26 lg:mt-20">
                <div className="relative">
                    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
                            <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
                                Features
                            </p>
                            <h4 className="mt-2 text-2xl font-extrabold leading-8  text-white sm:text-3xl sm:leading-9">
                                Complete design of UI UX 
                            </h4>
                            <p className="mt-4 text-lg leading-6  text-gray-300">
                                We offer a complete design of the user interface and user experience of your website. We will create a unique design that will make your website stand out from the competition. Making your website more attractive and easier to use.
                            </p>
                            <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex">
                                        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 bg-green-100 rounded-full  text-green-500 drark:bg-transparent">
                                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span align='left' className="ml-4 text-base font-medium leading-6  text-gray-200">
                                            Figma and Adobe XD designs
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
                                        <span align='left' className="ml-4 text-base font-medium leading-6  text-gray-200">
                                            Interactive and Responsive
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
                                        <span align='left' className="ml-4 text-base font-medium leading-6  text-gray-200">
                                            Complete personal support
                                        </span>
                                    </div>
                                </li>
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex">
                                        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6  bg-green-100 rounded-full  text-green-500 drark:bg-transparent">
                                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span align='left' className="ml-4 text-base font-medium leading-6  text-gray-200">
                                            Attractive and modern
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
                            <div className="relative space-y-4">
                                <div className="flex items-end justify-center space-x-4 lg:justify-start">
                                    <img className="w-32 rounded-lg shadow-lg md:w-56" width="200" src={uiux1}  alt="1" />
                                    <img className="w-40 rounded-lg shadow-lg md:w-64" width="260" src={uiux2}  alt="2" />
                                </div>
                                <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                                    <img className="w-24 rounded-lg shadow-lg md:w-40" width="170" src={uiux3}  alt="3" />
                                    <img className="w-32 rounded-lg shadow-lg md:w-56" width="200" src={uiux4}  alt="4" />
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

export default (Uifeatures)