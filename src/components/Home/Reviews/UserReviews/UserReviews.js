import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthContext/AuthProvider";

import Showreview from "../Showingreviews/Showingreviews";

const UserReviews=()=>{
    
    const {user}=useContext(AuthContext)
    console.log(user.email)
    const[usersreviews,setreviews]=useState([])


    console.log(usersreviews)

    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setreviews(data))
    },[user?.email]

    )
    return(
        <div>
            
            {/* {
            usersreviews.map(review =><Showreview 
          key={usersreviews._id}
          review={review}
          
          ></Showreview>)
       }    */}
      


        </div>
    )



}
export default UserReviews
