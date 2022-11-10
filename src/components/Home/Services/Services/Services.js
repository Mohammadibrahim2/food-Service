import React, { useEffect, useState } from "react";
import useTitle from "../../../Hooks/TittleHooks/useTitle";
import Allservicecard from "./ALLServiceCard/Allservicecard";



const Services=()=>{
  useTitle("Services")
  const [services,setServices]=useState([])
 
  useEffect(()=>{
    fetch("https://server-pearl-chi.vercel.app/services")
    .then(res=>res.json())
    .then(data=>setServices(data))



  },[])
  console.log(services)
  

    return(
        <div className=" grid grid-cols-1 lg:grid-cols-3 my-10">
 
      
      {
         services.map(allserveces=><Allservicecard
         key={allserveces._id}
         allservices={allserveces}
            ></Allservicecard>)
         
        }
       
      
        
     
        </div>

    )
}
export default Services