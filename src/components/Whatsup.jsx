import React from 'react'

function Whatsup() {
  return (
 <div align='left' style={{zIndex:'100',marginLeft:'20px'}}>
     <div>
       <a style={{position:'fixed',width:'60px',height:'60px',bottom:'40px',backgroundColor:'#25d366',color:'#FFF',borderRadius:'50px',textAlign:'center',fontSize:'30px',boxShadow:'2px 2px 1px #999',zIndex:'100'}}
        href="https://api.whatsapp.com/send?phone=+91-9811041767&text=Contacting to you in regards of this page https://www.vorpstech.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i  class="fa fa-whatsapp whatsapp-icon" style={{marginTop:'16px'}}></i>
      </a>
    </div>
 </div>
  )
}

export default Whatsup
