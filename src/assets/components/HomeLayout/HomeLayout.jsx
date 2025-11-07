import React from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router';
import Banner from '../Banner';
import NewsLetters from '../NewsLetters';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
                <Banner></Banner>
            </header>
            <main className='pb-12'>
                <Outlet></Outlet>
            </main>
            <footer className=''>
                <NewsLetters></NewsLetters>
            </footer>
        </div>
    );
};

export default HomeLayout;