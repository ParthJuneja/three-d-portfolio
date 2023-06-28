import React from 'react'
import { SectionWrapper } from '../hoc'
import { mongodb, reactjs } from '../assets'
import aws from '../assets/company/aws.webp'

const Fcard3 = () => {
  return (
    <div className='py-5'>
      <div className="flex-wrap items-center justify-center gap-8 text-center sm:flex">
        <div className="w-full px-4 py-4 mt-6  rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4  bg-gray-800">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white rounded-md">
              <img src={reactjs} alt="rjs" />
            </div>
          </div>
          <h3 className="py-4 text-2xl font-semibold sm:text-xl  text-white">
            Tech We Use
          </h3>
          <p align='left' className="py-4  text-md  text-gray-300">
          Python, Django, Flask, React, Node, REST, Shopify and Wordpress
          </p>
        </div>
        <div className="w-full px-4 py-4 mt-6 rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24  bg-gray-800">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white rounded-md">
              <img src={mongodb} alt="" />
            </div>
          </div>
          <h3 className="py-4 text-2xl font-semibold sm:text-xl  text-white">
          Backend Support
          </h3>
          <p align='left' className="py-4  text-md  text-gray-300">
          PostgreSQL, MongoDB, MySQL, SQLite. <br /> All your data is secure with you.
          </p>
        </div>
        <div className="w-full px-4 py-4 mt-6  rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4  bg-gray-800">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white rounded-md">
              <img src={aws} alt="" />
            </div>
          </div>
          <h3 className="py-4 text-2xl font-semibold  sm:text-xl  text-white">
          Deployment of Website
          </h3>
          <p align='left' className="py-4 text-md  text-gray-300">
          AWS, VPS, Cloud Hosting, Google Cloud console
          </p>
        </div>
      </div>

    </div>
  )
}

export default SectionWrapper(Fcard3)