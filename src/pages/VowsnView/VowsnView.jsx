import React from 'react'
import views from '../../assets/views.png'
import Navbar from './Navbar/Navbar'
import Footer from '../../components/Footer'
import { Feedbacks } from '../../components'

function VowsnView() {
  return (
    <>
    <Navbar />
      <div className='container-fluid' >

      
<div className="container-fluid" id="vowsconatiner" style={{paddingTop: '100px'}}>
  <div className="container" align="center">
    <div className="row" style={{justifyContent: 'center'}}><img id="viewsimage200" style={{height:'200px',width:'200px'}} src={views} /></div>
    <p style={{padding:'40px'}} class="text-3xl font-bold text-center text-white-800">
                    Vows n Views
                </p>
    <div className="container">
      <div className="row" align="center"><p id="vowstext">Vow’s n View’s is an Indian Wedding Planning Search Engine where you can find &amp; connect with suitable and best wedding vendors &amp; venues in your budget in a single place. From booking a venue for your wedding to your honeymoon bookings</p></div>
      <div style={{marginTop:'40px'}} align='center'><a style={{color: 'white', textDecoration: 'black', fontSize: '18px'}} href="www.vowsnviews.com">www.vowsnviews.com</a></div>
    </div>
  </div>
 
</div>
</div>
<Feedbacks />
<Footer />
</>
  
  )
}

export default VowsnView
