import React from "react";
import "./About.css"
import { FiCheck, IconName } from "react-icons/fi";


const About=()=>{


    return(
        <div className="border-solid  border border-primary border-lg">
      
        <div className="text-center bg-white">
            <h1 className="text-center  py-2 my-5 text-5xl font-bold text-primary ">Why you hire me ?</h1>
            <div className="flex  lg:flex-row felx-col justify-evenly items-center w-full">
              <ul className="text-bold text-2xl text-primary  ">
              <li className="flex felx-row items-center"><FiCheck></FiCheck> <p>this site is very usefull</p></li>
              <li className="flex felx-row items-center my-2"> <FiCheck></FiCheck> <p>this site is very usefull</p></li>
              <li className="flex felx-row items-center"> <FiCheck></FiCheck> <p>this site is very usefull</p></li>
              <li className="flex felx-row items-center my-2"><FiCheck></FiCheck> <p>this site is very usefull</p></li>
              <li className="flex felx-row items-center"><FiCheck></FiCheck> <p>this site is very usefull</p></li>
              </ul>
          
            <div className="aboutimg ">
           
            <img  className=" rounded grayscale	" src="https://th.bing.com/th/id/OIP.18mwqyCHm68rAD2y28knKAHaEK?pid=ImgDet&rs=1"/>

           

            </div>
           
            </div>
            <button className="btn btn-primary my-4">Get Started</button>
            </div>

          </div>
       
     
    )
}
export default About