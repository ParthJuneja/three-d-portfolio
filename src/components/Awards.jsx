import React from 'react'
import channel from '../assets/channel.webp'
import preview from '../assets/preview.webp'
import nike from '../assets/nike.webp'
import topware from '../assets/topware.webp'
import htc from '../assets/htc.webp'
import honda from '../assets/honda.webp'
import balance from '../assets/balance.webp'
import { styles } from "../styles";
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';


function Awards() {
  return (
   <>
  {/* <div className='Awards'  >
    <div>
      <img  src={channel}/>
    </div>
    <div>
    <img  src={channel}/> 
    </div>
    <div>
    <img  src={channel}/> 
    </div>
  </div> */}
  <div  className={`bg-tertiary rounded-2xl ${styles.padding} lg:min-h-[300px] md:min-h-[250px] sm:min-h-[250px] min-h-[200px]`}>
  <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
         Brands We Worked For
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
        Brands We Worked For
        </h2>
      </motion.div>

  <div className="logos">
      <div className="logos-slide">
        <img  src={channel}  />
        <img  src={preview}  />
        <img  src={topware}  />
        <img  src={nike}  />
        <img  src={htc}  />
        <img  src={honda}  />
        <img  src={balance}  />
      </div>
    </div>
  </div>

   </>
  )
}

export default Awards
