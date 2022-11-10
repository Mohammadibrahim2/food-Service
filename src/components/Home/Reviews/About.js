import React from "react";
import "./About.css"
import { FiCheck } from "react-icons/fi";


const About=()=>{


    return(
      <div>
        <div className="border-solid  border border-primary border-lg">
      
        <div className="text-center bg-white">
            <h1 className="text-center  py-2 my-5 text-4xl font-bold text-primary ">Why you will do your work by me ?</h1>
            <div className="flex  lg:flex-row flex-col-reverse justify-evenly items-center w-full">
              <ul className="text-bold text-2xl text-primary my-3 lg:my-0 ">
              <li className="flex felx-row items-center list-disc"> 
              <li className="text-start my-2">First of all,doing work with photos like editing,
               <br/> portait,image masking etc is my hobby.<br/>I do all this things great interest.</li></li>
              <li className="flex felx-row items-center my-2">  
              <li className="text-start my-4">I charge a very limited amount
                of moneyfrom my works.<br></br></li></li>
              <li className="flex felx-row items-center"> 
               <li className="text-start">Any photo given by the customer,i try my<br/>best 
              to make it happen .</li></li>
              <li className="flex felx-row items-center my-2"> <li className="text-start">You can also get your work
               <br/>done by me it will save your time and effort.</li></li>
              
              </ul>
          
            <div className="aboutimg ">
           
            <img  className=" rounded " src="https://th.bing.com/th/id/OIP.18mwqyCHm68rAD2y28knKAHaEK?pid=ImgDet&rs=1"/>
            </div>
           
            </div>
            <p className="text-semibold text-primary my-3"> Thanks for visiting my page</p>
            </div>

          </div>
          <h1 className="text-3xl text-primary text-center my-3">Some work of mine</h1>

          <div className="w-full flex justify-center "style={{height:"45vh"}}>
            
          <div className="carousel carousel-center h-full p-4 space-x-4 bg-neutral rounded-box my-5 w-3/4">
  <div className="carousel-item">
    <img src="https://th.bing.com/th/id/OIP.z2s-X87W0ivZYdWAssjmqAHaHa?pid=ImgDet&w=898&h=898&rs=1" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://i.etsystatic.com/22866269/r/il/72257b/2269783230/il_794xN.2269783230_lfdm.jpg" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://th.bing.com/th/id/R.ee72e1bb686587c3f91f88a4a795efc6?rik=swcnwK4pR2be5g&pid=ImgRaw&r=0" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://i.pinimg.com/originals/5b/02/5e/5b025eba4b1c2449bb9f84b15d85a01f.jpg" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://th.bing.com/th/id/R.eaac61d4efb8efda7a4475101a17dd52?rik=yn7InJE9GCVGGg&pid=ImgRaw&r=0" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="" className="rounded-box" />
  </div>
</div>
          </div>
          </div>
     
    )
}
export default About