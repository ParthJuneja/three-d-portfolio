import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { SocialMedia, Webdev, Mobiledev, Uifeatures, Contact } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Topwrapper } from './hoc'
import Privacy from './constants/Privacy'
import Tnc from './constants/Tnc'
import ContactUS from './components/ContactUS'
import Whatsup from './components/Whatsup'
import ScrollUpButton from './components/ScrollUpButton'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<App/>} />
        {/* <Route path="/#contact" element={<Contact/>} /> */}
        {/* <Route path='*' element={UsersNotFound} /> */}
        <Route path="/uiux" element={<Topwrapper><Uifeatures /><Whatsup /><ScrollUpButton/></Topwrapper>} />
        <Route path="/web" element={<Topwrapper><Webdev /><Whatsup /><ScrollUpButton/></Topwrapper>} />
        <Route path="/mobile" element={<Topwrapper> <Mobiledev /><Whatsup /><ScrollUpButton/> </Topwrapper>} />
        <Route path="/digital" element={<Topwrapper> <SocialMedia /><Whatsup /><ScrollUpButton/></Topwrapper>} />
        <Route path ="/Privacy" element={<Topwrapper> <Privacy/> </Topwrapper>}/>
        <Route path ="/tnc" element={<Topwrapper> <Tnc/> </Topwrapper>}/>
        <Route path ="/ContactUS" element={<Topwrapper> <ContactUS/><Whatsup /><ScrollUpButton/> </Topwrapper>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
