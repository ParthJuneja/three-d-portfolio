import { BrowserRouter } from 'react-router-dom';
import {About, Contact, Experience, Feedbacks, Hero, Navbar , Tech, Works, StarsCanvas, Features } from './components';

import './App.css'
import Footer from './components/Footer';
import Whatsup from './components/Whatsup';

const App = () =>{

  return (
    // <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Features/>
        <Experience/>
        {/* <Tech/> */}
        <Works/>
        <Feedbacks/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
        <Whatsup/>
        <Footer/> 
      </div>
    // </BrowserRouter>
  )
}

export default App
