import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { FaArrowLeft } from "react-icons/fa";

const Details = () => {

    const coffee = useLoaderData();
    const {_id, name, chef, supplier, taste, details, photo} = coffee

    return (
        <div className='lg:px-40 md:px-20 px-10 mt-20 mb-20  '>
            <Link to='/'>
                <button className="text-2xl p-2 rounded-xl py-4 rancho-font gap-2 flex flex-row items-center hover:border-2 hover:bg-[#E3B577] hover:text-white hover:border-white "> <span><FaArrowLeft /></span> Back to home</button>
            </Link>
            <div className="items-center flex md:flex-row flex-col gap-7 bg-amber-50 lg:p-6 p-2 rounded-2xl border-2 ">
                <div className="w-1/3">
                    <img src={photo} className='w-full h-full' alt="" />
                </div>
                <div className="w-2/3">
                    <h4 className="md:text-3xl text-xl rancho-font font-medium"> <span className="font-semibold">Name:</span> {name}</h4>
                    <h4 className="md:text-3xl text-xl rancho-font font-medium"> <span className="font-semibold">Chef:</span> {chef}</h4>
                    <h4 className="md:text-3xl text-xl rancho-font font-medium"> <span className="font-semibold">Supplier:</span> {supplier}</h4>
                    <h4 className="md:text-3xl text-xl rancho-font font-medium"> <span className="font-semibold">Taste:</span> {taste}</h4>
                    <h4 className="md:text-3xl text-xl rancho-font font-medium"> <span className="font-semibold">Details:</span> {details}</h4>
                </div>
            </div>
        </div>
    );
};

export default Details;