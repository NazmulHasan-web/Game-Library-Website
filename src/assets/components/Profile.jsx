import React, { use } from 'react';
import { useNavigate } from 'react-router';
import { authContext } from '../../provider/AuthProvider';

const Profile = () => {
    const {user}=use(authContext)
    const navigate=useNavigate();

    const handleUpdate=()=>{
        console.log("update")
        navigate("/update/profile")
    }
    return (
        <div className='w-11/12 mx-auto'>
           <div className='flex flex-col items-center justify-center mt-20'>
                 <h2 className='text-3xl font-semibold text-cyan-300'>My profile Page</h2>
                 <br />
                 {
                    user ? 
                    <div className='flex  flex-col items-center justify-center p-5 gap-3'>
                        <img className='w-12 rounded-2xl' src={user.photoURL} alt="" />
                        <p>Name:{user.displayName} </p>
                    </div>:
                    " "
                 }
                 <button onClick={handleUpdate} className='btn btn-secondary'>Update Profile</button>
           </div>
        </div>
    );
};

export default Profile;