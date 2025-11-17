import React from 'react';
import { MdOutlineNoEncryptionGmailerrorred } from 'react-icons/md';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='w-11/12 mx-auto p-10'>
            <div className='flex items-center justify-center flex-col min-h-screen gap-8'>
                <h2 className='text-3xl font-medium'>Error 404</h2>
                <p ><MdOutlineNoEncryptionGmailerrorred size={120}></MdOutlineNoEncryptionGmailerrorred></p>
                <Link to="/"><button className='btn btn-secondary'>Go Home Page</button></Link>

            </div>
        </div>
    );
};

export default Error;