import React from 'react';
import Navbar from '../Navbar';
import { Outlet, useNavigation } from 'react-router';
import Banner from '../Banner';
import NewsLetters from '../NewsLetters';
import Loading from '../../pages/Loading';

const HomeLayout = () => {
    const {state}=useNavigation();

    return (
        <div>
            <header>
                <Navbar></Navbar>
                <Banner></Banner>
            </header>
            <main className='pb-12'>
                {state=="loading" ?<Loading></Loading> :<Outlet></Outlet>}
                
            </main>
            <footer className=''>
                <NewsLetters></NewsLetters>
            </footer>
        </div>
    );
};

export default HomeLayout;