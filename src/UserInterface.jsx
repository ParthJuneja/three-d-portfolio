import { BrowserRouter } from 'react-router-dom';
import {Navbar , Uifeatures } from './components';

import './App.css'

const UserInterface = () =>{

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
          <Navbar/>
        </div>
        <Uifeatures/>
      </div>
    </BrowserRouter>
  )
}

export default UserInterface
