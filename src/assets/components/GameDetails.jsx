import React from 'react';
import { IoStarHalfSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router';


const GameDetails = ({ games }) => {
    const navigate=useNavigate();
    // console.log(games)
    return (
        <div className='w-10/12 mx-auto'>
            <div className='flex flex-col md:flex-row md:items-start gap-6'>
                <img className='w-full md:w-[600px] rounded-2xl object-cover' src={games.coverPhoto} alt="" />
                <div className='flex-col text-start ml-6'>
                    <h2 className='text-2xl font-medium mt-3'>Title :{games.title} </h2>
                     <p className='mt-3 text-xl'><span className='text-xl font-medium'>Description:</span> {games.description} </p>
                     <p className='mt-3 text-xl'><span className='text-xl font-medium'>Developer:</span>{games.developer} </p>
                     <p className='text-xl font-medium mt-3'>DownloadLink:<span className='text-red-500 underline cursor-pointer font-normal'>{games.downloadLink}</span> </p>
                     <p className='text-xl font-medium mt-3 flex items-center gap-2'>Ratings:<IoStarHalfSharp></IoStarHalfSharp> {games.ratings} </p>
                     <button onClick={()=>navigate(-1)} className='btn btn-primary mt-5'>Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default GameDetails;