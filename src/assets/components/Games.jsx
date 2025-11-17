import React from 'react';
import { useLoaderData } from 'react-router';
import AllGames from './AllGames';

const Games = () => {
    const cards=useLoaderData();
    // console.log(data)
    return (
        <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
            {
                cards.map(card=><AllGames card={card}></AllGames>)
            }
        </div>
    );
};

export default Games;