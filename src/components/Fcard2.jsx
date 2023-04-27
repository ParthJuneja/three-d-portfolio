import React from 'react'
import { SectionWrapper } from '../hoc'
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'
import googlads from '../assets/googlads.png'

const Fcard2 = () => {
  return (
    <div className='py-5'>
      <div class="flex-wrap items-center justify-center gap-8 text-center sm:flex">
        <div class="w-full px-4 py-4 mt-6 rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4  bg-gray-800">
          <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-12 h-12 mx-auto text-white rounded-md">
              <img src={google} alt="google" />
            </div>
          </div>
          <h3 class="py-4 text-2xl font-semibold sm:text-xl  text-white">
            Google Analytics and  Tag Manager
          </h3>
          <p class="py-4 text-md  text-gray-300">
          Google analytics and  tag manager is a tool to give you live insights of your website.
          So that you can have real time track on audience
          </p>
        </div>
        <div class="w-full px-4 py-4 mt-6 rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24  bg-gray-800">
          <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
              <img src={facebook} alt="facebook" />
            </div>
          </div>
          <h3 class="py-4 text-2xl font-semibold sm:text-xl  text-white">
          Facebook ,Snapchat ,Instagram Ads
          </h3>
          <p class="py-4  text-md  text-gray-300">
          We setup your Social media Ads through various matrix and insights to target the
          top 10% audience who are looking to buy your product and services
          </p>
        </div>
        <div class="w-full px-4 py-4 mt-6  rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4  bg-gray-800">
          <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-12 h-12 mx-auto text-white rounded-md">
              <img src={googlads} alt="googlads" />
            </div>
          </div>
          <h3 class="py-4 text-2xl font-semibold sm:text-xl  text-white">
          Snapchat & Facebook Pixel
          </h3>
          <p class="py-4  text-md  text-gray-300">
            Snapchat & Facebook pixel are linked to track the audience and for
            running remarketing campaigns which increases the conversion rate by 20%
          </p>
        </div>
      </div>

    </div>
  )
}

export default SectionWrapper(Fcard2)