import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


import AddReviews from "../../Reviews/AllReviews/Addreviews";
import TotalReviews from "../../Reviews/TotalReview/TotalReviews";
import "./singleservice.css"

import { FaCross } from "react-icons/fa";
import { AuthContext } from "../../../AuthContext/AuthProvider";
import useTitle from "../../../Hooks/TittleHooks/useTitle";



const Singleservice=()=>{
  const {user}=useContext(AuthContext)
  useTitle("singleservice")

     const singleService=useLoaderData()
    
     const {img,description,name,price,rating,_id}=singleService
    
const[modal,setmodal]=useState(false)
const[bigimg,setbigimg]=useState('')
const handleModal=(img)=>{
  setbigimg(img)
  setmodal(true)

}

    return(
        <div className="w-full flex  flex-col items-center ">
     <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl mx-auto text-center">

  <figure ><img onClick={()=>handleModal(img)}src={img} alt="Shoes" /></figure>
  <div className={modal? "modal open":"modal"}>
    <img src={bigimg}/>
    <FaCross  className="icons" onClick={()=>setmodal(false)}></FaCross>
  </div>

  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-primary">NEW</div>
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline p-3">$ {price}</div> 
      {/* <Rating props={rating}></Rating> */}
      <div className="badge badge-outline p-3">
      <svg xmlns="http://www.w3.org/2000/svg"style={{color:"#f59e0b"}} fill="#f59e0b" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
     </svg>{rating}</div>
    </div>
  </div>
</div>
  <hr className="bg-dark"></hr>
  <hr className="bg-dark"></hr>
  <div className="flex  my-10 lg:flex-row flex-col-reverse lg:w-1/2  w-full">
    <div>
  
    <TotalReviews></TotalReviews>
    </div>
<div className=" border border-5 rounded p-10 h-1/2 my-10 lg:my-3 w-full ">
<h1 className="text-primary font-bold text-3xl pb-3">Add your own review</h1>
 {user?.email? 
<AddReviews></AddReviews> :
<>
<h1 className="my-5 text-primary">Please log in to add review</h1>
<Link to="/login"><button className="btn btn-primary">Log in</button></Link>
</>
 } 
</div>



  </div>


  
   </div>

    )
}
export default Singleservice