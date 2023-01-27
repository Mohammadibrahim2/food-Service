import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartCheckFill} from 'react-icons/bs';



const ServiceCard=({service})=>{
 
    const{name,img,rating,price,text,_id}=service

const handleOrder=(_id)=>{
  console.log("order hoce",_id)
}

    return(
    <div className=" mx-5 h-[420px]  rounded-lg  ">
 <div className="w-full h-full bg-white text-black p-2 rounded-lg">
<img src={img} alt="car!" className=" object-cover h-[210px] w-full rounded-lg"/>
  <div className="details text-start text-black pl-2">
    <h2 className="text-2xl  font-semibold my-2 ">{name}</h2>
    <h2 className="text-[16px] mb-2 ">{text}</h2>
    <h2 className="text-xl mb-2 font-semibold">Price :
    <span className="text-yellow-400"> {price} Tk</span></h2>
    <Link to={`/services/${_id}`} > <button onClick={()=>handleOrder(_id)} className="text-white py-2 px-3 rounded-xl flex flex-row items-center justify-center" style={{backgroundColor:"red"}}>
     <span className="mr-2">Order Now</span><BsFillCartCheckFill/></button></Link>
  
  </div>
</div>


     
        </div>

    )
}
export default ServiceCard