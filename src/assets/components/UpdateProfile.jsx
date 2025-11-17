import React, { use } from 'react';
import { authContext } from '../../provider/AuthProvider';
import { Link } from 'react-router';

const UpdateProfile = () => {
    const {user}=use(authContext)
    const prefilledName=user.displayName;
    const prefilledUrl=user.photoURL;
    console.log(prefilledName,prefilledUrl)
    return (
        <div className='w-11/12 mx-auto flex justify-center'>
            <div className='mt-20 flex flex-col justify-center bg-gray-200 p-10 rounded-xl shadow-xl'>
                <h2 className='text-3xl font-medium mb-5'>Update User Information</h2>
                <label className="label">Name</label>
                <br />
                <input type="text" className="input" name='name' defaultValue={prefilledName} placeholder="Name" required />
                {/* Photo URL */}
                <br />
                <label className="label">Photo URL</label>
                <br />
                <input type="text" className="input" name='photo' defaultValue={prefilledUrl} placeholder="Photo URL" required />
                <br />
                <Link to="/"><button className='btn btn-secondary'>Update Information Button</button></Link>
            </div>
        </div>
    );
};

export default UpdateProfile;