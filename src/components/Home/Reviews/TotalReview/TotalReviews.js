import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Showreview from "../Showingreviews/Showingreviews";
import ShowtotalReview from "./showtotalreview/showtotalreview";

import "./Totalreview.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {AiOutlineArrowLeft,AiOutlineArrowRight} from "react-icons/ai"
const TotalReviews=()=>{
  // const totalreview=useLoaderData()
  // console.log(totalreview)
  // const {description,name,email,price}=totalreview
  const[reviews,setreviews]=useState([])
  useEffect(()=>{

    fetch("https://food-service-server-rust.vercel.app/allreviews")
    .then(res=>res.json())
    .then(data=>{
      setreviews(data)
      console.log(data)
    })
  },[]);

  const SampleNextArrow=(props)=> {
    const { className, style, onClick } = props;
    return (
      <div
       className="border rounded-full px-3 py-3"
        style={{position:"absolute",top:"30%",right:"0%", display: "block", background: "transparent" ,padding:"" ,color:"white" ,fontSize:"20px",paddingBottom:"10px" ,border:"2px solid white"}}
        onClick={onClick}
      >
          <span className="text-3xl "><AiOutlineArrowRight></AiOutlineArrowRight></span></div>
    );
  }
  
  const SamplePrevArrow=(props)=>{
    const { className, style, onClick } = props;
    return (
      <div
      className="border rounded-full px-3 py-3"
        style={{zIndex:1, position:"absolute",top:"30%",left:"0%", display: "block", background: "transparent" ,padding:"" ,color:"white" ,fontSize:"30px" ,border:"2px solid white"}}
        onClick={onClick}
      ><span className="text-3xl rounded-full"><AiOutlineArrowLeft></AiOutlineArrowLeft></span></div>
    );
  }
    
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 3,
   
      autoplay: true,
      autoplaySpeed: 2500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
       responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
   

return(
    <div className="h-[100vh] w-full totalreview py-10"  >
   <h1 className="text-white text-center  py-5 mb-3 font-bold text-4xl ">Customer Reviews</h1>
   <Slider {...settings} className="lg:w-[90%] w-full mx-auto">

     
  {
reviews.map(review=><ShowtotalReview

key={review._id}
review={review}>

</ShowtotalReview>)

  }
  </Slider>


    </div>
)

}
export default TotalReviews