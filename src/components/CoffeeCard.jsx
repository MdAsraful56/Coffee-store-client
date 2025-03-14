import React from 'react';
import { MdDelete } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";

const CoffeeCard = ({coffee}) => {
    // console.log(coffee);

    const {name, chef, supplier, taste, category, details, photo} = coffee;

    return (
        <div className='flex flex-row items-center justify-between bg-[#f0ede3] rounded-2xl px-2 '>
            <div className="w-1/3">
                <img src={photo} className='w-48 h-48 object-contain p-5' alt="" />
            </div>
            <div className="w-2/3 flex flex-row gap-4">
                <div className="w-4/5 raleway-font">
                    <h4 className="text-lg"> <span className="font-semibold">Name: </span> {name}</h4>
                    <h4 className="text-lg"> <span className="font-semibold">Chef: </span> {chef}</h4>
                    <h4 className="text-lg"> <span className="font-semibold">Supplier: </span> {supplier}</h4>
                    <h4 className="text-lg"> <span className="font-semibold">Taste: </span> {taste}</h4>
                </div>
                <div className="w-1/5 flex flex-col pr-2">
                    <button className="btn"> <IoEye size={25}/> </button>
                    <button className="btn"> <MdModeEdit size={25}/> </button>
                    <button className="btn bg-[#EA4744] "> <MdDelete size={25}/> </button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;