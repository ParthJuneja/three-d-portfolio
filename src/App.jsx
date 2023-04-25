import { BrowserRouter } from 'react-router-dom';
import {About, Contact, Experience, Feedbacks, Hero, Navbar , Tech, Works, StarsCanvas, Features } from './components';

import './App.css'
import Footer from './components/Footer';

const App = () =>{

  return (
    // <BrowserRouter>
      <div className="relative z-0 bg-brownbase">
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
        <Footer/> 
      </div>
    // </BrowserRouter>
  )
}

export default App
