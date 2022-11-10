import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/TittleHooks/useTitle";
import ServiceCard from "./ServiceCard/ServiceCard";


const SomeServices=()=>{
  
  const [someservices,setAllservices]=useState([])
 
  useEffect(()=>{
    fetch("http://localhost:5000/fewservice")
    .then(res=>res.json())
    .then(data=>setAllservices(data))



  },[])
  
  

    return(
        <div className=" grid grid-cols-1 lg:grid-cols-3 my-10">
 
      
      {
         someservices.map(service=><ServiceCard
         service={service}
         key={someservices._id}
          ></ServiceCard>)
         
        }
       
      
        
     
        </div>

    )
}
export default SomeServices