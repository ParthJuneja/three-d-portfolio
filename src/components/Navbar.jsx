import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import Dropdown from './Dropdown';

const Navbar = () => {

  const [active, setActive] = useState("");
  const [Toggle, setToggle] = useState(false);
  return (
    
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>

      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* title  */}  
        <Link to="/" className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18p] font-bold cursor-pointer flex'>Vorps Tech</p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10" >
          {/* <Dropdown/> */}
          {navLinks.map((link) => (
            <li key={link.id}
              className={`${active === link.title
                ? "text-white"
                : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor pointer`}
              onClick={() => setActive(link.title)}>

              <a href={`#${link.id}`}>{link.title}</a>

            </li>
          ))}
        </ul>
        {/* title menu  */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={Toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => { setToggle(!Toggle); }} />
        </div>
        {/* Mobile Menu */}
        <div className={`${!Toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4" >
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title
                    ? "text-white"
                    : "text-secondary"
                    } hover:text-white text-[18px] font-medium cursor pointer`}
                  onClick={() => setActive(link.title)}>

                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
        </div>

      </div>
      
    </nav>
  )
}

export default Navbar