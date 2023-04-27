import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Fcard2 from './Fcard2'
import Pricings from './Pricings'
import Pagetitle from './Pagetitle'
import { SectionWrapper } from '../hoc'

const SocialMedia = ({title}) => {
    title = "Social Media Marketing"    
    return (
        <div className='wrapper-body'>
            <Navbar/>
            <Pagetitle title={'Digital Advertising Services'} subtitle={'Boost your online presence'} subtext={'Digital advertising services are designed to help businesses grow their online presence and reach their target audience. We use a variety of digital marketing strategies, pay-per-click (PPC) advertising, and social media advertising, to help our clients drive more traffic to their websites and increase their sales.'}/>

            <Fcard2/>

            <Pricings/>


            <Footer/>

        </div>
    )
}

export default (SocialMedia)