import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


import AddReviews from "../../Reviews/AllReviews/Addreviews";
import TotalReviews from "../../Reviews/TotalReview/TotalReviews";
import "./singleservice.css"
import {HiX } from "react-icons/hi";
import { AuthContext } from "../../../AuthContext/AuthProvider";
import useTitle from "../../../Hooks/TittleHooks/useTitle";
import {MdArrowForwardIos} from "react-icons/md"


const Singleservice=()=>{
  const {user}=useContext(AuthContext)
  useTitle("singleservice")

     const singleService=useLoaderData()
    
     const {img,title,name,price,rating,_id}=singleService
    
const[modal,setmodal]=useState(false)
const[bigimg,setbigimg]=useState('')
const handleModal=(img)=>{
  setbigimg(img)
  setmodal(true)

}

    return(
        <div className="w-full flex  flex-col justify-between items-center h-auto bg-zinc-900">

<div className="w-full lg:h-[65vh] h-[70vh] subheader">
       <div className="flex flex-col items-center  justify-center h-full w-full   font-serif">
        <h2 className="text-6xl text-white font-bold">Items</h2>
        <h2 className=" flex flex-row  items-center text-xl text-white">Home
         <span className="mx-3" style={{color:"red"}}><MdArrowForwardIos/></span>Single items</h2>
       </div>

    </div>
    {/* subhreader */}
          <div className="flex lg:flex-row flex-col justify-between items-start lg:p-5 ">
     <div className=" w-full lg:w-1/2 h-[500px]  text-center bg-black">
<div className="h-1/2 w-full">
<img onClick={()=>handleModal(img)} src={img} alt="Shoes" className="w-full h-full" />
</div>

  <div className={ modal? "modal open":"modal"}>
    <img src={bigimg} className="relative h-auto w-full"/>
    <HiX className=" absolute top-[5%] right-10 z-40 bg-black text-white font-bold text-3xl"
     onClick={()=>setmodal(false)}></HiX>
  </div>

  <div className="">
    <h2 className="text-2xl text-white">
      {name}
     
    </h2>
    <h2 className=" p-3 text-xl font-semibold " style={{color:"yellow"}}> {price} Tk</h2> 
    <p>{title}</p>
   
  </div>
</div>

  <div className="flex lg:flex-row flex-col-reverse lg:w-1/2  w-full bg-black text-white font-semibold">
  
<div className=" border border-5 rounded p-10 h-auto w-full ">
<h1 className="text-white font-bold text-3xl pb-3">Add your own review</h1>
 {user?.email? 
<AddReviews singleService={singleService}></AddReviews> :
<>
<h1 className="my-5 text-black">Please log in to add review</h1>
<Link to="/login">
<button className="px-4 py-2" style={{backgroundColor:"red" ,color:"white"}}>Log in</button></Link>
</>
  }  
</div>




  </div>
  </div>
  <div className="w-full">
  
  <TotalReviews></TotalReviews>
  </div>


  
   </div>

    )
}
export default Singleservice