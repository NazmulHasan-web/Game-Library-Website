import React, { useEffect, useState } from 'react';
import GameDetails from './GameDetails';
import { useLoaderData, useParams } from 'react-router';

const Details = () => {
    const data=useLoaderData();
    const {id}=useParams();
    const [games,setGames]=useState({})
    // console.log(data,id,games)

    useEffect(()=>{
        const gamesInfo=data.find(info=>info.id==id);
        setGames(gamesInfo)
    },[data,id])


    return (
        <div className='w-11/12 mx-auto mt-5'>
            <header>
                <h2 className='text-3xl font-bold text-center'>Games Details Page</h2>
            </header>
            <main className='py-10 text-center'>
                <GameDetails games={games}></GameDetails>
            </main>
        </div>
    );
};

export default Details;