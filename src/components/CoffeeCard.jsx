import React from 'react';
import { MdDelete } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";
import { Link, NavLink } from 'react-router';
// import { Link } from "react-router-dom";
import Swal from 'sweetalert2';



const CoffeeCard = ({coffee}) => {
    // console.log(coffee);

    const {_id, name, chef, supplier, taste, photo} = coffee;

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })
            }
        });
        
    }

    return (
        <div className='flex flex-row items-center justify-between bg-[#f0ede3] rounded-2xl px-2 '>
            <div className="w-1/3">
                <img src={photo} className='w-48 h-48 object-contain p-5' alt="" />
            </div>
            <div className="w-2/3 flex flex-row gap-4">
                <div className="w-4/5 raleway-font space-y-2">
                    <h4 className="text-lg"> <span className="font-semibold">Name: </span> {name}</h4>
                    <h4 className="text-lg"> <span className="font-semibold">Chef: </span> {chef}</h4>
                    <h4 className="text-lg"> <span className="font-semibold">Supplier: </span> {supplier}</h4>
                    <h4 className="text-lg"> <span className="font-semibold">Taste: </span> {taste}</h4>
                </div>
                <div className="w-1/5 flex flex-col pr-2 space-y-2">
                    <Link to='coffee/edit'>
                        <button className="btn bg-[#D2B48C] "> <IoEye color='white' size={25}/> </button>
                    </Link>
                    <Link to={`/updatecoffee/${_id}`} >
                        <button className="btn bg-[#3C393B] "> <MdModeEdit color='white' size={25}/> </button>
                    </Link>
                    <button onClick={()=>{handleDelete(_id)}} className="btn bg-[#EA4744] "> <MdDelete color='white' size={25}/> </button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;