import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo2.png'

const NavBar = () => {
    const navItems = <>
    <li><Link to="/">Home</Link> </li>
    <li> <Link to="/allToys">All Toys</Link> </li>
    <li> <Link to="/myToys">My Toys</Link> </li>
    <li> <Link to="/addToy">Add Toy</Link> </li>
</>
return (
    <div className="navbar bg-slate-50 h-24 mb-4 sticky top-0 z-20">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {navItems}
                </ul>
            </div>
           <div>
           <Link to="/" >
                <img className='w-40' src={logo} alt="" />
                
                
            </Link>
           </div>
            <Link to="/" className="  text-xl">
               
                <h2 className='font-bold '>PlayCarLand</h2>
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {navItems}
            </ul>
        </div>
        <div className="navbar-end">
       <Link to='/login'>
       <button className="btn btn-warning">Login</button>
       </Link>
        </div>
    </div>
);
};


export default NavBar;