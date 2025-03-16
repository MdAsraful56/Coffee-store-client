import React from 'react';
import { Link, NavLink } from 'react-router';

const NavbarMain = () => {

    const nav = <>
            <NavLink to='/' ><li><a className='text-xl font-semibold rancho-font'>Home</a></li></NavLink>
            <NavLink to='/registration' ><li><a className='text-xl font-semibold rancho-font'>Registration</a></li></NavLink>
            <NavLink to='/login' ><li><a className='text-xl font-semibold rancho-font'>Login</a></li></NavLink>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            nav
                        }
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl font-semibold rancho-font">Espresso Emporium</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {
                        nav
                    }
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/alluser'><a className="btn text-xl font-semibold rancho-font">All User</a></Link>
                </div>
            </div>
        </div>
    );
};

export default NavbarMain;