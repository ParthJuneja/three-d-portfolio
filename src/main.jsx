import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { SocialMedia, Webdev, Mobiledev, Uifeatures } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Topwrapper } from './hoc'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/uiux" element={<Topwrapper><Uifeatures /></Topwrapper>} />
        <Route path="/web" element={<Topwrapper><Webdev /></Topwrapper>} />
        <Route path="/mobile" element={<Topwrapper> <Mobiledev /> </Topwrapper>} />
        <Route path="/digital" element={<Topwrapper> <SocialMedia />   </Topwrapper>} />
      </Routes>
    </BrowserRouter>
    <SocialMedia />
  </React.StrictMode>,
)
