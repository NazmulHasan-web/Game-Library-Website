import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router';
import TopGames from './TopGames';

const Home = () => {

    useEffect(()=>{
        console.log("use effect",document.title)
        document.title="Home| game-library-website";
        console.log("after eff",document.title)
    },[])
    const data = useLoaderData();
    const topData = [...data].sort((a, b) => b.ratings - a.ratings).slice(0, 3);
    console.log(data)
    console.log(topData)
    return (
        <div className='w-11/12 mx-auto  mt-16'>
            <h2 className='text-2xl md:text-3xl text-center pb-10'>Top Three Games Basis on The Ratigns</h2>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                {
                    topData.map(top => <TopGames key={top.id} top={top}></TopGames>)
                }
            </div>

        </div>
    );
};

export default Home;