import React from 'react'
import { SectionWrapper } from '../hoc'
import ios from '../assets/ios.png'
import googleplay from '../assets/googleplay.png'
import { mongodb } from '../assets'

const Fcard4 = () => {
  return (
    <div className='py-5'>
      <div className="flex-wrap items-center justify-center gap-8 text-center sm:flex">
        <div className="w-full px-4 py-4 mt-6 rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4  bg-gray-800">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
              <img src={ios} alt="ios" />
            </div>
          </div>
          <h3 className="py-4 text-2xl font-semibold sm:text-xl  text-white">
            Frontend Developement
          </h3>
          <p className="py-4 text-md  text-gray-300">
            React , React Native, Flutter and many more for Android and iOS mobile apps.
          </p>
        </div>
        <div className="w-full px-4 py-4 mt-6  rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24  bg-gray-800">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white rounded-md">
              <img src={mongodb} alt="mongodb" />
            </div>
          </div>
          <h3 className="py-4 text-2xl font-semibold sm:text-xl  text-white">
          Backend Support
          </h3>
          <p className="py-4 text-md  text-gray-300">
          PostgreSQL, MongoDB, MySQL, SQLite  . All your data is secure with you.
          </p>
        </div>
        <div className="w-full px-4 py-4 mt-6 rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4  bg-gray-800">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-whitep rounded-md">
              <img src={googleplay} alt="google play" />
            </div>
          </div>
          <h3 className="py-4 text-2xl font-semibold sm:text-xl  text-white">
           App Deployment and Publishing
          </h3>
          <p align='left' className="py-4 text-md  text-gray-300">
          We publish your app on Google Play Store and Apple App Store. 
          </p>
        </div>
      </div>

    </div>
  )
}

export default SectionWrapper(Fcard4)