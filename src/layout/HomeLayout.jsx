import React, { useEffect, useState } from 'react';
import headerIcon from '../assets/more/3.png'
import { FiCoffee } from "react-icons/fi";
import { Link, useLoaderData } from 'react-router';
import img01 from '../assets/cups/Rectangle 10.png';
import img02 from '../assets/cups/Rectangle 11.png';
import img03 from '../assets/cups/Rectangle 12.png';
import img04 from '../assets/cups/Rectangle 13.png';
import img05 from '../assets/cups/Rectangle 14.png';
import img06 from '../assets/cups/Rectangle 15.png';
import img07 from '../assets/cups/Rectangle 16.png';
import img08 from '../assets/cups/Rectangle 9.png';
import CoffeeCard from '../components/CoffeeCard';
import Feature from '../components/Feature';


const HomeLayout = () => {

    const coffees = useLoaderData();

    const [features, setFeatures] = useState([]);


    useEffect( () => {
        fetch('../../public/feature.json')
            .then(res => res.json())
            .then(data => {
                setFeatures(data)
            })
    } ,[])


    return (
        <div className='mb-10'>
            {/* header section  */}
            <div className="relative w-full">
                <img src={headerIcon} alt="" className="w-full md:h-[550px] h-80 object-fill" />
                <div className="absolute inset-0 lg:top-1/3 md:top-1/4 top-7 left-1/2 md:space-y-3 space-y-1 lg:mr-10 md:mr-4 mr-0 pr-5 text-white">
                    <h3 className="md:text-4xl text-2xl rancho-font font-medium ">Would you like a Cup of Delicious Coffee?</h3>
                    <p className="text-sm raleway-font font-medium">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className="btn bg-[#E3B577] text-black rancho-font text-lg hover:border-2 hover:bg-transparent hover:text-white hover:border-white ">Learn More</button>
                </div>
            </div>
            {/* small card  */}
            <div className="bg-[#ECEAE3] w-full  grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 lg:px-40 md:px-20 px-10 text-left">
                {
                    features.map((featuer, index) => <Feature key={index} featuer={featuer} /> )
                }
            </div>
            
            {/* main card design  */}
            <div className="mainBg">
                <div className="text-center mt-5 rancho-font space-y-4">
                    <p className="">--- Sip & Savor ---</p>
                    <h2 className="text-4xl text-[#331A15] font-semibold">Our Popular Products</h2>
                    <Link to='/addcoffee'>
                        <button className="btn  bg-[#E3B577] text-black rancho-font hover:border-2 hover:bg-transparent hover:text-black hover:border-black ">Add Coffee <FiCoffee /> </button>
                    </Link>
                </div>
                {/* card design  */}
                <div className="lg:px-40 md:px-20 px-10 grid lg:grid-cols-2 grid-cols-1 gap-7 mt-10">
                    {
                        coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} />)
                    }
                </div>
            </div>

                    {/* <h1 className="text-8xl">
                        <Link to='/fuck'>Fuck</Link>
                    </h1> */}

            {/* follow section  */}
            <div className="mt-32 lg:px-40 md:px-20 px-10 text-center">
                <div className="text-center">
                    <p className="text-base raleway-font">Follow Us Now</p>
                    <h2 className="text-4xl rancho-font text-[#331A15] font-semibold">Follow on Instagram</h2>
                </div>
                <div className="mt-8 grid items-center justify-center lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 px-5">
                    <img src={img01} alt="" className="" />
                    <img src={img02} alt="" className="" />
                    <img src={img03} alt="" className="" />
                    <img src={img04} alt="" className="" />
                    <img src={img05} alt="" className="" />
                    <img src={img06} alt="" className="" />
                    <img src={img07} alt="" className="" />
                    <img src={img08} alt="" className="" />
                </div>
            </div>
        </div>
    );
};

export default HomeLayout;