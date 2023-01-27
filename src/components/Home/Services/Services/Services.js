import React, { useEffect, useState } from "react";
import useTitle from "../../../Hooks/TittleHooks/useTitle";
import SubHeader from "../../../Subheader/Subheader";
import Allservicecard from "./ALLServiceCard/Allservicecard";
import "./Service.css"


const Services=()=>{
  useTitle("Services")
  const [services,setServices]=useState([])
 
  useEffect(()=>{
    fetch("https://food-service-server-rust.vercel.app/services")
    .then(res=>res.json())
    .then(data=>setServices(data))



  },[])
  console.log(services)


    return(
        <div className="w-full h-auto ">
        
 <SubHeader></SubHeader>

 
 <div className="w-full mx-auto bg-zinc-900 p-5 ">
 <h2 className="py-8 text-white text-4xl font-bold text-center">Just Choose From The Best</h2>

 
 <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:pl-10 md:pl-5  w-full   h-full lg:gap-4 gap-2 place-items-center " >


      
      {
         services.map(allserveces=><Allservicecard
         key={allserveces._id}
         allservices={allserveces}
            ></Allservicecard>)
         
        }
       
      
 
       </div>
       </div>
        </div>

    )
}
export default Services