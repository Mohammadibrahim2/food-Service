import React from "react";
import "./Newsletter.css"
const NewsLetter=()=>{
return(
    <div className="subscribe w-full lg:h-[50vh] h-[70vh]">
  <div className="lg:w-[90%] h-full flex lg:flex-row flex-col lg:justify-around items-center">
    <div className=" leading-10   ">
        <h2 className="text-white text-3xl font-bold">Subscribe Our Newsletter</h2>
        <h3 className="text-white">Don't miss any upcoming event & Get your coupon via email.</h3>
    </div>
    <div className="lg:w-1/2 w-[95]">
        <form className="w-full mx-autos">
            <input type="email" placeholder="Enter Email Adress *" 
            className=" lg:relative py-4 px-4 lg:w-full bg-white z-10 text-black rounded-full w-[90%] mx-auto lg:mx-0 "/>
            <button className=" mx-auto  bg-yellow-400  lg:absolute lg:right-[13%] z-10 py-4 px-3 w-[150px] rounded-full font-semibold "
             style={{color:"red"}}>Subscribe</button>
        </form>
    </div>
  </div>
    </div>
)
}
export default NewsLetter