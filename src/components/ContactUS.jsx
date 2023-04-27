import React from 'react';
import Navbar  from './Navbar';
import Contact from './Contact';
import Footer from './Footer';
import { StarsCanvas } from './canvas';

function ContactUS() {
  return (
    <div className="relative z-0 bg-primary">
    <Navbar />
    <br />
    <br />
    <Contact />
    <StarsCanvas/>
    <br />
    <br />
    <Footer /> 
    </div>
  );
}

export default ContactUS;
