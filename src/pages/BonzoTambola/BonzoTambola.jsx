import React, { useState } from 'react'
import  { useLayoutEffect } from 'react'
import Review from './Review/Review'
import './BonzoTambola.css'
import review1 from '../../assets/review1.png'
import review2 from '../../assets/review2.png'
import review3 from '../../assets/review3.png'
import Accordian from './Accordian/Accordian'
import Footer from './Footer/Footer'

import tambolaPage from '../../assets/tambolaPage.png'
import withdraw from '../../assets/withdraw.png'
import security from '../../assets/security.png'
import tournament from '../../assets/tournament.png'
import cashback from '../../assets/cashback.png'
import certified from '../../assets/certified.png'
import customer from '../../assets/customer.png'
import tick from '../../assets/tick.png'
import appleplay from '../../assets/appleplay.png'
import demo from '../../assets/demo.png'
import rajor from '../../assets/rajor.png'
import juspay from '../../assets/juspay.png'
import casefree from '../../assets/casefree.png'
import Navbar from './Navbar/Navbar'

import googleplay from '../../assets/googleplay.png'

function BonzoTambola() {
 

  return (
 <>
   <Navbar />
    <div id='back'>
 
      <div className='container-fluid' style={{backgroundColor:'#9EDBD8'}} >
        <img src={tambolaPage} alt="" />
      </div>
      <div class="container-fluid">
  <div align="center" id="heading"><h3 >Why Play Real Money Games On Tambola</h3></div>

  <div className='ididp'>
    <div><img src={withdraw} alt="" /></div>
    <div> <img src={security} alt="" /></div>
    <div><img src={tournament} alt="" /></div>
    <div><img src={cashback} alt="" /></div>
    <div> <img src={certified} alt="" /></div>
    <div><img src={customer} alt="" /></div>
  </div>
  <div className='row'>
  <div className="container-fluid" id="mediaview" >
  <div align="center" className="row" style={{display:'flex',justifyContent:'space-evenly',padding:'40px'}}>
    <div className="col"><img src={tournament} alt=""  style={{width:'80px',height:'80px'}} /></div>
    <div className="col"><img src={withdraw} alt="" style={{width:'80px',height:'80px'}} /></div>
    <div className="col"><img src={security} alt="" style={{width:'80px',height:'80px'}} /></div>
  </div>
  <div align="center" className="row" style={{display:'flex',justifyContent:'space-evenly',padding:'40px'}}>
    <div className="col"><img src={cashback} alt="" style={{width:'80px',height:'80px'}} /></div>
    <div className="col"><img src={certified} alt="" style={{width:'80px',height:'80px'}} /></div>
    <div className="col"><img src={customer} alt="" style={{width:'80px',height:'80px'}} /></div>
  </div>
</div>

</div>
  

</div>
<div className='flex-container-600'>
<div className="flex-item-left600">
    <div align='left' id="app">
      <h2
        style={{
          color: "rgba(0, 0, 0, 1)",
          fontSize: 30,
          fontWeight: 800,
          WebkitTextStroke: "1px black"
          
        }}
      >
        Download Our App
      </h2>
    </div>
    <div className="bestapp">
      <h4>
        Best app that will helpyou to earn money by playing intellectual game
      </h4>
    </div>
    <div className="row" id="pointrow">
      <div className="Points">
        <h5>
          <div style={{display:'flex'}}>
          <div><img src={tick} alt="" /></div>
          <div><h4 className='money'>Earn money everyday</h4></div>
          </div>
          
  
        </h5>
      </div>
      <div className="Points">
      <h5>
          <div style={{display:'flex'}}>
          <div><img src={tick} alt="" /></div>
          <div><h4 className='money'>Become kind by playing</h4></div>
          </div>
      </h5>
       
      </div>
      <div class="Points">
      <h5>
          <div style={{display:'flex'}}>
          <div><img src={tick} alt="" /></div>
          <div><h4 className='money'>Build your own game</h4></div>
          </div>
      </h5>
       
      </div>
      
    </div>
    <div className='flexrow' style={{display:'flex'}}>
<div>
<div align="center" className="col-4">
        <img src={googleplay} alt="" style={{ height: 65 }} />
        <div align="center">
          <button id="downloadbtn">
            <a
              href="apk/Bonzo.apk"
              style={{ color: "#222", textDecoration: "none" }}
            >
              Download
            </a>
          </button>
        </div>
      </div>
</div>
<div>
<div align="center" className="col-4">
        <img src={appleplay} alt="" style={{ height: 65 }} />
        <div align="center">
          <button id="downloadbtn2">
            <a
              href="apk/Bonzo.apk"
              style={{ color: "white", textDecoration: "none" }}
            >
              Download
            </a>
          </button>
        </div>
      </div>
</div>
    </div>
    
  </div>
  <div className="flex-item-right600">
    <img src={demo} alt="" height="500px" />
  </div>
</div>
<div  className='conatiner-fluid'>
  <Accordian />
</div>
<div className='conatiner-fluid'>

<Review/>
</div>
<Footer />
    </div>
    

 </>
  )
}

export default BonzoTambola
