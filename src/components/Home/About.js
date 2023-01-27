import React from "react";
import"./About.css"
const About=()=>{
    return(
        <div className="about lg:h-[100vh] h-auto w-full px-5 py-5 flex lg:flex-row flex-col justify-around ">
            <div className="lg:w-[40%] w-full px-3 lg:px-0 flex flex-col justify-center lg:items-start items-center">
                <h3 className="text-yellow-600 lg:text-2xl text-xl">Welcome To Fafo</h3>
                <h2 className="lg:text-5xl text-3xl text-white my-2 lg:text-start text-center">
                We Serve The Best Food Of The Country
                </h2>
                <p className="lg:text-xl text-gray-300 my-3">We are the country's no.1 Fast food retailer with 15+ years of reputation. Country's best burger and pizza are delivered by us.
             We gain the satisfaction of our customers with our delicate service
              and extreme high food quality.</p>
              <button className="py-2 px-3 border rounded-full text-xl text-white" style={{backgroundColor:"red",border:"none"}}>Order now</button>
            </div>
            <div className="relative grid grid-cols-2  lg:w-1/2 w-full gap-4 my-3 lg:my-0">
                <div className="relative w-full h-full ">
                <img className="h-1/2 lg:w-[90%] w-full rounded-lg mb-2" src="https://i.ibb.co/PZWfyht/shef.jpg"></img>
                <img className="h-1/2 lg:w-[90%] w-full rounded-lg  "  src="https://i.ibb.co/C2GFb1c/shef-2.jpg"></img>
                </div>
                <img className="lg:w-[90%] w-full h-2/3 rounded-lg  self-center"  src="https://i.ibb.co/kDgdcmB/shef-3.jpg"></img>
            </div>
           
         </div>
    )


}
export default About