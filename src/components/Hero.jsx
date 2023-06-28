import React from 'react'
import { motion } from 'framer-motion';

import { styles } from '../styles'
import GetInTouch from './GetInTouch';



const Hero = () => {
  return (
    <>
    <section className='relative w-full  mx-auto h-[300px] xxs:30vh'  >
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        
        <div className="flex flex-col justify-center items-center mt-5 xxs:mt-0">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, We're <span className='text-[#915eff]'>Vorps Tech</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 `}>We are team of talented Tech developers, Specialise in <br className='sm:block hidden'/> fulfilling the need of future businesses</p>
        </div>
        
      </div>

      
      {/* <div className='mt-10 xxs:mt-0 relative sm:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div animate={{
              y: [0, 24, 0]
            }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"  
              />
          </div>
        </a>
      </div> */}
    
     
      
    </section>
    <div style={{paddingBottom:'20px'}}>
      <a href='#Contact'>
        <button className='Touchbtn'>Get In Touch <i className="fa fa-angle-double-down" /></button>
      </a>
      
    </div>
    {/* <GetInTouch/> */}
    <p className={`${styles.sectionSubText} text-center`}>
          We are here to serve you the Best.
    </p>
    
    </>
  )
}

export default Hero