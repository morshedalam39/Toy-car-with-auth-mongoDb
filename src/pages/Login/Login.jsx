import React from 'react';
import { Link } from 'react-router-dom';
import {  FaGoogle } from 'react-icons/fa';
import gif from '../../assets/secure-login.gif'

const Login = () => {
    return (
        //            <div className='hero h-full bg-slate-50 mb-4'>
        //        <div className='hero-content flex-col w-full py-28'>
        //            <div className='text-center lg:text-left'>
        //                <h1 className='text-2xl font-bold'>Login now!</h1>
        //            </div>
        //            <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
        //                <form  className='card-body'>
        //                    <div className='form-control'>
        //                        <label className='label'>
        //                            <span className='label-text'>Email</span>
        //                        </label>
        //                        <input
                                   
        //                            type='text'
        //                            name='email'
        //                            placeholder='email'
        //                            className='input input-bordered'
        //                        />
        //                    </div>
        //                    <div className='form-control'>
        //                        <label className='label'>
        //                            <span className='label-text'>Password</span>
        //                        </label>
        //                        <input
        //                            type='password'
        //                            name='password'
        //                            placeholder='password'
        //                            className='input input-bordered'
        //                        />

        //                    </div>
        //                    <div className='form-control mt-6'>
        //                        <button className='btn btn-warning'>Login</button>
        //                    </div>
        //                    <div>
        //                        <p className='text-sm text-center'>
        //                            Don’t have an account?
        //                            <Link to='/register' className='text-warning font-semibold'>
        //                                Create an account
        //                            </Link>
        //                        </p>
        //                    </div>
        //                    <div className='flex flex-col w-full border-opacity-50'>
        //                        <div className='divider'>OR</div>
        //                    </div>
        //                    <div>

        //                        <button
                                   
        //                            className='border p-2 w-full rounded-full flex items-center justify-around'>
        //                            <FaGoogle className='rounded-full text-amber-500 text-2xl'></FaGoogle>
        //                            Continue with Google
        //                        </button>
        //                    </div>
        //                </form>
        //            </div>
        //        </div>
        //    </div>



        <div className="hero min-h-screen bg-inherit">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left lg:w-6/12">
        <img src={gif} alt="" />

    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:w-6/12 lg:mx-20">
    <div className='text-center '>
						<h1 className='text-2xl font-bold'>Please Login!</h1>
					</div>

    <form  className='card-body'>
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
                           <div className='form-control mt-6'>
                               <button className='btn btn-warning'>Login</button>
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
                           <div>

                               <button
                                   
                                   className='border p-2 w-full rounded-full flex items-center justify-around'>
                                   <FaGoogle className='rounded-full text-amber-500 text-2xl'></FaGoogle>
                                   Continue with Google
                               </button>
                           </div>
                       </form>
    </div>
  </div>
</div>
    );
};

export default Login;