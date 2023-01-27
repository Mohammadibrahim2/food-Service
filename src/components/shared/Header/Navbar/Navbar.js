import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {GoThreeBars} from "react-icons/go"
import {FiX } from "react-icons/fi";
const Navbar=()=>{
    const [scrollnav,setScrollnav]=useState(false)

    const [toggle,setToggle]=useState(true)
    const changenav=()=>{
        if(window.scrollY >48){
            setScrollnav(true)
        }
        else{
            setScrollnav(false)
        }

    }
    window.addEventListener("scroll",changenav)
const menu=[
   
    <Link to="/"><li><a href="https://templates.hibootstrap.com/fafo/default/index-1-without-revolution.html" target="_blank">Home</a></li></Link>,
    <Link to="/"><li>About us</li></Link>,
    <Link to="/services"><li>Menu</li></Link>,
    <Link to="/"><li>Home</li></Link>,
    <Link to="/login"><li>Log in</li></Link>,
    <Link to="/myreviews"><li>My Reviews</li></Link>,
    <Link to="/addservices"><li>Add services</li></Link>
]
    return(
        <div className={` z-10 ${scrollnav?" active activetext":"navbar unactivetext"} relative w-full px-8 flex flex-row justify-between py-[12px] z-20`}>
            <div className="z-30"><h2 className="text-[29px]  z-30 font-semibold">Khabar ghor</h2></div>
            <div className=" hidden lg:flex flex-row justify-around  items-center w-1/2 z-20 list-none links  font-semibold">
                {menu}

            </div>
            <div className={`font-semibold links ${scrollnav?" beactivetext":" beunactivetext"} lg:hidden absolute ${toggle?"left-[-500px]" :"left-0 "} top-[65px] w-full flex flex-col justify-between items-start h-[350px] py-5 px-8`}>
                {menu}
            </div>
            {toggle?
              
            <button onClick={()=>setToggle(false)} className={` lg:hidden text-3xl ${scrollnav?"  activetext":" unactivetext"}`}><GoThreeBars/></button>:
            <button onClick={()=>setToggle(true)} className={` lg:hidden text-3xl  ${scrollnav?"  activetext":" unactivetext"}`}><FiX/></button>
              
        }
        </div>
    )
}
export default Navbar
// ${scrollnav?"active activetext":"navbar unactivetext"}