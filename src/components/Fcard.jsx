import React from 'react'
import { SectionWrapper } from '../hoc'
import { figma } from '../assets'
import xd from '../assets/xd.png'
import wireframe from '../assets/wireframe.png'

const Fcard = () => {
  return (
    <div className='py-5'>
      <div class="flex-wrap items-center justify-center gap-8 text-center sm:flex">
        <div class="w-full px-4 py-4 mt-6 rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4  bg-gray-800">
          <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-12 h-12 mx-auto text-white rounded-md">
              <img src={figma}/>
            </div>
          </div>
          <h3 class="py-4 text-2xl font-semibold  sm:text-xl  text-white">
          UX / UI Design 
          </h3>
          <p align='left' class="py-4 text-md  text-gray-300">
          We create highly interactive UI/UX Design for Modern web applications
          </p>
        </div>
        <div class="w-full px-4 py-4 mt-6 rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24  bg-gray-800">
          <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-12 h-12 mx-auto text-white rounded-md">
              <img src={wireframe} alt="" srcset="" />
            </div>
          </div>
          <h3 class="py-4 text-2xl font-semibold sm:text-xl  text-white">
          Mockups
          </h3>
          <p align='left' class="py-4 text-md  text-gray-300">
          Our mockup services are designed to help businesses visualize their products before they are built. We create detailed mockups that allow our clients to see how their product will look and function before any development work is done. This helps our clients save time and money by making sure that they are satisfied with the product design before it is built.
          </p>
        </div>
        <div class="w-full px-4 py-4 mt-6 rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4  bg-gray-800">
          <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-12 h-12 mx-auto text-white rounded-md">
              <img src={xd} alt="" srcset="" />
            </div>
          </div>
          <h3 class="py-4 text-2xl font-semiboldsm:text-xl  text-white">
          3D Modeling
          </h3>
          <p align='left' class="py-4  text-md  text-gray-300">
          Our 3D modeling services are designed to help businesses create stunning visualizations of their products. We use the latest 3D modeling software to create realistic and detailed models that can be used in marketing, product development, and more. Our team works closely with our clients to ensure that their 3D models meet their exact specifications.
          </p>
        </div>
      </div>

    </div>
  )
}

export default SectionWrapper(Fcard)