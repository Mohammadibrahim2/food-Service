import React from "react";
import {AiFillStar} from "react-icons/ai";
import {BsFillTriangleFill} from 'react-icons/bs';

const ShowtotalReview=({review})=>{

const{description,name,email}=review

    return(
        <div className="relative h-[60vh]">
        
          
    <div className=" w-full md:w-[400px] h-[250px] flex flex-col justify-around bg-red-700 text-white font-semibold mb-5 px-5 py-3 rounded-lg">
    <p className="text-center">{description}</p>
     <div className=" flex flex-row justify-between ">
      <img className="w-[70px] h-[70px] rounded-xl" 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2a1BjXXKJbERXjuXrM4rMcjMlyrP8hIw98A&usqp=CAU">
      </img>
      <div className="flex flex-col justify-end items-end">
        <div className="flex flex-row justify-center text-xl">
          <span style={{color:"yellow"}}> <AiFillStar/></span>
          <span style={{color:"yellow"}}><AiFillStar/></span>
          <span style={{color:"yellow"}} ><AiFillStar/></span>
          <span className="" style={{color:"yellow"}}><AiFillStar/></span>
        </div>

     
    <h2 className="">{name}</h2>
   
    <div className="justify-end">
      <button className="">{email}</button>
    </div>
    </div>
   
    </div> 
  </div>
  <span className="absolute  left-7 w-12 h-7">
    <BsFillTriangleFill  className="text-4xl" style={{color:"white"}}/></span>
       
        </div>
    )
}
export default ShowtotalReview