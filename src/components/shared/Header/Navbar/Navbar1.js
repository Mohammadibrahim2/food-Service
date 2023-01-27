import React from "react";

import { HiPhone } from 'react-icons/hi';
import { HiMail } from 'react-icons/hi';
import {IoIosLeaf } from 'react-icons/io';
import {GrFacebookOption } from 'react-icons/gr';
import {AiOutlineTwitter,AiFillInstagram } from 'react-icons/ai';

import {FaGooglePlusG } from 'react-icons/fa';
import { GiCoffeeCup } from 'react-icons/gi';
const Navbar1=()=>{

    const upnavleft=[
        {
            no:1,
            icon:<IoIosLeaf/>,
            text:"Open hour - 10 am - 11 pm"
        },
        {
            no:2,
            icon:<HiPhone/>,
            text:"01632846454"
        },
        {
            no:3,
            icon:<HiMail/>,
            text:"mohammadibrahim6454@gmail.com"
        },
    ]
    const upnavright=[
        {
            no:1,
            icon:<GrFacebookOption/>
        },
        {
            no:2,
            icon:<FaGooglePlusG/>
        },
        {
            no:3,
            icon:<AiOutlineTwitter/>
        },
        {
            no:4,
            icon:<AiFillInstagram/>
        }
    ]

return(
    <div className="  flex lg:flex-row flex-col w-full justify-betweeen text-white text-[16px] font-semibold" style={{backgroundColor:"red"}}>

        <div className="  flex lg:flex-row flex-col w-2/3 justify-between py-3 px-3">
            <div className="flex flex-row justify-between items-center lg:hidden w-[99%] mx-auto">
               <span><GiCoffeeCup className="text-3xl"/></span>
               <span>Welcome in our food service</span>

            </div>
            {
                upnavleft.map(upnav=><div className="hidden lg:flex flex-row justify-center items-center">
                   

                    <span className="">{upnav.icon}</span>
                    <h2 className="ml-2">{upnav.text}</h2>
              
                </div>
                    
                )
            }

        </div>
        <div  className="w-1/2 hidden lg:flex flex-row justify-center items-center">
            {
                upnavright.map(upnav=><div className=" text-[19px] mx-2 text-white">
                    <span>{upnav.icon}</span>
                </div>)
            }

        </div>
    </div>
)
}
export default Navbar1