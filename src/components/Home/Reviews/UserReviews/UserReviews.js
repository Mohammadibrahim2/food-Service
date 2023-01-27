import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthContext/AuthProvider";
import useTitle from "../../../Hooks/TittleHooks/useTitle";

import Showreview from "../Showingreviews/Showingreviews";
import {MdArrowForwardIos} from"react-icons/md"

const UserReviews=()=>{
    useTitle("My review")
    
    const {user}=useContext(AuthContext)
    console.log(user.email)
    const[usersreviews,setreviews]=useState([])


    console.log(usersreviews)

    useEffect(()=>{
        fetch(`https://food-service-server-rust.vercel.app/reviews?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setreviews(data))
    },[]

    )
    return(
        <div className="flex flex-col justify-center bg-zinc-900">
            <div className="w-full lg:h-[65vh] h-[80vh] subheader">
       <div className="flex flex-col items-center  justify-center h-full w-full   font-serif">
        <h2 className="text-6xl text-white font-bold">Your Reviews</h2>
        <h2 className=" flex flex-row  items-center text-xl text-white">Home
         <span className="mx-3" style={{color:"red"}}><MdArrowForwardIos/></span>Reviews</h2>
       </div>

    </div>
    <h2 className="text-3xl text-center py-5 font-semibold text-white">My reviews</h2>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 ">
            
            {usersreviews&&
            usersreviews.map(review =><Showreview 
          key={usersreviews._id}
          review={review}
          
          ></Showreview>)
       }   
      


        </div>
        </div>
    )



}
export default UserReviews
