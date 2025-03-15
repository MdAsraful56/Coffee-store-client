import React from 'react';
import { Outlet } from 'react-router';
import Footer from './Footer';
// import Navbar from './Navbar';
import NavbarMain from './NavbarMain';

const Main = () => {
    return (
        <div>
            <NavbarMain/>
            {/* <Navbar/> */}
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;