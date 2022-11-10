import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../image/photo.jfif"

const Footer=()=>{


return(
    <div className="lg:px-20 bg-black">
    <footer className=" lg:px-20 px-10 lg:py-5 py-12 bg-black flex justify-between lg:flex-row flex-col mt-6">
  <div className="text-start">
    <div className="flex flex-row items-center">
    <img src={logo} style={{width:"30px",height:"30px"}}/>
  
   <p className="text-white text-3xl p-2 ">PhotoBuzz</p>
   </div>
   <p className="text-white">All-in-one photo editor for <br/>easy editing and better design.</p>
  </div> 
  <div className="mt-3">
    <span className=" text-white">Social</span> 
    <div className="grid grid-flow-col gap-1 mt-3">
  
   <FaFacebook className="text-white text-xl "></FaFacebook>
   <FaTwitter className="text-white text-xl"></FaTwitter>
   <FaYoutube className="text-white text-xl"></FaYoutube>

    </div>
    <p className="text-white mt-3">Phone : 01978665470</p>
  </div>
</footer>
        
    </div>
)

}
export default Footer