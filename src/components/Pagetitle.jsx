import React from 'react'
import { SectionWrapper } from '../hoc';
import {  useNavigate } from 'react-router-dom';
import certify from '../assets/certify.png'
import googlead from '../assets/googlead.png'




const Pagetitle = ({ title,subtitle,subtext }) => {
    const navigate= useNavigate();
    return (
        <div className='px-6'>
            <div className="mt-16 py-5  bg-gray-800 ">
                <div className="text-start w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        <span className="block">
                            {title}
                        </span>
                        <span className="block text-indigo-500">
                            {subtitle}
                        {/* for your business Website. */}
                        </span>
                    </h2>
                    <p className='pt-4 text-lg font-extralight mr-32 xxs:mr-12' >{subtext}</p>
                    <div className='mt-12 certifybtn  rounded-md shadow'>
                        <div>
                        <button  onClick={()=>navigate("/ContactUs")} type="button" className="py-4 px-6 laybtn  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Get a Quote
                                </button>
                        </div>
                        <div className='nextrow'>
                        <div className='col-6'>
                        <img style={{height:'100px',width:'100px'}} src={certify} />
                        </div>
                        <div className='col-6'>
                        <img  style={{height:'100px',width:'100px',margin:'0px 0px 0px 30px'}} src={googlead} />
                        </div>
                        </div>
                    </div>
                
                    {/* <div>

                            <div className="mt-12 flex rounded-md shadow">
                            
                            <a >
                                <button onClick={()=>navigate("/ContactUs")} type="button" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Certify Google Advertiser
                                </button>
                            </a>
                       
                            </div>
                            <div style={{display:'flex',justifyContent:'right'}}>
                          <div >
                            <img style={{height:'100px',width:'100px'}} src={certify} />
                            </div>
                            <div>
                            <img  style={{height:'100px',width:'100px',margin:'0px 0px 0px 30px'}} src={googlead} />
                            </div>
                          </div>

                          
                    </div>
                    */}
                </div>
            </div>
        </div>
    )
}

export default (Pagetitle);