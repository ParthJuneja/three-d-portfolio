import React from 'react';
import  {Tilt}  from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';
import { Link } from 'react-router-dom';


const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className='xs:w-[200px] xxs:w-[200px] xxs:h-[180px] w-full'>
      <motion.div variants={fadeIn("right","spring",0.5*index,0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{
          max: 45,
          scale: 1,
          speed:450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='mt-5 xxs:mt-1'>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview
        </h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl mx-auto leading-[30px]' >
        We are a team of talented developers making websites and mobile apps. We are passionate about building excellent software that improves the lives of those around us. With us you get a dedicated team of experts who will work with you from concept to launch.
      </motion.p>

      <div className="mt-20 flex xs:justify-center xxs:justify-center flex-wrap xxs:gap-28 xxs:pl-3 xxs:mb-4 gap-10">
        {services.map((service, index) => (
          <Link to={`/${service.key}`}>
            <ServiceCard key={service.title} index={index} {...service}/>
          </Link>
          ))}
      </div>

    </>
  )
}

export default SectionWrapper(About, "about");