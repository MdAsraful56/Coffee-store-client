import React from 'react';
import nameIcon from '../assets/more/15.jpg'
import capIcon from '../assets/more/logo1.png'

const Navbar = () => {
    return (
        <div>
            <div className="relative w-full" >
                <img src={nameIcon} alt="" className='h-16 w-full object-cover' />
                <div className="absolute inset-0 flex flex-row items-center justify-center">
                    <img src={capIcon} alt="" className="w-20 h-20 mb-2 mt-2" />
                    <h1 className="text-3xl font-semibold rancho-font text-white">Espresso Emporium</h1>
                </div>
            </div>
        </div>
    );
};

export default Navbar;