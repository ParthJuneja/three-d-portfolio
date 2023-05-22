import { BrowserRouter } from 'react-router-dom';
import {About, Contact, Experience, Feedbacks, Hero, Navbar , Tech, Works, StarsCanvas, Features } from './components';

import './App.css'
import Footer from './components/Footer';
import Whatsup from './components/Whatsup';
import ScrollUpButton from './components/ScrollUpButton';
import NewEarth from './components/canvas/NewEarth';

const App = () =>{

  return (
    // <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
          <Navbar/>
          <Hero/>
          {/* <NewEarth /> */}
          <NewEarth/>
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
       <div style={{float:'left'}}>
       <ScrollUpButton /> 
       </div>
        <Footer/> 
      </div>
    // </BrowserRouter>
  )
}

export default App
