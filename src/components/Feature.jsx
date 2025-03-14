import React from 'react';

const Feature = ({featuer}) => {

    const {title, icon, description} = featuer;

    return (
        <div className='space-y-4 p-6'>
            <img src={icon} alt="" className="" />
            <div className="">
                <h3 className="text-2xl text-[#331A15] rancho-font font-semibold ">{title}</h3>
                <p className="raleway-font">{description}</p>
            </div>
        </div>
    );
};

export default Feature;