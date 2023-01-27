import React from "react";
import { toast } from "react-hot-toast";

import {MdDeleteForever} from "react-icons/md"

const Showreview=({review})=>{


  // userse review:--
const {name,email,description,_id,img ,price}=review;

const handleDelete =_id=>{
  const agree=window.confirm(`Are you sure to delete ${name} s review ?`)
  if(agree){
    fetch(`https://food-service-server-rust.vercel.app/deletereview/${_id}`,{
      method:"DELETE"
     })
     .then(res=>res.json(res))
     .then(data=>{
      if(data.acacknowledged){

      toast.success("successfully deleted your data")
      }
      console.log(data)
      
     })
  } 
}
    return(
        <div className="my-3 h-auto w-[98%] mx-auto  ">
       


 <div className=" px-5 h-[350px] flex flex-col justify-center items-start text-[16px] w-auto bg-black  text-white shadow-xl rounded-lg">
  <img src={img} className="w-[200px] h-[150px] rounded-lg"/>
  <div className="flex flex-row justify-between  items-start w-full p-3">
    <div className="leading-8">

  
    <h2 className="">Product Name: {name}</h2>
    <p>Product Price : <span style={{color:"yellow"}}>{price} Tk</span></p>
    <p>Email : {email}</p>
    <p>Review : {description}</p>
    </div>
    <div className="">
    <button className="text-3xl" style={{color:"red"}} onClick={()=>handleDelete(_id)}>
      <MdDeleteForever/></button>
   
    </div>
  </div>
</div>

        </div>
    )
}
export default Showreview