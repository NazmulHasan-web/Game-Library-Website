import React from 'react';
import { Link, useLoaderData } from 'react-router';
import TopGames from './TopGames';

const Home = () => {
    const data = useLoaderData();
    const topData = [...data].sort((a, b) => b.ratings - a.ratings).slice(0, 3);
    console.log(data)
    console.log(topData)
    return (
        <div className='w-11/12 mx-auto  mt-16'>
            <h2 className='text-3xl text-center pb-10'>Top Three Games Basis on The Ratigns</h2>
            <div className='grid grid-cols-3'>
                {
                    topData.map(top => <TopGames top={top}></TopGames>)
                }
            </div>

        </div>
    );
};

export default Home;