import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { FaArrowLeft } from "react-icons/fa";
import Swal from 'sweetalert2'

const UpdateCoffee = () => {


    const coffee = useLoaderData();
    

    const {_id, name, chef, supplier, taste, category, details, photo} = coffee

    const handleUpdateCoffee = e => {
        e.preventDefault();
        
        const form = e.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const Updatedcoffee = {name, chef, supplier, taste, category, details, photo};

        console.log(Updatedcoffee);

        // send update data the server 

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Updatedcoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })

    }

    return (
        <div>
            <div className="addCoffeeImg">
                
                <div className=" mt-10 lg:px-52 md:px-24 px-5 space-y-3">
                    <Link to='/'>
                        <button className="text-2xl p-2 rounded-xl py-4 rancho-font gap-2 flex flex-row items-center hover:border-2 hover:bg-[#E3B577] hover:text-white hover:border-white "> <span><FaArrowLeft /></span> Back to home</button>
                    </Link>
                    <div className="text-center raleway-font bg-[#F4F3F0] py-5 rounded-xl mt-4 space-y-3">
                        <h1 className="text-4xl rancho-font">Update Existing Coffee Details</h1>
                        <p className="lg:px-40 md:px-10 px-5">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distraceted by the readable.</p>
                        <div className="lg:px-20 md:px-10 px-4 py-5">
                            <form onSubmit={handleUpdateCoffee} >
                                <div className="text-left flex md:flex-row flex-col gap-5">
                                    <fieldset className="fieldset md:w-1/2 w-full items-center">
                                        <legend className="fieldset-legend text-lg">Name</legend>
                                        <input type="text" className="input input-info input-lg w-full" placeholder="Enter coffee Name" defaultValue={name} />
                                    </fieldset>
                                    <fieldset className=" md:w-1/2 w-full items-center">
                                        <legend className="fieldset-legend text-lg">Chef</legend>
                                        <input type="text" className="input input-info input-lg w-full" placeholder="Enter coffee Chef" defaultValue={chef} />
                                    </fieldset>
                                </div>
                                <div className="text-left flex md:flex-row flex-col gap-5">
                                    <fieldset className="fieldset md:w-1/2 w-full items-center">
                                        <legend className="fieldset-legend text-lg">Supplier</legend>
                                        <input type="text" className="input input-info input-lg w-full" placeholder="Enter coffee Supplier" defaultValue={supplier} />
                                    </fieldset>
                                    <fieldset className=" md:w-1/2 w-full items-center">
                                        <legend className="fieldset-legend text-lg">Taste</legend>
                                        <input type="text" className="input input-info input-lg w-full" placeholder="Enter coffee Taste" defaultValue={taste} />
                                    </fieldset>
                                </div>
                                <div className="text-left flex md:flex-row flex-col gap-5">
                                    <fieldset className="fieldset md:w-1/2 w-full items-center">
                                        <legend className="fieldset-legend text-lg">Category</legend>
                                        <input type="text" className="input input-info input-lg w-full" placeholder="Enter coffee Category" defaultValue={category} />
                                    </fieldset>
                                    <fieldset className=" md:w-1/2 w-full items-center">
                                        <legend className="fieldset-legend text-lg">Details</legend>
                                        <input type="text" className="input input-info input-lg w-full" placeholder="Enter coffee Details" defaultValue={details} />
                                    </fieldset>
                                </div>
                                <div className="text-left">
                                    <fieldset className="fieldset w-full items-center">
                                        <legend className="fieldset-legend text-lg">Photo</legend>
                                        <input type="text" className="input input-info input-lg w-full" placeholder="Enter coffee photo url" defaultValue={photo} />
                                    </fieldset>
                                </div>
                                <div className="mt-6">
                                    <button className="btn w-full bg-[#E3B577] text-black text-xl rancho-font hover:border-2 hover:bg-transparent hover:text-black hover:border-black">Update Coffee Details</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;