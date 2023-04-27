import React from 'react'

function Whatsup() {
  return (
    <div >
      <a class='fixed w-[60px] h-[60px] bg-[#25d366] text-white rounded-[50px] text-center text-[30px] bottom-10 right-10 z-100 shadow-lg'
        href="https://api.whatsapp.com/send?phone=+91-9811041767&text=Contacting to you in regards of this page https://www.vorpstech.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon" style={{marginTop:'16px'}}></i>
      </a>
    </div>
  )
}

export default Whatsup
