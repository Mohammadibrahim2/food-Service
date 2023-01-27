import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

import {BsTwitter } from 'react-icons/bs';
import { FaYoutube,FaFacebookF } from 'react-icons/fa';

import { RiWhatsappFill,RiInstagramFill} from 'react-icons/ri';
import {IoArrowForward } from "react-icons/io5";
const Footer=()=>{
    return(
        <div className="w-full lg:h-[75vh] h-auto text-white flex flex-col justify-center py-10 footerback">
            <div className="fullfooter grid lg:grid-cols-3 grid-cols-1 w-[95%] mx-auto p-5">
                <div className="leftside text-center">
                    <h1 className=" text-3xl font-bold" style={{color:"red"}}>Our Offers</h1>
                    <div className="grid grid-cols-2 ">
                        <ul>
                            <Link to="/"><li className="flex flex-row justify-start items-center"><span className="mr-2"><IoArrowForward /></span>Home</li></Link>
                            <Link to="/"><li className="flex flex-row justify-start items-center"><span className="mr-2"><IoArrowForward/></span>About us</li></Link>
                            <Link to="/"><li className="flex flex-row justify-start items-center"><span className="mr-2"><IoArrowForward /></span> Blogs</li></Link>
                            <Link to="/"><li className="flex flex-row justify-start items-center"><span className="mr-2"><IoArrowForward/></span>Offer</li></Link>
                            <Link to="/"><li className="flex flex-row justify-start items-center"><span className="mr-2"><IoArrowForward/></span> Cart</li></Link>
                        </ul>
                        <ul>
                        <Link to="/"><li className="flex flex-row justify-start items-center"><span className="mr-2"> <IoArrowForward /></span> Teams</li></Link>
                            <Link to="/"><li className="flex flex-row justify-start items-center"><span className="mr-2"><IoArrowForward /></span> Wishlist</li></Link>
                            <Link to="/"><li className="flex flex-row justify-start items-center"><span className="mr-2"><IoArrowForward /></span> Services</li></Link>
                            <Link to="/"><li className="flex flex-row justify-start items-center"><span className="mr-2"><IoArrowForward/></span> Log In</li></Link>
                            <Link to="/"><li className="flex flex-row justify-start items-center"><span className="mr-2"><IoArrowForward/></span> My Account</li></Link>

                        </ul>

                    </div>

                </div>
                <div className="middle flex flex-col  items-center">
                    <h2 className=" text-3xl font-bold " style={{color:"red"}}>Logo</h2>
                    <div className="text-center leading-8 text-xl">
                        <h2>Powro Bazar,Maijdee,Noakhali</h2>
                        <h2><span className=""  style={{color:"red"}}>Hotline: </span>+88 01632846454</h2>
                        <h2><span className=""  style={{color:"red"}}>Email: </span>foodservice.com</h2>
                        <h2 className="text-center mb-2">Follow Us:</h2>
                        <div className="flex flex-row items-center justify-around socialicon mt-2 ">
                            <span ><FaFacebookF/></span>
                            <span ><BsTwitter/></span>
                            <span ><FaYoutube/></span>
                            <span ><RiInstagramFill/></span>
                            <span ><RiWhatsappFill/></span>
                        </div>
                    </div>
 
                </div>
                <div className="rightside text-center  ">
                    <h1 className=" text-3xl font-bold" style={{color:"red"}}>Open Hours</h1>
                    <div className="flex flex-row justify-around leading-7">
                        <div>
                            <h2>Saturday</h2>
                            <h2>Sunday</h2>
                            <h2>Monday</h2>
                            <h2>Tuesday</h2>
                            <h2>Wednessday</h2>
                            <h2>Thursday</h2>
                            </div>
                        <div>
                            <h2>08:00 - 23.00</h2>
                            <h2>08:00 - 23.00</h2>
                            <h2>08:00 - 23.00</h2>
                            <h2>08:00 - 23.00</h2>
                            <h2>08:00 - 23.00</h2>
                            <h2>08:00 - 23.00</h2>
                        </div>
                    </div>

                </div>
            </div>
            <div className="copy my-3 text-center">
                <div className="w-[80%] h-[1px] bg-white mx-auto my-3"></div>
                <h2 className="text-[18px] font-semibold">
                Copyright @2023 Design & Developed By <span style={{color:"red"}}>Mohammad Ibrahim</span></h2>

            </div>
        </div>
    )

}
export default Footer