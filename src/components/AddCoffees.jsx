import React from 'react';
// import bg from '../assets/more/11.png'
import { Link } from 'react-router';
import { FaArrowLeft } from "react-icons/fa";

const AddCoffees = () => {


    const handleAddCoffee = e =>{
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const coffee = {name, chef, supplier, taste, category, details, photo};

        console.log(coffee);

    }


    return (
        <div>
            <div className="addCoffeeImg">
                {/* <img src={bg} alt="" className=""  /> */}
                <div className=" mt-10 lg:px-52 md:px-24 px-5 space-y-3">
                    <Link to='/'>
                        <h4 className="text-2xl py-4 rancho-font gap-2 flex flex-row items-center"> <span><FaArrowLeft /></span> Back to home</h4>
                    </Link>
                    <div className="text-center raleway-font bg-[#F4F3F0] py-5 rounded-xl">
                        <h1 className="text-4xl rancho-font">Add New Coffee</h1>
                        <p className="lg:px-40 md:px-10 px-5">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distraceted by the readable.</p>
                        <div className="lg:px-20 md:px-10 px-4 py-5">
                            <form onSubmit={handleAddCoffee}>
                                <div className="text-left flex md:flex-row flex-col gap-5">
                                    <fieldset className="fieldset md:w-1/2 w-full items-center">
                                        <legend className="fieldset-legend text-lg">Name</legend>
                                        <input type="text" name='name' className="input input-info input-lg w-full" placeholder="Enter coffee Name" />
                                    </fieldset>
                                    <fieldset className=" md:w-1/2 w-full items-center">
                                        <legend className="fieldset-legend text-lg">Chef</legend>
                                        <input type="text" name='chef' className="input input-info input-lg w-full" placeholder="Enter coffee Chef" />
                                    </fieldset>
                                </div>
                                <div className="text-left flex md:flex-row flex-col gap-5">
                                    <fieldset className="fieldset md:w-1/2 w-full items-center">
                                        <legend className="fieldset-legend text-lg">Supplier</legend>
                                        <input type="text" name='supplier' className="input input-info input-lg w-full" placeholder="Enter coffee Supplier" />
                                    </fieldset>
                                    <fieldset className=" md:w-1/2 w-full items-center">
                                        <legend className="fieldset-legend text-lg">Taste</legend>
                                        <input type="text" name='taste' className="input input-info input-lg w-full" placeholder="Enter coffee Taste" />
                                    </fieldset>
                                </div>
                                <div className="text-left flex md:flex-row flex-col gap-5">
                                    <fieldset className="fieldset md:w-1/2 w-full items-center">
                                        <legend className="fieldset-legend text-lg">Category</legend>
                                        <input type="text" name='category' className="input input-info input-lg w-full" placeholder="Enter coffee Category" />
                                    </fieldset>
                                    <fieldset className=" md:w-1/2 w-full items-center">
                                        <legend className="fieldset-legend text-lg">Details</legend>
                                        <input type="text" name='details' className="input input-info input-lg w-full" placeholder="Enter coffee Details" />
                                    </fieldset>
                                </div>
                                <div className="text-left">
                                    <fieldset className="fieldset w-full items-center">
                                        <legend className="fieldset-legend text-lg">Photo</legend>
                                        <input type="text" name='photo' className="input input-info input-lg w-full" placeholder="Enter coffee photo url" />
                                    </fieldset>
                                </div>
                                <div className="mt-6">
                                    <button className="btn w-full bg-[#E3B577] text-black text-xl rancho-font hover:border-2 hover:bg-transparent hover:text-black hover:border-black">Add Coffee</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCoffees;
