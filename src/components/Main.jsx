import React from 'react';
import { Outlet } from 'react-router';
import Footer from './Footer';

const Main = () => {
    return (
        <div>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;