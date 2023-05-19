import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {  FaGoogle } from 'react-icons/fa';
import gif from '../../assets/secure-login.gif'
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const {
        createUser,
        signInWithGoogle,
        GetProfile,
        setUser,}=useContext(AuthContext);
        const [error, setError] =useState();


        const handleRegister = (event) => {
            event.preventDefault();
            setError("");
        
            const form = event.target;
            const name = form.name.value;
            const photo = form.photo.value;
            const email = form.email.value;
            const password = form.password.value;
        
             if (password.length < 6) {
              setError("Please add at least 6 characters in your password");
              return;
            }
            createUser(email, password)
              .then((result) => {
                const createdUser = result.user;
                setError("");
                form.reset();
                console.log(createdUser);
        
                GetProfile(result.user, name, photo)
                  .then((result) => {
                    setUser(result.user);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              })
              .catch((error) => {
                console.log(error);
              });
          };

          const handleGoogleSignIn = () => {
            signInWithGoogle()
              .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
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
						<h1 className='text-2xl font-bold'>Please Register!</h1>
					</div>
      
      <div className='card-body'>
      <form onSubmit={handleRegister}  >
                                 <div className='form-control'>
                                     <label className='label'>
                                         <span className='label-text'>Name</span>
                                     </label>
                                     <input
                                         required
                                         type='text'
                                         name='name'
                                         placeholder='Name'
                                         className='input input-bordered'
                                     />
                                 </div>
                                 <div className='form-control'>
                                     <label className='label'>
                                         <span className='label-text'>Email</span>
                                     </label>
                                     <input
                                         required
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
                                     required
                                         type='password'
                                         name='password'
                                         placeholder='password'
                                         className='input input-bordered'
                                     />
      
                                 </div>
                                 <div className='form-control'>
                                     <label className='label'>
                                         <span className='label-text'>Picture Url</span>
                                     </label>
                                     <input
                                     required
                                         type='text'
                                         name='photo'
                                         placeholder='Picture Url'
                                         className='input input-bordered'
                                     />
      
                                 </div>
                                 <p className="text-red-500">{error}</p>
                                 <div className='form-control mt-6'>
                                 <button className='btn btn-warning  hover:bg-yellow-600 '>Register</button>
                                 </div>
                                 <div>
                                 <p className='text-sm text-center'>
									already have an account?
									<Link to='/login' className='text-warning font-semibold'>
										Login
									</Link>
								</p>
                                 </div>
                                 <div className='flex flex-col w-full border-opacity-50'>
                                     <div className='divider'>OR</div>
                                 </div>
                                 </form>
      
                                 <div>
      
                                     <button onClick={handleGoogleSignIn}
                                         
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

export default Register;