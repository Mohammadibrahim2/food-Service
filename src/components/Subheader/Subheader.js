import React from "react";
import "./Subheader.css"
import {MdArrowForwardIos} from "react-icons/md"
const SubHeader=()=>{
return(
    <div className="w-full lg:h-[65vh] h-[80vh] subheader">
       <div className="flex flex-col items-center  justify-center h-full w-full   font-serif">
        <h2 className="text-6xl text-white font-bold">Our Menu</h2>
        <h2 className=" flex flex-row  items-center text-xl text-white">Home
         <span className="mx-3" style={{color:"red"}}><MdArrowForwardIos/></span>Menu</h2>
       </div>

    </div>

)
}
export default SubHeader