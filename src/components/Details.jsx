import React from 'react';
import { useLoaderData } from 'react-router';

const Details = () => {

    const coffee = useLoaderData();
    const {_id, name, chef, supplier, taste, details, photo} = coffee

    return (
        <div className='lg:px-40 md:px-20 px-10 mt-20'>
            <div className="items-center flex flex-row gap-5">
                <div className="w-1/3">
                    <img src={photo} className='' alt="" />
                </div>
                <div className="w-2/3">
                    <h4 className="">{name}</h4>
                    <h4 className="">{chef}</h4>
                    <h4 className="">{supplier}</h4>
                    <h4 className="">{taste}</h4>
                    <h4 className="">{details}</h4>
                </div>
            </div>
        </div>
    );
};

export default Details;