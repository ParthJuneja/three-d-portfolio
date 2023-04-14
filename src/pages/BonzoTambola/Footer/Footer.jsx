import React from 'react'
import '../BonzoTambola.css'
import casefree from '../../../assets/casefree.png'
import juspay from '../../../assets/juspay.png'
import rajor from '../../../assets/rajor.png'


function Footer() {
  return (
    <div>
      <>
  {/* Hello world */}
  <div className="container-fluid" style={{ backgroundColor: "#3DADA9" }}>
    <div className="container-fluid">
      <div className="flex-container90">
        <div className="flex-left90">
          <h3 id="bonzo-tambola">Bonzo-Tambola</h3>
          <p className="footer-links">
            <a href="#" className="link-1">
              <i className="fa-brands fa-facebook" />
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="#">
              <i className="fa-brands fa-youtube" />
            </a>
            <a href="#">
              <i className="fa-solid fa-envelope" />
            </a>
          </p>
        </div>
        <div className="flex-right90">
          <h3 id="Paytment-Partners">Paytment Partners</h3>
          <div style={{display:'flex'}}>
            <div style={{display:'flex',justifyContent:'space-between'}} >
                <div style={{display:'flex'}}>
                    <div><img src={rajor} alt="" style={{height:'30px'}} /></div>
                    <div><a href="#" >Razorpay</a></div>
                </div>
                <div style={{display:'flex'}}>
                    <div><img src={rajor} alt="" style={{height:'30px'}} /></div>
                    <div><a href="#">JUSPAY</a></div>
                </div>
                <div style={{display:'flex'}}>
                    <div><img src={casefree} alt="" style={{height:'30px'}} /></div>
                    <div><a href="#">Cashfree</a></div>
                </div>
            
            </div>
          </div>
        </div>
      </div>
      <div align="center" style={{ justifyContent: "center" }}>
        <p className="about" style={{ textAlign: "center", marginTop: 50 }}>
          <a href="">About US | </a>
          <a href="">RNG Certificate |</a>
          <a href="/privacy">Privacy policy |</a>
          <a href="/TermCondition">Terms &amp; Conditions|</a>
          <a href="/responsivegaming">Responsible Gaming |</a>
          <a href="/fairplay">Fair play|</a>
          <a href="">Blog|</a>
          <a href="">Carrer</a>
        </p>
        <p></p>
        <li
          style={{
            listStyleType: "none",
            textAlign: "center",
            marginTop: 20,
            paddingBottom: 20,
            fontStyle: 15
          }}
        >
          ©Vorps Technologies private limited.All Rights Reserved.
        </li>
        <p />
      </div>
    </div>
  </div>
</>
    </div>
  )
}

export default Footer
