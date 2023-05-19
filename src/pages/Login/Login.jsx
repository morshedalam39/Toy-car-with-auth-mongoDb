
import {  FaGoogle } from 'react-icons/fa';
import gif from '../../assets/secure-login.gif'
import React, { useContext, useState } from "react";
import { Link,  useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../providers/AuthProvider';


const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState("");
  
    const from = location.state?.from?.pathname || "/";
  
    const { signIn, signInWithGoogle } =
      useContext(AuthContext);
    const handleLogin = (event) => {
      event.preventDefault();
  
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
  
      signIn(email, password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          form.reset();
          setError("");
          navigate(from, { replace: true });
        })
        .catch((error) => {
          setError(error.message);
        });
    };
  
    const handleGoogleSignIn = () => {
      signInWithGoogle()
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return (
   
        <div className="hero min-h-screen bg-inherit">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left lg:w-6/12">
        <img src={gif} alt="" />

    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:w-6/12 lg:mx-20">
    <div className='text-center '>
						<h1 className='text-2xl font-bold'>Please Login!</h1>
					</div>

<div className='card-body'>
<form onSubmit={handleLogin} >
                           <div className='form-control'>
                               <label className='label'>
                                   <span className='label-text'>Email</span>
                               </label>
                               <input
                                   
                                   type='text'
                                   name='email'
                                   placeholder='email'
                                   className='input input-bordered'
                               />
                           </div>
                           <div className='form-control'>
                               <label className='label'>
                                   <span className='label-text'>Password</span>
                               </label>
                               <input
                                   type='password'
                                   name='password'
                                   placeholder='password'
                                   className='input input-bordered'
                               />

                           </div>
                           <p className="text-red-500">{error}</p>
                           <div className='form-control mt-6'>
                               <button className='btn btn-warning  hover:bg-yellow-600 '>Login</button>
                           </div>
                           <div>
                               <p className='text-sm text-center'>
                                   Don’t have an account?
                                   <Link to='/register' className='text-warning font-semibold'>
                                       Create an account
                                   </Link>
                               </p>
                           </div>
                           <div className='flex flex-col w-full border-opacity-50'>
                               <div className='divider'>OR</div>
                           </div>
                           </form>

                           <div>

                               <button
                               onClick={handleGoogleSignIn}
                                   
                                   className='border p-2 w-full rounded-full flex items-center justify-around'>
                                   <FaGoogle className='rounded-full text-amber-500 text-2xl'></FaGoogle>
                                   Continue with Google
                               </button>
                           </div>

                           </div>
                     
    </div>
  </div>
</div>
    );
};

export default Login;