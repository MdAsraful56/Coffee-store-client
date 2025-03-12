import React from 'react';
import capIcon from '../assets/more/logo1.png'
import footerImg from '../assets/more/9.png'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='relative w-full'>
            <img src={footerImg} alt="" className="w-full h-[450px] object-cover opacity-10" />
            <div className="absolute inset-0 px-10 flex flex-row  items-center justify-between">
                <div className="w-1/2">
                    <img src={capIcon} alt="" className="h-32 w-28" />
                    <h3 className="text-3xl text-[#331A15] rancho-font ">Espresso Emporium</h3>
                    <p className="">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    {/* icon section  */}
                    <section className="">

                    </section>
                    <h3 className="text-3xl text-[#331A15] rancho-font ">Get in Touch</h3>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                </div>
                {/* contact info */}
                <div className="w-1/2 ml-20">
                    <h2 className="text-4xl text-[#331A15] rancho-font ">Connect with Us</h2>
                    <form>
                        <input type="text" name='name' /> 
                        <br />
                        <input type="email" name="email" id="" />
                        <br />

                    </form>
                    <button className="btn rounded-2xl border-2">Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;