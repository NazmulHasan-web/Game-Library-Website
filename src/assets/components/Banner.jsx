import React from 'react';
import Marquee from 'react-fast-marquee';
import { useLoaderData } from 'react-router';


const Banner = () => {
    const data=useLoaderData();
    
    const topData=[...data].sort((a,b)=>(b.ratings-a.ratings)).slice(0,4)
    return (
        <div className='bg-cyan-100'>
            <div className='w-11/12 mx-auto '>
                <div className='flex flex-col items-center justify-center pb-5'>
                    <h2 className='text-4xl mt-10'>We Build Productive Game Apps</h2>

                    <Marquee className="mt-5 flex  gap-5" pauseOnHover={true}>
                        {
                            topData.map(photo=>(
                                <img className='h-50 w-100 mx-8' src={photo.coverPhoto} alt="" />
                            ))
                        }
                    </Marquee>

                </div>
            </div>
        </div>
    );
};

export default Banner;