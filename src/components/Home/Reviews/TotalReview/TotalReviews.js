import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Showreview from "../Showingreviews/Showingreviews";

const TotalReviews=()=>{
  const totalreview=useLoaderData()
  console.log(totalreview)
  const {description,name,email,price}=totalreview
  const[reviews,setreviews]=useState([])
  useEffect(()=>{

    fetch("https://server-pearl-chi.vercel.app/allreviews")
    .then(res=>res.json())
    .then(data=>{
      setreviews(data)
      console.log(data)
    })
  },[])

return(
    <div>
   <h1 className="text-primary font-bold text-3xl my-3">Reviews</h1>
      
  {
reviews.map(review=><Showreview
key={review._id}
review={review}
></Showreview>)

  }


    </div>
)

}
export default TotalReviews