
import { Link, useNavigate } from 'react-router';
import { use, useRef, useState } from 'react';
import { authContext } from '../../provider/AuthProvider';





const Register = () => {
    const { createUser, setUser, updateUser,signInWithGoogle } = use(authContext)
    const navigate = useNavigate();
    const [error, setError] = useState("")
    const nameRef=useRef();
    const urlRef=useRef();
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // const userName=nameRef.current.value;
        // const userPhoto=urlRef.current.value;
        
        
        //    Password Validation 
        const passwordLength = /^.{6,}$/;
        if (!passwordLength.test(password)) {
            setError("Password must have at least 6 character")
            return
        }
        const uppercasePassword = /^(?=.*[A-Z]).+$/;
        if (!uppercasePassword.test(password)) {
            setError("Password must have at least one uppercase character")
            return;
        }
        const lowercasePassword = /^(?=.*[a-z]).+$/;
        if (!lowercasePassword.test(password)) {
            setError("Password must have at least one lowercase character")
            return;
        }


        console.log({ name, photo, email, password })
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })
                        navigate("/")
                    })
                    .catch(error => {
                        console.log(error)
                    })

            })
            .catch(error => {
                console.log(error)
            })

    

    }

    const handleSignInGoogle=()=>{
        signInWithGoogle()
        .then(result=>{
            alert(result.user)
            navigate(location?.state||"/")
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                {/* Name */}
                                <label className="label">Name</label>
                                <input type="text" className="input" name='name' ref={nameRef} placeholder="Name" required />
                                {/* Photo URL */}
                                <label className="label">Photo URL</label>
                                <input type="text" className="input" name='photo' ref={urlRef} placeholder="Photo URL" required />
                                {/* Email */}
                                <label className="label">Email</label>
                                <input type="email" className="input" name='email' placeholder="Email" required />
                                {/* Password */}
                                <label className="label">Password</label>
                                <input type="password" className="input" name='password' placeholder="Password " required />
                                <button  type='submit' className="btn btn-neutral mt-4">Register</button>
                                {error ? <p className='text-red-600'>{error}</p> : <p className='text-emerald-500'>Account created successfully</p>}

                            </fieldset>
                        </form>
                        <button onClick={handleSignInGoogle} className="btn bg-red-500 text-white mt-2 border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                        <p>Already have an Account ? Please <Link to="/auth/login" className='text-red-500 underline'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;