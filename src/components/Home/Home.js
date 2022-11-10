import React, { useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../Hooks/TittleHooks/useTitle";
import About from "./Reviews/About";
import SomeServices from "./Services/SomeService";
import Services from "./Services/SomeService";
import "./Home.css" 


const Home=()=>{
  useTitle("Home")

  const [toggle,settoggle]=useState(false)


    return(
        <div >
  <div className="bg-black  headerback " >

</div>

<div>
{
toggle?<SomeServices></SomeServices>:<Services></Services>
}
</div>
<div className="navbar  flex justify-center w-full " style={{width:"100%"}}>
<Link to="/services" className="btn  bg-violet-900 normal-case text-xl">
  <button onClick={()=>settoggle(!toggle)}>See All</button></Link>
</div>

<About></About>
 </div>

    )
}
export default Home