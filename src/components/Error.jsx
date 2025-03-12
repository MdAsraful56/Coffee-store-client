import React from 'react';
import ErrorImg from '../assets/404/404.gif'

const Error = () => {
    return (
        <div className='text-center flex justify-center items-center'>
            <img src={ErrorImg} alt="" className="" />
        </div>
    );
};

export default Error;