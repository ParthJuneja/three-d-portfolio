import React from 'react'
import Fcard from './Fcard'
import Footer from './Footer'
import Navbar from './Navbar'

const Uifeatures = () => {
    return (
        <div className='wrapper-body'>
            <Navbar/>

            <div class="mt-16 py-5 bg-white dark:bg-gray-800 ">
                <div class="text-start w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                        <span class="block">
                            UI UX design
                        </span>
                        <span class="block text-indigo-500">
                            For your Website.
                        </span>
                    </h2>

                    <div class="lg:mt-0 lg:flex-shrink-0">
                        <div class="mt-12 inline-flex rounded-md shadow">
                            <button type="button" class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Get a Quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <Fcard/>
            
            <div class="relative max-w-screen-xl mx-6 p-4 px-4 bg-white dark:bg-gray-800 sm:px-6 lg:px-8 py-26 lg:mt-20">
                <div class="relative">
                    <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div class="ml-auto lg:col-start-2 lg:max-w-2xl">
                            <p class="text-base font-semibold leading-6 text-indigo-500 uppercase">
                                Features
                            </p>
                            <h4 class="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                                Complete design of UI UX 
                            </h4>
                            <p class="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                                We offer a complete design of the user interface and user experience of your website. We will create a unique design that will make your website stand out from the competition. Making your website more attractive and easier to use.
                            </p>
                            <ul class="gap-6 mt-8 md:grid md:grid-cols-2">
                                <li class="mt-6 lg:mt-0">
                                    <div class="flex">
                                        <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                            <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                            Figma and Adobe XD designs
                                        </span>
                                    </div>
                                </li>
                                <li class="mt-6 lg:mt-0">
                                    <div class="flex">
                                        <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                            <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                            Interactive and Responsive
                                        </span>
                                    </div>
                                </li>
                                <li class="mt-6 lg:mt-0">
                                    <div class="flex">
                                        <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                            <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                            Complete personal support
                                        </span>
                                    </div>
                                </li>
                                <li class="mt-6 lg:mt-0">
                                    <div class="flex">
                                        <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                            <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                            Attractive and modern
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
                            <div class="relative space-y-4">
                                <div class="flex items-end justify-center space-x-4 lg:justify-start">
                                    <img class="w-32 rounded-lg shadow-lg md:w-56" width="200" src="src/assets/tripguide.png" alt="1" />
                                    <img class="w-40 rounded-lg shadow-lg md:w-64" width="260" src="src/assets/tripguide.png" alt="2" />
                                </div>
                                <div class="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                                    <img class="w-24 rounded-lg shadow-lg md:w-40" width="170" src="src/assets/tripguide.png" alt="3" />
                                    <img class="w-32 rounded-lg shadow-lg md:w-56" width="200" src="src/assets/tripguide.png" alt="4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="relative max-w-screen-3xl px-4 py-10 mx-auto sm:px-6 lg:px-8 lg:mx-10">
                <div class="max-w-lg mx-auto overflow-hidden rounded-lg shadow-lg pricing-box lg:max-w-none lg:flex">
                    <div class="px-6 py-8 bg-white dark:bg-gray-800 lg:flex-shrink-1 lg:p-12 ">
                        <h3 class="text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9 dark:text-white">
                            Pricings
                        </h3>
                        <p class="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut
                        </p>
                        <div class="mt-8">
                            <div class="flex items-center">
                                <h4 class="flex-shrink-0 pr-4 text-sm font-semibold leading-5 tracking-wider text-indigo-600 uppercase bg-white dark:bg-gray-800">
                                    What&#x27;s included
                                </h4>
                                <div class="flex-1 border-t-2 border-gray-200">
                                </div>
                            </div>
                            <ul class="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                                <li class="flex items-start lg:col-span-1">
                                    <div class="flex-shrink-0">
                                        <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        All illimited components
                                    </p>
                                </li>
                                <li class="flex items-start lg:col-span-1">
                                    <div class="flex-shrink-0">
                                        <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        Own custom Tailwind styles
                                    </p>
                                </li>
                                <li class="flex items-start lg:col-span-1">
                                    <div class="flex-shrink-0">
                                        <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        Unlimited Templates
                                    </p>
                                </li>
                                <li class="flex items-start lg:col-span-1">
                                    <div class="flex-shrink-0">
                                        <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        Free premium dashboard
                                    </p>
                                </li>
                                <li class="flex items-start lg:col-span-1">
                                    <div class="flex-shrink-0">
                                        <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        Best ranking
                                    </p>
                                </li>
                                <li class="flex items-start lg:col-span-1">
                                    <div class="flex-shrink-0">
                                        <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        Premium svg
                                    </p>
                                </li>
                                <li class="flex items-start lg:col-span-1">
                                    <div class="flex-shrink-0">
                                        <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        Commercial use desings
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-8">
                            <div class="flex items-center">
                                <h4 class="flex-shrink-0 pr-4 text-sm font-semibold leading-5 tracking-wider text-indigo-600 uppercase bg-white dark:bg-gray-800">
                                    &amp; What&#x27;s not
                                </h4>
                            </div>
                            <ul class="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                                <li class="flex items-start lg:col-span-1">
                                    <div class="flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" class="w-6 h-6 mr-2" fill="red" viewBox="0 0 1792 1792">
                                            <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        No royalties, no attribution required
                                    </p>
                                </li>
                                <li class="flex items-start lg:col-span-1">
                                    <div class="flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" class="w-6 h-6 mr-2" fill="red" viewBox="0 0 1792 1792">
                                            <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        No hassle of designing your own website.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="px-6 py-8 text-center bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                        <p class="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                            Flat
                        </p>
                        <div class="flex items-center justify-center mt-4 text-5xl font-extrabold leading-none text-gray-900 dark:text-white">
                            <span>
                                $4/hr
                            </span>
                        </div>
                        <p class="mt-4 text-sm leading-5">
                            <span class="block font-medium text-gray-500 dark:text-gray-400">
                                Card or online payments
                            </span>
                            <span class="inline-block font-medium text-gray-500  dark:text-gray-400">
                                no hidden fees
                            </span>
                        </p>
                        <div class="mt-6">
                            <div class="rounded-md shadow">
                                <button type="button" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>

        </div>
    )
}

export default Uifeatures