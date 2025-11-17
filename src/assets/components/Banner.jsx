import React from 'react';
import Marquee from 'react-fast-marquee';
import { useLoaderData } from 'react-router';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";


const Banner = () => {
    const data=useLoaderData();
    
    const topData=[...data].sort((a,b)=>(b.ratings-a.ratings)).slice(0,4)
    return (
        <div className='bg-cyan-100 flex justify-center'>
            <div className='w-11/12 mx-auto '>
                <div className='flex flex-col items-center justify-center pb-5'>
                    <h2 className='text-2xl md:text-4xl mt-10'>We Build Productive Game Apps</h2>

                    <Swiper modules={[Pagination,Navigation,Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{clickable:true}}
                    autoplay={{delay:2000}}
                    loop={true}
                    breakpoints={{
                        640:{slidesPerView:1},
                        768:{slidesPerView:2},
                        1024:{slidesPerView:3},
                    }}
                    className='w-full'>
                        {
                            topData.map(photo=>(
                               <SwiperSlide className='flex justify-center mt-5'> 
                                <img className='h-50 w-100 mx-8 rounded-lg' src={photo.coverPhoto} alt="" />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                    {/* <Marquee className="mt-5 flex  gap-5" pauseOnHover={true}>
                        {
                            topData.map(photo=>(
                                <img className='h-50 w-100 mx-8' src={photo.coverPhoto} alt="" />
                            ))
                        }
                    </Marquee> */}

                </div>
            </div>
        </div>
    );
};

export default Banner;