import React, { use } from 'react';
import { SiEpicgames } from 'react-icons/si';
import { Link , NavLink } from 'react-router';
import { authContext } from '../../provider/AuthProvider';


const Navbar = () => {
    const {user,logOut}=use(authContext)
    const handleLogout=()=>{
        console.log("log out")
        logOut()
        .then(()=>{
            alert("You logged out successfully")
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const links=<>
    
    <li><NavLink to="/">Home</NavLink></li>
    {/* <li><NavLink to="/profile">My Profile</NavLink></li> */}
    <li><NavLink to="/games">All Games</NavLink></li>
    <li><NavLink to="/new/games">New Games</NavLink></li>
    
    
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-5xl"><SiEpicgames></SiEpicgames></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                {
                    user ? 
                    (<>
                    <Link to="/profile" className='cursor-pointer'><img className='w-12 rounded-3xl' src={user.photoURL} alt="" /></Link>
                    <button onClick={handleLogout} className='btn btn-primary'>LogOut</button>
                    </>):
                    (<>
                    <Link to="/auth/login" className="btn btn-primary">Login</Link>
                    <Link to="/auth/register"className="btn btn-primary">Registration</Link>
                    </>)
                }
                
            </div>
        </div>
    );
};

export default Navbar;