import React from "react";
import { FiStar, IconName } from "react-icons/fi";

const Rating=(props)=>{
    return(
        <div>
          if(props.rating==3)
          {
            <div>
            
            <FiStar></FiStar>
           
            </div>
          }
         else if(props.rating==4)
          {
          <div className="flex flex-row text-yellow-500 ">
         
         <FiStar></FiStar>
         <FiStar></FiStar>
         <FiStar></FiStar>
          </div>
          }
          else if(props.rating==5)
          {
            <div>
                 
         <FiStar></FiStar>
         <FiStar></FiStar>
         <FiStar></FiStar>
           
            </div>
          }
         else if(props.rating==6)
          {
           <div>
            
         <FiStar className="text-yellow-500"></FiStar>
         <FiStar></FiStar>
         <FiStar></FiStar>
           </div>
          }
        else  if(props.rating==7)
          {
            <div>
            
         <FiStar></FiStar>
         <FiStar></FiStar>
         <FiStar></FiStar>
            </div>
          }
        </div>
    )


}
export default Rating