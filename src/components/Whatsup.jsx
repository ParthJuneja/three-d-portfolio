import React from 'react'

function Whatsup() {
  return (
    <div >
      <a className='bottom-3 right-3' style={{position:'fixed',width:'60px',height:'60px',backgroundColor:'#25d366',color:'#FFF',borderRadius:'50px',textAlign:'center',fontSize:'30px',boxShadow:'2px 2px 3px #999',zIndex:'100'}}
        href="https://api.whatsapp.com/send?phone=+91-9811041767&text=Contacting to you in regards of this page https://www.vorpstech.com/"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon" style={{marginTop:'16px'}}></i>
      </a>
    </div>
  )
}

export default Whatsup
