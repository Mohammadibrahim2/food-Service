import React from "react";
import { Link } from "react-router-dom";
import "./Allservicecard.css";
import {RiShoppingBasketFill } from 'react-icons/ri';




const Allservicecard=({allservices})=>{
 
    const{name,img,text,price,_id}=allservices


    return(
    <div className="h-[170px] w-[300px] rounded-lg  ">
 <div className="h-full w-full servicecardbox relative p-2 rounded-xl">
<img src={img} alt="car! " className="absolute top-[5%] left-[-30%] h-[150px] rounded-full w-[150px] "/>
<Link to={`/services/${_id}`}>
<span className="absolute top-[40%] right-[-4%] w-[60px] h-[60px] rounded-full flex flex-row items-center "
 style={{backgroundColor:"yellow" ,color:"red"}}>
<RiShoppingBasketFill className="w-[35px] h-[35px] mx-auto icon"/>
</span></Link>

  <div className="text-white bg-black h-full px-4 pt-4  rounded-lg flex flex-col items-center">
    <h2 className="text-xl font-semibold text-white">{name}</h2>
    <h3 >Price :<span style={{color:"yellow"}}> {price} </span> TK</h3>
    <h4>Ratings:{}</h4>
    <p>
        {/* {text.slice(0,20)+'.....'}*/}
        <Link to=""> Read more</Link> 
    </p>
   
    
  </div>
</div>


     
        </div>

    )
}
export default Allservicecard