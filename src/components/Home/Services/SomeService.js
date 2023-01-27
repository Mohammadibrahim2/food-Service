import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

import useTitle from "../../Hooks/TittleHooks/useTitle";
import ServiceCard from "./ServiceCard/ServiceCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "./SomeService.css"

import {AiOutlineArrowRight } from 'react-icons/ai';
import {AiOutlineArrowLeft } from 'react-icons/ai';

const SomeServices=()=>{
  
  const [someservices,setAllservices]=useState([])
 
  useEffect(()=>{
    fetch("https://food-service-server-rust.vercel.app/fewservice")
    .then(res=>res.json())
    .then(data=>setAllservices(data))



  },[]);
  // const foodservice=[
  //   {
  //     id:1,
  //     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh4kNI3IhYL_QvfbqJwTCdI2e4P2ie2lAABw&usqp=CAU",
  //     name:"Fried Rice",
  //     text:"Facilisi imperdiet ex quis dignissim pharetra id aptent erat nibh",
  //     price:200
  //   },
  //   {
  //     id:2,
  //     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0A8j_KoN76zPcmCWtrsMHEn080uRhPaAq8Q&usqp=CAU",
  //     name:"Burger",
  //     text:"Facilisi imperdiet ex quis dignissim pharetra id aptent erat nibh",
  //     price:105
  //   },
  //   {
  //     id:3,
  //     img:"https://i.ibb.co/C6nh2YP/food-5.jpg",
  //     name:"Fried Rice",
  //     text:"Facilisi imperdiet ex quis dignissim pharetra id aptent erat nibh",
  //     price:200
  //   },
  //   {
  //     id:4,
  //     img:"https://i.ibb.co/Jj9NBGM/food-4.jpg",
  //     name:"Fried Rice",
  //     text:"Facilisi imperdiet ex quis dignissim pharetra id aptent erat nibh",
  //     price:70
  //   },
  //   {
  //     id:5,
  //     img:"https://i.ibb.co/kQthvL0/food-3.jpg",
  //     name:"Fried Rice",
  //     text:"Facilisi imperdiet ex quis dignissim pharetra id aptent erat nibh",
  //     price:80
  //   },
  //   {
  //     id:6,
  //     img:"https://i.ibb.co/Y2g4v7Z/food-2.jpg",
  //     name:"Fried Rice",
  //     text:"Facilisi imperdiet ex quis dignissim pharetra id aptent erat nibh",
  //     price:100
  //   },
  //   {
  //     id:7,
  //     img:"https://i.ibb.co/qNzVWPQ/food-1-2.jpg", 
  //      name:"Fried Rice",
  //      text:"Facilisi imperdiet ex quis dignissim pharetra id aptent erat nibh",
  //     price:250
  //   } ,{
  //     id:8,
  //     img:"https://i.ibb.co/CW82RQP/nachos.jpg", 
  //      name:"Nachos",
  //      text:"Facilisi imperdiet ex quis dignissim pharetra id aptent erat nibh",
  //     price:100
  //   }
  // ]
  
// const SampleNextArrow=(props)=> {
//   const { className, style, onClick } = props;
//   return (
//     <div
//      className="border rounded-full px-3 py-3"
//       style={{position:"absolute",top:"50%",right:"0%", display: "block", background: "transparent" ,padding:"" ,color:"red" ,fontSize:"20px",paddingBottom:"10px" ,border:"2px solid red"}}
//       onClick={onClick}
//     >
//         <span className="text-3xl "><AiOutlineArrowRight></AiOutlineArrowRight></span></div>
//   );
// }

// const SamplePrevArrow=(props)=>{
//   const { className, style, onClick } = props;
//   return (
//     <div
//     className="border rounded-full px-3 py-3"
//       style={{zIndex:1, position:"absolute",top:"50%",left:"0%", display: "block", background: "transparent" ,padding:"" ,color:"red" ,fontSize:"30px" ,border:"2px solid red"}}
//       onClick={onClick}
//     ><span className="text-3xl rounded-full"><AiOutlineArrowLeft></AiOutlineArrowLeft></span></div>
//   );
// }
  
//   const settings = {
//     className: "center",
//     centerMode: true,
//     infinite: true,
//     centerPadding: "0px",
//     slidesToShow: 3,
 
//     autoplay: true,
//     autoplaySpeed: 2500,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//      responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             initialSlide: 1
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//       ]
//   };
 

    return(
        <div className="lg:w-[99%] w-full mx-auto h-full pb-8  back">
          <h1 className="text-5xl font-semibold font-mono text-center text-white mb-8">Menu</h1>
 
<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  lg:w-[80%] md:w-[93%] w-full p-5 gap-5  mx-auto ">


      {someservices&&
         someservices
         .sort((a,b)=>(a.price >b.price? 1:-1))
         .map(service=><ServiceCard
         service={service}
         key={service.id}
         
          ></ServiceCard>)
         
        }
   </div>

        {/* <Slider {...settings} className="lg:w-[80%] w-full mx-auto my-5">
      {
        someservices.map(service=><ServiceCard
         service={service}
         key={someservices._id}
          ></ServiceCard>)
         
        }
        </Slider> */}
       
      <div className="text-center ">
     <Link to="/services"><button className="text-xl py-2 px-5 text-white text-center font-semibold" 
      style={{backgroundColor:"red"}}>More Item</button></Link>
      </div>

      
     
        </div>

    )
}
export default SomeServices