import { BrowserRouter } from 'react-router-dom';
import {About, Contact, Experience, Feedbacks, HeroUI, Navbar , Works, StarsCanvas, Uifeatures } from './components';

import './App.css'

const UserInterface = () =>{

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
          <Navbar/>
          <HeroUI/>
        </div>
        {/* <About/> */}
        <Uifeatures/>
        {/* <Experience/> */}
        {/* <Tech/> */}
        {/* <Works/> */}
        {/* <Feedbacks/> */}
        <div className="relative z-0">
          {/* <Contact/> */}
          {/* <StarsCanvas/> */}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default UserInterface
