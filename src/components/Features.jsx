import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { features } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const FeatureCard = ({ index, icon, title, additional }) => {
  return (
    <div className="p-4 xxs:flex-auto xxs:p-0 xxs:w-fit xxs:h-fit xxs:mt-1">
      <div className="flex-col flex justify-center items-center">
        <div className="flex-shrink-0 xxs:">
          <div className="relative block">
            <img alt="feature-icon" src={icon} className="mx-auto object-contain rounded-full h-20 w-20 xxs:h-10 xxs:w-10 " />
          </div>
        </div>
        <div className="mt-2 text-center flex flex-col">
          <span className="text-lg font-medium text-gray-600 xxs:text-sm dark:text-white">
            {title}
          </span>
          <span className="text-xs text-gray-400">
            {additional}
          </span>
        </div>
      </div>
    </div>
  )
};

const Features = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          We can help you with
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Features
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-3 text-[17px] max-w-3xl mx-auto leading-[30px] text-secondary'>
          From easy to complex solutions.
          With us, you can get the best features for your website.
          Integrating these features will help you to grow your business rapidly.
        </motion.p>
      </div>
      <div className=' justify-center mt-20 flex flex-wrap gap-7'>
        {features.map((feature, index, icon, title, additional) => (
          <FeatureCard key={`project-${index}`} index={index} icon={icon} title={title} additional={additional} {...feature} />
        ))}
      </div>
    </>
  )
};

export default SectionWrapper(Features, "features");