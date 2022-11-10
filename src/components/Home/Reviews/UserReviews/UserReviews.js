import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthContext/AuthProvider";
import useTitle from "../../../Hooks/TittleHooks/useTitle";

import Showreview from "../Showingreviews/Showingreviews";

const UserReviews=()=>{
    useTitle("My review")
    
    const {user}=useContext(AuthContext)
    console.log(user.email)
    const[usersreviews,setreviews]=useState([])


    console.log(usersreviews)

    useEffect(()=>{
        fetch(`https://server-pearl-chi.vercel.app/reviews?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setreviews(data))
    },[user?.email]

    )
    return(
        <div className="flex justify-center">
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 ">
            
            {
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
