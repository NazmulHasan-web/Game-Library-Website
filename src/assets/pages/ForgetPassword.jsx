import React from 'react';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router';

const ForgetPassword = () => {
    const location=useLocation();
    const prefilledEmail=location.state?.email || "";

    const handleReset=()=>{
        console.log("reset")
        window.open ('https://mail.google.com/', '_blank')
    }
    return (
        <div className='w-11/12 mx-auto'>
           <header>
                <Navbar></Navbar>
           </header>
           <main className='mt-20 flex justify-center'>
                <div className='flex flex-col justify-center text-center w-[400px] bg-gray-200 p-10 rounded-xl'>
                    <h2 className='mb-5 text-2xl font-medium'>Reset Password</h2>
                    <input  type="email" className='input w-full' defaultValue={prefilledEmail} placeholder='Email' name="" id="" />
                    <br />
                    <button onClick={handleReset} className='btn btn-secondary'>Reset Password</button>
                </div>
           </main>
        </div>
    );
};

export default ForgetPassword;