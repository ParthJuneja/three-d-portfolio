import React from 'react'
import './Review.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import review1 from '../../../assets/review1.png'
import review2 from '../../../assets/review2.png'
import review3 from '../../../assets/review3.png'
import review4 from '../../../assets/review4.png'


import { EffectCoverflow, Pagination, Navigation } from 'swiper'

import CardContent from '@mui/material/CardContent';

import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';





const Review = () => {

  const value = 3.4

  return (
    <>
      <div className='Reviewheader'><h4>What Our Customer has  to say about us</h4> </div>
    
      <div align='center' className='container-fluid' id='fmki'>
        <Swiper
          slidesPerView={1}
          effect={'coverflow'}
          grabCursor={true}
          // centeredSlides={true}
          loop={true}
          background={'transparent'}
          coverflowEffect={
            {
              rotate: 0,
              stretch: 100,
              depth: 200,
              modifier: 1.5,
              slideShadows: false,
              centeredSlides: true,
              loop: true,
              paginationClickable: true,
              pagination: '.swiper-pagination',
            }
          }
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: 'swiper-button-next',
            prevEl: 'swiper-button-prev',
            backgroundColor: 'transparent',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
        >

          <SwiperSlide sx={{}}>
            <div className="card0">
              <div align='center' className='gridcontainer' style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '30px',width:'300px' }}>
                <div className='gridleft' style={{ float: 'left' }}>
                  <Avatar alt="Remy Sharp" src={review4} />
                </div>
                <div className='gridright' style={{ justifyContent: 'right', }}>
                  <div >
                  <span style={{fontSize:'30px',margin:'5px'}} class="fa fa-star checked"></span>
                  <span style={{fontSize:'30px',margin:'5px'}} class="fa fa-star checked"></span>
                  <span style={{fontSize:'30px',margin:'5px'}} class="fa fa-star checked"></span>
                  <span style={{fontSize:'30px',margin:'5px'}} class="fa fa-star checked"></span>
                  <span style={{fontSize:'30px',margin:'5px'}} class="fa fa-star checked"></span>
                  </div>
                  {/* <div >
                    <Box
                      sx={{
                        width: 200,
                        display: 'flex',
                        alignItems: 'center',


                      }}
                    >
                      <Rating
                        name="text-feedback"
                        value={value}
                        readOnly
                        precision={0.5}
                        sx={{
                          fontSize: "1.5rem"
                        }}

                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="1.5rem" />}
                      />

                      <Box sx={{ ml: 2 }}></Box>
                    </Box>
                  </div> */}
                </div>
              </div>
              <CardContent >

                <Typography variant="body2" sx={{fontSize:'20px',color:'black'}} >
                In India, the game is often misspelled as Tambola, although Tombola is
                 the official spelling. Tickets are distributed among the players and the 
                 presenter announces the numbers in an exciting way. One by one the players 
                 claim the prizes and win either real money (which is decided before starting the game)
                  or a gift.
                </Typography>
              </CardContent>
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className="card0">
            <div align='center' className='gridcontainer' style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '30px',width:'300px' }}>
                <div className='gridleft' style={{ float: 'left' }}>
                  <Avatar alt="Remy Sharp" src={review1} />
                </div>
                <div className='gridright' style={{ justifyContent: 'right', }}>
                  <div >
                  <span style={{fontSize:'30px',margin:'5px'}} class="fa fa-star checked"></span>
                  <span style={{fontSize:'30px',margin:'5px'}} class="fa fa-star checked"></span>
                  <span style={{fontSize:'30px',margin:'5px'}} class="fa fa-star checked"></span>
                  <span style={{fontSize:'30px',margin:'5px'}} class="fa fa-star checked"></span>
                  <span style={{fontSize:'30px',margin:'5px'}} class="fa fa-star checked"></span>
                  </div>
                  {/* <div >
                    <Box
                      sx={{
                        width: 200,
                        display: 'flex',
                        alignItems: 'center',


                      }}
                    >
                      <Rating
                        name="text-feedback"
                        value={value}
                        readOnly
                        precision={0.5}
                        sx={{
                          fontSize: "1.5rem"
                        }}

                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="1.5rem" />}
                      />

                      <Box sx={{ ml: 2 }}></Box>
                    </Box>
                  </div> */}
                </div>
              </div>
              <CardContent >

                <Typography variant="body2" sx={{fontSize:'20px',color:'black'}} >
                In India, the game is often misspelled as Tambola, although Tombola is
                 the official spelling. Tickets are distributed among the players and the 
                 presenter announces the numbers in an exciting way. One by one the players 
                 claim the prizes and win either real money (which is decided before starting the game)
                  or a gift.
                </Typography>
              </CardContent>
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className="card0">
            <div align='center' className='gridcontainer' style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '30px',width:'300px' }}>
                <div className='gridleft' style={{ float: 'left' }}>
                  <Avatar alt="Remy Sharp" src={review2} />
                </div>
                <div className='gridright' style={{ justifyContent: 'right', }}>
                  <div >
                  <span style={{fontSize:'30px',margin:'5px'}} class="fa fa-star checked"></span>
                  <span style={{fontSize:'30px',margin:'5px'}} class="fa fa-star checked"></span>
                  <span style={{fontSize:'30px',margin:'5px'}} class="fa fa-star checked"></span>
                  <span style={{fontSize:'30px',margin:'5px'}} class="fa fa-star checked"></span>
                  <span style={{fontSize:'30px',margin:'5px'}} class="fa fa-star checked"></span>
                  </div>
                  {/* <div >
                    <Box
                      sx={{
                        width: 200,
                        display: 'flex',
                        alignItems: 'center',


                      }}
                    >
                      <Rating
                        name="text-feedback"
                        value={value}
                        readOnly
                        precision={0.5}
                        sx={{
                          fontSize: "1.5rem"
                        }}

                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="1.5rem" />}
                      />

                      <Box sx={{ ml: 2 }}></Box>
                    </Box>
                  </div> */}
                </div>
              </div>
              <CardContent >

                <Typography variant="body2" sx={{fontSize:'20px',color:'black'}} >
                In India, the game is often misspelled as Tambola, although Tombola is
                 the official spelling. Tickets are distributed among the players and the 
                 presenter announces the numbers in an exciting way. One by one the players 
                 claim the prizes and win either real money (which is decided before starting the game)
                  or a gift.
                </Typography>
              </CardContent>
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className="card0">
            <div align='center' className='gridcontainer' style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '30px',width:'300px' }}>
                <div className='gridleft' style={{ float: 'left' }}>
                  <Avatar alt="Remy Sharp" src={review3} />
                </div>
                <div className='gridright' style={{ justifyContent: 'right', }}>
                  <div >
                  <span style={{fontSize:'30px',margin:'5px'}} class="fa fa-star checked"></span>
                  <span style={{fontSize:'30px',margin:'5px'}} class="fa fa-star checked"></span>
                  <span style={{fontSize:'30px',margin:'5px'}} class="fa fa-star checked"></span>
                  <span style={{fontSize:'30px',margin:'5px'}} class="fa fa-star checked"></span>
                  <span style={{fontSize:'30px',margin:'5px'}} class="fa fa-star checked"></span>
                  </div>
                  {/* <div >
                    <Box
                      sx={{
                        width: 200,
                        display: 'flex',
                        alignItems: 'center',


                      }}
                    >
                      <Rating
                        name="text-feedback"
                        value={value}
                        readOnly
                        precision={0.5}
                        sx={{
                          fontSize: "1.5rem"
                        }}

                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="1.5rem" />}
                      />

                      <Box sx={{ ml: 2 }}></Box>
                    </Box>
                  </div> */}
                </div>
              </div>
              <CardContent >

                <Typography variant="body2" sx={{fontSize:'20px',color:'black'}} >
                In India, the game is often misspelled as Tambola, although Tombola is
                 the official spelling. Tickets are distributed among the players and the 
                 presenter announces the numbers in an exciting way. One by one the players 
                 claim the prizes and win either real money (which is decided before starting the game)
                  or a gift.
                </Typography>
              </CardContent>
            </div>

          </SwiperSlide>
          <div className="slider-controler" >

            <div className="swiper-pagination"></div>

          </div>
        </Swiper>
      </div>

    </>

  )
}

export default Review