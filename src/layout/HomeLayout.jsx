import React from 'react';
import nameIcon from '../assets/more/15.jpg'
import capIcon from '../assets/more/logo1.png'
import headerIcon from '../assets/more/3.png'

const HomeLayout = () => {
    return (
        <div className=''>
            {/* title card section  */}
            <div className="relative w-full" >
                <img src={nameIcon} alt="" className='h-16 w-full object-cover' />
                <div className="absolute inset-0 flex flex-row items-center justify-center">
                    <img src={capIcon} alt="" className="w-20 h-20 mb-2 mt-2" />
                    <h1 className="text-3xl font-semibold rancho-font">Espresso Emporium</h1>
                </div>
            </div>
            {/* header section  */}
            <div className="relative w-full">
                <img src={headerIcon} alt="" className="w-full md:h-[550px] h-80 object-fill" />
                <div className="absolute inset-0 lg:top-1/3 md:top-1/4 top-7 left-1/2 md:space-y-3 space-y-1 lg:mr-10 md:mr-4 mr-0 pr-5">
                    <h3 className="md:text-4xl text-2xl rancho-font font-medium ">Would you like a Cup of Delicious Coffee?</h3>
                    <p className="text-sm font-medium">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className="btn bg-[#E3B577] text-black rancho-font text-lg hover:border-2 hover:bg-transparent hover:text-white hover:border-white ">Learn More</button>
                </div>
            </div>
            {/* small card  */}
            <div className="bg-[#ECEAE3] w-full h-72">
                
            </div>
        </div>
    );
};

export default HomeLayout;